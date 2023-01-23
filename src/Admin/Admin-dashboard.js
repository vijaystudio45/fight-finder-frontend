import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

function Admin_dashboard() {
  return (
    <>
      <div className="main-layout">
        <div className="header">
          <Header />
        </div>
        <div className="flex overflow-hidden bg-white">
          <Sidebar />

          <Outlet />
        </div>
        {/* <Admin_footer/> */}
      </div>
    </>
  );
}

export default Admin_dashboard;
