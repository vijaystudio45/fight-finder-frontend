import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";

import {
  blogslistAction,
  deletelistAction,
} from "../Redux/Action/Admin-blog-action";
import { ListItem } from "@mui/material";
import moment from "moment";

function Admin_blogs_list() {
  const dispatch = useDispatch();

  const { bloglist, success } = useSelector((state) => state.bloglistReducer);

  const { success: deletesuccess } = useSelector(
    (state) => state.deleteblogReducer
  );

  useEffect(() => {
    dispatch(blogslistAction({ status: true }));
  }, [deletesuccess]);

  const [usersForRender, setUsersForRender] = useState([]);

  useEffect(() => {
    let userData = [];
    bloglist?.map((item, index) => {
      item.title = item.title;
      item.description = item.description.slice(0, 30) + "...";

      item.status = (
        <div className="flex">
          {item.status ? (
            <span className=" text-xs py-1 px-3 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
              Active
            </span>
          ) : (
            <span className="mtext-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-200 text-red-600 rounded-full">
              Inactive
            </span>
          )}
        </div>
      );

      item.action = (
        <div className="flex text-lg">
          <Link
            title="edit"
            className="EditBut editAdminButton"
            to={`/add-blogs/${item.id}`}
          >
            <i class="fas fa-user-edit pr-4 text-blue-500 "></i>
          </Link>
          <div className="flex">
            <button
              title="delete"
              className="deletebutt"
              onClick={() => deleteHandler(item.id)}
            >
              <i class="fa fa-trash text-red-500"></i>
            </button>
          </div>
        </div>
      );
      userData.push(item);
    });

    setUsersForRender(userData);
  }, [bloglist]);

  const data = {
    columns: [
      {
        label: "Title",
        field: "title",
        sort: "asc",
        width: 500,
      },
      {
        label: "Description",
        field: "description",
        sort: "asc",
        width: 500,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 500,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: usersForRender,
  };

  const deleteHandler = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this event?",
      className: "errorAlert",
      icon: "/img/image 2.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deletelistAction(id));
        swal({
          title: "Successfully Complete",
          text: "Successfully Deleted!",
          className: "successAlert",
          icon: "/img/image 2.png",
          buttons: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <>
      <div className=" w-full bg-blue-100 relative">
        <main>
          <div className="pt-6 px-4">
            <div className="xl:gap-4 my-4">
              <div className="heading-top">
                <h3 className="text-black text-2xl font-medium common-text-font-fam text-3xl font-bold">Blog List</h3>
              </div>
              <div className="bg-white rounded-md mb-8 mt-3 p-4 sm:p-6">
                <div className=" justify-between mb-12 mt-12">
                  <div className="container  mx-auto px-1 md:px-6 lg:px-12">
                    <div className="Topallpage AllPageHight Custompage">
                      <div className="ContentDiv Categoriesdiv1">
                        {/* <div className="Status"></div> */}
                        <div className="savebtn Categorybtn">
                          <Link
                            className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-1o8ezb2-MuiButtonBase-root-MuiButton-root"
                            to={`/add-blogs`}
                          >
                            {" "}
                            Add New Blog{" "}
                          </Link>
                        </div>
                        <MDBDataTable
                          style={{}}
                          responsive
                          striped
                          bordered
                          small
                          data={data}
                        />
                      </div>
                    </div>
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

export default Admin_blogs_list;
