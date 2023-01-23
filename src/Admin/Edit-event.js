import React, { useState, useEffect, useMemo, useCallback } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import {
//   addEvents,
//   eventsadmindetalisAction,
//   eventupdateAction,
// } from "../Redux/Action/Admin-blog-action";
import { eventUpdateAction } from "../Redux/Action/Events-new-action";
import { eventDetailsAction } from "../Redux/Action/Events-new-action";
import moment from "moment";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import countryList from "react-select-country-list";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDropzone } from "react-dropzone";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import dayjs from "dayjs";
import { validations } from "../utils";
import { EVENT_UPDATE_RESET } from "../Redux/Constants/Events-new-constants";

export default function Edit_event() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { eventId, eventType: eventTypeParams } = useParams();

  const { userData } = useSelector((state) => state.authReducer);

  const { success: successUpdate, error: errorUpdate } = useSelector(
    (state) => state.eventUpdateReducer
  );

  const { eventDetails: eventDetailsReducer, success } = useSelector(
    (state) => state.eventDetailsReducer
  );

  useEffect(() => {
    if (eventTypeParams === "seminar") {
      dispatch(eventDetailsAction(eventId, "seminarnformation"));
    } else {
      dispatch(eventDetailsAction(eventId, eventTypeParams));
    }
  }, []);

  const [eventType, setEventType] = useState(1);

  // ******************* EVENT *******************
  const [eventImage, setEventImage] = useState();
  const [eventStartDate, setEventStartDate] = useState(new Date());
  const [eventEndDate, setEventEndDate] = useState(new Date());
  const [eventTitle, setEventTitle] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [eventZipCode, setEventZipCode] = useState("");
  const [eventCountry, setEventCountry] = useState("US");
  const [eventTime, setEventTime] = useState();
  const [eventOrganizerFirstName, setEventOrganizerFirstName] = useState("");
  const [eventOrganizerLastName, setEventOrganizerLastName] = useState("");
  const [eventOrganizerPhoneNumber, setEventOrganizerPhoneNumber] =
    useState("");
  const [eventOrganizerEmail, setEventOrganizerEmail] = useState("");
  const [eventOrganizerSocials, setEventOrganizerSocials] = useState("");
  const [eventInstructions, setEventInstructions] = useState("");
  const [isForeignPart, setIsForeignPart] = useState(true);
  const [relatedAsso, setRelatedAsso] = useState("");

  // ******************* SCHOOL OR GYM *******************
  const [schoolName, setSchoolName] = useState("");
  const [schoolAddress, setSchoolAddress] = useState("");
  const [schoolZipCode, setSchoolZipCode] = useState("");
  const [schoolCountry, setSchoolCountry] = useState("US");
  const [schoolOwnerFName, setSchoolOwnerFName] = useState("");
  const [schoolOwnerLName, setSchoolOwnerLName] = useState("");
  const [schoolOwnerPhone, setSchoolOwnerPhone] = useState("");
  const [schoolOwnerEmail, setSchoolOwnerEmail] = useState("");
  const [schoolOwnerSocial, setSchoolOwnerSocial] = useState("");
  const [schoolPriceRangeMin, setSchoolPriceRangeMin] = useState("");
  const [schoolPriceRangeMax, setSchoolPriceRangeMax] = useState("");
  const [schoolOpenDays, setSchoolOpenDays] = useState("");
  const [schoolOpenHours, setSchoolOpenHours] = useState("");
  const [schoolSpecialInst, setSchoolSpecialInst] = useState("");
  const [schoolIntroduction, setSchoolIntroduction] = useState("");

  // ******************* SEMINAR *******************
  const [reasonOpenSeminar, setReasonOpenSeminar] = useState("");
  const [seminarCost, setSeminarCost] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [eventDetails, setEventDetails] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenComp, setIsOpenComp] = useState(false);
  const [isOpenCountry, setIsOpenCountry] = useState(false);
  const [isOpenEventCountry, setIsOpenEventCountry] = useState(false);
  const [isOpenSchoolCountry, setIsOpenSchoolCountry] = useState(false);
  const [isOpenGender, setIsOpenGender] = useState(false);

  const [imageChanged, setImageChanged] = useState(false);
  const [eventTimeChanged, setEventTimeChanged] = useState(false);

  // const [files, setFiles] = useState([]);

  const [rerender, setRerender] = useState(false);

  const [errors, setErrors] = useState({
    // ******************* EVENT *******************
    eventTitle: null,
    eventDescription: null,
    eventImage: null,

    eventAddress: null,
    eventZipCode: null,
    eventTime: null,
    eventOrganizerFirstName: null,
    eventOrganizerLastName: null,
    eventOrganizerPhoneNumber: null,
    eventOrganizerEmail: null,
    eventOrganizerSocials: null,
    eventInstructions: null,
    relatedAsso: null,
    eventDetails: null,

    // For checking start and end date
    eventDate: null,

    // ******************* SCHOOL OR GYM *******************
    schoolName: null,
    schoolAddress: null,
    schoolZipCode: null,
    schoolOwnerFName: null,
    schoolOwnerLName: null,
    schoolOwnerPhone: null,
    schoolOwnerEmail: null,
    schoolOwnerSocial: null,
    schoolPriceRangeMin: null,
    schoolPriceRangeMax: null,
    schoolPriceRange: null,
    schoolOpenDays: null,
    schoolOpenHours: null,
    schoolSpecialInst: null,
    schoolIntroduction: null,

    // ******************* SEMINAR *******************
    reasonOpenSeminar: null,
    seminarCost: null,
    specialInstructions: null,
    eventDetails: null,
  });

  // const [errors, setErrors] = useState({
  //   title: null,
  //   description: null,
  //   start_date: null,
  //   end_date: null,
  //   location: null,
  //   status: null,
  // });

  const countryListOptions = useMemo(() => countryList().getData(), []);

  const imageMimeType = /image\/(png|jpg|jpeg)/i;

  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  const menuProps = {
    variant: "menu",
    disableScrollLock: true,
  };

  const handleChangeEvent = (value, field_name) => {
    let list = [];

    if (field_name === "eventImage") {
      const file = value.target.files[0];
      // CHECK FILE TYPE
      if (!file.type.match(imageMimeType)) {
        swal({
          title: "",
          text: "Image type is not valid",
          className: "errorAlert",
          icon: "/img/image 2.png",
          buttons: false,
          timer: 5000,
        });
        return;
      }
    }

    if (field_name === "isForeignPart") {
      const inverseValue = list[field_name];
      list[field_name] = !inverseValue;
    } else if (field_name === "eventTime") {
      const timeValue = value;
      list[field_name] = timeValue;
    } else if (field_name === "eventImage") {
      const imageValue = value.target.files[0];
      list[field_name] = imageValue;
    } else {
      list[field_name] = value;
    }

    // let errorList = [...errors];
    // errorList[index][field_name] = null;

    // setErrors(errorList);

    // setEvents(list);
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("location", location);
  //   formData.append("start_date", moment(start_date).format("YYYY-MM-DD"));
  //   formData.append("end_date", moment(end_date).format("YYYY-MM-DD"));
  //   formData.append("description", description);
  //   formData.append("user", userData?.id);

  //   formData.append("status", status);

  //   dispatch(eventupdateAction(eventId, formData));
  //   setRender(true);
  // };

  // useEffect(() => {
  //   if (eventdetails) {
  //     setTitle(eventdetails?.title);
  //     setLocation(eventdetails?.location);
  //     setEnddate(eventdetails?.end_date);
  //     setStartdate(eventdetails?.start_date);

  //     setStatus(eventdetails?.status);
  //     setDescription(eventdetails?.description);
  //   }
  // }, [update]);

  const validateSubmit = (e) => {
    e.preventDefault();

    const tempErrors = {
      schoolName:
        eventType === 2 && !schoolName ? "This field is mandatory" : null,
      schoolAddress:
        eventType === 2 && !schoolAddress ? "This field is mandatory" : null,
      schoolZipCode:
        eventType === 2 && schoolZipCode.length < 6
          ? "Please check this input and try again."
          : null,
      schoolOwnerFName:
        eventType === 2 && !schoolOwnerFName ? "This field is mandatory" : null,
      schoolOwnerLName:
        eventType === 2 && !schoolOwnerLName ? "This field is mandatory" : null,
      schoolOwnerPhone:
        eventType === 2 && !schoolOwnerPhone ? "This field is mandatory" : null,
      schoolPriceRangeMin:
        eventType === 2 && !schoolPriceRangeMin
          ? "This field is mandatory"
          : null,
      schoolPriceRangeMax:
        eventType === 2 && !schoolPriceRangeMax
          ? "This field is mandatory"
          : null,
      schoolPriceRange:
        eventType === 2 && schoolPriceRangeMin > schoolPriceRangeMax
          ? "Please check the price range and try again"
          : null,
      schoolOpenDays:
        eventType === 2 && !schoolOpenDays ? "This field is mandatory" : null,
      schoolOpenHours:
        eventType === 2 && !schoolOpenHours ? "This field is mandatory" : null,
      schoolIntroduction:
        eventType === 2 && !schoolIntroduction
          ? "This field is mandatory"
          : null,
      schoolSpecialInst:
        eventType === 2 && !schoolSpecialInst
          ? "This field is mandatory"
          : null,
      schoolOwnerEmail:
        eventType === 2 ? validations.email(schoolOwnerEmail) : null,
      // zipcode: zipcode.length < 6 && "Please check this input and try again.",
      schoolOwnerSocial:
        eventType === 2 && !schoolOwnerSocial
          ? "This field is mandatory"
          : null,
      eventTitle:
        (eventType === 1 || eventType === 3) && !eventTitle
          ? "This field is mandatory"
          : null,
      eventDescription:
        (eventType === 1 || eventType === 3) && !eventDescription
          ? "This field is mandatory"
          : null,
      eventOrganizerFirstName:
        (eventType === 1 || eventType === 3) && !eventOrganizerFirstName
          ? "This field is mandatory"
          : null,
      eventOrganizerLastName:
        (eventType === 1 || eventType === 3) && !eventOrganizerLastName
          ? "This field is mandatory"
          : null,
      eventOrganizerPhoneNumber:
        (eventType === 1 || eventType === 3) && !eventOrganizerPhoneNumber
          ? "This field is mandatory"
          : null,
      eventOrganizerEmail:
        eventType === 1 || eventType === 3
          ? validations.email(eventOrganizerEmail)
          : null,
      eventOrganizerSocials:
        (eventType === 1 || eventType === 3) && !eventOrganizerSocials
          ? "This field is mandatory"
          : null,
      eventInstructions:
        (eventType === 1 || eventType === 3) && !eventInstructions
          ? "This field is mandatory"
          : null,
      relatedAsso:
        (eventType === 1 || eventType === 3) && !relatedAsso
          ? "This field is mandatory"
          : null,
      seminarCost:
        eventType === 3 && !seminarCost ? "This field is mandatory" : null,
      specialInstructions:
        eventType === 3 && !specialInstructions
          ? "This field is mandatory"
          : null,
      eventDetails:
        eventType === 3 && !eventDetails ? "This field is mandatory" : null,
      eventAddress:
        eventType === 3 && !eventAddress ? "This field is mandatory" : null,
      eventZipCode:
        eventType === 3 && !eventZipCode ? "This field is mandatory" : null,
      eventTime:
        eventType === 1 && !eventTime ? "This field is mandatory" : null,
    };
    setErrors(tempErrors);

    if (Object.values(tempErrors).filter((value) => value).length) {
      // console.log(
      //   "..values",
      //   Object.values(tempErrors).filter((value) => value)
      // );
      return;
    }

    // if (
    //   tempErrors?.length > 0 &&
    //   tempErrors?.filter((value) => value != false || value != null).length
    // ) {
    //   console.log(
    //     "..values",
    //     tempErrors.filter((value) => value)
    //   );
    //   return;
    // }
    submitHandler();
  };

  const submitHandler = () => {
    // console.log("passed");

    setRerender(true);

    const formData = new FormData();

    // SCHOOL / GYM
    if (eventType === 2) {
      formData.append(
        "start_date",
        moment(eventStartDate).format("YYYY-MM-DD")
      );
      formData.append("end_date", moment(eventEndDate).format("YYYY-MM-DD"));
      formData.append("description", eventDescription);
      formData.append("is_approved", userData?.role === 0 ? true : false);
      formData.append("title", schoolName);
      formData.append("address", schoolAddress);
      formData.append("zip_code", schoolZipCode);
      formData.append("country", schoolCountry);
      formData.append("owner_first_name", schoolOwnerFName);
      formData.append("owner_last_name", schoolOwnerLName);
      formData.append("owner_phone_number", schoolOwnerPhone);
      formData.append("owner_email", schoolOwnerEmail);
      formData.append("price_min_ranges", schoolPriceRangeMin);
      formData.append("price_max_ranges", schoolPriceRangeMax);
      formData.append("days_of_operation", schoolOpenDays);
      formData.append("hours_of_operation", schoolOpenHours);
      formData.append("introduction", schoolIntroduction);
      formData.append("owner_social_media_links", schoolOwnerSocial);
      formData.append("special_instructions", schoolSpecialInst);

      if (imageChanged) {
        formData.append("image", eventImage);
      }

      dispatch(eventUpdateAction(eventId, "events", formData));
    }

    if (eventType === 1) {
      formData.append(
        "start_date",
        moment(eventStartDate).format("YYYY-MM-DD")
      );
      formData.append("end_date", moment(eventEndDate).format("YYYY-MM-DD"));
      formData.append("description", eventDescription);
      formData.append("is_approved", userData?.role === 0 ? true : false);
      formData.append("title", eventTitle);
      formData.append("country", eventCountry);
      if (eventTimeChanged) {
        formData.append("time", moment(eventTime["$d"]).format("HH:mm:ss"));
      } else {
        formData.append("time", moment(eventTime).format("HH:mm:ss"));
      }
      // formData.append("time", moment(eventTime["$d"]).format("HH:mm:ss"));
      formData.append("organizer_first_name", eventOrganizerFirstName);
      formData.append("organizer_last_name", eventOrganizerLastName);
      formData.append("organizer_phone_number", eventOrganizerPhoneNumber);
      formData.append("organizer_email", eventOrganizerEmail);
      formData.append("organizer_social_media_links", eventOrganizerSocials);
      formData.append(
        "does_this_event_accept_foreign_participants",
        isForeignPart
      );
      formData.append("instructions_for_the_event", eventInstructions);
      formData.append("related_associations_or_organizations", relatedAsso);
      formData.append("description", eventDescription);

      if (imageChanged) {
        formData.append("image", eventImage);
      }

      dispatch(eventUpdateAction(eventId, "events", formData));
    }

    if (eventType === 3) {
      formData.append(
        "start_date",
        moment(eventStartDate).format("YYYY-MM-DD")
      );
      formData.append("end_date", moment(eventEndDate).format("YYYY-MM-DD"));
      formData.append("description", eventDescription);
      formData.append("is_approved", userData?.role === 0 ? true : false);
      formData.append("title", eventTitle);
      formData.append("address", eventAddress);
      formData.append("zip_code", eventZipCode);
      formData.append("country", eventCountry);
      formData.append("time", eventTime);
      formData.append("organizer_first_name", eventOrganizerFirstName);
      formData.append("organizer_last_name", eventOrganizerLastName);
      formData.append("organizer_last_name", eventOrganizerLastName);
      formData.append("organizer_phone_number", eventOrganizerPhoneNumber);
      formData.append("organizer_email", eventOrganizerEmail);
      formData.append("organizer_social_media_links", eventOrganizerSocials);
      formData.append(
        "does_this_event_accept_foreign_participants",
        isForeignPart
      );
      formData.append("instructions_for_the_event", eventInstructions);
      formData.append("related_associations_or_organizations", relatedAsso);
      formData.append("cost_of_seminar", seminarCost);
      formData.append("special_instructions", specialInstructions);
      formData.append("details", eventDetails);
      formData.append("eventType", eventType);
      formData.append("user", userData.id);
      formData.append("type", "SeminarInformation");

      if (reasonOpenSeminar) {
        formData.append("reasonOpenSeminar", eventZipCode);
      }

      dispatch(eventUpdateAction(eventId, "seminar", formData));
    }
    setEventTimeChanged(false);
  };

  useEffect(() => {
    const handler = () => {
      setIsOpen(false);
      setIsOpenComp(false);
      setIsOpenCountry(false);
      setIsOpenEventCountry(false);
      setIsOpenSchoolCountry(false);
      setIsOpenGender(false);
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  useEffect(() => {
    // Setting event details here
    if (eventDetailsReducer) {
      if (eventDetailsReducer.image) {
        setEventImage(eventDetailsReducer.image);
      }
      if (eventDetailsReducer.address) {
        setEventAddress(eventDetailsReducer.address);
      }
      setEventDescription(eventDetailsReducer.description);
      setEventTitle(eventDetailsReducer.title);
      setEventCountry(eventDetailsReducer.country);
      setEventStartDate(eventDetailsReducer.start_date);
      setEventEndDate(eventDetailsReducer.end_date);
      // if (eventDetailsReducer.time) {
      //   setEventTime(eventDetailsReducer.time);
      // }

      if (eventDetailsReducer?.time) {
        var today = new Date();
        let hms = eventDetailsReducer.time;
        let newTime = hms.split(":");
        today.setHours(newTime[0], newTime[1], newTime[2], 0);

        let target = new Date(today);
        setEventTime(target);
      }
      setEventOrganizerFirstName(eventDetailsReducer?.organizer_first_name);
      setEventOrganizerLastName(eventDetailsReducer?.organizer_last_name);
      setEventOrganizerPhoneNumber(eventDetailsReducer?.organizer_phone_number);
      setEventOrganizerEmail(eventDetailsReducer?.organizer_email);
      setEventOrganizerSocials(
        eventDetailsReducer?.organizer_social_media_links
      );
      setEventInstructions(eventDetailsReducer?.instructions_for_the_event);
      setIsForeignPart(
        eventDetailsReducer?.does_this_event_accept_foreign_participants
      );
      setRelatedAsso(
        eventDetailsReducer?.related_associations_or_organizations
      );
    }
  }, [success]);

  useEffect(() => {
    if (successUpdate && rerender) {
      swal({
        title: "Success",
        text: "Events successfully Updated",
        className: "successAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 2000,
      });
      navigate("/events-list");
    }
    if (errorUpdate && rerender) {
      swal({
        title: "Error",
        text: "Something went wrong",
        className: "errorAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 2000,
      });
    }
    setRerender(false);
    dispatch({ type: EVENT_UPDATE_RESET });
  }, [successUpdate, errorUpdate]);

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    fileRejections,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/jpg": [],
      "image/png": [],
    },
    minSize: 0,
    multiple: false,
    onDrop: useCallback(
      (acceptedFiles) => {
        setEventImage(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
              title: file.name,
            })
          )
        );
        setImageChanged(true);

        setErrors({ ...errors, eventImage: null });

        // let errorList = [...errors];
        // errorList.forEach((item) => (eventImage = null));

        // setErrors(errorList);
        // TODO: file type check
        // if (!acceptedFiles.match(imageMimeType)) {
        //   swal({
        //     title: "",
        //     text: "Image type is not valid",
        //     className: "errorAlert",
        //     icon: "/img/image 2.png",
        //     buttons: false,
        //     timer: 5000,
        //   });
        // } else {
        //   setFiles([
        //     ...files,
        //     ...acceptedFiles.map((file) =>
        //       Object.assign(file, {
        //         preview: URL.createObjectURL(file),
        //         title: file.name,
        //       })
        //     ),
        //   ]);
        // }
      },
      [eventImage]
    ),
  });

  return (
    <>
      {" "}
      <div className=" w-full bg-indigo-100 relative	">
        <div className=" userpage">
          <div className="userform">
            {/* <div className="h-100 d-flex align-items-center justify-content-center"> */}

            <div className="SelectEventTypeDiv my-4 align-items-center justify-content-center">
              <h1>Select the type of event</h1>
              <Select
                className="selectinputEventType"
                open={isOpen}
                onOpen={() => {
                  setIsOpen(true);
                  // handleChangeEvent(true, "isOpen");
                }}
                onClose={() => {
                  setIsOpen(false);
                  // handleChangeEvent(false, "isOpen");
                }}
                MenuProps={menuProps}
                value={eventType}
                onChange={(e) => {
                  setEventType(e.target.value);
                  // handleChangeEvent(e.target.value, "eventType");
                }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={1}>Event</MenuItem>
                <MenuItem value={2}>School or Gym</MenuItem>
                <MenuItem value={3}>Seminar</MenuItem>
              </Select>
            </div>

            <div className="EventdetailsEventsDiv">
              <h1 className="">
                {eventType === 1
                  ? "Event Information"
                  : eventType === 2
                  ? "School/Gym Information"
                  : eventType === 3
                  ? "Seminar Information"
                  : null}
              </h1>
            </div>

            <div className="InputEventTitleDiv">
              <h4 className="">Image</h4>

              <span {...getRootProps()}>
                <input {...getInputProps()} />
                {eventImage ? (
                  <img
                    className="h-16 w-16 rounded-full"
                    src={
                      eventImage?.[0]?.preview
                        ? eventImage?.[0]?.preview
                        : eventImage
                    }
                  />
                ) : (
                  <img
                    className="h-16 w-16 rounded-full"
                    src="/img/no image.jpg"
                  />
                )}
                <i
                  className="fa fa-edit text-lg text-gray-800"
                  style={{ cursor: "pointer" }}
                ></i>
              </span>
              <span
                style={{
                  color: "#D14F4F",
                  opacity: errors?.eventImage ? 1 : 0,
                }}
              >
                {errors?.eventImage ?? "valid"}
              </span>
            </div>

            {(eventType === 1 || eventType === 3) && (
              <>
                <div className="InputEventTitleDiv">
                  <h4 className="">Event Title</h4>
                  <input
                    className="eventTitleInput"
                    type="text"
                    name="title"
                    onChange={(e) => {
                      setEventTitle(e.target.value);
                      setErrors({ ...errors, eventTitle: null });
                      // handleChangeEvent(e.target.value, "eventTitle");
                    }}
                    value={eventTitle}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.eventTitle ? 1 : 0,
                    }}
                  >
                    {errors?.eventTitle ?? "valid"}
                  </span>
                </div>

                <div className="InputEventTitleDiv">
                  <h4 className="">Event Description</h4>
                  <input
                    className="eventTitleInput"
                    type="text"
                    // placeholder="Event Title"
                    name="eventDescription"
                    onChange={(e) => {
                      setEventDescription(e.target.value);
                      setErrors({ ...errors, eventDescription: null });

                      // handleChangeEvent(e.target.value, "eventDescription");
                    }}
                    value={eventDescription}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.eventDescription ? 1 : 0,
                    }}
                  >
                    {errors?.eventDescription ?? "valid"}
                  </span>
                </div>

                <div className="EventAddAddressArea">
                  <h4 className="">
                    Event Address{eventType === 1 && "(Optional)"}
                  </h4>
                  <textarea
                    className="eventAddressArea"
                    placeholder=""
                    maxLength={4000}
                    value={eventAddress}
                    onChange={(e) => {
                      setEventAddress(e.target.value);
                      setErrors({ ...errors, eventAddress: null });

                      // handleChangeEvent(e.target.value, "eventAddress");
                    }}
                  />
                </div>

                <div className="EventAddZipCodeArea">
                  <h4 className="">
                    Event Zip Code{eventType === 1 && "(Optional)"}
                  </h4>
                  <input
                    className="eventZipCodeInput"
                    placeholder=""
                    maxLength={6}
                    onKeyDown={blockInvalidChar}
                    value={eventZipCode}
                    onChange={(e) => {
                      setEventZipCode(e.target.value.replace(/[^0-9.]/g, ""));
                      setErrors({ ...errors, eventZipCode: null });

                      // handleChangeEvent(
                      //   e.target.value.replace(/[^0-9.]/g, ""),
                      //   "eventZipCode"
                      // );
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.eventZipCode ? 1 : 0,
                    }}
                  >
                    {errors?.eventZipCode ?? "valid"}
                  </span>
                </div>

                <div className="SelectEventCountryDiv">
                  <h1>Select Event Country</h1>
                  <Select
                    className="selectinputEventCountry"
                    open={isOpenCountry}
                    onOpen={() => {
                      setIsOpenCountry(true);
                      // handleChangeEvent(true, "isOpenCountry");
                    }}
                    onClose={() => {
                      setIsOpenCountry(false);
                      // handleChangeEvent(false, "isOpenCountry");
                    }}
                    MenuProps={menuProps}
                    value={eventCountry}
                    onChange={(e) => {
                      setEventCountry(e.target.value);

                      // handleChangeEvent(e.target.value, "eventCountry");
                    }}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {countryListOptions?.map((country) => (
                      <MenuItem value={country.value}>{country.label}</MenuItem>
                    ))}
                  </Select>
                </div>
              </>
            )}

            {(eventType === 1 || eventType === 3) && (
              <div className="event-date-section flex justify-between">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Start Date"
                    value={eventStartDate}
                    // formatDate={(item) =>
                    //   moment(new Date()).format(
                    //     "DD-MM-YYYY"
                    //   )
                    // }
                    minDate={new Date()}
                    onChange={(e) => {
                      // handleChangeEvent(e, "eventStartDate");
                      setEventStartDate(e);
                    }}
                    // onChange={(e) => {
                    //   updateEventList(
                    //     index,
                    //     "start_date",
                    //     e
                    //   );
                    // }}
                    renderInput={(params) => <TextField {...params} />}
                    inputFormat="YYYY-MM-DD"
                    disablePast
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="End Date"
                    // formatDate={(item) =>
                    //   moment(new Date()).format(
                    //     "DD-MM-YYYY"
                    //   )
                    // }
                    value={eventEndDate}
                    onChange={(e) => {
                      // handleChangeEvent(e, "eventEndDate");
                      setEventEndDate(e);
                    }}
                    // onChange={(e) => {
                    //   updateEventList(
                    //     index,
                    //     "end_date",
                    //     e
                    //   );
                    // }}
                    minDate={eventStartDate}
                    renderInput={(params) => <TextField {...params} />}
                    inputFormat="YYYY-MM-DD"
                    disablePast
                  />
                </LocalizationProvider>
              </div>
            )}

            {eventType === 1 && (
              <div className="SchoolEventTimeEvent my-3">
                <h1>Select Event Time</h1>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="Basic example"
                    value={eventTime}
                    onChange={(newValue) => {
                      setEventTime(newValue);
                      setEventTimeChanged(true);
                      setErrors({ ...errors, eventTime: null });

                      // handleChangeEvent(newValue, "eventTime");
                    }}
                    // ampm={false}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <span
                  style={{
                    color: "#D14F4F",
                    opacity: errors?.eventTime ? 1 : 0,
                  }}
                >
                  {errors?.eventTime ?? "valid"}
                </span>
              </div>
            )}

            {(eventType === 1 || eventType === 3) && (
              <>
                <div className="SelectEventCountryDiv">
                  <h1>Organizer First Name</h1>
                  <input
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={eventOrganizerFirstName}
                    onChange={(e) => {
                      setEventOrganizerFirstName(e.target.value);
                      setErrors({ ...errors, eventOrganizerFirstName: null });

                      // handleChangeEvent(
                      //   e.target.value,
                      //   "eventOrganizerFirstName"
                      // );
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.eventOrganizerFirstName ? 1 : 0,
                    }}
                  >
                    {errors?.eventOrganizerFirstName ?? "valid"}
                  </span>
                </div>

                <div className="SelectEventCountryDiv">
                  <h1>Organizer Last Name</h1>
                  <input
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={eventOrganizerLastName}
                    onChange={(e) => {
                      setEventOrganizerLastName(e.target.value);
                      setErrors({ ...errors, eventOrganizerLastName: null });

                      // handleChangeEvent(
                      //   e.target.value,
                      //   "eventOrganizerLastName"
                      // );
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors.eventOrganizerLastName ? 1 : 0,
                    }}
                  >
                    {errors?.eventOrganizerLastName ?? "valid"}
                  </span>
                </div>

                <div className="SelectEventCountryDiv">
                  <h1>Organizer Phone Number</h1>
                  <input
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={eventOrganizerPhoneNumber}
                    onKeyDown={blockInvalidChar}
                    onChange={(e) => {
                      setEventOrganizerPhoneNumber(
                        e.target.value.replace(/[^0-9.]/g, "")
                      );
                      setErrors({ ...errors, eventOrganizerPhoneNumber: null });

                      // handleChangeEvent(
                      //   e.target.value.replace(/[^0-9.]/g, ""),

                      //   "eventOrganizerPhoneNumber"
                      // );
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.eventOrganizerPhoneNumber ? 1 : 0,
                    }}
                  >
                    {errors?.eventOrganizerPhoneNumber ?? "valid"}
                  </span>
                </div>

                <div className="SelectEventCountryDiv">
                  <h1>Organizer Email</h1>
                  <input
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={eventOrganizerEmail}
                    onChange={(e) => {
                      setEventOrganizerEmail(
                        e.target.value,
                        "eventOrganizerEmail"
                      );
                      setErrors({ ...errors, eventOrganizerEmail: null });

                      // handleChangeEvent(e.target.value, "eventOrganizerEmail");
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.eventOrganizerEmail ? 1 : 0,
                    }}
                  >
                    {errors?.eventOrganizerEmail ?? "valid"}
                  </span>
                </div>

                <div className="OrganizerSocialEvent">
                  <h1>Organizer Social Media Links</h1>
                  <input
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={eventOrganizerSocials}
                    onChange={(e) => {
                      setEventOrganizerSocials(e.target.value);
                      setErrors({ ...errors, eventOrganizerSocials: null });

                      // handleChangeEvent(
                      //   e.target.value,
                      //   "eventOrganizerSocials"
                      // );
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.eventOrganizerSocials ? 1 : 0,
                    }}
                  >
                    {errors?.eventOrganizerSocials ?? "valid"}
                  </span>
                </div>

                <div className="SelectEventCountryDiv">
                  <h1>Instructions for the event</h1>
                  <textarea
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={eventInstructions}
                    onChange={(e) => {
                      setEventInstructions(e.target.value, "eventInstructions");
                      setErrors({ ...errors, eventInstructions: null });

                      // handleChangeEvent(e.target.value, "eventInstructions");
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.eventInstructions ? 1 : 0,
                    }}
                  >
                    {errors?.eventInstructions ?? "valid"}
                  </span>
                </div>

                <div className="SelectEventCountryDiv">
                  <h1>Related Associations or Organizations</h1>
                  <textarea
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={relatedAsso}
                    onChange={(e) => {
                      setRelatedAsso(e.target.value);
                      setErrors({ ...errors, relatedAsso: null });

                      // handleChangeEvent(e.target.value, "relatedAsso");
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors.relatedAsso ? 1 : 0,
                    }}
                  >
                    {errors?.relatedAsso ?? "valid"}
                  </span>
                </div>
              </>
            )}

            {eventType === 2 && (
              <>
                <div className="SelectEventCountryDiv">
                  <h1>School/Gym Name</h1>
                  <input
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={schoolName}
                    onChange={(e) => {
                      setSchoolName(e.target.value);
                      setErrors({ ...errors, schoolName: null });

                      // handleChangeEvent(e.target.value, "schoolName");
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.schoolName ? 1 : 0,
                    }}
                  >
                    {errors?.schoolName ?? "valid"}
                  </span>
                </div>

                <div className="SelectEventCountryDiv">
                  <h1>School/Gym Address</h1>
                  <textarea
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    maxLength={4000}
                    value={schoolAddress}
                    onChange={(e) => {
                      setSchoolAddress(e.target.value, "schoolAddress");
                      setErrors({ ...errors, schoolAddress: null });

                      // handleChangeEvent(e.target.value, "schoolAddress");
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.schoolAddress ? 1 : 0,
                    }}
                  >
                    {errors?.schoolAddress ?? "valid"}
                  </span>
                </div>

                <div className="SelectEventCountryDiv">
                  <h1>School/Gym Zip Code</h1>
                  <input
                    type="text"
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    onKeyDown={blockInvalidChar}
                    //   maxLength={4000}
                    value={schoolZipCode}
                    onChange={(e) => {
                      setSchoolZipCode(e.target.value.replace(/[^0-9.]/g, ""));
                      setErrors({ ...errors, schoolZipCode: null });

                      // handleChangeEvent(
                      //   e.target.value.replace(/[^0-9.]/g, ""),
                      //   "schoolZipCode"
                      // );
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.schoolZipCode ? 1 : 0,
                    }}
                  >
                    {errors?.schoolZipCode ?? "valid"}
                  </span>
                </div>

                <div className="SelectEventCountryDiv">
                  <h1>School/Gym Country</h1>
                  <Select
                    className="selectinputEventCountry"
                    open={isOpenSchoolCountry}
                    onOpen={() => {
                      // setIsOpenSchoolCountry(true);
                      setIsOpenSchoolCountry(true);
                      // handleChangeEvent(true)
                    }}
                    onClose={() => {
                      setIsOpenSchoolCountry(false);
                      // setIsOpenSchoolCountry(false);
                    }}
                    MenuProps={menuProps}
                    value={schoolCountry}
                    onChange={(e) =>
                      // (e) => handleChangeEvent(e.target.value, "schoolCountry")
                      setSchoolCountry(e.target.value)
                    }
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {countryListOptions?.map((country) => (
                      <MenuItem value={country.value}>{country.label}</MenuItem>
                    ))}
                  </Select>
                </div>

                <div className="SelectEventCountryDiv">
                  <h1>School/Gym Owner First Name</h1>
                  <input
                    type="text"
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={schoolOwnerFName}
                    onChange={(e) => {
                      setSchoolOwnerFName(e.target.value);
                      setErrors({ ...errors, schoolOwnerFName: null });

                      // handleChangeEvent(e.target.value, "schoolOwnerFName");
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.schoolOwnerFName ? 1 : 0,
                    }}
                  >
                    {errors?.schoolOwnerFName ?? "valid"}
                  </span>
                </div>

                <div className="SelectEventCountryDiv">
                  <h1>School/Gym Owner Last Name</h1>
                  <input
                    type="text"
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={schoolOwnerLName}
                    onChange={(e) => {
                      setSchoolOwnerLName(e.target.value);
                      setErrors({ ...errors, schoolOwnerLName: null });

                      // handleChangeEvent(e.target.value, "schoolOwnerLName");
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.schoolOwnerLName ? 1 : 0,
                    }}
                  >
                    {errors?.schoolOwnerLName ?? "valid"}
                  </span>
                </div>

                <div className="SelectEventCountryDiv">
                  <h1>School/Gym Owner Phone Number</h1>
                  <input
                    type="text"
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={schoolOwnerPhone}
                    onKeyDown={blockInvalidChar}
                    onChange={(e) => {
                      setSchoolOwnerPhone(
                        e.target.value.replace(/[^0-9.]/g, "")
                      );
                      setErrors({ ...errors, schoolOwnerLName: null });

                      // handleChangeEvent(
                      //   e.target.value.replace(/[^0-9.]/g, ""),
                      //   "schoolOwnerPhone"
                      // );
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.schoolOwnerPhone ? 1 : 0,
                    }}
                  >
                    {errors?.schoolOwnerPhone ?? "valid"}
                  </span>
                </div>

                <div className="SelectEventCountryDiv">
                  <h1>School/Gym Owner Email</h1>
                  <input
                    type="text"
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={schoolOwnerEmail}
                    onChange={(e) => {
                      setSchoolOwnerEmail(e.target.value);
                      setErrors({ ...errors, schoolOwnerEmail: null });

                      // handleChangeEvent(e.target.value, "schoolOwnerEmail");
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.schoolOwnerEmail ? 1 : 0,
                    }}
                  >
                    {errors?.schoolOwnerEmail ?? "valid"}
                  </span>
                </div>

                <div className="SelectEventCountryDiv">
                  <h1>School/Gym Owner Social Media Links</h1>
                  <input
                    type="text"
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={schoolOwnerSocial}
                    onChange={(e) => {
                      setSchoolOwnerSocial(e.target.value);
                      setErrors({ ...errors, schoolOwnerSocial: null });

                      // handleChangeEvent(e.target.value, "schoolOwnerSocial");
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.schoolOwnerSocial ? 1 : 0,
                    }}
                  >
                    {errors?.schoolOwnerSocial ?? "valid"}
                  </span>
                </div>

                <div className="schoolPriceRangeDiv">
                  <h1>School/Gym Price Ranges</h1>
                  <div className="schoolPriceRangeMin">
                    <div className="Minimumdiv">
                      <div className="Minimum">
                        <h4>Minimum</h4>
                        <input
                          type="text"
                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                          placeholder=""
                          //   maxLength={4000}
                          onKeyDown={blockInvalidChar}
                          minLength={1}
                          maxLength={8}
                          value={schoolPriceRangeMin}
                          onChange={(e) => {
                            setSchoolPriceRangeMin(
                              e.target.value.replace(/[^0-9.]/g, "")
                            );
                            setErrors({
                              ...errors,
                              schoolPriceRangeMin: null,
                              schoolPriceRange: null,
                            });

                            // handleChangeEvent(
                            //   e.target.value.replace(/[^0-9.]/g, ""),
                            //   "schoolPriceRangeMin"
                            // );
                          }}
                        />
                        <span
                          style={{
                            color: "#D14F4F",
                            opacity: errors?.schoolPriceRangeMin ? 1 : 0,
                          }}
                        >
                          {errors?.schoolPriceRangeMin ?? "valid"}
                        </span>
                      </div>
                      <div className="Minimum1">
                        <h4>Maximum</h4>
                        <input
                          type="text"
                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                          placeholder=""
                          minLength={1}
                          maxLength={8}
                          //   maxLength={4000}
                          onKeyDown={blockInvalidChar}
                          value={schoolPriceRangeMax}
                          onChange={(e) => {
                            setSchoolPriceRangeMax(
                              e.target.value.replace(/[^0-9.]/g, "")
                            );
                            setErrors({
                              ...errors,
                              schoolPriceRangeMax: null,
                              schoolPriceRange: null,
                            });

                            // handleChangeEvent(
                            //   e.target.value.replace(/[^0-9.]/g, ""),
                            //   "schoolPriceRangeMax"
                            // );
                          }}
                        />
                        <span
                          style={{
                            color: "#D14F4F",
                            opacity: errors?.schoolPriceRangeMax ? 1 : 0,
                          }}
                        >
                          {errors?.schoolPriceRangeMax ?? "valid"}
                        </span>
                      </div>
                      <span
                        style={{
                          color: "#D14F4F",
                          opacity: errors?.schoolPriceRange ? 1 : 0,
                        }}
                      >
                        {errors?.schoolPriceRange ?? "valid"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="SelectEventCountryDiv">
                  <h1>School/Gym Days of operation</h1>
                  <input
                    type="text"
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    min={1}
                    max={7}
                    minLength={1}
                    maxLength={1}
                    step={1}
                    onKeyDown={blockInvalidChar}
                    //   maxLength={4000}
                    value={schoolOpenDays}
                    onChange={(e) => {
                      setSchoolOpenDays(e.target.value.replace(/[^0-7.]/g, ""));
                      setErrors({
                        ...errors,
                        schoolOpenDays: null,
                      });
                      // handleChangeEvent(
                      //   e.target.value.replace(/[^0-7.]/g, ""),
                      //   "schoolOpenDays"
                      // );
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.schoolOpenDays ? 1 : 0,
                    }}
                  >
                    {errors?.schoolOpenDays ?? "valid"}
                  </span>
                </div>

                <div className="SelectEventCountryDiv">
                  <h1>School/Gym Hours of operation</h1>
                  <input
                    type="text"
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    onKeyDown={blockInvalidChar}
                    //   maxLength={4000}
                    value={schoolOpenHours}
                    // minLength={5}
                    maxLength={2}
                    onChange={(e) => {
                      setSchoolOpenHours(
                        e.target.value.replace(/[^0-9.]/g, "")
                      );
                      setErrors({
                        ...errors,
                        schoolOpenHours: null,
                      });
                      // handleChangeEvent(
                      //   e.target.value.replace(/[^0-9.]/g, ""),
                      //   "schoolOpenHours"
                      // );
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.schoolOpenHours ? 1 : 0,
                    }}
                  >
                    {errors?.schoolOpenHours ?? "valid"}
                  </span>
                </div>

                <div className="SchoolIntroEvent">
                  <h1>School/Gym Introduction</h1>
                  <input
                    type="text"
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={schoolIntroduction}
                    onChange={(e) => {
                      setSchoolIntroduction(e.target.value);
                      setErrors({
                        ...errors,
                        schoolIntroduction: null,
                      });
                      // handleChangeEvent(e.target.value, "schoolIntroduction");
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.schoolIntroduction ? 1 : 0,
                    }}
                  >
                    {errors?.schoolIntroduction ?? "valid"}
                  </span>
                </div>

                <div className="SchoolInstructionEvent">
                  <h1>School/Gym Special Instructions</h1>
                  <input
                    type="text"
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={schoolSpecialInst}
                    onChange={(e) => {
                      setSchoolSpecialInst(e.target.value);
                      setErrors({
                        ...errors,
                        schoolSpecialInst: null,
                      });
                      // handleChangeEvent(e.target.value, "schoolSpecialInst");
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.schoolSpecialInst ? 1 : 0,
                    }}
                  >
                    {errors?.schoolSpecialInst ?? "valid"}
                  </span>
                </div>
              </>
            )}

            {(eventType === 1 || eventType === 3) && (
              <>
                <div className="EventAcceptForeignDiv">
                  <h1>Does this event accept foreign participants?</h1>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={isForeignPart}
                      onChange={
                        (e) => setIsForeignPart(e)
                        // handleChangeEvent(e, "isForeignPart")
                      }
                    >
                      <FormControlLabel
                        value={true}
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value={false}
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                {!isForeignPart && (
                  <div className="SeminarIfEventAdd">
                    <h1>
                      Why is this seminar only open to this group of people?
                      (Optional)
                    </h1>
                    <input
                      type="text"
                      className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                      placeholder=""
                      //   maxLength={4000}
                      value={reasonOpenSeminar}
                      onChange={(e) => {
                        setReasonOpenSeminar(e.target.value);
                        setErrors({
                          ...errors,
                          reasonOpenSeminar: null,
                        });
                        // handleChangeEvent(e.target.value, "reasonOpenSeminar");
                      }}
                    />
                  </div>
                )}
              </>
            )}

            {eventType === 3 && (
              <>
                <div className="CostSeminarEvent">
                  <h1>Cost of Seminar</h1>
                  <input
                    type="text"
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={seminarCost}
                    maxLength={10}
                    onKeyDown={blockInvalidChar}
                    onChange={(e) => {
                      setSeminarCost(e.target.value.replace(/[^0-9.]/g, ""));
                      setErrors({
                        ...errors,
                        seminarCost: null,
                      });
                      // handleChangeEvent(
                      //   e.target.value.replace(/[^0-9.]/g, ""),
                      //   "seminarCost"
                      // );
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.seminarCost ? 1 : 0,
                    }}
                  >
                    {errors.seminarCost ?? "valid"}
                  </span>
                </div>
                <div className="SpecialInstEvent">
                  <h1>Special Instructions</h1>
                  <textarea
                    type="text"
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={specialInstructions}
                    onChange={(e) => {
                      setSpecialInstructions(
                        e.target.value,
                        "specialInstructions"
                      );
                      setErrors({
                        ...errors,
                        specialInstructions: null,
                      });
                      // handleChangeEvent(e.target.value, "specialInstructions");
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.specialInstructions ? 1 : 0,
                    }}
                  >
                    {errors?.specialInstructions ?? "valid"}
                  </span>
                </div>

                <div className="EventDetailsEventDiv">
                  <h1>Event Details</h1>
                  <textarea
                    type="text"
                    className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                    placeholder=""
                    //   maxLength={4000}
                    value={eventDetails}
                    onChange={(e) => {
                      setEventDetails(e.target.value);
                      setErrors({
                        ...errors,
                        eventDetails: null,
                      });
                      // handleChangeEvent(e.target.value, "eventDetails");
                    }}
                  />
                  <span
                    style={{
                      color: "#D14F4F",
                      opacity: errors?.eventDetails ? 1 : 0,
                    }}
                  >
                    {errors?.eventDetails ?? "valid"}
                  </span>
                </div>
              </>
            )}

            {/* <div className="my-4">
                    {events.length - 1 === index && (
                      <button
                        type="button"
                        onClick={handleAddEvents}
                        className="add-event-btn"
                      >
                        Add more
                      </button>
                    )}
                  </div> */}

            <div className="SubmitHandlerEventAdd">
              <button type="button" onClick={(e) => validateSubmit(e)}>
                Submit
              </button>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
      {/* <div className=" w-full bg-blue-100 relative lg:ml-64 h-screen- overflow-y-auto">
        <main>
          <div className="pt-6 px-4">
            <div className="xl:gap-4 my-4">
              <div className="heading-top">
                <h3 className="text-black text-2xl font-medium">Edit Events</h3>
              </div>
              <div className="bg-white rounded-md mb-8 mt-3 p-4 sm:p-6 h-full ">
                <div className=" justify-between mb-12 mt-12">
                  <form className="blogs_forms" autoComplete="off">
                    <div className="form-field">
                      <div className="blog-item first blog-item">
                        <div className="blog_add">
                          <section className=" dark:bg-gray-900">
                            <div className="w-full rounded-lg">
                              <div>
                                <div className="space-y-4 md:space-y-6">
                                  <div>
                                    <div>
                                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Title
                                      </label>
                                      <input
                                        value={title}
                                        onChange={(e) => {
                                          setTitle(e.target.value);
                                        }}
                                        type="text"
                                        className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Add event title"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div>
                                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Location
                                      </label>
                                      <input
                                        value={location}
                                        onChange={(e) => {
                                          setLocation(e.target.value);
                                        }}
                                        type="text"
                                        className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Add event location"
                                      />
                                    </div>
                                  </div>
                                  <div className="event-date-section flex justify-between">
                                    <LocalizationProvider
                                      dateAdapter={AdapterDateFns}
                                    >
                                      <DesktopDatePicker
                                        label="start Date"
                                        //   inputFormat="DD-MM-YYYY"
                                        formatDate={(start_date) =>
                                          moment(new Date()).format(
                                            "DD-MM-YYYY"
                                          )
                                        }
                                        minDate={new Date()}
                                        value={start_date}
                                        onChange={(e) => {
                                          setStartdate(e);
                                        }}
                                        disablePast
                                        renderInput={(params) => (
                                          <TextField {...params} />
                                        )}
                                      />
                                    </LocalizationProvider>
                                    

                                    <LocalizationProvider
                                      dateAdapter={AdapterDateFns}
                                    >
                                      <DesktopDatePicker
                                        label="End Date"
                                        //   inputFormat="DD-MM-YYYY"
                                        formatDate={(end_date) =>
                                          moment(new Date()).format(
                                            "DD-MM-YYYY"
                                          )
                                        }
                                        minDate={new Date()}
                                        value={end_date}
                                        onChange={(e) => {
                                          setEnddate(e);
                                        }}
                                        disablePast
                                        renderInput={(params) => (
                                          <TextField {...params} />
                                        )}
                                      />
                                    </LocalizationProvider>
                                  </div>
                                  <div>
                                    {" "}
                                    <div>
                                      <label
                                        for="message"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                      >
                                        Descripition
                                      </label>
                                      <textarea
                                        value={description}
                                        onChange={(e) => {
                                          setDescription(e.target.value);
                                        }}
                                        rows="4"
                                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Write your descripition here..."
                                      ></textarea>
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
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>

                    <div className="submit_cancel-btn flex">
                      <div>
                        <button
                          onClick={(e) => submitHandler(e)}
                          type="button"
                          className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-90 mr-12"
                        >
                          update
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
      </div> */}
    </>
  );
}
