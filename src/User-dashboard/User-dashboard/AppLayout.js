import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = () => {
  return (
    <>
      <div className="main_appLayout">
        <div className="main_navbar_header">
          <Header />
        </div>
        <div className="main_footer">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
