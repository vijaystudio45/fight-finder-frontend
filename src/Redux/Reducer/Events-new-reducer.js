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
  APPROVE_EVENTS_RESET,
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
  DELETE_EVENT_RESET,
  EVENT_DETAILS_REQUEST,
  EVENT_DETAILS_SUCCESS,
  EVENT_DETAILS_FAIL,
  EVENT_UPDATE_REQUEST,
  EVENT_UPDATE_SUCCESS,
  EVENT_UPDATE_FAIL,
  EVENT_UPDATE_RESET,
} from "../Constants/Events-new-constants";

// export const neweventpostReducer = (state = { neweventpost: [] }, action) => {
//   switch (action.type) {
//     case UPCOMING_EVENTS_REQUEST:
//       return { loading: true };
//     case UPCOMING_EVENTS_SUCCESS:
//       return { loading: false, success: true, neweventpost: action.payload };
//     case UPCOMING_EVENTS_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

export const upcoingeventsdetailsReducer = (
  state = { neweventsdetails: [] },
  action
) => {
  switch (action.type) {
    case UPCOMING_EVENTS_DETAILS_REQUEST:
      return { loading: true };
    case UPCOMING_EVENTS_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        neweventsdetails: action.payload,
      };
    case UPCOMING_EVENTS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const pasteventReducer = (state = { pasteventdata: [] }, action) => {
  switch (action.type) {
    case PAST_EVENTS_REQUEST:
      return { loading: true };
    case PAST_EVENTS_SUCCESS:
      return { loading: false, success: true, pasteventdata: action.payload };
    case PAST_EVENTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addEventReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_EVENT_REQUEST:
      return { loading: true };
    case ADD_EVENT_SUCCESS:
      return { loading: false, success: true, addEventData: action.payload };
    case ADD_EVENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getEventsListReducer = (state = { eventsList: [] }, action) => {
  switch (action.type) {
    case GET_EVENTS_LIST_REQUEST:
      return { loading: true };
    case GET_EVENTS_LIST_SUCCESS:
      return { loading: false, success: true, eventsList: action.payload };
    case GET_EVENTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUserEventsListReducer = (
  state = { userEventsList: [] },
  action
) => {
  switch (action.type) {
    case GET_USER_EVENTS_LIST_REQUEST:
      return { loading: true };
    case GET_USER_EVENTS_LIST_SUCCESS:
      return { loading: false, success: true, userEventsList: action.payload };
    case GET_USER_EVENTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteEventReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_EVENT_REQUEST:
      return { loading: true };
    case DELETE_EVENT_SUCCESS:
      return { loading: false, success: true, deleteEvent: action.payload };
    case DELETE_EVENT_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_EVENT_RESET:
      return {};
    default:
      return state;
  }
};

export const eventDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENT_DETAILS_REQUEST:
      return { loading: true };
    case EVENT_DETAILS_SUCCESS:
      return { loading: false, success: true, eventDetails: action.payload };
    case EVENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENT_UPDATE_REQUEST:
      return { loading: true };
    case EVENT_UPDATE_SUCCESS:
      return { loading: false, success: true, eventUpdate: action.payload };
    case EVENT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case EVENT_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const upcomingEventsReducer = (
  state = { upcomingEvents: [] },
  action
) => {
  switch (action.type) {
    case UPCOMING_EVENTS_REQUEST:
      return { loading: true };
    case UPCOMING_EVENTS_SUCCESS:
      return { loading: false, success: true, upcomingEvents: action.payload };
    case UPCOMING_EVENTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const approveEventsReducer = (state = {}, action) => {
  switch (action.type) {
    case APPROVE_EVENTS_REQUEST:
      return { loading: true };
    case APPROVE_EVENTS_SUCCESS:
      return { loading: false, success: true, approveEvent: action.payload };
    case APPROVE_EVENTS_FAIL:
      return { loading: false, error: action.payload };
    case APPROVE_EVENTS_RESET:
      return {};
    default:
      return state;
  }
};
