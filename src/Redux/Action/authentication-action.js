import axios from "axios";
import { BACKEND_URL } from "../../environment";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_SUCCESS,
  USER_RESET_PASSWORD_FAIL,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_FAIL,
  USER_LOGOUT,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAIL,
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAIL,
} from "../Constants/authentication-constants";

export const register = (params) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}registration/`, params);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    console.log("ac---", error.response.data.message.email);

    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message.email[0]
          ? error.response && error.response.data.message.email[0]
          : error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (params) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}user-login/`, params);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userData", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.response.data,
    });
  }
};

export const forgotPassword = (params) => async (dispatch) => {
  try {
    dispatch({
      type: USER_FORGOT_PASSWORD_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}forget-password/`, params);

    dispatch({
      type: USER_FORGOT_PASSWORD_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: USER_FORGOT_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetPassword = (token, uid, params) => async (dispatch) => {
  try {
    dispatch({
      type: USER_RESET_PASSWORD_REQUEST,
    });

    const { data } = await axios.put(
      `${BACKEND_URL}reset-password/${token}/${uid}/`,
      params
    );

    dispatch({
      type: USER_RESET_PASSWORD_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: USER_RESET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProfile = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROFILE_UPDATE_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.post(
      `${BACKEND_URL}update-user-profile/`,
      params,
      config
    );

    dispatch({
      type: PROFILE_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data?.data,
    });

    localStorage.setItem("userData", JSON.stringify(data?.data));
  } catch (error) {
    console.log("action", error?.response?.data);
    if (error?.response?.data) {
      dispatch({
        type: PROFILE_UPDATE_FAIL,

        payload:
          // error.response && error.response.data?.username
          //   ? error.response.data
          //   : error.response.data?.email
          //   ? error.response.data
          //   : error.response.data,

          // error.response && error.response.data.username
          // ? error.response.data
          // :  error.response.data,
          error.response.data.message
            ? error.response.data.message
            : error.response.data,
      });
    }
  }
};

export const verfyemailAction = (decodeId) => async (dispatch) => {
  try {
    dispatch({
      type: VERIFY_EMAIL_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}verify-email/${decodeId}/`);

    dispatch({
      type: VERIFY_EMAIL_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: VERIFY_EMAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userData");
  dispatch({ type: USER_LOGOUT });
};
