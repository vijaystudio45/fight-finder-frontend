import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { blogsacivelistAction } from "../Redux/Action/Admin-blog-action";
import { upcomingEventsAction } from "../Redux/Action/Events-new-action";
import { Link } from "react-router-dom";
import moment from "moment";
import AOS from "aos";
import "aos/dist/aos.css";

function Public_home() {
  const dispatch = useDispatch();

  // const { eventactivelist } = useSelector(
  //   (state) => state.eventactivelistReducer
  // );

  const { blogactivelist } = useSelector(
    (state) => state.blogactivelistReducer
  );

  const { upcomingEvents } = useSelector(
    (state) => state.upcomingEventsReducer
  );

  useEffect(() => {
    dispatch(upcomingEventsAction());
  }, []);

  useEffect(() => {
    dispatch(blogsacivelistAction({ status: true }));
  }, []);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <div className="main-center-page mb-12">
        <div
          className="Home-events-img relative "
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img className="w-100 w3-animate-right" src="/img/finder.jpg" />
          <div className="common-text-font-fam heading-contnet-fight  absolute ">
            <h4 className="fontsize56 uppercase  sm:text-3xl  md:text-5xl lg:text-7xl">
              The Fight Finder
            </h4>
          </div>
        </div>
        <div className=" container fighting-imges">
          <div className="image-text-contnet">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
              <div className="common-text-font-fam register-div text-white ">
                <h3
                  className="fontsize38 uppercase sm:text-3xl md:text-4xl "
                  data-aos="zoom-in-right"
                >
                  Tournaments Near You
                </h3>
                {upcomingEvents?.length > 0 ? (
                  <>
                    {upcomingEvents?.slice?.(0, 4)?.map((item) => {
                      if (item.events) {
                        return (
                          <>
                            <Link
                              to={`/event-details/${item.events?.id}/events`}
                              className=""
                              data-aos="zoom-in-right"
                            >
                              <div className="box-div bg-blue-800 py-8 pb-5 px-3 my-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 hover:bg-blue-500 duration-300 hover:text-white  w3-animate-zoom ease-in">
                                <div className="first_contnet">
                                  <p className="float-right text-md font-semibold">
                                    #Room 208
                                  </p>
                                </div>
                                <div className="second-contemt">
                                  <p className="text-bold text-xl font-semibold uppercase">
                                    {item.events?.title}
                                  </p>
                                </div>
                                <div className="third-contnet">
                                  <p className="text-bold text-md font-bold">
                                    {item.events?.start_date} :{" "}
                                    {item.events?.end_date}
                                  </p>
                                </div>
                                <div className="fourth-contnet-font-fam">
                                  <p className="event-description-cont md:text-sm sm:text-xs font-normal mt-3">
                                    {item.events?.description?.length > 300
                                      ? item.events?.description?.slice(
                                          0,
                                          300
                                        ) + "..."
                                      : item.events?.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </>
                        );
                      }
                      if (item.schoolgym) {
                        return (
                          <>
                            <Link
                              to={`/event-details/${item.schoolgym?.id}/schoolgym`}
                              className=""
                              data-aos="zoom-in-right"
                            >
                              <div className="box-div bg-blue-800 py-8 pb-5 px-3 my-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 hover:bg-blue-500 duration-300 hover:text-white  w3-animate-zoom ease-in">
                                <div className="first_contnet">
                                  <p className="float-right text-md font-semibold">
                                    #Room 208
                                  </p>
                                </div>
                                <div className="second-contemt">
                                  <p className="text-bold text-xl font-semibold">
                                    {item.schoolgym?.title}
                                    {/* {item.title.slice(0, 90) + "..."} */}
                                  </p>
                                </div>
                                {/* <div className="third-contnet">
                                  <p className="text-bold text-md font-bold">
                                    {item.schoolgym?.start_date} :{" "}
                                    {item.schoolgym?.end_date}
                                  </p>
                                </div> */}
                                <div className="fourth-contnet">
                                  <p className="event-description-cont text-sm font-normal mt-3">
                                    {item.schoolgym?.introduction?.length > 20
                                      ? item.schoolgym?.introduction?.slice(
                                          0,
                                          20
                                        ) + "..."
                                      : item.schoolgym?.introduction}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </>
                        );
                      }
                      if (item.seminarnformation) {
                        return (
                          <>
                            <Link
                              to={`/event-details/${item.seminarnformation?.id}/seminar`}
                              className=""
                              data-aos="zoom-in-right"
                            >
                              <div className="box-div bg-blue-800 py-8 pb-5 px-3 my-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 hover:bg-blue-500 duration-300 hover:text-white  w3-animate-zoom ease-in">
                                <div className="first_contnet">
                                  <p className="float-right text-md font-semibold">
                                    #Room 208
                                  </p>
                                </div>
                                <div className="second-contemt pt-2">
                                  <p className="text-bold text-xl font-semibold">
                                    {item.seminarnformation?.title}
                                    {/* {item.title.slice(0, 90) + "..."} */}
                                  </p>
                                </div>
                                <div className="third-contnet">
                                  <p className="text-bold text-md font-bold">
                                    {item.seminarnformation?.start_date} :{" "}
                                    {item.seminarnformation?.end_date}
                                  </p>
                                </div>
                                <div className="fourth-contnet">
                                  <p className="event-description-cont text-sm font-normal mt-3">
                                    {item.seminarnformation?.details?.slice(
                                      0,
                                      150
                                    ) + "..."}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </>
                        );
                      }
                    })}
                  </>
                ) : (
                  <div className="not-found-data-tour text-black  sm:text-3xl md:text-4xl ">
                    No Tournaments Found
                  </div>
                )}

                <div className="footer-list-item see-btn-group pt-3 text-center">
                  <Link to="/events">
                    <button type="button" class="viewbtn">
                      view more
                    </button>
                  </Link>
                </div>
              </div>
              <div className="img-main-div ">
                <h3
                  className="fontsize38 uppercase  sm:text-3xl md:text-4xl "
                  data-aos="zoom-in-left"
                >
                  Our Blogs
                </h3>
                {/* {blogactivelist?.lenght > 0 ? ( */}
                <>
                  {blogactivelist?.slice(0, 2).map((item) => (
                    <>
                      <Link
                        to={`/blog-details/${item.id}`}
                        className="common-text-font-fam  hover:text-white"
                        data-aos="zoom-in-left"
                      >
                        <div className="Home-events-img-contnet relative mt-4 w3-animate-zoom transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 ">
                          {item?.image ? (
                            <>
                              <img
                                className="events-side-images"
                                src={item?.image}
                              />
                            </>
                          ) : (
                            <>
                              <img
                                className="object-cover w-3/12 shadow-sm h-60 block"
                                src="/img/hf-classifieds_no-image-available_2.jpg"
                              />
                            </>
                          )}
                          <div className="container absolute bottom-1 eventsbak">
                            <div className="fighter-name  ">
                              <span className="font-normal text-sm font-sans text-white">
                                {/* {moment(item.modified).format("MMMM Do YYYY, h:mm:ss a")} */}

                                {moment(item.modified).format("llll")}
                              </span>
                            </div>
                            <h4 className="text-white text-3xl  font-bold uppercase ">
                              {item?.title}
                              {/* {item?.title.slice(0, 50)} */}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    </>
                  ))}
                </>
                {/* {blogactivelist?.lenght < 0 && ( */}
                <>
                  <div className="footer-list-item see-btn-group pt-10 text-center">
                    <Link to="/blogs">
                      <button type="button" class="viewbtn">
                        view more
                      </button>
                    </Link>
                  </div>
                </>
                {/* )} */}

                {/* ) : (
                  <div className="not-found-data-tour text-black text-2xl">
                  No Blogs Found
                </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Public_home;
