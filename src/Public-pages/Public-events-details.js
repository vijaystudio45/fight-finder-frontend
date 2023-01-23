import React, { useState, useEffect } from "react";
import {
  eventsdetailsAction,
  eventsacivelistAction,
} from "../Redux/Action/Admin-blog-action";
import {
  eventDetailsAction,
  getEventsList,
} from "../Redux/Action/Events-new-action";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import moment from "moment";

function Public_events_details() {
  const dispatch = useDispatch();
  const { eventdetailId, eventType } = useParams();

  const { eventDetails } = useSelector((state) => state.eventDetailsReducer);

  const { eventsList, success } = useSelector(
    (state) => state.getEventsListReducer
  );

  useEffect(() => {
    if (eventType === "seminar") {
      dispatch(eventDetailsAction(eventdetailId, "seminarnformation"));
    } else {
      dispatch(eventDetailsAction(eventdetailId, eventType));
    }
    dispatch(getEventsList());
  }, []);

  // const { eventactivelist } = useSelector(
  //   (state) => state.eventactivelistReducer
  // );

  // useEffect(() => {
  //   dispatch(eventsacivelistAction({ status: true }));
  // }, []);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <div className="mt-28">
        <div className="Home-events-img11 Publiceventde">
          <div className="welcome-event-home">
            <h4 className="pagetitleall">{eventDetails?.title}</h4>

            <h4 className="our-blogs-contnet text-white text-xl font-semibold">
              <Link to="/" className="hover:text-blue-700">
                Home
              </Link>
              <span className="mx-2">/</span>
              {eventDetails?.title}
            </h4>
          </div>
        </div>
        <div className="blogdetailepage">
          <div className="container">
            <div className=" px-10 mt-12 mb-12 mx-auto">
              <div className="event-dataimg  mx-auto border p-3">
                <div class="flex flex-col mb-6">
                  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="overflow-hidden">
                        <table class="min-w-full">
                          <thead class="common-text-font-fam bg-white border-b">
                            <tr>
                              <th
                                scope="col"
                                class="text-xl font-bold text-gray-900 px-6 py-4 text-left"
                              >
                                Time
                              </th>
                              <th
                                scope="col"
                                class="text-xl font-bold text-gray-900 px-6 py-4 text-left"
                              >
                                Zip code
                              </th>

                              <th
                                scope="col"
                                class="text-xl font-bold text-gray-900 px-6 py-4 text-left"
                              >
                                Country
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td class="text-lg text-gray-500 font-medium px-6 py-4 whitespace-nowrap">
                                {eventDetails?.time}
                              </td>
                              <td class="text-lg text-gray-500 font-medium px-6 py-4 whitespace-nowrap">
                                {eventDetails?.zip_code ? (
                                  <>{eventDetails?.zip_code}</>
                                ) : (
                                  <>N/A</>
                                )}
                              </td>

                              <td class="px-6 py-4 whitespace-nowrap text-lg text-gray-500 font-medium">
                                {" "}
                                {eventDetails?.country}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {eventDetails?.image ? (
                  <>
                    <img
                      className="object-cover sm:w-full md:w-3/12 shadow-sm h-60 block"
                      src={eventDetails?.image}
                    />
                  </>
                ) : (
                  <>
                    <img
                      className="event-image-detail object-cover sm:w-full md:w-3/12 shadow-sm h-60 block "
                      src="/img/hf-classifieds_no-image-available_2.jpg"
                    />
                  </>
                )}
                <div className="eventtext">
                  <div className="common-text-font-fam px-8">
                    <h1 className="blogtitledetails">{eventDetails?.title}</h1>
                    <div className="flex items-center justify-start mt-2 mb-2">
                      <h1 className="blog-title11 datedetailssec">
                        {moment(eventDetails?.modified).format("llll")}
                      </h1>
                    </div>
                    <div className="text-xl text-gray-700 mt-4 rounded ">
                      <div></div>
                    </div>
                  </div>
                  <p
                    className="leading-relaxed11 desc-contnet  mt-2 text-sm"
                    style={{ whiteSpace: "break-spaces" }}
                  >
                    {eventDetails?.details
                      ? eventDetails?.details
                      : eventDetails?.introduction
                      ? eventDetails?.introduction
                      : eventDetails?.description
                      ? eventDetails?.description
                      : "N/A"}
                  </p>
                </div>

                <div className="org-div">
                  <div className="organizer-details">
                    <h1 className="common-text-font-fam text-blue-800 text-3xl font-bold mt-8 uppercase">
                      Organizer Details :
                    </h1>
                  </div>

                  <div class="flex flex-col mb-6">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full">
                            <thead class="common-text-font-fam bg-white border-b">
                              <tr>
                                <th
                                  scope="col"
                                  class="text-xl font-bold text-gray-900 px-6 py-4 text-left"
                                >
                                  First Name
                                </th>
                                <th
                                  scope="col"
                                  class="text-xl font-bold text-gray-900 px-6 py-4 text-left"
                                >
                                  Last Name
                                </th>
                                <th
                                  scope="col"
                                  class="text-xl font-bold text-gray-900 px-6 py-4 text-left"
                                >
                                  Email
                                </th>
                                <th
                                  scope="col"
                                  class="text-xl font-bold text-gray-900 px-6 py-4 text-left"
                                >
                                  Phone Number
                                </th>

                                <th
                                  scope="col"
                                  class="text-xl font-bold text-gray-900 px-6 py-4 text-left"
                                >
                                  Social Media Links
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="px-6 py-4 whitespace-nowrap text-lg text-gray-500 font-medium">
                                  {" "}
                                  {eventDetails?.organizer_first_name
                                    ? eventDetails?.organizer_first_name
                                    : eventDetails?.owner_first_name
                                    ? eventDetails?.owner_first_name
                                    : "N/A"}
                                </td>
                                <td class="text-lg text-gray-500 font-medium px-6 py-4 whitespace-nowrap">
                                  {eventDetails?.organizer_last_name
                                    ? eventDetails?.organizer_last_name
                                    : eventDetails?.owner_last_name
                                    ? eventDetails?.owner_last_name
                                    : "N/A"}
                                </td>
                                <td class="text-lg text-gray-500 font-medium px-6 py-4 whitespace-nowrap">
                                  {eventDetails?.organizer_email
                                    ? eventDetails?.organizer_email
                                    : eventDetails?.owner_email
                                    ? eventDetails?.owner_email
                                    : "N/A"}
                                </td>
                                <td class="text-lg text-gray-500 font-medium px-6 py-4 whitespace-nowrap">
                                  {eventDetails?.organizer_phone_number
                                    ? eventDetails?.organizer_phone_number
                                    : eventDetails?.owner_phone_number
                                    ? eventDetails?.owner_phone_number
                                    : "N/A"}
                                </td>

                                <td class="text-lg text-gray-500 font-medium px-6 py-4 whitespace-nowrap">
                                  {eventDetails?.organizer_social_media_links
                                    ? eventDetails?.organizer_social_media_links
                                    : eventDetails?.owner_social_media_links
                                    ? eventDetails?.owner_social_media_links
                                    : "N/A"}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="related-blogs-contnet">
                <div className="related-events-title">
                  <h1 className="common-text-font-fam blog-title11 sm:text-xl md:text-2xl lg:text-4xl uppercase  font-bold text-blue-800  text-blue-500 text-center py-4">
                    Related Events
                  </h1>
                </div>
                {eventsList?.length > 0 ? (
                  <>
                    <div className="grid grid-cols-12 col-span-12 gap-7 mb-10">
                      {eventsList?.slice(0, 3)?.map?.((item) => {
                        if (item.events) {
                          return (
                            <>
                              {item?.events?.id != eventdetailId && (
                                <>
                                  <div
                                    key={item?.events?.id}
                                    className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm  md:col-span-6 lg:col-span-4"
                                  >
                                    <Link
                                      target="/event-details/${item.id}"
                                      to={`/event-details/${item.events?.id}/events`}
                                    >
                                      <div className="eventimg-contnet">
                                        {item?.events?.image ? (
                                          <>
                                            <img
                                              className="object-cover w-full shadow-sm"
                                              src={item?.events?.image}
                                            />
                                          </>
                                        ) : (
                                          <>
                                            <img
                                              className="event-image-detail object-cover w-3/12 shadow-sm h-60 block "
                                              src="/img/hf-classifieds_no-image-available_2.jpg"
                                            />
                                          </>
                                        )}
                                      </div>
                                      <div className="grop-box-content relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7">
                                        <div className="commontext">
                                          <span>
                                            {item?.events?.title?.length > 30
                                              ? item?.events?.title?.slice(
                                                  0,
                                                  30
                                                ) + "..."
                                              : item?.events?.title}
                                          </span>
                                        </div>
                                        <p className="leading-relaxed11 text-base text-gray-500  sm:text-md md:text-md">
                                          {item?.events?.description?.length >
                                          100
                                            ? item?.events?.description?.slice(
                                                0,
                                                100
                                              ) + "..."
                                            : item?.events?.description}
                                        </p>
                                      </div>
                                    </Link>
                                  </div>
                                </>
                              )}
                            </>
                          );
                        }
                        if (item.schoolgym) {
                          return (
                            <>
                              {item?.schoolgym?.id != eventdetailId && (
                                <>
                                  {/* <div
                                    key={item?.schoolgym?.id}
                                    className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4"
                                  >
                                    <Link
                                      target="/event-details/${item.id}"
                                      to={`/event-details/${item.schoolgym?.id}/schoolgym`}
                                    >
                                      <div className="eventimg-contnet">
                                        {item?.schoolgym?.image ? (
                                          <>
                                            <img
                                              className="object-cover w-full shadow-sm"
                                              src={item?.schoolgym?.image}
                                            />
                                          </>
                                        ) : (
                                          <>
                                            <img
                                              className="event-image-detail object-cover w-3/12 shadow-sm h-60 block "
                                              src="/img/hf-classifieds_no-image-available_2.jpg"
                                            />
                                          </>
                                        )}
                                      </div>
                                      <div className="grop-box-content relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                                        <div className="bg-blue-600 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                                          <span>
                                            {item.schoolgym?.title?.slice(
                                              0,
                                              50
                                            )}
                                          </span>
                                        </div>
                                        <p className="text-base text-gray-500  sm:text-md md:text-md">
                                          {item.schoolgym?.description?.slice(
                                            0,
                                            100
                                          )}
                                        </p>
                                      </div>
                                    </Link>
                                  </div> */}

                                  <div
                                    key={item?.schoolgym?.id}
                                    className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm  md:col-span-6 lg:col-span-4"
                                  >
                                    <Link
                                      target="/event-details/${item.id}"
                                      to={`/event-details/${item.schoolgym?.id}/schoolgym`}
                                    >
                                      <div className="eventimg-contnet">
                                        {item?.schoolgym?.image ? (
                                          <>
                                            <img
                                              className="object-cover w-full shadow-sm"
                                              src={item?.schoolgym?.image}
                                            />
                                          </>
                                        ) : (
                                          <>
                                            <img
                                              className="event-image-detail object-cover w-3/12 shadow-sm h-60 block "
                                              src="/img/hf-classifieds_no-image-available_2.jpg"
                                            />
                                          </>
                                        )}
                                      </div>
                                      <div className="grop-box-content relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7">
                                        <div className="commontext">
                                          <span>
                                            {item.schoolgym?.title?.slice(
                                              0,
                                              50
                                            )}
                                          </span>
                                        </div>
                                        <p className="leading-relaxed11 text-base text-gray-500  sm:text-md md:text-md">
                                          {item.schoolgym?.introduction?.slice(
                                            0,
                                            100
                                          )}
                                        </p>
                                      </div>
                                    </Link>
                                  </div>
                                </>
                              )}
                            </>
                          );
                        }
                        if (item.seminarnformation) {
                          return (
                            <>
                              {item?.seminarnformation?.id != eventdetailId && (
                                <>
                                  {/* <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                    <Link
                                      target="/event-details/${item.id}"
                                      to={`/event-details/${item.seminarnformation?.id}/seminar`}
                                    >
                                      <div className="eventimg-contnet">
                                        {item?.seminarnformation?.image ? (
                                          <>
                                            <img
                                              className="object-cover w-full shadow-sm"
                                              src={
                                                item?.seminarnformation?.image
                                              }
                                            />
                                          </>
                                        ) : (
                                          <>
                                            <img
                                              className="event-image-detail object-cover w-3/12 shadow-sm h-60 block "
                                              src="/img/hf-classifieds_no-image-available_2.jpg"
                                            />
                                          </>
                                        )}
                                      </div>
                                      <div className="grop-box-content relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                                        <div className="bg-blue-600 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                                          <span>
                                            {item.seminarnformation?.title?.slice?.(
                                              0,
                                              50
                                            )}
                                          </span>
                                        </div>
                                        <p className="text-base text-gray-500  sm:text-md md:text-md">
                                          {item.seminarnformation?.description?.slice?.(
                                            0,
                                            100
                                          )}
                                        </p>
                                      </div>
                                    </Link>
                                  </div> */}
                                  <div
                                    key={item?.seminarnformation?.id}
                                    className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm  md:col-span-6 lg:col-span-4"
                                  >
                                    <Link
                                      target="/event-details/${item.id}"
                                      to={`/event-details/${item.seminarnformation?.id}/seminar`}
                                    >
                                      <div className="eventimg-contnet">
                                        {item?.seminarnformation?.image ? (
                                          <>
                                            <img
                                              className="object-cover w-full shadow-sm"
                                              src={
                                                item?.seminarnformation?.image
                                              }
                                            />
                                          </>
                                        ) : (
                                          <>
                                            <img
                                              className="event-image-detail object-cover w-3/12 shadow-sm h-60 block "
                                              src="/img/hf-classifieds_no-image-available_2.jpg"
                                            />
                                          </>
                                        )}
                                      </div>
                                      <div className="grop-box-content relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7">
                                        <div className="commontext">
                                          <span>
                                            {item.seminarnformation?.title?.slice(
                                              0,
                                              50
                                            )}
                                          </span>
                                        </div>
                                        <p className="leading-relaxed11 text-base text-gray-500  sm:text-md md:text-md">
                                          {item.seminarnformation?.details?.slice(
                                            0,
                                            100
                                          )}
                                        </p>
                                      </div>
                                    </Link>
                                  </div>
                                </>
                              )}
                            </>
                          );
                        }
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    <h1 className="empty-data">No Events Found</h1>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Public_events_details;
