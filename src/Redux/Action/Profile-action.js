import {
  PROFILE_DETAILS_REQUEST,
  PROFILE_DETAILS_SUCCESS,
  PROFILE_DETAILS_FAIL,
} from "../Constants/profile-constants";

import { BACKEND_URL } from "../../environment";
import axios from "axios";

export const prfileaction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: PROFILE_DETAILS_REQUEST,
    });

    const { data } = await axios.get(
      `${BACKEND_URL}update-user-profile/`,
      params
    );
    dispatch({
      type: PROFILE_DETAILS_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: PROFILE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
