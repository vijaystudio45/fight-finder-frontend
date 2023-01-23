import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/Action/authentication-action";
import swal from "sweetalert";
import { validations } from "../utils";
import { userslistAction } from "../Redux/Action/User-list-action";
import LoaderSpinner from "../Loader-spinner";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { message, error, userData, loading } = useSelector(
    (state) => state.authReducer
  );
  const { userslist } = useSelector((state) => state.userlistReducer);

  const { userData: user } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(userslistAction());
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rerender, setRerender] = useState(false);
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const validateSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {
      email: validations.Email(email),
      password: validations.password(password),
    };
    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      // console.log(
      //   "..values",
      //   Object.values(tempErrors).filter((value) => value)
      // );
      return;
    }
    SubmitHandler();
  };

  const SubmitHandler = () => {
    setRerender(true);

    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);
    dispatch(login(formData));
  };

  // useEffect(() => {
  //   const keyDownHandler = (event) => {
  //     if (event.key === "Enter") {
  //       event.preventDefault();

  //       SubmitHandler();
  //     }
  //   };

  //   document.addEventListener("keydown", keyDownHandler);

  //   return () => {
  //     document.removeEventListener("keydown", keyDownHandler);
  //   };
  // }, []);

  useEffect(() => {
    if (userData) {
      swal({
        title: "Successfully Complete",
        text: "Successfully login",
        className: "successAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 5000,
      });
      navigate("/home");
    }
    if (error && rerender) {
      swal({
        title: "Error",
        text: error,
        className: "errorAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 5000,
      });
    }
    setRerender(false);
  }, [dispatch, userData, error]);

  return (
    <>
      {/* <div className="min-w-screen min-h-screen  bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="w-full py-10 px-5 md:px-10">
              <div>
                <form onSubmit={validateSubmit}>
                  <div className="text-center">
                    <h1 className="font-bold text-3xl text-gray-900">Log In</h1>
                    <p className="my-4 text-lg text-black font-bold">
                      Log in to your account
                    </p>
                  </div>
                  <div
                    className={errors.email ? "inputCntnr error" : "inputCntnr"}
                  >
                    <div className="px-3 mb-2">
                      <label
                        for=""
                        className="text-md text-gray-800 font-bold px-1"
                      >
                        Email
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="fa fa-envelope text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="email"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Enter email address"
                          onChange={(e) => {
                            setErrors({ ...errors, email: null });
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <span
                        style={{
                          color: "#D14F4F",
                          float: "right",
                          fontSize: "13px",
                          opacity: errors.email ? 1 : 0,
                        }}
                      >
                        {errors.email ?? "valid"}
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      errors.password ? "inputCntnr error" : "inputCntnr"
                    }
                  >
                    <div className="px-3 mb-2">
                      <label className="text-md text-gray-800 font-bold px-1">
                        Password
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
                            setPassword(e.target.value);
                            setErrors({ ...errors, password: null });
                          }}
                        />
                      </div>
                      <span
                        style={{
                          color: "#D14F4F",
                          float: "right",
                          fontSize: "13px",
                          opacity: errors.password ? 1 : 0,
                        }}
                      >
                        {errors.password ?? "valid"}
                      </span>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    <div className="w-full px-3 mb-2">
                      <button
                        type="submit"
                        onClick={validateSubmit}
                        className="block w-full max-w-xs  mx-auto bg-blue-800 hover:bg-blue-700 focus:bg-blue-800 text-white rounded-md px-3 py-2.5 font-semibold"
                      >
                        Log In
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
                  <div className="text-center login-links">
                    <Link
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      to="/forgot"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div className="text-center login-links last-link">
                    <Link
                      className="inline-block text-sm text-red-500 align-baseline hover:text-red-800"
                      to="/"
                    >
                      Back to Home
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="min-w-screen min-h-screen bg-gradient-to-r from-cyan-800 to-blue-500 to-blue-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-2xl sm:w-1/2 shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="w-full py-10 md:px-10">
              <div>
                <div className="auth-logo-contnet">
                  <img className="auth-logo1  w-44" src="/image 5.png" />
                </div>
                <div className="login-account-text text-center">
                  <p className="my-4 text-lg font-normal">
                    Log in to your account
                  </p>
                </div>
                <div
                  className={errors.email ? "inputCntnr error" : "inputCntnr"}
                >
                  <div className="px-3 mb-2">
                    <label
                      for=""
                      className="text-md text-gray-800 font-medium px-1"
                    >
                      Email
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="fa fa-envelope text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 "
                        placeholder="Enter email"
                        onChange={(e) => {
                          setErrors({ ...errors, email: null });
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <span
                      style={{
                        color: "#D14F4F",
                        float: "right",
                        fontSize: "13px",
                        opacity: errors.email ? 1 : 0,
                      }}
                    >
                      {errors.email ?? "valid"}
                    </span>
                  </div>
                </div>
                <div
                  className={
                    errors.password ? "inputCntnr error" : "inputCntnr"
                  }
                >
                  <div className="px-3 mb-2">
                    <label className="text-md text-gray-800 font-medium px-1">
                      Password
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
                          setPassword(e.target.value);
                          setErrors({ ...errors, password: null });
                        }}
                      />
                    </div>
                    <span
                      style={{
                        color: "#D14F4F",
                        float: "right",
                        fontSize: "13px",
                        opacity: errors.password ? 1 : 0,
                      }}
                    >
                      {errors.password ?? "valid"}
                    </span>
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="w-full px-3 mb-2">
                    <button
                      onClick={validateSubmit}
                      className="block w-full max-w-xs  mx-auto bg-blue-800 hover:bg-blue-700 focus:bg-blue-800 text-white rounded-md px-3 py-2.5 font-semibold uppercase"
                    >
                      sign in
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <Link
                    className="inline-block text-md text-blue-500 align-baseline hover:text-blue-800"
                    to="/forgot"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    className="inline-block text-md text-blue-500 align-baseline hover:text-blue-800"
                    to="/register"
                  >
                    Don't have an account ? SignUp !
                  </Link>
                </div>
                <Link to="/">
                  <p className="text-center text-md text-red-500 mt-1">
                    Back to home
                  </p>
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
          <h1 class="text-center text-lg font-semibold">
            Log in to your account
          </h1>

          <form onSubmit={validateSubmit}>
            <div className={errors.email ? "inputCntnr error" : "inputCntnr"}>
              <div class="flex flex-col space-y-1">
                <label class="text-md font-medium" for="email">
                  Email
                </label>
                <input
                  class="w-full px-3 py-2  border border-slate-400 placeholder-text-sm"
                  type="email"
                  // placeholder="Your Email"
                  name="email"
                  id="email"
                  onChange={(e) => {
                    setErrors({ ...errors, email: null });
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <span
                style={{
                  color: "#D14F4F",
                  float: "right",
                  fontSize: "13px",
                  opacity: errors.email ? 1 : 0,
                }}
              >
                {errors.email ?? "valid"}
              </span>
            </div>
            <div
              className={errors.password ? "inputCntnr error" : "inputCntnr"}
            >
              <div class="flex flex-col space-y-1 w-full">
                <label class="text-md font-medium" for="password">
                  Password
                </label>
                <input
                  class="w-full px-3 py-2  border border-slate-400"
                  type="password"
                  // placeholder="Your Password"
                  name="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({ ...errors, password: null });
                  }}
                />
              </div>
              <span
                style={{
                  color: "#D14F4F",
                  float: "right",
                  fontSize: "13px",
                  opacity: errors.password ? 1 : 0,
                }}
              >
                {errors.password ?? "valid"}
              </span>
            </div>
            <p class="text-left my-2">
              <Link
                to="/forgot"
                class="text-blue-800 text-sm hover:underline"
                href=""
              >
                Forget Password?
              </Link>
            </p>
            <button
              // onClick={validateSubmit}

              class="w-full px-10 py-2 bg-blue-800  text-white
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
              type="submit"
            >
              Sign In
            </button>
          </form>

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
}

export default Login;
