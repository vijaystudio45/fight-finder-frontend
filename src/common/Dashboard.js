import React from "react";
import Userdashboard from "../User-dashboard/Userdashboard";
import Admin_dashboard_content from "../Admin/Admin-dashboard-content";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const Navigate = useNavigate();

  const { userData } = useSelector((state) => state.authReducer);
  return userData?.role == 1 ? (
    <Userdashboard />
  ) : userData?.role == 0 ? (
    <Admin_dashboard_content />
  ) : (
    <Navigate to="/" />
  );
}
