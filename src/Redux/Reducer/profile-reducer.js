import {
    PROFILE_DETAILS_REQUEST,
    PROFILE_DETAILS_SUCCESS,
    PROFILE_DETAILS_FAIL
} from "../Constants/profile-constants";

export const profileReducer = (state = { profileinfo: [] }, action) => {
  switch (action.type) {
    case PROFILE_DETAILS_REQUEST:
      return { loading: true };
    case PROFILE_DETAILS_SUCCESS:
      return { loading: false, success: true, profileinfo: action.payload };
    case PROFILE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
