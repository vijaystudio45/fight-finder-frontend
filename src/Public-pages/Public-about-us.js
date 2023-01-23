import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { allpagesDatagetAction } from "../Redux/Action/Admin-about-action";
import parse from "html-react-parser";
import AOS from "aos";
import "aos/dist/aos.css";

function Public_about_us() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { alldataGet } = useSelector((state) => state.allDataGetReducer);

  useEffect(() => {
    dispatch(allpagesDatagetAction("about"));
  }, []);

  // console.log("compo------------",alldataGet)

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <div className="about-us-main mt-28">
        <div className="Home-events-img11 Publiceventde">
          <div className="welcome-event-home">
            <h4 className="pagetitleall">About us</h4>

            <h4 className="our-blogs-contnet text-white text-xl font-semibold">
              <Link to="/" className="hover:text-blue-700">
                Home
              </Link>
              <span className="mx-2">/</span>About
            </h4>
          </div>
        </div>

        {/* <div className="py-10 " data-aos="fade-down">
        <div className="container m-auto text-center px-6 opacity-100">
          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent transition-all">
            ABOUT OUR STORY
          </button>
        </div>
      </div> */}
        <div className="aboutpage">
          <div className="container">
            <div className=" mx-auto px-6 p-2 mt-10">
              <div className="flex items-center flex-wrap mb-10">
                <div className="w-full md:w-1/2 pr-10" data-aos="fade-right">
                  <h4 className="text-3xl text-gray-800 font-bold mb-3">
                    <>
                      {alldataGet?.map((e) => (
                        <>{/* <p>{parse(e.contant)}</p> */}</>
                      ))}
                    </>
                  </h4>
                  <p className="text-gray-600 mb-8">
                    Their primary target will be the power generators. Prepare
                    to open the shield. Sir, Rebel ships are coming into our
                    sector. Good. Our first catch of the day. Stand by, ion
                    control....Fire! The first transport is away.
                  </p>
                </div>
                <div className="w-full md:w-1/2" data-aos="fade-left">
                  <img
                    className="rounded-lg"
                    src="/img/mixed-martial-artist-posing-boxing-ring-concept-mma-ufc.webp"
                    alt="Vortex"
                  />
                </div>
              </div>
              <div className="flex items-center flex-wrap mb-10">
                <div className="w-full md:w-1/2" data-aos="fade-right">
                  <img
                    className="rounded-lg"
                    src="/img/mma-hd-wallpaper-preview.jpg"
                    alt="use the force"
                  />
                </div>
                <div className="w-full md:w-1/2 pl-10" data-aos="fade-left">
                  <h4 className="text-3xl text-gray-800 font-bold mb-3">
                    OUR SUCCESS
                  </h4>
                  <p className="text-gray-600 mb-8">
                    We'll never get it out now. So certain are you. Always with
                    you it cannot be done. Hear you nothing that I say? Master,
                    moving stones around is one thing. This is totally
                    different. No! No different!
                  </p>
                </div>
              </div>
              <div className="flex items-center flex-wrap mb-10">
                <div className="w-full md:w-1/2 pr-10" data-aos="fade-right">
                  <h4 className="text-3xl text-gray-800 font-bold mb-3">
                    FRIENDLY WEBSITE
                  </h4>
                  <p className="text-gray-600 mb-8">
                    There is no try. I can't. It's too big. Size matters not.
                    Look at me. Judge me by my size, do you? Hm? Mmmm. And well
                    you should not. For my ally in the Force. And a powerful
                    ally it is.
                  </p>
                </div>
                <div className="w-full md:w-1/2" data-aos="fade-left">
                  <img
                    className="rounded-lg"
                    src="/img/mma-fight-ground-wallpaper-preview.jpg"
                    alt="Syncing"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bakground">
          <div className="container mx-auto px-6 py-15">
            <h2 className="titleourpage">OUR PAGES</h2>
            <div className="flex flex-wrap aboutpage">
              <div
                className="w-full h-auto md:w-1/3 px-2 mb-4"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <div className="flex flex-col justify-between h-full bg-white rounded shadow py-6">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    How are you feeling, kid? You don't look so bad to me. In
                    fact, you look strong enough to pull the ears off a Gundark.
                    Thanks to you.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    Fight Finder{" "}
                  </p>
                </div>
              </div>

              <div
                className="w-full h-auto md:w-1/3 px-2 mb-4"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <div className="flex flex-col justify-between h-full bg-white rounded shadow py-6">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    That's two you owe me, junior. Well your Worship, looks like
                    you managed to keep me around for a little while longer. I
                    had nothing to do with it.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    Fight Finder
                  </p>
                </div>
              </div>

              <div
                className="w-full h-auto md:w-1/3 px-2 mb-4"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <div className="flex flex-col justify-between h-full bg-white rounded shadow py-6">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    General Rieekan thinks it's dangerous for any ships to leave
                    the system until we've activated the energy shield. That's a
                    good story. I think you just can't bear to let a gorgeous
                    guy like me out of your sight
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    Fight Finder
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

export default Public_about_us;
