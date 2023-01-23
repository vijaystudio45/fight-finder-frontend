

import {
    USER_CONTACT_US_REQUEST,
    USER_CONTACT_US_SUCCESS,
    USER_CONTACT_US_FAIL,
  } from "../Constants/User-contact-us-constants";
  
  export const usercontactSendReducer = (state = { usercontactus: [] }, action) => {
    switch (action.type) {
      case USER_CONTACT_US_REQUEST:
        return { loading: true };
      case USER_CONTACT_US_SUCCESS:
        return { loading: false, success: true, usercontactus: action.payload };
      case USER_CONTACT_US_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };