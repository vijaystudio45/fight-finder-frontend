import { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getEventsList,
  deleteEventAction,
  getUserEventsList,
  approveEventsAction,
} from "../Redux/Action/Events-new-action";
import swal from "sweetalert";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  APPROVE_EVENTS_RESET,
  DELETE_EVENT_RESET,
} from "../Redux/Constants/Events-new-constants";

export function Events_list() {
  const dispatch = useDispatch();

  const [rerender, setRerender] = useState(false);
  const [usersForRender, setUsersForRender] = useState([]);
  const [approvedStatus, setApprovedStatus] = useState(true);

  const [approveEventType, setApproveEventType] = useState();
  const [approveEventId, setApproveEventId] = useState();

  const [open, setOpen] = useState(false);

  const { userData } = useSelector((state) => state.authReducer);

  const { userEventsList, success: successUserEventsList } = useSelector(
    (state) => state.getUserEventsListReducer
  );

  const { eventsList, success } = useSelector(
    (state) => state.getEventsListReducer
  );

  const {
    approveEvent,
    success: successApprove,
    error: errorApprove,
  } = useSelector((state) => state.approveEventsReducer);

  const {
    success: deletesuccess,
    errorDelete,
    deleteEvent,
  } = useSelector((state) => state.deleteEventReducer);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (userData?.role === 0) {
      dispatch(getEventsList());
    } else {
      dispatch(getUserEventsList());
    }
  }, [deletesuccess, successApprove]);

  useEffect(() => {
    let mapData = [];

    let dataToBeMapped = [];
    if (userData?.role === 0) {
      dataToBeMapped = eventsList;
    }
    if (userData?.role === 1) {
      dataToBeMapped = userEventsList;
    }

    dataToBeMapped?.map((item) => {
      if (item.events) {
        item.title =
          item.events.title?.length > 20
            ? item.events.title?.slice?.(0, 20) + "..."
            : item.events.title;
        item.description =
          item.events.description?.length > 20
            ? item.events.description.slice(0, 20) + "..."
            : item.events.description;
        item.start_date = item.events.start_date;
        item.end_date = item.events.end_date;
        // item.location = item.location;

        item.status = (
          <div className="flex">
            {item.events.is_approved ? (
              <span className="mt-2 text-xs py-1 px-3 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
                Active
              </span>
            ) : (
              <span className="mt-2 text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-200 text-red-600 rounded-full">
                Inactive
              </span>
            )}
          </div>
        );

        item.action = (
          <>
            <div className="flex text-lg">
              <Link
                title="edit"
                className="EditBut editAdminButton"
                to={`/edit-event/${item.events?.id}/events`}
              >
                <i className="fas fa-pencil pr-2 text-blue-500 "></i>
              </Link>
              <div className="flex">
                <button
                  title="delete"
                  onClick={() => deleteHandler(item.events.id, "events")}
                  // className="deletebutt"
                  className="EditBut editAdminButton"
                >
                  <i className="fa fa-trash pr-2 text-red-500"></i>
                </button>
              </div>

              {userData?.role === 0 && (
                <div className="flex">
                  <button
                    onClick={() => {
                      setApproveEventType("events");
                      handleClickOpen();
                      setApproveEventId(item.events?.id);
                    }}
                    title="settings"
                    // className="deletebutt"
                    className="EditBut editAdminButton"
                  >
                    <i
                      className="fa fa-cog pr-2 text-lg"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              )}
            </div>
          </>
        );
      }
      if (item.schoolgym) {
        item.title =
          item.schoolgym.title?.length > 20
            ? item.schoolgym.title?.slice?.(0, 20) + "..."
            : item.schoolgym.title;
        item.description =
          item.schoolgym.introduction?.length > 20
            ? item.schoolgym.introduction.slice(0, 20) + "..."
            : item.schoolgym.introduction;
        item.start_date = item.schoolgym.start_date;
        item.end_date = item.schoolgym.end_date;
        // item.location = item.location;

        item.status = (
          <div className="flex">
            {item.schoolgym.is_approved ? (
              <span className="mt-2 text-xs py-1 px-3 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
                Active
              </span>
            ) : (
              <span className="mt-2 text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-200 text-red-600 rounded-full">
                Inactive
              </span>
            )}
          </div>
        );

        item.action = (
          <>
            <div className="flex text-lg">
              <Link
                title="edit"
                className="EditBut editAdminButton"
                to={`/edit-event/${item.schoolgym?.id}/schoolgym`}
              >
                <i className="fas fa-pencil pr-2 text-blue-500 "></i>
              </Link>
              <div className="flex">
                <button
                  title="delete"
                  onClick={() => deleteHandler(item.schoolgym.id, "schoolgym")}
                  className="deletebutt"
                >
                  <i className="fa fa-trash pr-2 text-red-500"></i>
                </button>
              </div>

              {userData?.role === 0 && (
                <div className="flex">
                  <button
                    onClick={() => {
                      handleClickOpen();
                      setApproveEventType("schoolgym");
                      setApproveEventId(item.schoolgym?.id);
                    }}
                    title="settings"
                    className="deletebutt"
                  >
                    <i
                      className="fa fa-cog pr-2 text-lg"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              )}
            </div>
          </>
        );
      }
      if (item.seminarnformation) {
        item.title =
          item.seminarnformation.title?.length > 20
            ? item.seminarnformation.title?.slice?.(0, 20) + "..."
            : item.seminarnformation.title;
        item.description =
          item.seminarnformation.details?.length > 20
            ? item.seminarnformation.details.slice(0, 20) + "..."
            : item.seminarnformation.details;
        item.start_date = item.seminarnformation.start_date;
        item.end_date = item.seminarnformation.end_date;
        // item.location = item.location;

        item.status = (
          <div className="flex">
            {item.seminarnformation.is_approved ? (
              <span className="mt-2 text-xs py-1 px-3 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
                Active
              </span>
            ) : (
              <span className="mt-2 text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-200 text-red-600 rounded-full">
                Inactive
              </span>
            )}
          </div>
        );

        item.action = (
          <>
            <div className="flex text-lg">
              <Link
                title="edit"
                className="EditBut editAdminButton"
                to={`/edit-event/${item.seminarnformation?.id}/seminar`}
              >
                <i className="fas fa-pencil pr-2 text-blue-500 "></i>
              </Link>
              <div className="flex">
                <button
                  title="delete"
                  onClick={() =>
                    deleteHandler(
                      item.seminarnformation.id,
                      "seminarnformation"
                    )
                  }
                  className="deletebutt"
                >
                  <i className="fa fa-trash pr-2 text-red-500"></i>
                </button>
              </div>
              {userData?.role === 0 && (
                <div className="flex">
                  <button
                    onClick={() => {
                      handleClickOpen();
                      setApproveEventType("seminarnformation");
                      setApproveEventId(item.seminarnformation?.id);
                    }}
                    title="settings"
                    className="deletebutt"
                  >
                    <i
                      className="fa fa-cog pr-2 text-lg"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              )}
            </div>
          </>
        );
      }
      mapData.push(item);
    });

    setUsersForRender(mapData);
  }, [success, successUserEventsList]);

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
        label: "Start Date",
        field: "start_date",
        sort: "asc",
        width: 500,
      },
      {
        label: "End Date",
        field: "end_date",
        sort: "asc",
        width: 500,
      },
      // {
      //   label: "Location",
      //   field: "location",
      //   sort: "asc",
      //   width: 500,
      // },
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
  const deleteHandler = (id, eventType) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this event?",
      className: "errorAlert",
      icon: "/img/image 2.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteEventAction(id, eventType));
        setRerender(true);
        // swal({
        //   title: "Successfully Complete",
        //   text: "Successfully Deleted!",
        //   className: "successAlert",
        //   icon: "/img/image 2.png",
        //   buttons: false,
        //   timer: 1500,
        // });
      }
    });
  };

  const handleApproveSubmit = () => {
    dispatch(
      approveEventsAction(approveEventId, approveEventType, {
        is_approved: approvedStatus,
      })
    );
  };

  useEffect(() => {
    if (deletesuccess && rerender) {
      swal({
        title: "Successfully Complete",
        text: deleteEvent?.message,
        className: "successAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 5000,
      });
    }

    if (errorDelete && rerender) {
      swal({
        title: "Error",
        text: errorDelete,
        className: "errorAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 5000,
      });
    }
    dispatch({ type: DELETE_EVENT_RESET });
  }, [deletesuccess, errorDelete]);

  useEffect(() => {
    if (successApprove) {
      swal({
        title: "Successfully Complete",
        text: approveEvent?.message,
        className: "successAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 5000,
      });
    }

    if (errorApprove) {
      swal({
        title: "Error",
        text: errorApprove,
        className: "errorAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 5000,
      });
    }
    dispatch({ type: APPROVE_EVENTS_RESET });
  }, [successApprove, errorApprove]);

  return (
    <>
      <div className=" w-full bg-blue-100 relative overflow-hidden	">
        <main>
          <div className="pt-6 px-4">
            <div className="xl:gap-4 my-4">
              <div className="heading-top">
                <h3 className="common-text-font-fam text-black text-3xl font-bold">
                  {" "}
                  Events list
                </h3>
              </div>
              <div className="bg-white rounded-md mb-8 mt-3 p-4 sm:p-6">
                <div className=" justify-between mb-12 mt-12">
                  <div className="container  mx-auto px-1 md:px-6 lg:px-12">
                    <div className="Topallpage AllPageHight Custompage">
                      <div className="ContentDiv Categoriesdiv1">
                        <div className="Status"></div>
                        <div className="savebtn Categorybtn">
                          <Link
                            className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-1o8ezb2-MuiButtonBase-root-MuiButton-root"
                            to={`/add-event`}
                          >
                            {" "}
                            Add New Events{" "}
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
                      <div>
                        <Dialog open={open} onClose={handleClose}>
                          <DialogTitle>
                            {/* <h1 className="mt-2">test</h1> */}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              <h2 className=" text-lg font-bold mt-3">
                                Approved Status
                              </h2>
                              <div className="flex justify-center">
                                <div className="mb-3 xl:w-screen mt-2">
                                  <select
                                    value={approvedStatus}
                                    onChange={(e) =>
                                      setApprovedStatus(e.target.value)
                                    }
                                    className="active_blockinput"
                                  >
                                    <option value={true}>Approve</option>
                                    <option value={false}>Disapprove</option>
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
                                  handleApproveSubmit();
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
