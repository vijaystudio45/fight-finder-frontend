import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../Redux/Action/authentication-action";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { validations } from "../utils";

const Reset_password = () => {
  const { token, uid } = useParams();

  const { success, error } = useSelector((state) => state.resetPasswordReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formData = new FormData();

  const [newpassword, setnewpassword] = useState("");
  const [cnewpassword, setCnewpassword] = useState("");
  const [rerender, setRerender] = useState(false);

  const [errors, setErrors] = useState({
    newpassword: null,
    cnewpassword: null,
  });

  const validateSubmit = (e) => {
    // e.preventDefault();
    const tempErrors = {
      newpassword: validations.password(newpassword),
      cnewpassword: validations.confirmPassword(newpassword, cnewpassword),
    };
    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      console.log(
        "..values",
        Object.values(tempErrors).filter((value) => value)
      );
      return;
    }
    SubmitHandler();
  };

  const SubmitHandler = () => {
    formData.append("password", newpassword);
    formData.append("confirm_password", cnewpassword);
    dispatch(resetPassword(token, uid, formData));
  };

  useEffect(() => {
    if (success) {
      swal({
        title: "Successfully Complete",
        text: "Password Reset Successfully",
        className: "successAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
      navigate("/home");
    }
    if (error) {
      swal({
        title: "Error",
        text: error,
        className: "errorAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
    }
  }, [success, error]);

  return (
    <>
      {/* <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="w-full py-10 px-5 md:px-10">
              <div>
                <div className="text-center">
                  <h1 className="font-bold text-3xl text-gray-900">
                    Reset Password
                  </h1>
                  <p className="my-4 text-lg text-black font-bold">
                    Reset your password
                  </p>
                </div>
                <div>
                  <div
                    class={
                      errors.newpassword ? "inputCntnr error" : "inputCntnr"
                    }
                  >
                    <div className="px-3 mb-2">
                      <label className="text-md text-gray-800 font-bold px-1">
                        New password
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="fa fa-lock text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="password"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Enter password"
                          onChange={(e) => {
                            setnewpassword(e.target.value);
                            setErrors({ ...errors, newpassword: null });
                          }}
                        />
                      </div>
                      <span
                        style={{
                          color: "#D14F4F",
                          float: "right",
                          fontSize: "13px",
                          opacity: errors.newpassword ? 1 : 0,
                        }}
                      >
                        {errors.newpassword ?? "valid"}
                      </span>
                    </div>
                  </div>

                  <div
                    class={
                      errors.cnewpassword ? "inputCntnr error" : "inputCntnr"
                    }
                  >
                    <div className="px-3 mb-2">
                      <label className="text-md text-gray-800 font-bold px-1">
                        Confirm new password
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="fa fa-lock text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="password"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Enter new password"
                          onChange={(e) => {
                            setCnewpassword(e.target.value);
                            setErrors({ ...errors, cnewpassword: null });
                          }}
                        />
                      </div>
                      <span
                        style={{
                          color: "#D14F4F",
                          float: "right",
                          fontSize: "13px",
                          opacity: errors.cnewpassword ? 1 : 0,
                        }}
                      >
                        {errors.cnewpassword ?? "valid"}
                      </span>
                    </div>
                  </div>

                  <div className="flex mt-4">
                    <div className="w-full px-3 mb-2">
                      <button
                        onClick={validateSubmit}
                        className="block w-full max-w-xs  mx-auto bg-blue-800 hover:bg-blue-700 focus:bg-blue-800 text-white rounded-md px-3 py-2.5 font-semibold"
                      >
                        change password
                      </button>
                    </div>
                  </div>

                  <div className="text-center login-links">
                    <Link
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      to="/register"
                    >
                      Don't have an account ? SignUp !
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div class="login-form-fight  h-screen 	 flex justify-center items-center bg-gradient-to-r from-blue-200 to-blue-100 to-Violet-200">
        <div class="login-form-fight-finder w-96 p-8 bg-white drop-shadow-lg space-y-5 rounded-sm">
          <div className="back-to-home  float-right">
            <Link class="text-black text-xl font-bold" to="/">
              <i class="fa fa-close"></i>
            </Link>
          </div>
          <div className="auth-logo-contnet">
            <img className="auth-logo1  w-44" src="/image 5.png" />
          </div>
          <h1 class="text-center text-lg font-semibold">Reset your password</h1>
          <div class={errors.newpassword ? "inputCntnr error" : "inputCntnr"}>
            <div class="flex flex-col space-y-1">
              <label class="text-md font-medium" for="email">
                New password
              </label>
              <input
                class="w-full px-3 py-2  border border-slate-400 placeholder-text-sm"
                type="email"
                // placeholder="Your Email"
                name="email"
                id="email"
                onChange={(e) => {
                  setnewpassword(e.target.value);
                  setErrors({ ...errors, newpassword: null });
                }}
              />
            </div>
            <span
              style={{
                color: "#D14F4F",
                float: "right",
                fontSize: "13px",
                opacity: errors.newpassword ? 1 : 0,
              }}
            >
              {errors.newpassword ?? "valid"}
            </span>
          </div>
          <div className={errors.password ? "inputCntnr error" : "inputCntnr"}>
            <div class="flex flex-col space-y-1">
              <label class="text-md font-medium" for="password">
                Confirm new password
              </label>
              <input
                class="w-full px-3 py-2  border border-slate-400"
                type="password"
                // placeholder="Your Password"
                name="password"
                id="password"
                onChange={(e) => {
                  setCnewpassword(e.target.value);
                  setErrors({ ...errors, cnewpassword: null });
                }}
              />
            </div>
            <span
              style={{
                color: "#D14F4F",
                float: "right",
                fontSize: "13px",
                opacity: errors.cnewpassword ? 1 : 0,
              }}
            >
              {errors.cnewpassword ?? "valid"}
            </span>
          </div>
          <button
            onClick={validateSubmit}
            class="w-full px-10 py-2 bg-blue-800  text-white
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
          >
           change password
          </button>

          <p class="text-center text-md font-medium">
            Not a member?
            <Link
              to="/register"
              class="text-blue-800 font-normal hover:underline ml-2"
              href=""
            >
              Signup now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Reset_password;
