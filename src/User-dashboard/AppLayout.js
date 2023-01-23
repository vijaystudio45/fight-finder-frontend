import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = () => {
  return (
    <>
      <div className="main_appLayout relative">
        <div className="fixed  main_navbar_header">
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
