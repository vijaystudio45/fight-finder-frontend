import {
  UPCOMING_EVENTS_REQUEST,
  UPCOMING_EVENTS_SUCCESS,
  UPCOMING_EVENTS_FAIL,
  UPCOMING_EVENTS_DETAILS_REQUEST,
  UPCOMING_EVENTS_DETAILS_SUCCESS,
  UPCOMING_EVENTS_DETAILS_FAIL,
  PAST_EVENTS_REQUEST,
  PAST_EVENTS_SUCCESS,
  PAST_EVENTS_FAIL,
  APPROVE_EVENTS_REQUEST,
  APPROVE_EVENTS_SUCCESS,
  APPROVE_EVENTS_FAIL,
  ADD_EVENT_REQUEST,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAIL,
  GET_EVENTS_LIST_REQUEST,
  GET_EVENTS_LIST_SUCCESS,
  GET_EVENTS_LIST_FAIL,
  GET_USER_EVENTS_LIST_REQUEST,
  GET_USER_EVENTS_LIST_SUCCESS,
  GET_USER_EVENTS_LIST_FAIL,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAIL,
  EVENT_DETAILS_REQUEST,
  EVENT_DETAILS_SUCCESS,
  EVENT_DETAILS_FAIL,
  EVENT_UPDATE_REQUEST,
  EVENT_UPDATE_SUCCESS,
  EVENT_UPDATE_FAIL,
} from "../Constants/Events-new-constants";

import axios from "axios";
import { BACKEND_URL } from "../../environment";

export const upcomingeventAction = () => async (dispatch) => {
  try {
    dispatch({
      type: UPCOMING_EVENTS_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}upcoming_events/`);

    dispatch({
      type: UPCOMING_EVENTS_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: UPCOMING_EVENTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const upcomingeventdetailsAction = (upeventId) => async (dispatch) => {
  try {
    dispatch({
      type: UPCOMING_EVENTS_DETAILS_REQUEST,
    });

    const { data } = await axios.get(
      `${BACKEND_URL}upcoming_events/${upeventId}/`
    );

    dispatch({
      type: UPCOMING_EVENTS_DETAILS_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: UPCOMING_EVENTS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const pasteventAction = () => async (dispatch) => {
  try {
    dispatch({
      type: PAST_EVENTS_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}past_events/`);

    dispatch({
      type: PAST_EVENTS_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: PAST_EVENTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addEventAction = (formData, eventType) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_EVENT_REQUEST,
    });

    let data = [];
    if (eventType === "event") {
      data = await axios.post(`${BACKEND_URL}all_Events/`, formData);
    } else if (eventType === "school") {
      data = await axios.post(`${BACKEND_URL}SchoolGym/`, formData);
    } else if (eventType == "seminar") {
      data = await axios.post(`${BACKEND_URL}Seminar/`, formData);
    }

    // const { data } = await axios.post(`${BACKEND_URL}Seminar/`, formData);
    // http://192.168.1.245:8014/all_Events/
    // http://192.168.1.245:8014/SchoolGym/
    // http://192.168.1.245:8014/Seminar/

    dispatch({
      type: ADD_EVENT_SUCCESS,
      payload: data?.data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: ADD_EVENT_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    // } catch (error) {
    //   dispatch({
    //     type: ADD_EVENT_FAIL,
    //     payload:
    //       error.response && error.response.data.message
    //         ? error.response.data.message
    //         : error.message,
    //   });
  }
};

export const getEventsList = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_EVENTS_LIST_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}all_Model_data/`);

    dispatch({
      type: GET_EVENTS_LIST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: GET_EVENTS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getUserEventsList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USER_EVENTS_LIST_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.get(`${BACKEND_URL}user_events/`, config);

    dispatch({
      type: GET_USER_EVENTS_LIST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: GET_USER_EVENTS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteEventAction = (id, eventType) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_EVENT_REQUEST,
    });

    let data = [];
    if (eventType === "events") {
      data = await axios.delete(`${BACKEND_URL}all_Events/${id}/`);
    } else if (eventType === "schoolgym") {
      data = await axios.delete(`${BACKEND_URL}SchoolGym/${id}/`);
    } else if (eventType == "seminarnformation") {
      data = await axios.delete(`${BACKEND_URL}Seminar/${id}/`);
    }

    dispatch({
      type: DELETE_EVENT_SUCCESS,
      payload: data?.data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: DELETE_EVENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const eventDetailsAction = (id, eventType) => async (dispatch) => {
  try {
    dispatch({
      type: EVENT_DETAILS_REQUEST,
    });

    let data = [];
    if (eventType === "events") {
      data = await axios.get(`${BACKEND_URL}all_Events/${id}/`);
    } else if (eventType === "schoolgym") {
      data = await axios.get(`${BACKEND_URL}SchoolGym/${id}/`);
    } else if (eventType == "seminarnformation") {
      data = await axios.get(`${BACKEND_URL}Seminar/${id}/`);
    }

    dispatch({
      type: EVENT_DETAILS_SUCCESS,
      payload: data?.data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: EVENT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const eventUpdateAction =
  (id, eventType, formData) => async (dispatch) => {
    try {
      dispatch({
        type: EVENT_UPDATE_REQUEST,
      });

      let data = [];
      if (eventType === "events") {
        data = await axios.put(`${BACKEND_URL}all_Events/${id}/`, formData);
      } else if (eventType === "schoolgym") {
        data = await axios.put(`${BACKEND_URL}SchoolGym/${id}/`, formData);
      } else if (eventType == "seminarnformation") {
        data = await axios.put(`${BACKEND_URL}Seminar/${id}/`, formData);
      }

      dispatch({
        type: EVENT_UPDATE_SUCCESS,
        payload: data?.data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: EVENT_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
export const upcomingEventsAction = (search) => async (dispatch) => {
  try {
    dispatch({
      type: UPCOMING_EVENTS_REQUEST,
    });

    let data = [];
    if (search) {
      data = await axios.get(`${BACKEND_URL}upcoming_events/?search=${search}`);
    } else {
      data = await axios.get(`${BACKEND_URL}upcoming_events/`);
    }

    dispatch({
      type: UPCOMING_EVENTS_SUCCESS,
      payload: data?.data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: UPCOMING_EVENTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const approveEventsAction =
  (id, eventType, params) => async (dispatch) => {
    try {
      dispatch({
        type: APPROVE_EVENTS_REQUEST,
      });

      let data = [];
      if (eventType === "events") {
        data = await axios.put(`${BACKEND_URL}all_Events/${id}/`, params);
      } else if (eventType === "schoolgym") {
        data = await axios.put(`${BACKEND_URL}SchoolGym/${id}/`, params);
      } else if (eventType === "seminarnformation") {
        data = await axios.put(`${BACKEND_URL}Seminar/${id}/`, params);
      }

      dispatch({
        type: APPROVE_EVENTS_SUCCESS,
        payload: data?.data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: APPROVE_EVENTS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
