import React, { useEffect, useState, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { logout } from "../Redux/Action/authentication-action";
import { Transition } from "@headlessui/react";

import { useDispatch, useSelector } from "react-redux";

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.authReducer);

  const { pathname } = location;

  const [open, setOpen] = React.useState(false);
  const menuRef = useRef(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  const [isOpen, setIsOpen] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);
  let topData;
  let bottomData;

  if (userData?.role == 0) {
    topData = [
      { title: "Home", imgPath: "/img/home.png", path: "/home" },
      {
        title: "Blogs",
        path: "/blogs-list",
        imgPath: "/img/Mediamodifier-Design-Template (1).png",
      },
      {
        title: "Contact",
        path: "/add-contact",
        imgPath: "/img/Mediamodifier-Design-Template (2).png",
      },
      {
        title: "Users",
        path: "/users",
        imgPath: "/img/user.png",
      },
      {
        title: "Events",
        path: "/events-list",
        imgPath: "/img/svgg.png",
      },
    ];
    bottomData = [
      {
        title: "Profile",
        path: "/profile",
        imgPath: "/img/profile.png",
      },
      {
        title: "About Us",
        path: "/add-about-us",
        imgPath: "/img/help.png",
      },
      {
        title: "Terms & conditions",
        path: "/terms-conditions",
        imgPath: "/img/help.png",
      },

      {
        title: "Privacy Policy",
        path: "/privacy-policys",
        imgPath: "/img/help.png",
      },

      // {
      //   title: "Help",
      //   path: "/help",
      //   imgPath: "/img/help.png",
      // },
    ];
  } else if (userData?.role == 1) {
    topData = [
      { title: "Home", imgPath: "/img/home.png", path: "/home" },
      {
        title: "Events",
        path: "/events-list",
        imgPath: "/img/svgg.png",
      },
    ];
    bottomData = [
      {
        title: "Profile",
        path: "/profile",
        imgPath: "/img/profile.png",
      },
      // {
      //   title: "Help",
      //   path: "#",
      //   imgPath: "/img/help.png",
      // },
    ];
  }
  return (
    <>
      <nav className="bg-white  border-gray-200 fixed z-30 w-full menuhome">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={() => setIsOpen(!isOpen)}
                id="toggleSidebarMobile"
                aria-expanded="true"
                aria-controls="sidebar"
                className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
              >
                <svg
                  id="toggleSidebarMobileHamburger"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  id="toggleSidebarMobileClose"
                  className="w-6 h-6 hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <Link
                to="/"
                className="text-xl font-bold flex items-center lg:ml-2.5"
              >
                <img
                  src="\image 5.png"
                  className="w-3/6 mr-2"
                  alt="Windster Logo"
                />
              </Link>
            </div>

            <div className="flex items-center">
              <div className="mr-8">
                <div class="profile_pge">
                  <div
                    className="drop_down_open "
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <img
                      src={
                        userData?.profile_image_update
                          ? userData?.profile_image_update
                          : "/img/avataruser.png"
                      }
                      alt=""
                      class="w-10 h-10 m-auto rounded-full object-cover lg:w-10 lg:h-10"
                      ref={menuRef}
                    />
                    <span class="hidden text-gray-600 lg:block">
                      {userData?.username}
                    </span>
                  </div>
                  {showDropdown && (
                    <div className="loginRight">
                      <>
                        <div className="loginsigin">
                          <li onClick={() => setShowDropdown(!showDropdown)}>
                            <Link to="/profile">
                              <i class="fas fa-user-tie text-lg mr-2 text-gray-600"></i>
                              Profile
                            </Link>
                          </li>
                          <li onClick={logoutHandler}>
                            <Link to="/">
                              <i class="fas fa-sign-out-alt text-lg mr-0 mt-2 text-gray-600"></i>
                              Logout
                            </Link>
                          </li>
                        </div>
                      </>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="header-sidebar-coontnet md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="sidebar-coontnet-fight px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                {/* <ul className="navbar-link-items flex flex-col p-4 mt-2 bg-gray-50 md:flex-row md:space-x-12 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
                  <li className="mb-4">
                    <Link
                      to="/"
                      className={
                        pathname == "/"
                          ? "active"
                          : " py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      }
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/events"
                      className={
                        pathname == "/events"
                          ? "active"
                          : " py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      }
                    >
                      Events
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/blogs"
                      className={
                        pathname == "/blogs"
                          ? "active"
                          : " py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      }
                    >
                      Blogs
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/about-us"
                      className={
                        pathname == "/about-us"
                          ? "active"
                          : " py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      }
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/search-events"
                      className={
                        pathname == "/search-events"
                          ? "active"
                          : " py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      }
                    >
                      Search{" "}
                      <i class="fa fa-search text-black text-sm ml-3"></i>
                    </Link>
                  </li>
                  <li className="mb-4 mt-6">
                    {userData ? (
                      <>
                        <Link
                          to=""
                          onClick={logoutHandler}
                          className=" py-2 pl-3 pr-4 "
                        >
                          <button
                            type="button"
                            class="text-white uppercase bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-2 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-900 py-2 px-4"
                          >
                            Logout
                          </button>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/login" className=" py-2 pl-3 pr-4 ">
                          <button
                            type="button"
                            class="text-white uppercase bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-2 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-900 py-2 px-4"
                          >
                            Login
                          </button>
                        </Link>
                      </>
                    )}
                  </li>
                </ul> */}

<ul className="space-y-2 pb-2 bg-white">
        
                <li>
                  {topData?.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className={
                        pathname === item.path
                          ? "text-base text-blue-600 font-normal rounded-lg bg-gray-200 flex items-center p-2 group font-bold "
                          : "text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group font-bold"
                      }
                    >
                      <img
                        className="iconimage-path"
                        src={item.imgPath}
                        alt=""
                      />
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </li>
              </ul>
              <div className="space-y-2 pt-2">
                {bottomData?.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={
                      pathname === item.path
                        ? "text-base text-blue-600 font-normal rounded-lg bg-gray-200 flex items-center p-2 group font-bold "
                        : "text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group font-bold"
                    }
                  >
                    <img className="iconimage-path" src={item.imgPath} alt="" />
                    <span className="ml-3 flex-1 whitespace-nowrap">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
}

export default Header;
