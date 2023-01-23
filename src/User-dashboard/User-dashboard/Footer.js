import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer-main-div">
      <div className="footer-content bg-indigo-800 grid sm:grid-cols-5 py-8 px-6">
        <div className="footer-first-img inline-block sm:mx-4 sm:mt-4">
          <img className="bg-white px-4 py-2" src="img/image 5.png" />
        </div>
        <div className="second-content my-2 sm:m-auto">
          <h3 className="text-lg font-bold text-white font-sans">
            The Fight Finder
          </h3>
          <ul>
            <li>
              <a href="#" className="text-base text-white font-light">
                Search for an Event
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="text-base text-white font-light">
                News
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="text-base text-white font-light">
                Reviews
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="text-base text-white font-light">
                About Us
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="text-base text-white font-light">
                User Profile{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="third-content my-2 sm:m-auto">
          <h3 className="text-lg font-bold text-white">HELP</h3>
          <ul>
            <li>
              <Link to="/contact-us" className="text-base text-white font-light">
              Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="fourth-content my-2 sm:m-auto">
          <h3 className="text-lg font-bold text-white ">LEGAL</h3>
          <ul>
            <li>
              <a href="#" className="text-base text-white font-light">
                Terms
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="text-base text-white font-light">
                Privacy Policy
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="text-base text-white font-light">
                Ad Choices
              </a>
            </li>
          </ul>
        </div>
        <div className="fifth-content my-2 sm:m-auto">
          <h3 className="text-lg font-bold text-white">SOCIAL MEDIA</h3>
          <ul>
            <li>
              <a href="#" className="text-base text-white font-light">
                Facebook
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="text-base text-white font-light">
                Instagram
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="text-base text-white font-light">
                TikTok
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="text-base text-white font-light">
                Twitch
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="text-base text-white font-light">
                Twitter
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="text-base text-white font-light">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright text-center py-2">
        <p className="text-slate-400 font-light text-sm">
          Copyright © 2021 The Fight Finder All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
