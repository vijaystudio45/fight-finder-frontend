import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { logout } from "../Redux/Action/authentication-action";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);
  const ref = useRef(null);
  const openMenu = () => {
    setToggle((current) => !current);
  };
  const { userData } = useSelector((state) => state.authReducer);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target.value)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const location = useLocation();
  const { pathname } = location;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="toggle-data-main">
        <div className="toggle-icons">
          <span className="inline-block" onClick={openMenu}>
            {toggle ? (
              <RxCross2 className="menu-icon" />
            ) : (
              <AiOutlineMenu className="menu-icon" />
            )}
          </span>

          <i
            onClick={logoutHandler}
            className="fa-solid fa-right-from-bracket log-out-icon float-right"
          ></i>
        </div>
        {toggle && (
          <div ref={ref} className="destop-menu-bar">
            <ul>
              <Link to="/home">Home</Link>
            </ul>
            <ul>
              <Link to="/events">Search For Events</Link>
            </ul>
            <ul>
              <Link to="/about-us">About Us</Link>
            </ul>
          </div>
        )}
      </div>
      <div
        className={
          pathname == "/"
            ? "Header-main-parent home_active "
            : "Header-main-parent"
        }
      >
        <div className="Header-main-div bg-black px-16 py-8">
          <div className="grid sm:grid-cols-4 items-center bg-white destop-tabs">
            <div className="first-tab sm:m-auto">
              <Link
                className={pathname == "/events" ? "active" : ""}
                to="/events"
              >
                Search for an Event
              </Link>
            </div>
            <div className="second-tab sm:m-auto">
              <Link to="/home">
                <img
                  className={
                    pathname == "/home" ? "active HomeimgSize" : "HomeimgSize"
                  }
                  src="img/image 2.png"
                />
              </Link>
            </div>
            <div className="third-tab sm:m-auto">
              <Link
                className={pathname == "/about-us" ? "active" : ""}
                to="/about-us"
              >
                About Us
              </Link>
            </div>

            <div className="fourth-tab sm:m-auto">
              <Link
                className={pathname == "/login" ? "active" : ""}
                to="/login"
              >
                Login
              </Link>
            </div>
          </div>
          {/* <div className="logout-section">
      <Link to="/">
      <i style={{color:"white"}} onClick={logoutHandler} className="fa-solid fa-right-from-bracket"></i>
      </Link>
      </div>  */}
        </div>

        {pathname == "/" && (
          <div className="Home-events-img relative">
            <img src="/img/Image 1.png" />
            <div className="fighter-Main absolute top-1/2 w-100">
              <div className="fighter-name  text-center">
                <span className="font-bold text-white">Usman</span>
                <span className="mx-2 font-bold text-white">VS.</span>
                <span className="font-bold text-white">Adam</span>
              </div>
              <h1 className="text-white sm:text-6xl text-3xl font-bold text-center">
                Euro for Euro{" "}
              </h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
