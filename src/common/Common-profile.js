import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Admin_profile from "../Admin/Admin-profile";
import User_profile from "../User-dashboard/User-profile";

export default function Common_profile() {
  const Navigate = useNavigate();
  const { userData } = useSelector((state) => state.authReducer);

  return userData?.role == 1 ? (
    <User_profile/>
  ) : userData?.role == 0 ? (
    <Admin_profile/>
  ) : (
    <Navigate to="/" />
  );
}
