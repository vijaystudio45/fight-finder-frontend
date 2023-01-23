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

export const RegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };

    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        success: true,
        userData: action.payload,
        message: action.payload.message,
      };

    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        success: true,
        userData: action.payload,
        message: action.payload.message,
      };

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const resetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_RESET_PASSWORD_REQUEST:
      return { loading: true };

    case USER_RESET_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case USER_RESET_PASSWORD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const forgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FORGOT_PASSWORD_REQUEST:
      return { loading: true };

    case USER_FORGOT_PASSWORD_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        success: true,
      };

    case USER_FORGOT_PASSWORD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UpdateprofileReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_UPDATE_REQUEST:
      return { loading: true };
    case PROFILE_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        profileupdate: action.payload.data,
      };
    case PROFILE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const verifyEmailReducer = (state = {}, action) => {
  switch (action.type) {
    case VERIFY_EMAIL_REQUEST:
      return { loading: true };

    case VERIFY_EMAIL_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        success: true,
      };
    case VERIFY_EMAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
