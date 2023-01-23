import React, { useState, useEffect } from "react";
import {
  blogdetailsAction,
  blogsacivelistAction,
} from "../Redux/Action/Admin-blog-action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";

function Public_blogs_details() {
  const dispatch = useDispatch();
  const { blogdetailId } = useParams();

  const { blogdetailslist } = useSelector(
    (state) => state.bloguserdetalsReducer
  );

  useEffect(() => {
    dispatch(blogdetailsAction(blogdetailId));
  }, []);

  const { blogactivelist } = useSelector(
    (state) => state.blogactivelistReducer
  );

  useEffect(() => {
    dispatch(blogsacivelistAction({ status: true }));
  }, []);

  const [blogid, setBlogId] = useState("");

  useEffect(() => {
    setBlogId(blogactivelist?.id);
  }, []);

  return (
    <>
      <div className="mt-28">
        <div className="Home-events-img11 Publiceventde">
          <div className="welcome-event-home">
            <h4 className="pagetitleall">{blogdetailslist?.title}</h4>

            <h4 className="our-blogs-contnet text-white text-xl font-semibold">
              <Link to="/" className="hover:text-blue-700">
                Home
              </Link>
              <span className="mx-2">/</span>
              {blogdetailslist?.title}
            </h4>
          </div>
        </div>
        <div className="blogdetailepage">
          <div className="container">
            <div className=" px-10 mt-12 mb-12 mx-auto">
              <div className="event-dataimg  mx-auto border p-3">
                {blogdetailslist?.image ? (
                  <>
                    <img
                      className="object-cover sm:w-full md:w-3/12 shadow-sm h-60 block"
                      src={blogdetailslist?.image}
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
                    <h1 className="blogtitledetails">
                      {blogdetailslist?.title}
                    </h1>
                    <div className="flex items-center justify-start mt-2 mb-2">
                      <h1 className="blog-title11 datedetailssec">
                        {moment(blogdetailslist?.modified).format("llll")}
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
                    {blogdetailslist?.description}
                  </p>
                </div>
              </div>
              <div className="related-blogs-contnet">
                <h1 className="common-text-font-fam blog-title11 sm:text-xl md:text-2xl lg:text-4xl uppercase  font-bold text-blue-800  text-blue-500 text-center py-4">
                  Related Blogs
                </h1>
                {blogactivelist?.length > 0 ? (
                  <>
                    <div className="flex grid grid-cols-12 gap-10">
                      <>
                        <div className="grid grid-cols-12 col-span-12 gap-7 mb-10">
                          {blogactivelist?.slice(0, 4).map((item) => (
                            <>
                              {item?.id != blogdetailId && (
                                <>
                                  <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm  md:col-span-6 lg:col-span-4">
                                    <Link
                                      target="/blog-details/${item.id}"
                                      to={`/blog-details/${item.id}`}
                                    >
                                      <div className="eventimg-contnet">
                                        {item?.image ? (
                                          <>
                                            <img
                                              className="object-cover w-full shadow-sm"
                                              src={item?.image}
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
                                            {item?.title?.length > 30
                                              ? item?.title?.slice(0, 30) +
                                                "..."
                                              : item?.title}
                                          </span>
                                        </div>
                                        <p className="leading-relaxed11 text-base text-gray-500  sm:text-md md:text-md">
                                       
                                          {item?.description?.length > 100
                                              ? item?.description?.slice(0, 100) +
                                                "..."
                                              : item?.description}
                                        </p>
                                      </div>
                                    </Link>
                                  </div>
                                </>
                              )}
                            </>
                          ))}
                        </div>
                      </>
                    </div>
                  </>
                ) : (
                  <>
                    <h1 className="empty-data">No Blogs Found</h1>
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

export default Public_blogs_details;
