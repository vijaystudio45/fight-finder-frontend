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

export const aboutPostReducer = (state = {}, action) => {
  switch (action.type) {
    case ABOUT_POST_REQUEST:
      return { loading: true };
    case ABOUT_POST_SUCCESS:
      return { loading: false, success: true, aboutpost: action.payload };
    case ABOUT_POST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const allDataGetReducer = (state = { alldataGet: [] }, action) => {
  switch (action.type) {
    case ALL_DATA_GET_REQUEST:
      return { loading: true };
    case ALL_DATA_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload.message,
        alldataGet: action.payload,
      };
    case ALL_DATA_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// export const allUpdateDataReducer = (state = {}, action) => {
//   switch (action.type) {
//     case UPDATE_ALL_DATA_REQUEST:
//       return { loading: true };
//     case UPDATE_ALL_DATA_SUCCESS:
//       return { loading: false, success: true, updateData: action.payload };
//     case UPDATE_ALL_DATA_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
