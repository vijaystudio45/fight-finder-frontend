import {
  USER_ADD_CONTACT_DETAILS_REQUEST,
  USER_ADD_CONTACT_DETAILS_SUCCESS,
  USER_ADD_CONTACT_DETAILS_FAIL,
} from "../Constants/User-constants";

export const userAddContactDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADD_CONTACT_DETAILS_REQUEST:
      return { loading: true };

    case USER_ADD_CONTACT_DETAILS_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
      };

    case USER_ADD_CONTACT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
