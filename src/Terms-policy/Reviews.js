import React from "react";
import { Link } from "react-router-dom";

function Reviews() {
  return (
    <>
      <div className="py-8 bg-blueGray-100 rounded-t-10xl overflow-hidden mt-20">
        <div className="Home-events-img11 Publiceventde">
          <div className="welcome-event-home">
            <h4 className="pagetitleall"> Reviews</h4>

            <h4 className="our-blogs-contnet text-white text-xl font-semibold">
              <Link to="/" className="hover:text-blue-700">
                Home
              </Link>
              <span className="mx-2">/</span> Reviews
            </h4>
          </div>
        </div>

        <div className="container px-4 mx-auto mt-20 ">
          {/* <div className="text-center">
          <Link
            className="common-text-font-fam inline-block mb-8 text-3xl font-heading font-bold text-center"
            to=""
          >
          All Reviews
          </Link>
          </div> */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8">
            <div className="mb-2 rounded-t-8xl rounded-b-5xl overflow-hidden border">
              <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
                <div className="items-center">
                  <img
                    className="mr-6"
                    src="uinel-assets/images/ecommerce-reviews/user.png"
                    alt=""
                  />
                  <h4 className="common-text-font-fam w-full md:w-auto text-xl font-heading font-bold ">
                    Miss Haven
                  </h4>
                  <div className=" ">
                    <p className="common-text-font-fam text-sm text-gray-400 py-2">
                      Added 1 months ago
                    </p>
                  </div>
                  <span className="mr-4 text-xl font-heading font-medium">
                    5.0
                  </span>
                  <div className="inline-flex">
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block text-gray-200" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-4 overflow-hidden md:px-16 bg-white">
                <div className="w-full mb-6 md:mb-0">
                  <p className="terms-privacy-fight mb-4 text-darkBlueGray-400 leading-loose">
                    I haretra neque non mi aliquam, finibus hart bibendum
                    molestie. Vestibulum suscipit sagittis dignissim mauris.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-2 rounded-t-8xl rounded-b-5xl overflow-hidden border">
              <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
                <div className="items-center">
                  <img
                    className="mr-6"
                    src="uinel-assets/images/ecommerce-reviews/user.png"
                    alt=""
                  />
                  <h4 className="common-text-font-fam w-full md:w-auto text-xl font-heading font-bold">
                    Faustina H. Fawn
                  </h4>
                  <div className=" ">
                    <p className="common-text-font-fam text-sm text-gray-400 py-2">
                      Added 2 months ago
                    </p>
                  </div>
                  <span className="mr-4 text-xl font-heading font-medium">
                    5.0
                  </span>
                  <div className="inline-flex">
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block text-gray-200" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-4 overflow-hidden md:px-16 bg-white">
                <div className="w-full mb-6 md:mb-0">
                  <p className="terms-privacy-fight mb-4 text-darkBlueGray-400 leading-loose">
                    I haretra neque non mi aliquam, finibus hart bibendum
                    molestie. Vestibulum suscipit sagittis dignissim mauris.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-2 rounded-t-8xl rounded-b-5xl overflow-hidden border">
              <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
                <div className="items-center">
                  <img
                    className="mr-6"
                    src="uinel-assets/images/ecommerce-reviews/user.png"
                    alt=""
                  />
                  <h4 className="common-text-font-fam w-full md:w-auto text-xl font-heading font-bold">
                    Mr. John
                  </h4>
                  <div className=" ">
                    <p className="common-text-font-fam text-sm text-gray-400 py-2">
                      Added 2 months ago
                    </p>
                  </div>
                  <span className="mr-4 text-xl font-heading font-medium">
                    5.0
                  </span>
                  <div className="inline-flex">
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block text-gray-200" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-4 overflow-hidden md:px-16 bg-white">
                <div className="w-full mb-6 md:mb-0">
                  <p className="terms-privacy-fight mb-4 text-darkBlueGray-400 leading-loose">
                    I haretra neque non mi aliquam, finibus hart bibendum
                    molestie. Vestibulum suscipit sagittis dignissim mauris.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-2 rounded-t-8xl rounded-b-5xl overflow-hidden border">
              <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
                <div className="items-center">
                  <img
                    className="mr-6"
                    src="uinel-assets/images/ecommerce-reviews/user.png"
                    alt=""
                  />
                  <h4 className="common-text-font-fam w-full md:w-auto text-xl font-heading font-bold">
                  Mr.  Adam 
                  </h4>
                  <div className=" ">
                    <p className="common-text-font-fam text-sm text-gray-400 py-2">
                      Added 2 months ago
                    </p>
                  </div>
                  <span className="mr-4 text-xl font-heading font-medium">
                    5.0
                  </span>
                  <div className="inline-flex">
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block text-gray-200" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-4 overflow-hidden md:px-16 bg-white">
                <div className="w-full mb-6 md:mb-0">
                  <p className="terms-privacy-fight mb-4 text-darkBlueGray-400 leading-loose">
                    I haretra neque non mi aliquam, finibus hart bibendum
                    molestie. Vestibulum suscipit sagittis dignissim mauris.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-2 rounded-t-8xl rounded-b-5xl overflow-hidden border">
              <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
                <div className="items-center">
                  <img
                    className="mr-6"
                    src="uinel-assets/images/ecommerce-reviews/user.png"
                    alt=""
                  />
                  <h4 className="common-text-font-fam w-full md:w-auto text-xl font-heading font-bold">
                    Mr. Fawn
                  </h4>
                  <div className=" ">
                    <p className="common-text-font-fam text-sm text-gray-400 py-2">
                      Added 4 months ago
                    </p>
                  </div>
                  <span className="mr-4 text-xl font-heading font-medium">
                    5.0
                  </span>
                  <div className="inline-flex">
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block text-gray-200" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-4 overflow-hidden md:px-16 bg-white">
                <div className="w-full mb-6 md:mb-0">
                  <p className="terms-privacy-fight mb-4 text-darkBlueGray-400 leading-loose">
                    I haretra neque non mi aliquam, finibus hart bibendum
                    molestie. Vestibulum suscipit sagittis dignissim mauris.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-2 rounded-t-8xl rounded-b-5xl overflow-hidden border">
              <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
                <div className="items-center">
                  <img
                    className="mr-6"
                    src="uinel-assets/images/ecommerce-reviews/user.png"
                    alt=""
                  />
                  <h4 className="common-text-font-fam w-full md:w-auto text-xl font-heading font-bold">
                   Miss. latina
                  </h4>
                  <div className=" ">
                    <p className="common-text-font-fam text-sm text-gray-400 py-2">
                      Added 2 months ago
                    </p>
                  </div>
                  <span className="mr-4 text-xl font-heading font-medium">
                    5.0
                  </span>
                  <div className="inline-flex">
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                    <a className="inline-block text-gray-200" href="#">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                          fill="#FFCB00"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-4 overflow-hidden md:px-16 bg-white">
                <div className="w-full mb-6 md:mb-0">
                  <p className="terms-privacy-fight mb-4 text-darkBlueGray-400 leading-loose">
                    I haretra neque non mi aliquam, finibus hart bibendum
                    molestie. Vestibulum suscipit sagittis dignissim mauris.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
