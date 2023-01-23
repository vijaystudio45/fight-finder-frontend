import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location;

  const { userData } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (!userData) {
      navigate("/login");
    }
  }, []);

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
      <aside
        id="sidebar"
        className="terms-privacy-fight hidden z-20 h-full top-0 left-0 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
        aria-label="Sidebar"
      >
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
          <div className="flex-1 flex flex-col  overflow-y-auto">
            <div className="flex-1 px-3 bg-white divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                <li>
                  <form action="#" className="lg:hidden">
                    <label for="mobile-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="email"
                        id="mobile-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                </li>
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
        </div>
      </aside>
      <div
        className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
        id="sidebarBackdrop"
      ></div>
    </>
  );
}

export default Sidebar;
