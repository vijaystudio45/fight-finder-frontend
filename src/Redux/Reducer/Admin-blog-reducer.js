import {
  BLOG_ADD_REQUEST,
  BLOG_ADD_SUCCESS,
  BLOG_ADD_FAIL,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_DETAILS_FAIL,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_SUCCESS,
  BLOG_UPDATE_FAIL,
  ADMIN_ADD_CONTACT_DETAILS_REQUEST,
  ADMIN_ADD_CONTACT_DETAILS_SUCCESS,
  ADMIN_ADD_CONTACT_DETAILS_FAIL,
  ADMIN_GET_CONTACT_DETAILS_REQUEST,
  ADMIN_GET_CONTACT_DETAILS_SUCCESS,
  ADMIN_GET_CONTACT_DETAILS_FAIL,
  ADMIN_ADD_EVENTS_DETAILS_REQUEST,
  ADMIN_ADD_EVENTS_DETAILS_SUCCESS,
  ADMIN_ADD_EVENTS_DETAILS_FAIL,
  ADMIN_GET_EVENTS_DETAILS_REQUEST,
  ADMIN_GET_EVENTS_DETAILS_SUCCESS,
  ADMIN_GET_EVENTS_DETAILS_FAIL,
  EVENTS_DELETE_REQUEST,
  EVENTS_DELETE_SUCCESS,
  EVENTS_DELETE_FAIL,
  EVENTS_EDIT_REQUEST,
  EVENTS_EDIT_SUCCESS,
  EVENTS_EDIT_FAIL,
  EVENTS_DETAILS_REQUEST,
  EVENTS_DETAILS_SUCCESS,
  EVENTS_DETAILS_FAIL,
  // USER
  BLOG_USER_DETAILS_REQUEST,
  BLOG_USER_DETAILS_SUCCESS,
  BLOG_USER_DETAILS_FAIL,
  BLOG_USER_ACTIVE_REQUEST,
  BLOG_USER_ACTIVE_SUCCESS,
  BLOG_USER_ACTIVE_FAIL,
  EVENTS_USER_DETAILS_REQUEST,
  EVENTS_USER_DETAILS_SUCCESS,
  EVENTS_USER_DETAILS_FAIL,
  EVENTS_ACTIVE_DETAILS_REQUEST,
  EVENTS_ACTIVE_DETAILS_SUCCESS,
  EVENTS_ACTIVE_DETAILS_FAIL,
  UPCOMING_EVENTS_REQUEST,
  UPCOMING_EVENTS_SUCCESS,
  UPCOMING_EVENTS_FAIL,
} from "../Constants/Admin-blog-constants";

export const blogPostReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_ADD_REQUEST:
      return { loading: true };
    case BLOG_ADD_SUCCESS:
      return { loading: false, success: true, blogpost: action.payload };
    case BLOG_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const bloglistReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_LIST_REQUEST:
      return { loading: true };
    case BLOG_LIST_SUCCESS:
      return { loading: false, success: true, bloglist: action.payload };
    case BLOG_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// FRONTEND

export const blogactivelistReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_USER_ACTIVE_REQUEST:
      return { loading: true };
    case BLOG_USER_ACTIVE_SUCCESS:
      return { loading: false, success: true, blogactivelist: action.payload };
    case BLOG_USER_ACTIVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventactivelistReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENTS_ACTIVE_DETAILS_REQUEST:
      return { loading: true };
    case EVENTS_ACTIVE_DETAILS_SUCCESS:
      return { loading: false, success: true, eventactivelist: action.payload };
    case EVENTS_ACTIVE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// FRONTEND

export const deleteblogReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_DELETE_REQUEST:
      return { loading: true };
    case BLOG_DELETE_SUCCESS:
      return { loading: false, success: true, deletebloglist: action.payload };
    case BLOG_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const blogdetailsReducer = (state = { blogsdeatls: [] }, action) => {
  switch (action.type) {
    case BLOG_DETAILS_REQUEST:
      return { loading: true };
    case BLOG_DETAILS_SUCCESS:
      return { loading: false, success: true, blogsdeatls: action.payload };
    case BLOG_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// USER
export const bloguserdetalsReducer = (
  state = { blogdetailslist: [] },
  action
) => {
  switch (action.type) {
    case BLOG_USER_DETAILS_REQUEST:
      return { loading: true };
    case BLOG_USER_DETAILS_SUCCESS:
      return { loading: false, success: true, blogdetailslist: action.payload };
    case BLOG_USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// USER

export const updateblogReducer = (state = { blogsupdate: [] }, action) => {
  switch (action.type) {
    case BLOG_UPDATE_REQUEST:
      return { loading: true };
    case BLOG_UPDATE_SUCCESS:
      return { loading: false, success: true, blogsupdate: action.payload };
    case BLOG_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const contactDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_ADD_CONTACT_DETAILS_REQUEST:
      return { loading: true };
    case ADMIN_ADD_CONTACT_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload.message,
        contactData: action.payload,
      };
    case ADMIN_ADD_CONTACT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const contactDetailGetReducer = (
  state = { getcontactdetails: [] },
  action
) => {
  switch (action.type) {
    case ADMIN_GET_CONTACT_DETAILS_REQUEST:
      return { loading: true };
    case ADMIN_GET_CONTACT_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        getcontactdetails: action.payload,
      };
    case ADMIN_GET_CONTACT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// DEC 19 EVENTS

export const eventsListReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_GET_EVENTS_DETAILS_REQUEST:
      return { loading: true };
    case ADMIN_GET_EVENTS_DETAILS_SUCCESS:
      return { loading: false, success: true, eventsListData: action.payload };
    case ADMIN_GET_EVENTS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addEventsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_ADD_EVENTS_DETAILS_REQUEST:
      return { loading: true };
    case ADMIN_ADD_EVENTS_DETAILS_SUCCESS:
      return { loading: false, success: true, eventsData: action.payload };
    case ADMIN_ADD_EVENTS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventsdeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENTS_DELETE_REQUEST:
      return { loading: true };
    case EVENTS_DELETE_SUCCESS:
      return { loading: false, success: true, deleteeventlist: action.payload };
    case EVENTS_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventupdateReducer = (state = { eventupdate: [] }, action) => {
  switch (action.type) {
    case EVENTS_EDIT_REQUEST:
      return { loading: true };
    case EVENTS_EDIT_SUCCESS:
      return { loading: false, success: true, eventupdate: action.payload };
    case EVENTS_EDIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// DEC 19 EVENTS
export const eventsuserdetalsReducer = (
  state = { eventdetailslist: [] },
  action
) => {
  switch (action.type) {
    case EVENTS_USER_DETAILS_REQUEST:
      return { loading: true };
    case EVENTS_USER_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        eventdetailslist: action.payload,
      };
    case EVENTS_USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventdetailReducer = (state = { eventdetails: [] }, action) => {
  switch (action.type) {
    case EVENTS_DETAILS_REQUEST:
      return { loading: true };
    case EVENTS_DETAILS_SUCCESS:
      return { loading: false, success: true, eventdetails: action.payload };
    case EVENTS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// export const upcomingeventsReducer = (state = { upcomingevent: [] }, action) => {
//   switch (action.type) {
//     case UPCOMING_EVENTS_REQUEST:
//       return { loading: true };
//     case UPCOMING_EVENTS_SUCCESS:
//       return { loading: false, success: true, upcomingevent: action.payload };
//     case UPCOMING_EVENTS_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
