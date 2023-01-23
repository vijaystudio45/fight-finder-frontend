import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import swal from "sweetalert";
import { register } from "../Redux/Action/authentication-action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validations } from "../utils";
import LoaderSpinner from "../Loader-spinner";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { success, error, message, loading } = useSelector(
    (state) => state.RegisterReducer
  );

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [rerender, setRerender] = useState(false);

  const [errors, setErrors] = useState({
    first_name: null,
    last_name: null,
    username: null,
    email: null,
    mobile: null,
    password: null,
    cpassword: null,
  });

  const formData = new FormData();

  const validateSubmit = (e) => {
    const tempErrors = {
      first_name: validations.firstName(first_name),
      last_name: validations.lastName(last_name),
      username: validations.username(username),
      email: validations.email(email),
      mobile: validations.phoneNumber(mobile),
      password: validations.password(password),
      cpassword: validations.confirmPassword(password, cpassword),
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
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("mobile_number", mobile);
    formData.append("password", password);
    formData.append("confirm_password", cpassword);
    formData.append("role", 1);
    dispatch(register(formData));
    setRerender(true);
  };

  useEffect(() => {
    if (success) {
      swal({
        title: "Successfully Complete",
        text: message,
        className: "successAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 5000,
      });
      setUserName("");
      setEmail("");
      setMobile("");
      setPassword("");
      setCpassword("");
      setRerender(false);
      navigate("/thank-you");
    }
    if (error && rerender) {
      swal({
        title: "Error",
        text:error,
        className: "errorAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [success, error, rerender]);



  console.log("err",error)
  return (
    <>
    

      <div class="login-form-fight h-screen 	 flex justify-center items-center bg-gradient-to-r from-blue-200 to-blue-100 to-Violet-200">
        <div class="login-form-fight-finder p-8 bg-white drop-shadow-lg space-y-5 rounded-sm">
          <div className="back-to-home  float-right">
            <Link class="text-black text-xl font-bold" to="/">
              <i class="fa fa-close"></i>
            </Link>
          </div>
          <div className="auth-logo-contnet">
            <img className="auth-logo1  w-44" src="/image 5.png" />
          </div>
          <h1 class="text-center text-lg font-semibold">
            Enter your information to register
          </h1>
          <div className="w-full">


          <div className="flex">
              <div
                class={errors.first_name ? "inputCntnr error" : "inputCntnr"}
              >
                <div className="px-3 mb-2">
                  <label className="text-md font-medium">First Name</label>
                  <div className="flex">
                    <input
                      type="text"
                      className="w-full px-3 py-2  border border-slate-400 placeholder-text-sm"
                      // placeholder="Enter first name"
                      value={first_name}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        setErrors({ ...errors, first_name: null });
                      }}
                    />
                  </div>
                  <span
                    style={{
                      color: "#D14F4F",
                      float: "right",
                      fontSize: "13px",
                      opacity: errors.first_name ? 1 : 0,
                    }}
                  >
                    {errors.first_name ?? "valid"}
                  </span>
                </div>
              </div>
              <div class={errors.last_name ? "inputCntnr error" : "inputCntnr"}>
                <div className="px-3 mb-2">
                  <label className="text-md font-medium">Last Name</label>
                  <div className="flex">
                    <input
                      type="text"
                      className="w-full px-3 py-2  border border-slate-400 placeholder-text-sm"
                      // placeholder="Enter last name"
                      value={last_name}
                      onChange={(e) => {
                        setLastName(e.target.value);
                        setErrors({ ...errors, last_name: null });
                      }}
                    />
                  </div>
                  <span
                    style={{
                      color: "#D14F4F",
                      float: "right",
                      fontSize: "13px",
                      opacity: errors.last_name ? 1 : 0,
                    }}
                  >
                    {errors.last_name ?? "valid"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex">
            <div class={errors.username ? "inputCntnr error" : "inputCntnr"}>
                <div className="px-3 mb-2">
                  <label className="text-md font-medium">Username</label>
                  <div className="flex">
                    <input
                      type="text"
                      className="w-full px-3 py-2  border border-slate-400 placeholder-text-sm"
                      // placeholder="Enter username"
                      value={username}
                      onChange={(e) => {
                        setUserName(e.target.value);
                        setErrors({ ...errors, username: null });
                      }}
                    />
                  </div>
                  <span
                    style={{
                      color: "#D14F4F",
                      float: "right",
                      fontSize: "13px",
                      opacity: errors.username ? 1 : 0,
                    }}
                  >
                    {errors.username ?? "valid"}
                  </span>
                </div>
              </div>
              <div class={errors.email ? "inputCntnr error" : "inputCntnr"}>
                <div className="px-3 mb-2">
                  <label for="" className="text-md font-medium">
                    Email
                  </label>
                  <div className="flex">
                    <input
                      type="email"
                      className="w-full px-3 py-2  border border-slate-400 placeholder-text-sm"
                      // placeholder="Enter email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors({ ...errors, email: null });
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
            </div>
            <div className="flex">
            <div class={errors.password ? "inputCntnr error" : "inputCntnr"}>
                <div className="px-3 mb-2">
                  <label for="" className="text-md font-medium">
                    Password
                  </label>
                  <div className="flex">
                    <input
                      type="password"
                      className="w-full px-3 py-2  border border-slate-400 placeholder-text-sm"
                      // placeholder="Enter confirm password"
                      value={password}
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
              <div class={errors.cpassword ? "inputCntnr error" : "inputCntnr"}>
                <div className="px-3 mb-2">
                  <label for="" className="text-md font-medium">
                    Confirm Password
                  </label>
                  <div className="flex">
                    <input
                      type="password"
                      className="w-full px-3 py-2  border border-slate-400 placeholder-text-sm"
                      // placeholder="Enter confirm password"
                      value={cpassword}
                      onChange={(e) => {
                        setCpassword(e.target.value);
                        setErrors({ ...errors, cpassword: null });
                      }}
                    />
                  </div>
                  <span
                    style={{
                      color: "#D14F4F",
                      float: "right",
                      fontSize: "13px",
                      opacity: errors.cpassword ? 1 : 0,
                    }}
                  >
                    {errors.cpassword ?? "valid"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex">
            <div class={errors.mobile ? "inputCntnr error" : "inputCntnr"}>
                <div className="px-3 mb-2">
                  <label for="" className="text-md font-medium">
                    Mobile no.
                  </label>
                  <div className="flex">
                    <input
                      type="number"
                      className="w-full px-3 py-2  border border-slate-400 placeholder-text-sm"
                      // placeholder="Enter mobile no."
                      value={mobile}
                      onChange={(e) => {
                        setMobile(e.target.value);
                        setErrors({ ...errors, mobile: null });
                      }}
                    />
                  </div>
                  <span
                    style={{
                      color: "#D14F4F",
                      float: "right",
                      fontSize: "13px",
                      opacity: errors.mobile ? 1 : 0,
                    }}
                  >
                    {errors.mobile ?? "valid"}
                  </span>
                </div>
              </div>
            
            </div>
          </div>
          <button
            onClick={validateSubmit}
            class="w-full px-10 py-2 bg-blue-800  text-white
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
          >
            Sign Up
          </button>

          <p class="text-center text-md font-medium">
            Already have an account ?
            <Link
              to="/login"
              class="text-blue-800 font-normal hover:underline ml-2"
              href=""
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
