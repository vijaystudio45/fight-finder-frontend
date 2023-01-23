import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { eventsacivelistAction } from "../Redux/Action/Admin-blog-action";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import moment from "moment";
import { upcomingeventAction } from "../Redux/Action/Events-new-action";

function Public_evnets() {
  const dispatch = useDispatch();

  const { eventactivelist } = useSelector(
    (state) => state.eventactivelistReducer
  );

  const { upcomingEvents: eventsList, success } = useSelector(
    (state) => state.upcomingEventsReducer
  );

  useEffect(() => {
    dispatch(upcomingeventAction());
  }, []);
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <div className="main-blog-div mt-28 ">
        <div className="Home-events-img11 Publiceventde">
          <div className="welcome-event-home">
            <h4 className="pagetitleall">Events</h4>

            <h4 className="our-blogs-contnet text-white text-xl font-semibold">
              <Link to="/" className="hover:text-blue-700">
                Home
              </Link>
              <span className="mx-2">/</span>Events
            </h4>
          </div>
        </div>
        <div className="blogpage1">
          <div className="container">
            <div className="blogs-map-action ">
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full">
                        <thead class="common-text-font-fam bg-white border-b">
                          <tr>
                            <th
                              scope="col"
                              class="text-2xl font-bold text-gray-900 px-6 py-4 text-left"
                            >
                              Title
                            </th>
                            <th
                              scope="col"
                              class="text-2xl font-bold text-gray-900 px-6 py-4 text-left"
                            >
                              Description
                            </th>
                            <th
                              scope="col"
                              class="text-2xl font-bold text-gray-900 px-6 py-4 text-left"
                            >
                              Start date
                            </th>
                            <th
                              scope="col"
                              class="text-2xl font-bold text-gray-900 px-6 py-4 text-left"
                            >
                              End Date
                            </th>
                          </tr>
                        </thead>

                        {eventsList?.length > 0 ? (
                          <>
                            <tbody>
                              {eventsList?.map((item) => {
                                if (item.events) {
                                  return (
                                    <>
                                      <tr class="terms-privacy-fight bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                                          <Link
                                            to={`/event-details/${item.events?.id}/events`}
                                          >
                                            {item?.events?.title?.length > 20
                                              ? item?.events?.title?.slice(
                                                  0,
                                                  20
                                                ) + "..."
                                              : item?.events?.title}
                                          </Link>
                                        </td>
                                        <td class="text-lg text-gray-500 font-medium  px-6 py-4 whitespace-nowrap">
                                          {item?.events?.description?.length >
                                          30
                                            ? item?.events?.description?.slice(
                                                0,
                                                30
                                              ) + "..."
                                            : item?.events?.description}
                                        </td>
                                        <td class="text-lg  text-gray-500 font-medium  px-6 py-4 whitespace-nowrap">
                                          {moment(
                                            item?.events?.start_date
                                          ).format("MMM DD, YYYY")}
                                        </td>
                                        <td class="text-lg  text-gray-500 font-medium  px-6 py-4 whitespace-nowrap">
                                          {moment(
                                            item?.events?.end_date
                                          ).format("MMM DD, YYYY")}
                                        </td>
                                        <td class="text-lg text-blue-800 font-medium  px-6 py-4 whitespace-nowrap">
                                          <Link
                                            to={`/event-details/${item.events?.id}/events`}
                                          >
                                            View Event
                                          </Link>
                                        </td>
                                      </tr>
                                    </>
                                  );
                                }
                                if (item.schoolgym) {
                                  return (
                                    <>
                                      <tr class="terms-privacy-fight bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                                          {item?.schoolgym?.title?.length > 20
                                            ? item?.schoolgym?.title?.slice(
                                                0,
                                                20
                                              ) + "..."
                                            : item?.schoolgym?.title}
                                        </td>
                                        <td class="text-lg   text-gray-500 font-medium  px-6 py-4 whitespace-nowrap">
                                          {item?.schoolgym?.introduction
                                            ?.length > 30
                                            ? item?.schoolgym?.introduction?.slice(
                                                0,
                                                30
                                              ) + "..."
                                            : item?.schoolgym?.introduction}
                                        </td>
                                        <td class="text-lg  text-gray-500 font-medium  px-6 py-4 whitespace-nowrap">
                                          {moment(
                                            item?.schoolgym?.start_date
                                          ).format("MMM DD, YYYY")}
                                        </td>
                                        <td class="text-lg  text-gray-500 font-medium  px-6 py-4 whitespace-nowrap">
                                          {moment(
                                            item?.schoolgym?.end_date
                                          ).format("MMM DD, YYYY")}
                                        </td>
                                        <td class="text-lg text-blue-800 font-medium  px-6 py-4 whitespace-nowrap">
                                          <Link
                                            to={`/event-details/${item.schoolgym?.id}/schoolgym`}
                                          >
                                            View Event
                                          </Link>
                                        </td>
                                      </tr>
                                    </>
                                  );
                                }
                                if (item.seminarnformation) {
                                  return (
                                    <>
                                      <tr class="terms-privacy-fight bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                                          {item?.seminarnformation?.title
                                            ?.length > 20
                                            ? item?.seminarnformation?.title?.slice(
                                                0,
                                                20
                                              ) + "..."
                                            : item?.seminarnformation?.title}
                                        </td>
                                        <td class="text-lg   text-gray-500 font-medium  px-6 py-4 whitespace-nowrap">
                                          {item?.seminarnformation?.details
                                            ?.length > 30
                                            ? item?.seminarnformation?.details?.slice(
                                                0,
                                                30
                                              ) + "..."
                                            : item?.seminarnformation?.details}
                                        </td>
                                        <td class="text-lg  text-gray-500 font-medium  px-6 py-4 whitespace-nowrap">
                                          {moment(
                                            item?.seminarnformation?.start_date
                                          ).format("MMM DD, YYYY")}
                                        </td>
                                        <td class="text-lg  text-gray-500 font-medium  px-6 py-4 whitespace-nowrap">
                                          {moment(
                                            item?.seminarnformation?.end_date
                                          ).format("MMM DD, YYYY")}
                                        </td>
                                        <td class="text-lg text-blue-800 font-medium  px-6 py-4 whitespace-nowrap">
                                          <Link
                                            to={`/event-details/${item.seminarnformation?.id}/seminar`}
                                          >
                                            View Event
                                          </Link>
                                        </td>
                                      </tr>
                                    </>
                                  );
                                }
                              })}
                            </tbody>
                          </>
                        ) : (
                          <td class="text-lg text-blue-800 font-normal px-6 py-4 whitespace-nowrap">
                            No Events Found
                          </td>
                        )}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Public_evnets;
