import "./App.css";
import AppLayout from "./User-dashboard/AppLayout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About_us from "./User-dashboard/About-us";
import Home_page from "./User-dashboard/Home-page";
import Admin_dashboard from "./Admin/Admin-dashboard";
import Admin_dashboard_content from "./Admin/Admin-dashboard-content";
import Admin_profile from "./Admin/Admin-profile";
import Contact_Page from "./User-dashboard/Contact-us";

// Authication
import Login from "./User-Authentication/Login";
import Register from "./User-Authentication/Register";
import Forgot from "./User-Authentication/Forgot";
import Reset_password from "./User-Authentication/Reset-password";
import Admin_blogs_list from "./Admin/Admin-blogs-list";
import Admin_blog_add_edit from "./Admin/Admin-blog-add-edit";

// Routing
import ProtectedRoute from "./routing/ProtectedRoute";
import PublicRoute from "./routing/PublicRoute";
import AdminRoute from "./routing/AdminRoute";
import UserRoute from "./routing/UserRoute";

// Pages
import Admin_users from "./Admin/Admin-users";
import { Admin_add_contact } from "./Admin/Admin-contact-details";
import { Events_Add } from "./Admin/Admin-events-add-edit";
import { Events_list } from "./Admin/Admin-events-list";
import CommonLayout from "./common/CommonLayout";
import Userdashboard from "./User-dashboard/Userdashboard";
import Dashboard from "./common/Dashboard";
import VerifyEmail from "./User-Authentication/Verify-email";
import ThankYou from "./User-Authentication/Thankyou";
import Error from "./common/Error";
import Public_dashboard from "./Public-pages/Public-dashboard";
import Public_layout from "./Public-pages/Public-layout";
import Public_blogs from "./Public-pages/Public-blogs";
import Public_events from "./Public-pages/Public-events";
import Public_about_us from "./Public-pages/Public-about-us";
import Public_events_details from "./Public-pages/Public-events-details";
import Public_blogs_details from "./Public-pages/Public-blogs-details";
import Edit_event from "./Admin/Edit-event";
import Terms_condition from "./Terms-policy/Terms-condition";
import Public_user_profile from "./Public-pages/Public-user-profile";
import News from "./Terms-policy/News";
import Privacy_policy from "./Terms-policy/Privacy-policy";
import Reviews from "./Terms-policy/Reviews";
import Admin_about_us from "./Admin/Admin-about-us";
import SearchEvents from "./Public-pages/Public-search-events";

// User
import User_add_event from "./User/User-add-event";
import Admin_terms_condtion from "./Admin/Admin-terms-condtion";
import Admin_privacy_policy from "./Admin/Admin-privacy-policy";

// import Admin_help from "./Admin/Admin-help";

function App() {
  return (
    <div className="App_import">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          {/* <Route
            path="verify-email"
            element={
              <PublicRoute>
                <VerifyEmail />
              </PublicRoute>
            }
          /> */}
          <Route
            path="/thank-you"
            element={
              <PublicRoute>
                <ThankYou />
              </PublicRoute>
            }
          />
          <Route
            path="/verify-email/:decodeId"
            element={
              <PublicRoute>
                <VerifyEmail />
              </PublicRoute>
            }
          />
          <Route
            path="/forgot"
            element={
              <PublicRoute>
                <Forgot />
              </PublicRoute>
            }
          />
          <Route
            path="/reset-password/:token/:uid"
            element={
              <PublicRoute>
                <Reset_password />
              </PublicRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
              <PublicRoute>
                <Reset_password />
              </PublicRoute>
            }
          />
          <Route element={<Public_layout />}>
            <Route
              path="/"
              element={
                // <PublicRoute>
                <Public_dashboard />
                // </PublicRoute>
              }
            />
            <Route
              path="/blogs"
              element={
                // <PublicRoute>
                <Public_blogs />
                // </PublicRoute>
              }
            />

            <Route
              path="/events"
              element={
                // <PublicRoute>
                <Public_events />
                // </PublicRoute>
              }
            />

            <Route
              path="/event-details/:eventdetailId/:eventType"
              element={
                // <PublicRoute>
                <Public_events_details />
                // </PublicRoute>
              }
            />

            <Route
              path="/blog-details/:blogdetailId"
              element={
                // <PublicRoute>
                <Public_blogs_details />
                // </PublicRoute>
              }
            />
            <Route
              path="/about-us"
              element={
                // <PublicRoute>
                <Public_about_us />
                // </PublicRoute>
              }
            />
            <Route
              path="/news"
              element={
                // <PublicRoute>
                <News />
                // </PublicRoute>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                // <PublicRoute>
                <Privacy_policy />
                // </PublicRoute>
              }
            />

            <Route
              path="/terms"
              element={
                // <PublicRoute>
                <Terms_condition />
                // </PublicRoute>
              }
            />
            <Route
              path="/contact-us"
              element={
                // <PublicRoute>
                <Contact_Page />
                // </PublicRoute>
              }
            />
            <Route
              path="/reviews"
              element={
                // <PublicRoute>
                <Reviews />
                // </PublicRoute>
              }
            />
            <Route
              path="/search-events"
              element={
                // <PublicRoute>
                <SearchEvents />
                // </PublicRoute>
              }
            />
          </Route>
          <Route element={<CommonLayout />}>
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Admin_profile />
                </ProtectedRoute>
              }
            />
            {/* 
            <Route
              path="/help"
              element={
                <ProtectedRoute>
                  <Admin_help />
                </ProtectedRoute>
              }
            /> */}

            <Route
              path="/blogs-list"
              element={
                <AdminRoute>
                  <Admin_blogs_list />
                </AdminRoute>
              }
            />
            <Route
              path="/add-blogs"
              element={
                <AdminRoute>
                  <Admin_blog_add_edit />
                </AdminRoute>
              }
            />
            <Route
              path="/add-blogs/:blogId"
              element={
                <AdminRoute>
                  <Admin_blog_add_edit />
                </AdminRoute>
              }
            />
            <Route
              path="/users"
              element={
                <AdminRoute>
                  <Admin_users />
                </AdminRoute>
              }
            />
            <Route
              path="/add-contact"
              element={
                <AdminRoute>
                  <Admin_add_contact />
                </AdminRoute>
              }
            />
            <Route
              path="/edit-event/:eventId/:eventType"
              element={
                <ProtectedRoute>
                  <Edit_event />
                </ProtectedRoute>
              }
            />
            <Route
              path="/events-list"
              element={
                <ProtectedRoute>
                  <Events_list />
                </ProtectedRoute>
              }
            />
            <Route
              path="/terms-conditions"
              element={
                <ProtectedRoute>
                  <Admin_terms_condtion />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-about-us"
              element={
                <AdminRoute>
                  <Admin_about_us />
                </AdminRoute>
              }
            />

            <Route
              path="/privacy-policys"
              element={
                <AdminRoute>
                  <Admin_privacy_policy />
                </AdminRoute>
              }
            />

            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-event"
              element={
                <ProtectedRoute>
                  <User_add_event />
                </ProtectedRoute>
              }
            />
            <Route
              path="/events-list"
              element={
                <ProtectedRoute>
                  <Events_list />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
