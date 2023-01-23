import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_BLOCK_REQUEST,
  USER_BLOCK_SUCCESS,
  USER_BLOCK_FAIL,
} from "../Constants/User-list-constants";

export const userlistReducer = (state = { userslist: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, success: true, userslist: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userblockReducer = (state = { usersblock: [] }, action) => {
  switch (action.type) {
    case USER_BLOCK_REQUEST:
      return { loading: true };
    case USER_BLOCK_SUCCESS:
      return { loading: false, success: true, usersblock: action.payload };
    case USER_BLOCK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
