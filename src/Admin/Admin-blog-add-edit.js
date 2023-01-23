import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  blogsAction,
  blogdetails,
  blogupdateAction,
} from "../Redux/Action/Admin-blog-action";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import { validations } from "../utils";
import {Link} from "react-router-dom"

function Admin_blog_add_edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { blogId } = useParams();

  const { success: updatesucces, error: errorUpdate } = useSelector(
    (state) => state.blogPostReducer
  );

  const { blogsdeatls, success } = useSelector(
    (state) => state.blogdetailsReducer
  );

  const { success: update, error: ress } = useSelector(
    (state) => state.updateblogReducer
  );

  useEffect(() => {
    dispatch(blogdetails(blogId));
  }, []);


  const [render, setRender] = useState(false);
  const [render1, setRender1] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [image, setImage] = useState([]);
  const [prevImage, setPrevImage] = useState("");
  const [isRemoveImage, setIsRemoveImage] = useState(false);

  function uploadSingleFile(e) {
    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
    // setImage([...image, ...ImagesArray]);

    setImage([
      ...image,
      e.target.files[0],
      // ...ImagesArray.map((image) =>
      //   Object.assign(image, {
      //     preview: URL.createObjectURL(e.target.files),
      //     title: image.name,
      //   })
      // ),
    ]);
  }

  function deleteFile(e) {
    setIsRemoveImage(true);
    setPrevImage("");
    // const s = image.filter((item, index) => index !== e);
    // setImage(s);
  }
  // image

  useEffect(() => {
    if (blogsdeatls && blogId) {
      setTitle(blogsdeatls?.title);
      setDescription(blogsdeatls?.description);
      setStatus(blogsdeatls?.status);
      // setImage(blogsdeatls?.image);
      setPrevImage(blogsdeatls?.image);
    } else {
      setTitle("");
      setDescription("");
      setStatus("");
      setImage([]);
      setPrevImage("");
    }
  }, [success]);

  const [errors, setErrors] = useState({
    title: null,
    description: null,
  });

  const validateSubmit = (e) => {
    // e.preventDefault();
    const tempErrors = {
      title: validations.title(title),
      description: validations.description(description),
    };
    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      // console.log(
      //   "..values",
      //   Object.values(tempErrors).filter((value) => value)
      // );
      return;
    }
    postBlog();
  };

  const postBlog = async () => {
    const formData = new FormData();
    formData.append("title", title);
    // formData.append("image", image);
    formData.append("description", description);
    formData.append("status", status);

    if (isRemoveImage) {
      formData.append("remove_image", isRemoveImage);
    }
    if (image) {
      for (const key of Object.keys(image)) {
        formData.append("image", image[key]);
      }
    }

    if (status === true) {
      formData.append("status", true);
    } else {
      formData.append("status", false);
    }

    if (blogsdeatls?.id) {
      dispatch(blogupdateAction(blogId, formData));
    } else {
      dispatch(blogsAction(formData));
    }

    setRender(true);
    setRender1(true);
  };

  const submitStatus = () => {
    setStatus(!status);
  };

  useEffect(() => {
    if (update && render1) {
      swal({
        title: "Successfully Complete",
        text: "Blog Update Successfully ",
        className: "successAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 1500,
      });

      setTitle(" ");
      setDescription(" ");
      setStatus(" ");
      setImage("");
      setRender(false);
      navigate("/blogs-list");
    }
    if (ress && render1) {
      swal({
        title: "Error",
        text: ress,
        className: "errorAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 1500,
      });
      setRender1(false);
    }
  }, [dispatch, update, ress]);

  useEffect(() => {
    if (updatesucces && render) {
      swal({
        title: "Successfully Complete",
        text: "Blog Add Successfully ",
        className: "successAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 1500,
      });

      setRender(false);
      setTitle(" ");
      setDescription(" ");
      setStatus(" ");
      setImage("");
      navigate("/blogs-list");
    }
    if (errorUpdate && render) {
      swal({
        title: "Error",
        text: errorUpdate,
        className: "errorAlert",
        icon: "/img/warningg.png",
        buttons: false,
        timer: 1500,
      });
      setRender(false);
    }
  }, [dispatch, updatesucces, errorUpdate]);

  return (
    <>
      <div className=" w-full bg-blue-100 relative overflow-y-auto">
        <main>
          <div className="pt-6 px-4">
            <div className="xl:gap-4 my-4">
              <div className="common-text-font-fam heading-top">
                {blogsdeatls?.id ? (
                  <h3 className="text-black text-3xl font-bold font-medium mb-10">
                    Edit Blog
                  </h3>
                ) : (
                  <h3 className="text-black text-3xl font-bold font-medium ">
                    Add Blog
                  </h3>
                )}
              </div>
              <div className="terms-privacy-fight bg-white rounded-md mb-8 mt-3 p-4 sm:p-6">
                <div className=" justify-between mb-12 mt-12">
                  <div className="blog_add">
                    <section className=" dark:bg-gray-900">
                      <div className="blogs_forms w-full rounded-lg">
                        <div>
                          <div className="space-y-4 md:space-y-6">
                            <div
                              class={
                                errors.title ? "inputCntnr error" : "inputCntnr"
                              }
                            >
                              <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                  Title
                                </label>
                                <input
                                  value={title}
                                  onChange={(e) => {
                                    setTitle(e.target.value);
                                    setErrors({ ...title, title: null });
                                  }}
                                  type="blog"
                                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Add Blog title"
                                />
                                <span
                                  style={{
                                    color: "#D14F4F",
                                    float: "right",
                                    fontSize: "13px",
                                    opacity: errors.title ? 1 : 0,
                                  }}
                                >
                                  {errors.title ?? "valid"}
                                </span>
                              </div>
                            </div>

                            <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Image
                              </label>
                              <input
                                type="file"
                                className="form-control"
                                onChange={uploadSingleFile}
                              />

                              <div className="form-group preview  gap-3 mt-4">
                                {prevImage && (
                                  <>
                                    <div className="uplodeimgfiledev relative w-20">
                                      <img src={prevImage} width="100" />
                                      <div className="removeimgdevpage absolute top-0 right-0 mr-2">
                                        <button
                                          onClick={(e) => {
                                            deleteFile();
                                          }}
                                        >
                                          X
                                        </button>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>

                            <div
                              class={
                                errors.description
                                  ? "inputCntnr error"
                                  : "inputCntnr"
                              }
                            >
                              {" "}
                              <div>
                                <label
                                  htmlFor="message"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Descripition
                                </label>
                                <textarea
                                  value={description}
                                  onChange={(e) => {
                                    setErrors({
                                      ...description,
                                      description: null,
                                    });
                                    setDescription(e.target.value);
                                  }}
                                  rows="4"
                                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Write your descripition here..."
                                ></textarea>
                                <span
                                  style={{
                                    color: "#D14F4F",
                                    float: "right",
                                    fontSize: "13px",
                                    opacity: errors.description ? 1 : 0,
                                  }}
                                >
                                  {errors.description ?? "valid"}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    checked={status}
                                    onChange={submitStatus}
                                    type="checkbox"
                                    className="checkbox_satus w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label className="text-gray-500 dark:text-gray-300">
                                    Status
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="submit_cancel-btn grid sm:grid-cols-2 gap-4 ">
                              {blogsdeatls?.id ? (
                                <button
                                  onClick={() => {
                                    validateSubmit();
                                  }}
                                  type="submit"
                                  className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-100"
                                >
                                  Update
                                </button>
                              ) : (
                                <button
                                  onClick={() => {
                                    validateSubmit();
                                  }}
                                  type="submit"
                                  className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-100 "
                                >
                                  Submit
                                </button>
                              )}
                              <Link to="/blogs-list">

                              <button
                                type="submit"
                                className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-100"
                              >
                                Cancel
                              </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Admin_blog_add_edit;
