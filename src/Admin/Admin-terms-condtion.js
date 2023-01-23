import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { aboutAction } from "../Redux/Action/Admin-about-action";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { allpagesDatagetAction } from "../Redux/Action/Admin-about-action";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import swal from "sweetalert";

function Admin_terms_condtion() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState("");
  const [rerender, setRerender] = useState(false);

  const { alldataGet, success: successAllDataGet } = useSelector(
    (state) => state.allDataGetReducer
  );

  useEffect(() => {
    dispatch(allpagesDatagetAction("terms"));
  }, []);

  const { success, error, message } = useSelector(
    (state) => state.aboutPostReducer
  );

  const validateSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("contant", data);
    formData.append("title", "terms");
    formData.append("user", 1);

    dispatch(aboutAction(formData));
    setRerender(true);
  };

  useEffect(() => {
    if (successAllDataGet) {
      if (alldataGet?.length > 0) {
        setData(alldataGet[0]?.contant);
      }
    }
  }, [successAllDataGet]);

  useEffect(() => {
    if (success && rerender) {
      swal({
        title: "Successfully Complete",
        text: message,
        className: "successAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 1500,
      });
      setRerender(false);
      // setEmail(" ");
      // setPhone(" ");
      // setAddress(" ");
    }
    if (error && rerender) {
      swal({
        title: "Error",
        text: error,
        className: "errorAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 1500,
      });
      setRerender(false);
    }
  }, [success, error]);

  return (
    <>
      <div className=" w-full bg-blue-100 relative overflow-y-auto">
        <main>
          <div className="pt-6 px-4">
            <div className="xl:gap-4 my-4">
              <div className="common-text-font-fam heading-top">
                <h3 className="text-black text-3xl font-bold font-medium mb-10">
                  Terms Condition
                </h3>
              </div>
              <div className="bg-white ">
                <div className=" justify-between mb-12 mt-12">
                  <CKEditor
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
export default Admin_terms_condtion;
