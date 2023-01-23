import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  RegisterReducer,
  LoginReducer,
  resetPasswordReducer,
  forgotPasswordReducer,
  UpdateprofileReducer,
  verifyEmailReducer,
} from "./Redux/Reducer/authentication-reducer";
import {
  blogPostReducer,
  bloglistReducer,
  deleteblogReducer,
  blogdetailsReducer,
  updateblogReducer,
  contactDetailsReducer,
  contactDetailGetReducer,
  addEventsReducer,
  eventsListReducer,
  bloguserdetalsReducer,
  eventsuserdetalsReducer,
  eventsdeleteReducer,
  // eventupdateReducer,
  blogactivelistReducer,
  eventactivelistReducer,
  eventdetailReducer,
  // upcomingeventsReducer,
} from "./Redux/Reducer/Admin-blog-reducer";

import { userAddContactDetailsReducer } from "./Redux/Reducer/User-reducer";

import {
  userlistReducer,
  userblockReducer,
} from "./Redux/Reducer/User-list-reducer";

import { profileReducer } from "./Redux/Reducer/profile-reducer";

import { usercontactSendReducer } from "./Redux/Reducer/User-contact-us-reducer";
import {
  // neweventpostReducer,
  upcoingeventsdetailsReducer,
  addEventReducer,
  getEventsListReducer,
  deleteEventReducer,
  eventDetailsReducer,
  upcomingEventsReducer,
  eventUpdateReducer,
  getUserEventsListReducer,
  approveEventsReducer,
} from "./Redux/Reducer/Events-new-reducer";

import {
  aboutPostReducer,
  allDataGetReducer,
} from "./Redux/Reducer/Admin-about-reducer";

const reducer = combineReducers({
  authReducer: LoginReducer,
  RegisterReducer,
  resetPasswordReducer,
  forgotPasswordReducer,
  UpdateprofileReducer,
  verifyEmailReducer,
  bloguserdetalsReducer,
  blogPostReducer,
  eventsuserdetalsReducer,
  eventactivelistReducer,
  eventdetailReducer,
  // upcomingeventsReducer,
  eventsdeleteReducer,
  // eventupdateReducer,
  getUserEventsListReducer,
  blogactivelistReducer,
  bloglistReducer,
  deleteblogReducer,
  blogdetailsReducer,
  updateblogReducer,
  userlistReducer,
  userblockReducer,
  contactDetailsReducer,
  contactDetailGetReducer,
  userAddContactDetailsReducer,
  profileReducer,
  usercontactSendReducer,
  addEventsReducer,
  eventsListReducer,
  // neweventpostReducer,
  upcoingeventsdetailsReducer,
  addEventReducer,
  aboutPostReducer,
  allDataGetReducer,
  getEventsListReducer,
  deleteEventReducer,
  eventDetailsReducer,
  upcomingEventsReducer,
  eventUpdateReducer,
  approveEventsReducer,
});

// get userData from localStorage
const userDataFromStorage = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;

// initialState
const initialState = {
  authReducer: { userData: userDataFromStorage },
};
// middleware used thunk
const middleware = [thunk];

// store variable initialized
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
