import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { allpagesDatagetAction } from "../Redux/Action/Admin-about-action";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import "./Com-terms.css";

function Privacy_policy() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { alldataGet } = useSelector((state) => state.allDataGetReducer);

  useEffect(() => {
    dispatch(allpagesDatagetAction("privacy"));
  }, []);

  return (
    <>
      <div className="terms-privacy-fight  mt-28">
        <div className="terms-and-conditions">
          <div className="Home-events-img11 Publiceventde">
            <div className="welcome-event-home">
              <h4 className="pagetitleall"> Privacy Policy</h4>

              <h4 className="our-blogs-contnet text-white text-xl font-semibold">
                <Link to="/" className="hover:text-blue-700">
                  Home
                </Link>
                <span className="mx-2">/</span> Privacy Policy
              </h4>
            </div>
          </div>
          {/* <div className="blogs-image">
            <div className="Home-events-img11 relative">
              <img
                className="breadcrumbs-bg w-100"
                src="/img/breadcrumbs-bg-copyright.jpg"
              />
              <div className="welcome-event-home container absolute top-0 text-7xl text-center">
                <h4 className="our-blogs-contnet text-white font-bold uppercase">
                Privacy Policy
                </h4>
                <h4 className="our-blogs-contnet text-white text-xl font-semibold">
                  <Link to="/" className="hover:text-blue-700">
                    Home
                  </Link>
                  <span className="mx-2">/</span> Privacy Policy
                </h4>
              </div>
            </div>
          </div> */}
          {/*     
          <h2 className="text-3xl text-center pb-4 text-black-800">
            Welcome to our website
          </h2> */}

          <div className="container pb-12 text-black-800 pt-12">
            {alldataGet?.length > 0 && (
              <>
                <div className="terms-cojnn">
                  {parse(alldataGet[0]?.contant)}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Privacy_policy;
