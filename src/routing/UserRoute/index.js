import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function UserRoute({ children }) {
  const { userData } = useSelector((state) => state.authReducer);

  return userData?.role == 1 ? children : <Navigate to="/" />;
}
