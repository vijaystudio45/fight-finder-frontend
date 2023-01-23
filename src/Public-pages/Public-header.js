import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Action/authentication-action";

function Public_header() {
  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = location;
  const [isOpen, setIsOpen] = useState(false);

  const { userData } = useSelector((state) => state.authReducer);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <div>
        <div className="fight-finder-header bg-white-800 py-4 shadow-md">
          <div className="container fighting-imges max-w-7xl mx-auto px-4 pyt-16 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="footer-first-img  ">
                <Link to="/home">
                  <img
                    className="fight-finder-ligo bg-white sm:2/6 w-2/3"
                    src="/img/image 5.png"
                  />
                </Link>
              </div>
              <div className="flex items-center">
                <div className="hidden md:block ">
                  <ul className="navbar-link-items flex flex-col p-4 mt-2 bg-gray-50 md:flex-row md:space-x-12 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white">
                    <li>
                      <Link
                        to="/"
                        className={
                          pathname == "/"
                            ? "active"
                            : " py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white  dark:hover:text-white md:dark:hover:bg-transparent"
                        }
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/search-events"
                        className={
                          pathname == "/search-events"
                            ? "active"
                            : " py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                        }
                      >
                        Search{" "}
                        <i class="fa fa-search text-black text-sm ml-3"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/events"
                        className={
                          pathname == "/events"
                            ? "active"
                            : " py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white  dark:hover:text-white md:dark:hover:bg-transparent"
                        }
                      >
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        className={
                          pathname == "/blogs"
                            ? "active"
                            : " py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white "
                        }
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about-us"
                        className={
                          pathname == "/about-us"
                            ? "active"
                            : " py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white "
                        }
                      >
                        About us
                      </Link>
                    </li>

                    <li>
                      {userData ? (
                        <>
                          <Link
                            onClick={logoutHandler}
                            to=""
                            className=" py-2 pl-3 pr-4 "
                          >
                            <button
                              type="button"
                              class="text-white uppercase bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-2 py-2 mr-2 mb-2 focus:outline-none py-2 px-4"
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
                  </ul>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-blue-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
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
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <ul className="navbar-link-items flex flex-col p-4 mt-2 bg-gray-50 md:flex-row md:space-x-12 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
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
                  </ul>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </div>
    </>
  );
}

export default Public_header;
