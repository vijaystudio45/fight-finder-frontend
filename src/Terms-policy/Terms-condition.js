import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { allpagesDatagetAction } from "../Redux/Action/Admin-about-action";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import "./Com-terms.css";

function Terms_condition() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { alldataGet } = useSelector((state) => state.allDataGetReducer);

  useEffect(() => {
    dispatch(allpagesDatagetAction("terms"));
  }, []);

  return (
    <>
      <div className="terms-privacy-fight  mt-28">
        <div className="terms-and-conditions">
          <div className="Home-events-img11 Publiceventde">
            <div className="welcome-event-home">
              <h4 className="pagetitleall"> Terms & Conditions</h4>

              <h4 className="our-blogs-contnet text-white text-xl font-semibold">
                <Link to="/" className="hover:text-blue-700">
                  Home
                </Link>
                <span className="mx-2">/</span> Terms & Conditions
              </h4>
            </div>
          </div>

          {/*     
          <h2 className="text-3xl text-center pb-4 text-black-800">
            Welcome to our website
          </h2> */}

          <div className="container text-black-800 pt-12 pb-12">
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

export default Terms_condition;
