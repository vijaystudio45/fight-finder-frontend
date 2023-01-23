import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { eventsacivelistAction } from "../Redux/Action/Admin-blog-action";
import { upcomingEventsAction } from "../Redux/Action/Events-new-action";
import Public_home from "./Public-home";
import { Link } from "react-router-dom";
import moment from "moment";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BACKEND_URL } from "../environment";

function Public_dasboard() {
  const dispatch = useDispatch();

  const { upcomingEvents } = useSelector(
    (state) => state.upcomingEventsReducer
  );

  useEffect(() => {
    dispatch(upcomingEventsAction());
  }, []);

  // useEffect(() => {
  //   dispatch(eventsacivelistAction({ status: true }));
  // }, []);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const [myVar, setMyVar] = useState("Event");

  return (
    <>
      <div className="home-page-contnet mt-28 ">
        <div className="Home-events-img-dasboard relative ">
          <img
            className="w-100 h-auto animate__animated "
            src="/img/red handed (3).jpg"
          />
          <div className="common-text-font-fam adam-fighfinder-contnet container absolute md:top-1/3 md:left-64 w-3/6">
            <div className="fighter-name">
              <span className="font-normal  text-white md:text-3xl sm:text-xl">
                Usman
              </span>
              <span className="mx-2 font-normal text-white md:text-3xl sm:text-xl">
                VS.
              </span>
              <span className="font-normal text-white md:text-3xl sm:text-xl">
                Adam
              </span>
            </div>
            <h1 className="text-white sm:text-xl md:text-7xl font-bold  ">
              Euro for Euro{" "}
            </h1>
            <h4 className="kamaru-usman-contnet text-white md:text-3xl sm:text-xl font-normal">
              kamaru usman defends his spot and win the fight
            </h4>
            <div className="see-btn-group mt-2">
              <button
                type="button"
                class="achivements_button md:text-xl sm:text-md "
              >
                see Achievements
              </button>
            </div>
          </div>
        </div>
        <div className="common-text-font-fam upcoming-contnet">
          <h1 className="titelhome uppercase">Upcoming Events</h1>

          <div className="grid grid-cols-3 gap-4 upcoming_contnet flex font-bold text-sm py-2 ml-8 ">
            <div className="first-brn text-center">
              <button
                onClick={() => {
                  setMyVar("Event");
                }}
                className={
                  myVar == "Event"
                    ? "upcoming_past active1 border-b-2 border-indigo-500 text-3xl outline-none"
                    : "upcoming_past  text-3xl outline-none"
                }
              >
                Events
              </button>
            </div>
            <div className="second-brn text-center">
              <button
                onClick={() => {
                  setMyVar("Past");
                }}
                className={
                  myVar == "Past"
                    ? "upcoming_past ml-3 border-b-2 border-indigo-500  text-3xl outline-none"
                    : "upcoming_past ml-3  active1  text-3xl outline-none"
                }
              >
                School/Gym
              </button>
            </div>
            <div className="second-brn text-center">
              <button
                onClick={() => {
                  setMyVar("semi");
                }}
                className={
                  myVar == "semi"
                    ? "upcoming_past ml-3 border-b-2 border-indigo-500  text-3xl outline-none"
                    : "upcoming_past ml-3  active1  text-3xl outline-none"
                }
              >
                Seminar
              </button>
            </div>
          </div>
        </div>
        <div className="container fighting-imges ">
          <div className=" tournament-main my-4 flex">
            {myVar == "Event" ? (
              <>
                {upcomingEvents?.length > 0 ? (
                  <>
                    <div
                      // data-aos="zoom-in-down"
                      // data-aos-duration="1000"
                      className="fighter-image-groups grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    >
                      {upcomingEvents?.filter((item) => item.events)?.length >
                      0 ? (
                        <>
                          {" "}
                          {upcomingEvents
                            ?.filter((item) => item.events)
                            ?.slice(0, 8)
                            ?.map((item) => {
                              if (item.events) {
                                return (
                                  <>
                                    <div className="Home-events-actives relative w3-animate-zoom">
                                      <Link
                                        to={`/event-details/${item.events?.id}/events`}
                                        className="hover:text-white"
                                      >
                                        {item?.events?.image ? (
                                          <div className="fighter-images-events1">
                                            <img
                                              className="transition-transform	"
                                              src={item?.events?.image}
                                            />
                                          </div>
                                        ) : (
                                          <>
                                            <img
                                              class="object-cover w-3/12 shadow-sm h-60 block"
                                              src="/img/hf-classifieds_no-image-available_2.jpg"
                                            />
                                          </>
                                        )}

                                        <div className="container absolute bottom-1 eventsbak">
                                          <div className="fighter-name  ">
                                            <span className=".common-text-font-fam font-normal text-sm font-sans text-white uppercase">
                                              {moment(
                                                item.events?.start_date
                                              ).format("llll")}
                                            </span>
                                          </div>
                                          <h4 className="common-text-font-fam hover:text-blue-700 text-white md:text-3xl sm:text-sm font-bold uppercase">
                                            {item?.events?.title}
                                          </h4>
                                        </div>
                                      </Link>
                                    </div>
                                  </>
                                );
                              }
                            })}
                        </>
                      ) : (
                        <div className="not-fount-data_content text-center">
                          No Events Found
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="not-fount-data_content text-center"></div>
                )}
              </>
            ) : myVar == "Past" ? (
              <>
                {upcomingEvents?.length > 0 ? (
                  <>
                    <div
                      // data-aos="zoom-in-down"
                      // data-aos-duration="1000"
                      className="fighter-image-groups grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    >
                      {upcomingEvents?.filter((item) => item.schoolgym)
                        ?.length > 0 ? (
                        <>
                          {upcomingEvents
                            ?.filter((item) => item.schoolgym)
                            ?.slice(0, 8)
                            ?.map((item) => {
                              if (item.schoolgym) {
                                return (
                                  <>
                                    <div className="Home-events-actives relative w3-animate-zoom">
                                      <Link
                                        to={`/event-details/${item.schoolgym?.id}/schoolgym`}
                                        className="hover:text-white"
                                      >
                                        {item?.schoolgym?.image ? (
                                          <div className="fighter-images-events1">
                                            <img
                                              className="transition-transform	"
                                              src={item?.schoolgym?.image}
                                            />
                                          </div>
                                        ) : (
                                          <>
                                            <img
                                              class="object-cover w-3/12 shadow-sm h-60 block"
                                              src="/img/hf-classifieds_no-image-available_2.jpg"
                                            />
                                          </>
                                        )}

                                        <div className="container absolute bottom-1 eventsbak">
                                          <div className="fighter-name  ">
                                            <span className=".common-text-font-fam font-normal text-sm font-sans text-white uppercase">
                                              {moment(
                                                item.schoolgym?.start_date
                                              ).format("llll")}
                                            </span>
                                          </div>
                                          <h4 className="common-text-font-fam hover:text-blue-700 text-white md:text-3xl sm:text-sm font-bold uppercase">
                                            {item?.schoolgym?.title}
                                          </h4>
                                        </div>
                                      </Link>
                                    </div>
                                  </>
                                );
                              }
                            })}{" "}
                        </>
                      ) : (
                        <>
                          <div className="not-fount-data_content text-center">
                            No School/Gym Found
                          </div>
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="not-fount-data_content text-center"></div>
                )}
              </>
            ) : (
              myVar == "semi" && (
                <>
                  {upcomingEvents?.length > 0 ? (
                    <>
                      {upcomingEvents?.filter((item) => item.seminarnformation)
                        ?.length > 0 ? (
                        <>
                          {upcomingEvents
                            ?.filter((item) => item.seminarnformation)
                            ?.slice(0, 8)
                            ?.map((item) => {
                              if (item.seminarnformation) {
                                return (
                                  <>
                                    <div className="fighter-image-groups grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                      <div className="Home-events-actives relative w3-animate-zoom">
                                        <Link
                                          to={`/event-details/${item.seminarnformation?.id}/seminar`}
                                          className="hover:text-white"
                                        >
                                          {item?.seminarnformation?.image ? (
                                            <div className="fighter-images-events1">
                                              <img
                                                className="transition-transform	"
                                                src={
                                                  item?.seminarnformation?.image
                                                }
                                              />
                                            </div>
                                          ) : (
                                            <>
                                              <img
                                                class="object-cover w-3/12 shadow-sm h-60 block"
                                                src="/img/hf-classifieds_no-image-available_2.jpg"
                                              />
                                            </>
                                          )}

                                          <div className="container absolute bottom-1 eventsbak">
                                            <div className="fighter-name  ">
                                              <span className=".common-text-font-fam font-normal text-sm font-sans text-white uppercase">
                                                {moment(
                                                  item.seminarnformation
                                                    ?.start_date
                                                ).format("llll")}
                                              </span>
                                            </div>
                                            <h4 className="common-text-font-fam hover:text-blue-700 text-white md:text-3xl sm:text-sm font-bold uppercase">
                                              {item?.seminarnformation?.title}
                                            </h4>
                                          </div>
                                        </Link>
                                      </div>
                                    </div>
                                  </>
                                );
                              }
                            })}
                        </>
                      ) : (
                        <>
                          <div className="not-fount-data_content text-center">
                            No Seminar Found
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="not-fount-data_content text-center">
                      No Seminar Found
                    </div>
                  )}
                </>
              )
            )}
          </div>

          {/* {neweventpost?.length < 0 && ( */}
          <>
            <div className="footer-list-item see-btn-group py-10 text-center">
              <Link to="/events">
                <button
                  type="button"
                  class="achivements_button"
                  data-aos="zoom-out-left"
                >
                  View More
                </button>
              </Link>
            </div>
          </>
          {/* )} */}
        </div>
        <Public_home />
      </div>
    </>
  );
}

export default Public_dasboard;
