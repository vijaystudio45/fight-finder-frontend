import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { aboutAction } from "../Redux/Action/Admin-about-action";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { allpagesDatagetAction } from "../Redux/Action/Admin-about-action";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Admin_about_us() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState("");

  const { alldataGet, success: successAllDataGet } = useSelector(
    (state) => state.allDataGetReducer
  );

  useEffect(() => {
    dispatch(allpagesDatagetAction("about"));
  }, []);

  const { success, error } = useSelector((state) => state.aboutPostReducer);

  const validateSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("contant", data);
    formData.append("title", "about");
    formData.append("user", 1);

    dispatch(aboutAction(formData));
  };

  useEffect(() => {
    if (successAllDataGet) {
      if (alldataGet?.length > 0) {
        setData(alldataGet[0]?.contant);
      }
    }
  }, [successAllDataGet]);

  const API_URL = "https://noteyard-backend.herokuapp.com";
  const UPLOAD_ENDPOINT = "api/blogs/uploadImg";

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();

          loader.file.then((file) => {
            body.append("uploading", file);
            fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
              method: "post",
              body: body,
            }).then(
              ((res) => res.json())
                .then((res) => {
                  resolve({ default: `${API_URL}/${res.url}` });
                })
                .catch((err) => {
                  reject(err);
                })
            );
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <>
      <div className=" w-full bg-blue-100 relative overflow-y-auto">
        <main>
          <div className="pt-6 px-4">
            <div className="xl:gap-4 my-4">
            <div className="common-text-font-fam heading-top">
                <h3 className="text-black text-3xl font-bold font-medium mb-10">
                 About us
                </h3>
              </div>
              <div className="bg-white">
                <div className=" justify-between mb-12 mt-12">
                  <CKEditor
                    config={{ extraPlugins: [uploadPlugin] }}
                    data={data}
                    editor={ClassicEditor}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setData(data);
                    }}
                  />
                </div>
              </div>
              <div className="submit_cancel-btn grid sm:grid-cols-2 gap-4 w-1/2 ">
                <button
                  type="submit"
                  onClick={(e) => {
                    validateSubmit(e);
                  }}
                  className="text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-100"
                >
                  Submit
                </button>

                <Link to="/home">
                  <button
                    type="submit"
                    className="text-blue-800 bg-blue-white border-2 border-blue-800 border-rose-600  focus:ring-4 focus:outline-none  font-bold rounded-lg text-sm px-5 py-2.5 text-center  w-100"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
export default Admin_about_us;
