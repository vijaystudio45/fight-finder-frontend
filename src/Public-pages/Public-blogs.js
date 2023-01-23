import React, { useState, useEffect } from "react";
import { blogsacivelistAction } from "../Redux/Action/Admin-blog-action";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AOS from "aos";
import moment from "moment";

import "aos/dist/aos.css";
function Public_blogs() {
  const dispatch = useDispatch();

  const { blogactivelist } = useSelector(
    (state) => state.blogactivelistReducer
  );

  useEffect(() => {
    dispatch(blogsacivelistAction({ status: true }));
  }, []);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <div className="main-blog-div mt-28 ">
        <div className="Home-events-img11 Publiceventde">
          <div className="welcome-event-home">
            <h4 className="pagetitleall">Blogs</h4>

            <h4 className="our-blogs-contnet text-white text-xl font-semibold">
              <Link to="/" className="hover:text-blue-700">
                Home
              </Link>
              <span className="mx-2">/</span>Blogs
            </h4>
          </div>
        </div>
        <div className="blogpage1">
          <div className="container">
            <div className="blogs-map-action ">
              <div className="flex flex-wrap -m-4">
                {blogactivelist?.length > 0 ? (
                  <>
                   <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 gap-4">
                    {blogactivelist?.map((item) => (
                      <div
                        className="p-3 py-4 pt-0 sm:1/2"
                        data-aos="fade-up"
                      >
                        <div className="overflow-hidden">
                          <Link to={`/blog-details/${item.id}`}>
                            <img
                              className="sm:h-40  md:h-40 lg:h-60 w-full object-cover object-center"
                              src={item.image}
                              alt="blog"
                            />
                          </Link>
                          <div className=" py-6 border p-4  ">
                            <Link to={`/blog-details/${item.id}`}>
                              <h1 className="title-font-blogs mb-3 hover:text-blue-700">
                                {item?.title?.length > 20
                                  ? item?.title?.slice(0, 20) + "....."
                                  : item?.title}
                              </h1>
                            </Link>
                            <div class="post_meta">
                              <span class="post_meta_item post_categories">
                                <Link to={`/blog-details/${item.id}`}>
                                  <button class="blog-btn bg-blue-800  hover:bg-blue-700 text-white uppercase">
                                    blog
                                  </button>
                                </Link>
                              </span>
                              <span class="post_meta_item post_date text-blue-800">
                                <Link to={`/blog-details/${item.id}`}>
                                  {moment(item.modified).format("MMM DD, YYYY")}
                                </Link>
                              </span>
                            </div>
                            <p className="leading-relaxed11 mb-3">
                              {item?.description?.length > 100
                                ? item?.description?.slice(0, 100) + "....."
                                : item?.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>
                  </>
                ) : (
                  <div className="not-fount-data py-12">No Blogs Found</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Public_blogs;
