import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BACKEND_URL } from "../environment";
import swal from "sweetalert";
import axios from "axios";
import { verfyemailAction } from "../Redux/Action/authentication-action";
import { useSelector, useDispatch } from "react-redux";

const VerifyEmail = () => {

  const dispatch = useDispatch();

  const { decodeId } = useParams();
  const [successChk, setSuccessChk] = useState(false);

  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   };

  //   const success = axios
  //     .post(`${BACKEND_URL}verify-email/${decodeId}`, config)
  //     .then((res) => {
  //       if (res.data.message) {
  //         setSuccessChk(true);
  //         swal({
  //           title: "Email successfully verified",
  //           text: res.data.message,
  //           className: "successAlert",
  //           icon: "/img/image 2.png",
  //           buttons: false,
  //           timer: 200000,
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       if (err.response.data.message) {
  //         setSuccessChk(false);
  //         swal({
  //           title: "Error",
  //           text: err.response.data.message,
  //           className: "errorAlert",
  //           icon: "/img/image 2.png",
  //           buttons: false,
  //           timer: 200000,
  //         });
  //       }
  //     });
  // }, []);

useEffect(()=>{
  dispatch(verfyemailAction(decodeId));
},[])


  const { success: successUpdate, error: errorUpdate } = useSelector(
    (state) => state.UpdateprofileReducer
  );

  useEffect(() => {
    if (successUpdate) {
      swal({
        title: "Successfully Complete",
        text: "Email confirmed successfully",
        className: "successAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 5000,
      });
    }

    if (errorUpdate) {
      swal({
        title: "Error",
        text: errorUpdate,
        className: "errorAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 5000,
      });
    }
  }, [successUpdate, errorUpdate]);

  return (
    <>
      {/* <div className="Topdiv">
        <div className="verifydiv">
          <div className="login-content verifyemail">
            <div className="ForgotPgae1">
              <div className="verifylogo">
                <img src="/img/image 5.png" className="login-logo" alt="" />
              </div>
              <div className="verifyemailtext">
                <h1>Welcome to The Fight Finder </h1>
                <p> Your email have been confirmed. </p>
                <Link  className="mt-2 block w-4/5 max-w-xs  mx-auto bg-blue-800 hover:bg-blue-700 focus:bg-blue-800 text-white rounded-md px-2 py-2.5 font-semibold" to="/login">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div class="login-form-fight  h-screen 	 flex justify-center items-center bg-gradient-to-r from-blue-200 to-blue-100 to-Violet-200">
        <div class="login-form-fight-finder w-96 p-8 bg-white drop-shadow-lg space-y-5 rounded-sm">
          {/* <div className="back-to-home  float-right">
            <Link class="text-black text-xl font-bold" to="/">
              <i class="fa fa-close"></i>
            </Link>
          </div> */}
          <div className="auth-logo-contnet">
            <img className="auth-logo1  w-44" src="/image 5.png" />
          </div>
          <p class="text-center text-md font-medium">
            Welcome to The Fight Finder
          </p>
          <p class="text-center text-md font-medium">
            Your email have been confirmed.
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

export default VerifyEmail;
