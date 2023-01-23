import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  userslistAction,
  usersblockAction,
} from "../Redux/Action/User-list-action";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Admin_users() {
  const dispatch = useDispatch();

  const { userslist, success } = useSelector((state) => state.userlistReducer);

  const { success: blocksuccess } = useSelector(
    (state) => state.userblockReducer
  );

  useEffect(() => {
    dispatch(userslistAction());
  }, [blocksuccess]);

  const [rerender, setRerender] = useState(false);
  const [userIds, setUserID] = useState(null);
  const [userStatus, setUserStatus] = useState(false);

  const validateSubmit = () => {
    dispatch(usersblockAction(userIds, { is_block: userStatus }));
    setRerender(true);
  };
  const [usersForRender, setUsersForRender] = useState([]);

  useEffect(() => {
    let userData = [];
    userslist?.map((item, index) => {
      item.username = item.username ? item.username : "N/A";
      item.mobile_number = item.mobile_number;
      item.email = item.email;

      if (!item.is_block) {
        item.is_active = (
          <div style={{ display: "flex" }}>
            <span className="mt-1.5 text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-200 text-red-600 rounded-full">
              BLocked
              <i className="blocked_company_listss fa fa-ban ml-2 "></i>
            </span>
          </div>
        );
      } else {
        item.is_active = (
          <div className="flex">
            {item.is_active ? (
              <span className="text-xs py-1 px-3 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
                Active
              </span>
            ) : (
              <span className="mt-1.5 text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-200 text-red-600 rounded-full">
                Inactive
              </span>
            )}
          </div>
        );
      }

      item.action = (
        <div className="flex text-lg">
          {/* <Link
            title="edit"
            className="EditBut editAdminButton"
            to={`/agency/company/${item.id}`}
          >
            <i class="fas fa-user-edit pr-4 text-blue-500 "></i>
          </Link> */}
          <div className="flex">
            <button
              // title={item.is_block == true ? 'UnBlock' : "Block"}
              onClick={() => {
                handleClickOpen();
                setUserID(item.id);
                // setUserStatus(item.is_block);
              }}
              className="deletebutt"
            >
              <i className="fa fa-cog text-lg" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      );
      userData.push(item);
    });

    setUsersForRender(userData);
  }, [userslist]);

  const data = {
    columns: [
      {
        label: "Name",
        field: "username",
        sort: "asc",
        width: 500,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 500,
      },
      {
        label: "Mobile no",
        field: "mobile_number",
        sort: "asc",
        width: 500,
      },

      {
        label: "Status",
        field: "is_active",
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const False = 0
  // const True = 1

  return (
    <>
      <div className=" w-full bg-blue-100 relative">
        <main>
          <div className="pt-6 px-4">
            <div className="xl:gap-4 my-4">
              <div className="heading-top">
                <h3 className="common-text-font-fam text-black text-3xl font-bold">Users List</h3>
              </div>
              <div className="bg-white rounded-md mb-8 mt-3 p-4 sm:p-6">
                <div className=" justify-between mb-12 mt-12">
                  <div className="container  mx-auto px-1 md:px-6 lg:px-12">
                    <div className="Topallpage AllPageHight Custompage">
                      <div className="ContentDiv Categoriesdiv1">
                        <div className="Status"></div>

                        <MDBDataTable
                          style={{}}
                          responsive
                          striped
                          bordered
                          small
                          data={data}
                        />
                      </div>
                      <div>
                        <Dialog open={open} onClose={handleClose}>
                          <DialogTitle>
                            {/* <h1 className="mt-2">test</h1> */}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              <h2 className=" text-lg font-bold mt-3">
                                User Status
                              </h2>
                              <div class="flex justify-center">
                                <div class="mb-3 xl:w-screen mt-2">
                                  <select
                                    value={userStatus}
                                    onChange={(e) =>
                                      setUserStatus(e.target.value)
                                    }
                                    class="active_blockinput"
                                  >
                                    <option value={true}>Unblock</option>
                                    <option value={false}>Block</option>
                                  </select>
                                </div>
                              </div>
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <div className="block_btn_group mr-6 mb-2">
                              <Button
                                className="close_btn"
                                onClick={handleClose}
                              >
                                Close
                              </Button>
                              <Button
                                className="submit_block"
                                onClick={() => {
                                  validateSubmit();
                                  handleClose();
                                }}
                              >
                                Submit
                              </Button>
                            </div>
                          </DialogActions>
                        </Dialog>
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

export default Admin_users;
