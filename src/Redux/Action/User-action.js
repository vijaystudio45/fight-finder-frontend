import axios from "axios";
import {
  USER_ADD_CONTACT_DETAILS_REQUEST,
  USER_ADD_CONTACT_DETAILS_SUCCESS,
  USER_ADD_CONTACT_DETAILS_FAIL,
} from "../Constants/User-constants";
import { BACKEND_URL } from "../../environment";

export const userAddContactDetails = (params) => async (dispatch) => {
  try {
    dispatch({
      type: USER_ADD_CONTACT_DETAILS_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}`, params);

    dispatch({
      type: USER_ADD_CONTACT_DETAILS_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: USER_ADD_CONTACT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
