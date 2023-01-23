import React from "react";
import { Link } from "react-router-dom";

function Public_footer() {
  return (
    <>
      <div className="public-footer">
        <div className="container  fighting-imges footer-main-div">
          <div className="footer-content bg-white grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 py-8 px-12">
            <div className="footer-first-img  ">
              <img className="bg-white  w-2/3" src="/img/image 5.png" />
            </div>
            <div className="second-content my-2 sm:m-auto">
              <h3 className="common-text-font-fam text-xl font-bold text-black font-sans uppercase mb-6">
                The Fight Finder
              </h3>
              <ul className="footer-list-item space-y-1">
                <li>
                  <Link
                    to="/search-events"
                    className="text-base text-black font-normal	"
                  >
                    Search for an event
                  </Link>
                </li>

                {/* <li>
                <Link to="/news" className="text-base text-black font-normal	">
                  News
                </Link>
              </li>

              <li>
                <Link to="/reviews" className="text-base text-black font-normal	">
                  Reviews
                </Link>
              </li> */}

                <li>
                  <Link
                    to="/about-us"
                    className="text-base text-black font-normal	"
                  >
                    About Us
                  </Link>
                </li>

                {/* <li>
                <Link to="/profile" className="text-base text-black font-normal	">
                  User Profile{" "}
                </Link>
              </li> */}
              </ul>
            </div>

            <div className="fourth-content my-2 sm:m-auto">
              <h3 className="common-text-font-fam text-xl font-bold text-black mb-6 uppercase">
                legal
              </h3>
              <ul className="footer-list-item space-y-1">
                <li>
                  <Link
                    to="/terms"
                    className="text-base text-black font-normal	"
                  >
                    Terms & Conditions
                  </Link>
                </li>

                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-base text-black font-normal	"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="text-base text-black font-normal	"
                  >
                    Contact Us
                  </Link>
                </li>

                {/* <li>
                <Link to="" className="text-base text-black font-normal	">
                  Ad Choices
                </Link>
              </li> */}
              </ul>
            </div>
            <div className="fifth-content my-2 sm:m-auto">
              <h3 className="common-text-font-fam text-xl font-bold  text-black mb-6 uppercase">
                social media
              </h3>
              <ul className="footer-list-item space-y-1">
                <li>
                  <Link to="" className="text-base text-black font-normal	">
                    Facebook
                  </Link>
                </li>

                <li>
                  <Link to="" className="text-base text-black font-normal	">
                    Instagram
                  </Link>
                </li>

                <li>
                  <Link to="" className="text-base text-black font-normal	">
                    TikTok
                  </Link>
                </li>

                <li>
                  <Link to="" className="text-base text-black font-normal	">
                    Twitch
                  </Link>
                </li>

                <li>
                  <Link to="" className="text-base text-black font-normal	">
                    Twitter
                  </Link>
                </li>

                <li>
                  <Link to="" className="text-base text-black font-normal	">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright text-center py-2">
            <p className="common-text-font-fam text-black-800 font-medium	 text-lg">
              Fight Finder © 2023. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Public_footer;
