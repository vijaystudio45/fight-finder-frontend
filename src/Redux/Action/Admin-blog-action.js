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
  BLOG_USER_ACTIVE_REQUEST,
  BLOG_USER_ACTIVE_SUCCESS,
  BLOG_USER_ACTIVE_FAIL,
  BLOG_USER_DETAILS_REQUEST,
  BLOG_USER_DETAILS_SUCCESS,
  BLOG_USER_DETAILS_FAIL,
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
import { BACKEND_URL } from "../../environment";
import axios from "axios";

export const blogsAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_ADD_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}AddBlog/`, params);

    dispatch({
      type: BLOG_ADD_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: BLOG_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const blogslistAction = () => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_LIST_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}AddBlog/`);

    dispatch({
      type: BLOG_LIST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: BLOG_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// frontend
export const blogsacivelistAction = (blogstatus) => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_USER_ACTIVE_REQUEST,
    });

    const { data } =
      blogstatus?.status == true
        ? await axios.get(`${BACKEND_URL}AddBlog/?status=true`)
        : await axios.get(`${BACKEND_URL}AddBlog/`);

    dispatch({
      type: BLOG_USER_ACTIVE_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: BLOG_USER_ACTIVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// frontend

export const deletelistAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_DELETE_REQUEST,
    });

    const { data } = await axios.delete(`${BACKEND_URL}AddBlog/${id}/`);

    dispatch({
      type: BLOG_DELETE_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: BLOG_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// user

export const blogdetailsAction = (blogdetailId) => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_USER_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}AddBlog/${blogdetailId}/`);
    dispatch({
      type: BLOG_USER_DETAILS_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: BLOG_USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// user

export const blogdetails = (blogId) => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}AddBlog/${blogId}/`);
    dispatch({
      type: BLOG_DETAILS_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: BLOG_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const blogupdateAction = (id, params) => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_UPDATE_REQUEST,
    });

    const { data } = await axios.put(`${BACKEND_URL}AddBlog/${id}/`, params);

    dispatch({
      type: BLOG_UPDATE_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: BLOG_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const contactDetails = (params) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_ADD_CONTACT_DETAILS_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}contact/`, params);

    dispatch({
      type: ADMIN_ADD_CONTACT_DETAILS_SUCCESS,
      payload: data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: ADMIN_ADD_CONTACT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const contactDetailGet = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_GET_CONTACT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}contact/`);
    dispatch({
      type: ADMIN_GET_CONTACT_DETAILS_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: ADMIN_GET_CONTACT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// DEC 19 EVENTS

export const eventsList = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_GET_EVENTS_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}Events/`);

    dispatch({
      type: ADMIN_GET_EVENTS_DETAILS_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: ADMIN_GET_EVENTS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addEvents = (params) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_ADD_EVENTS_DETAILS_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}Events/`, params);

    dispatch({
      type: ADMIN_ADD_EVENTS_DETAILS_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: ADMIN_ADD_EVENTS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const eventupdateAction = (id, params) => async (dispatch) => {
  try {
    dispatch({
      type: EVENTS_EDIT_REQUEST,
    });

    const { data } = await axios.put(`${BACKEND_URL}Events/${id}/`, params);

    dispatch({
      type: EVENTS_EDIT_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: EVENTS_EDIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const eventdeleteAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: EVENTS_DELETE_REQUEST,
    });

    const { data } = await axios.delete(`${BACKEND_URL}Events/${id}/`);

    dispatch({
      type: EVENTS_DELETE_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: EVENTS_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// DEC 19 EVENTS
export const eventsdetailsAction = (eventdetailId) => async (dispatch) => {
  try {
    dispatch({
      type: EVENTS_USER_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}Events/${eventdetailId}/`);

    dispatch({
      type: EVENTS_USER_DETAILS_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: EVENTS_USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const eventsacivelistAction = (eventstatus) => async (dispatch) => {
  try {
    dispatch({
      type: EVENTS_ACTIVE_DETAILS_REQUEST,
    });

    const { data } =
      eventstatus?.status == true
        ? await axios.get(`${BACKEND_URL}Events/?status=true`)
        : await axios.get(`${BACKEND_URL}Events/`);

    dispatch({
      type: EVENTS_ACTIVE_DETAILS_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: EVENTS_ACTIVE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const eventsadmindetalisAction = (eventId) => async (dispatch) => {
  try {
    dispatch({
      type: EVENTS_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}Events/${eventId}/`);

    dispatch({
      type: EVENTS_DETAILS_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: EVENTS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const upcomingeventsAction = () => async (dispatch) => {
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
