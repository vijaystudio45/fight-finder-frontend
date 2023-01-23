import {
    USER_CONTACT_US_REQUEST,
    USER_CONTACT_US_SUCCESS,
    USER_CONTACT_US_FAIL,
  } from "../Constants/User-contact-us-constants";
  import { BACKEND_URL } from "../../environment";
import axios from "axios";


  export const usercontactAction = (parms) => async (dispatch) => {
    try {
      dispatch({
        type: USER_CONTACT_US_REQUEST,
      });
  
      const { data } = await axios.post(`${BACKEND_URL}user_contact/`,parms);
  
      dispatch({
        type: USER_CONTACT_US_SUCCESS,
        payload: data,
      });
  
      return true;
    } catch (error) {
      dispatch({
        type: USER_CONTACT_US_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };