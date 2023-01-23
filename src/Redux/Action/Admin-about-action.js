import {
  ABOUT_POST_REQUEST,
  ABOUT_POST_SUCCESS,
  ABOUT_POST_FAIL,
  ALL_DATA_GET_REQUEST,
  ALL_DATA_GET_SUCCESS,
  ALL_DATA_GET_FAIL,

  UPDATE_ALL_DATA_REQUEST,
UPDATE_ALL_DATA_SUCCESS,
UPDATE_ALL_DATA_FAIL,
} from "../Constants/Admin-about-constants";

import { BACKEND_URL } from "../../environment";
import axios from "axios";

export const aboutAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: ABOUT_POST_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}pages/`, params);

    dispatch({
      type: ABOUT_POST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: ABOUT_POST_FAIL,
      payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const allpagesDatagetAction = (title) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_DATA_GET_REQUEST,
    });
    const { data } = await axios.get(`${BACKEND_URL}pages/?title=${title}`);
    // const { data } = await axios.get(`${BACKEND_URL}pages/`);

    dispatch({
      type: ALL_DATA_GET_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: ALL_DATA_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


// export const allUpdatepagesAction = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: ALL_DATA_GET_REQUEST,
//     });

//     const { data } = await axios.put(`${BACKEND_URL}pages/${id}`);
//     dispatch({
//       type: ALL_DATA_GET_SUCCESS,
//       payload: data,
//     });

//     return true;
//   } catch (error) {
//     dispatch({
//       type: ALL_DATA_GET_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

