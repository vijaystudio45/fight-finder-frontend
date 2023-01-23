import { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addEvents,
  eventupdateAction,
} from "../Redux/Action/Admin-blog-action";
import moment from "moment";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export function Events_Add() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { userData } = useSelector((state) => state.authReducer);

  const { success, error, eventsData } = useSelector(
    (state) => state.addEventsReducer
  );

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [startdate, setStartdate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [user_id, setUserId] = useState();
  const [render, setRender] = useState(false);

  useEffect(() => {
    setUserId(userData?.id);
  }, []);

  useEffect(() => {
    if (success && render) {
      swal({
        title: "Success",
        text: "Events successfully added",
        className: "successAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 2000,
      });
      navigate("/events-list");
    }
    if (error && render) {
      swal({
        title: "Error",
        text: "Something went wrong",
        className: "errorAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 2000,
      });
    }
    setRender(false);
  }, [success, error]);

  const [events, setEvents] = useState([
    {
      title: "",
      description: "",
      start_date: new Date(),
      end_date: new Date(),
      location: "",
      status: false,
    },
  ]);
  const eventsRef = useRef([
    {
      title: "",
      description: "",
      start_date: new Date(),
      end_date: new Date(),
      location: "",
      status: false,
    },
  ]);

  const handleAddEvents = () => {
    let lenEvents = events.length;
    setEvents([
      ...events,
      {
        title: "",
        description: "",
        start_date: new Date(),
        end_date: new Date(),
        location: "",
        status: false,
      },
    ]);
    eventsRef.current = [
      ...events,
      {
        title: "",
        description: "",
        start_date: new Date(),
        end_date: new Date(),
        location: "",
        status: false,
      },
    ];
  };
  const handleServiceRemove = (index) => {
    const list = [...events];
    list.splice(index, 1);
    setEvents(list);
  };

  const updateEventList = (index, field_name, value) => {
    let list = [...events];
    list[index][field_name] = value;
    setEvents(list);

  };

  const [errors, setErrors] = useState({
    title: null,
    description: null,
    start_date: null,
    end_date: null,
    location: null,
    status: null,
  });

  const submitHandler = () => {
    setRender(true);
    // let tempErrors = {
    //   observer: "",
    // };

    // for (let i = 0; i < events.length; i++) {
    //   if (events[i].title.length === 0) {
    //     tempErrors = {
    //       title: "Please select atleast one approver",
    //     };
    //     setErrors(tempErrors);
    //   }

    //   if (events[i].is_observer && events[i].observer.length == 0) {
    //     tempErrors = {
    //       observer: "Please select atleast one observer",
    //     };
    //     setErrors(tempErrors);
    //   }
    // }

    // const isError = Object.values(tempErrors).every(
    //   (x) => x == null || x == ""
    // );

    let newArr;

    // if (isError) {
    newArr = events?.map((item, index) => {
      item.start_date = moment(item.start_date).format("YYYY-MM-DD");
      // item.order = orderArr;
      return item;
    });
    // }

    // const isEmpty = Object.values(tempErrors).every(
    //   (x) => x == null || x == ""
    // );

    // if (isEmpty) {
    const formData = new FormData();



    // formData.append("title", title);
    // formData.append("description", description);
    // formData.append("start_date", moment(startdate).format("YYYY-MM-DD"));
    // formData.append("end_date", moment(enddate).format("YYYY-MM-DD"));
    // formData.append("location", location);
    // formData.append("status", status);

    if (events?.length > 0) {
      for (let index = 0; index < events.length; index++) {
        const element = events[index];
        formData.append("event", JSON.stringify(element));
      }
    }
    formData.append("user", user_id);

    dispatch(addEvents(formData));
    // }
  };

  return (
    <>
      {" "}
      <div className=" w-full bg-blue-100 relative h-screen- overflow-y-auto">
        <main>
          <div className="pt-6 px-4">
            <div className="xl:gap-4 my-4">
              <div className="heading-top">
                <h3 className="text-black text-2xl font-medium">Add Events</h3>
              </div>
              <div className="bg-white rounded-md mb-8 mt-3 p-4 sm:p-6 h-full ">
                <div className=" justify-between mb-12 mt-12">
                  <form className="blogs_forms" autoComplete="off">
                    <div className="form-field">
                      {events.map((item, index) => (
                        <div
                          key={index}
                          className={
                            index == 0 ? "blog-item first" : "blog-item"
                          }
                        >
                          <div className="blog_add">
                            <section className=" dark:bg-gray-900">
                              <div className="w-full rounded-lg">
                                <div>
                                  <div className="space-y-4 md:space-y-6">
                                    <div
                                    // class={
                                    //   errors.title ? "inputCntnr error" : "inputCntnr"
                                    // }
                                    >
                                      <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                          Title
                                        </label>
                                        <input
                                          onChange={(e) => {
                                            updateEventList(
                                              index,
                                              "title",
                                              e.target.value
                                            );
                                          }}
                                          type="text"
                                          className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          placeholder="Add event title"
                                        />
                                        {/* <span
                                style={{
                                  color: "#D14F4F",
                                  float: "right",
                                  fontSize: "13px",
                                  opacity: errors.title ? 1 : 0,
                                }}
                              >
                                {errors.title ?? "valid"}
                              </span> */}
                                      </div>
                                    </div>
                                    <div
                                    // class={
                                    //   errors.title ? "inputCntnr error" : "inputCntnr"
                                    // }
                                    >
                                      <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                          Location
                                        </label>
                                        <input
                                          onChange={(e) => {
                                            updateEventList(
                                              index,
                                              "location",
                                              e.target.value
                                            );
                                          }}
                                          type="text"
                                          className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          placeholder="Add event location"
                                        />
                                        {/* <span
                                style={{
                                  color: "#D14F4F",
                                  float: "right",
                                  fontSize: "13px",
                                  opacity: errors.title ? 1 : 0,
                                }}
                              >
                                {errors.title ?? "valid"}
                              </span> */}
                                      </div>
                                    </div>
                                    <div className="event-date-section flex justify-between">
                                      <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                      >
                                        <DatePicker
                                          label="Start Date"
                                          value={item.start_date}
                                          // formatDate={(item) =>
                                          //   moment(new Date()).format(
                                          //     "DD-MM-YYYY"
                                          //   )
                                          // }
                                          minDate={new Date()}
                                          onChange={(e) => {
                                            updateEventList(
                                              index,
                                              "start_date",
                                              e
                                            );
                                          }}
                                          renderInput={(params) => (
                                            <TextField {...params} />
                                          )}
                                          inputFormat="YYYY-MM-DD"
                                          disablePast
                                        />
                                      </LocalizationProvider>
                                      <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                      >
                                        <DatePicker
                                          label="End Date"
                                          // formatDate={(item) =>
                                          //   moment(new Date()).format(
                                          //     "DD-MM-YYYY"
                                          //   )
                                          // }
                                          value={item.end_date}
                                          onChange={(e) => {
                                            updateEventList(
                                              index,
                                              "end_date",
                                              e
                                            );
                                          }}
                                          minDate={item.start_date}
                                          renderInput={(params) => (
                                            <TextField {...params} />
                                          )}
                                          inputFormat="YYYY-MM-DD"
                                          disablePast
                                        />
                                      </LocalizationProvider>
                                    </div>
                                    <div
                                    // class={
                                    //   errors.description
                                    //     ? "inputCntnr error"
                                    //     : "inputCntnr"
                                    // }
                                    >
                                      {" "}
                                      <div>
                                        <label
                                          for="message"
                                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                          Descripition
                                        </label>
                                        <textarea
                                          onChange={(e) => {
                                            updateEventList(
                                              index,
                                              "description",
                                              e.target.value
                                            );
                                          }}
                                          rows="4"
                                          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          placeholder="Write your descripition here..."
                                        ></textarea>
                                        {/* <span
                                style={{
                                  color: "#D14F4F",
                                  float: "right",
                                  fontSize: "13px",
                                  opacity: errors.description ? 1 : 0,
                                }}
                              >
                                {errors.description ?? "valid"}
                              </span> */}
                                      </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                      <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                          <input
                                            value={status}
                                            onChange={(e) => {
                                              updateEventList(
                                                index,
                                                "status",
                                                e.target.checked
                                              );
                                            }}
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
                                  </div>
                                  <div className="second-division  my-2">
                                    {events.length !== 1 && index !== 0 && (
                                      <button
                                        type="button"
                                        onClick={() =>
                                          handleServiceRemove(index)
                                        }
                                        className="remove-event-btn"
                                      >
                                        Remove
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>

                          <div className="my-4">
                            {events.length - 1 === index && (
                              <button
                                type="button"
                                onClick={handleAddEvents}
                                className="add-event-btn"
                              >
                                Add more
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="submit_cancel-btn flex">
                      <div>
                        <button
                          onClick={submitHandler}
                          type="button"
                          className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-90 mr-12"
                        >
                          Submit
                        </button>
                      </div>
                      <div>
                        <Link to="/events-list">
                          <button
                            type="submit"
                            className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-90  ml-12"
                          >
                            Cancel
                          </button>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
