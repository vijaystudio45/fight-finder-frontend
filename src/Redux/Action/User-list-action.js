import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_BLOCK_REQUEST,
  USER_BLOCK_SUCCESS,
  USER_BLOCK_FAIL,
} from "../Constants/User-list-constants";

import { BACKEND_URL } from "../../environment";
import axios from "axios";

export const userslistAction = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}get-user/`);

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const usersblockAction = (id,parms) => async (dispatch) => {
  try {
    dispatch({
      type: USER_BLOCK_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}UserBlockUnblock/${id}/`,parms);

    dispatch({
      type: USER_BLOCK_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: USER_BLOCK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
