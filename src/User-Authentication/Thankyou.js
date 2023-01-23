import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <>
      {/* <div class="Topdiv">
        <div class="thankyoupage">
          <div class="login-content-registering">
            <div class="thanktext">
              <div class="logo-content">
                <Link to="/">
                  <img src="/img/image 5.png" class="login-logo" alt="" />
                </Link>
              </div>
              <p>
                Thank you for registering yourself at The Fight Finder.
                <br /> An email has been sent to your registered email Id.
                <br /> Kindly verify the email to login and start using our
                services
              </p>
              <div class="text-center mt-4 thankyoudiv">
                <Link
                  className="block w-full max-w-xs  mx-auto bg-blue-800 hover:bg-blue-700 focus:bg-blue-800 text-white rounded-md px-3 py-2.5 font-semibold"
                  to="/login"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div class="login-form-fight h-screen 	 flex justify-center items-center bg-gradient-to-r from-blue-200 to-blue-100 to-Violet-200">
        <div class="login-form-fight-finder w-96 p-8 bg-white drop-shadow-lg space-y-5 rounded-sm">
          <div className="back-to-home  float-right">
            <Link class="text-black text-xl font-bold" to="/">
              <i class="fa fa-close"></i>
            </Link>
          </div>
          <div className="auth-logo-contnet">
            <img className="auth-logo1  w-44" src="/image 5.png" />
          </div>
          <p class="text-center text-md font-medium">
            Thank you for registering yourself at The Fight Finder. An email has
            been sent to your registered email Id. Kindly verify the email to
            login and start using our services
          </p>

          <Link to="/login">
            <button
              class="w-full px-10 py-2 bg-blue-800  text-white mt-4
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
              type="submit"
            >
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
