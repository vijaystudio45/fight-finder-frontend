import React, { useState, useEffect, useMemo, useCallback } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import moment from "moment";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validations } from "../utils";
import countryList from "react-select-country-list";
import { addEventAction } from "../Redux/Action/Events-new-action";
import Box from "@mui/material/Box";
import swal from "sweetalert";
// import $ from "jquery";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDropzone } from "react-dropzone";

function User_add_event() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [events, setEvents] = useState([
    {
      eventType: 1,

      isOpen: false,
      isOpenCountry: false,

      // ******************* EVENT *******************
      eventImage: null,
      eventStartDate: new Date(),
      eventEndDate: new Date(),
      eventTitle: "",
      eventAddress: "",
      eventZipCode: "",
      eventCountry: "US",
      eventTime: null,
      eventOrganizerFirstName: "",
      eventOrganizerLastName: "",
      eventOrganizerPhoneNumber: "",
      eventOrganizerEmail: "",
      eventOrganizerSocials: "",
      eventInstructions: "",
      isForeignPart: true,
      relatedAsso: "",

      // ******************* SCHOOL OR GYM *******************
      schoolName: "",
      schoolAddress: "",
      schoolZipCode: "",
      schoolCountry: "US",
      schoolOwnerFName: "",
      schoolOwnerLName: "",
      schoolOwnerPhone: "",
      schoolOwnerEmail: "",
      schoolOwnerSocial: "",
      schoolPriceRangeMin: "",
      schoolPriceRangeMax: "",
      schoolOpenDays: "",
      schoolOpenHours: "",
      schoolSpecialInst: "",
      schoolIntroduction: "",

      // ******************* SEMINAR *******************
      reasonOpenSeminar: "",
      seminarCost: "",
      specialInstructions: "",
      eventDetails: "",
      eventDescription: "",
    },
  ]);

  // ******************* EVENT *******************
  const [eventImage, setEventImage] = useState();
  const [eventStartDate, setEventStartDate] = useState(new Date());
  const [eventEndDate, setEventEndDate] = useState(new Date());
  const [eventTitle, setEventTitle] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [eventZipCode, setEventZipCode] = useState("");
  const [eventCountry, setEventCountry] = useState("US");
  const [eventTime, setEventTime] = useState(null);
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

  const [files, setFiles] = useState([]);
  const [rerender, setRerender] = useState(false);

  const [errors, setErrors] = useState([
    {
      // ******************* EVENT *******************
      eventTitle: null,
      eventDescription: null,
      eventImage: null,

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
    },
  ]);

  const countryListOptions = useMemo(() => countryList().getData(), []);

  const { userData } = useSelector((state) => state.authReducer);

  const { success: successAdd, error: errorAdd } = useSelector(
    (state) => state.addEventReducer
  );

  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  const menuProps = {
    variant: "menu",
    disableScrollLock: true,
  };

  useEffect(() => {
    const handler = () => {
      // setIsOpen(false);
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

  const handleChangeEvent = (value, index, field_name) => {
    let list = [...events];

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
      const inverseValue = list[index][field_name];
      list[index][field_name] = !inverseValue;
    } else if (field_name === "eventTime") {
      const timeValue = value;
      list[index][field_name] = timeValue;
    } else if (field_name === "eventImage") {
      const imageValue = value.target.files[0];
      list[index][field_name] = imageValue;
    } else {
      list[index][field_name] = value;
    }

    let errorList = [...errors];
    for (let index = 0; index < errors.length; index++) {
      // errorList[index][field_name] = null;

      if (Object.keys(errorList[index]).indexOf(field_name) > -1) {
        // console.log("has test1");
        errorList[index][field_name] = null;
      }
    }
    setErrors(errorList);
    // let errorList = [...errors];
    // errorList[index][field_name] = null;

    // setErrors(errorList);

    setEvents(list);
  };

  const handleServiceRemove = (index) => {
    let list = [...events];
    list.splice(index, 1);
    setEvents(list);
  };

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
        setFiles([
          ...files,
          ...acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
              title: file.name,
            })
          ),
        ]);

        // let errorList = [...errors];
        // console.log("b4", errorList);

        // for (let index = 0; index < errors.length; index++) {
        //   // errorList[index]["eventImage"] = null;

        //   Object.assign(errorList[index], { eventImage: null });
        //   // if (Object.keys(errorList[index]).indexOf("eventImage") > -1) {
        //   //   console.log("true");
        //   //   // errorList[index].eventImage = null;
        //   // }

        //   // setErrors(errorList);
        // }
        // console.log("has test1", errorList);
        // // errorList.map((item) => {
        // //   item.eventImage = null;
        // // });

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
      [files]
    ),
  });

  const handleAddEvents = () => {
    setEvents([
      ...events,
      {
        eventType: 1,

        isOpen: false,
        isOpenCountry: false,

        // ******************* EVENT *******************
        eventImage: null,
        eventStartDate: new Date(),
        eventEndDate: new Date(),
        eventTitle: "",
        eventAddress: "",
        eventZipCode: "",
        eventCountry: "US",
        eventTime: null,
        eventOrganizerFirstName: "",
        eventOrganizerLastName: "",
        eventOrganizerPhoneNumber: "",
        eventOrganizerEmail: "",
        eventOrganizerSocials: "",
        eventInstructions: "",
        isForeignPart: true,
        relatedAsso: "",

        // ******************* SCHOOL OR GYM *******************
        schoolName: "",
        schoolAddress: "",
        schoolZipCode: "",
        schoolCountry: "US",
        schoolOwnerFName: "",
        schoolOwnerLName: "",
        schoolOwnerPhone: "",
        schoolOwnerEmail: "",
        schoolOwnerSocial: "",
        schoolPriceRangeMin: "",
        schoolPriceRangeMax: "",
        schoolOpenDays: "",
        schoolOpenHours: "",
        schoolSpecialInst: "",
        schoolIntroduction: "",

        // ******************* SEMINAR *******************
        reasonOpenSeminar: "",
        seminarCost: "",
        specialInstructions: "",
        eventDetails: "",
        eventDescription: "",
      },
    ]);
    setErrors([
      ...errors,
      {
        // ******************* EVENT *******************
        eventTitle: null,
        eventDescription: null,
        eventImage: null,

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
      },
    ]);
  };

  const validateSubmit = (e) => {
    e.preventDefault();

    const tempErrors = [];

    for (let index = 0; index < events.length; index++) {
      // if (events[index]?.eventType === 2 && !events[index]?.schoolName) {

      tempErrors.push({
        eventImage: !files[index] ? "This field is mandatory" : null,
        schoolName:
          events[index]?.eventType === 2 && !events[index]?.schoolName
            ? "This field is mandatory"
            : null,
        schoolAddress:
          events[index].eventType === 2 && !events[index].schoolAddress
            ? "This field is mandatory"
            : null,
        schoolZipCode:
          events[index].eventType === 2 &&
          events[index].schoolZipCode.length < 6
            ? "Please check this input and try again."
            : null,
        schoolOwnerFName:
          events[index].eventType === 2 && !events[index].schoolOwnerFName
            ? "This field is mandatory"
            : null,
        schoolOwnerLName:
          events[index].eventType === 2 && !events[index].schoolOwnerLName
            ? "This field is mandatory"
            : null,
        schoolOwnerPhone:
          events[index].eventType === 2 && !events[index].schoolOwnerPhone
            ? "This field is mandatory"
            : null,
        schoolPriceRangeMin:
          events[index].eventType === 2 && !events[index].schoolPriceRangeMin
            ? "This field is mandatory"
            : null,
        schoolPriceRangeMax:
          events[index].eventType === 2 && !events[index].schoolPriceRangeMax
            ? "This field is mandatory"
            : null,
        schoolPriceRange:
          events[index].eventType === 2 &&
          events[index].schoolPriceRangeMin > events[index].schoolPriceRangeMax
            ? "Please check the price range and try again"
            : null,
        schoolOpenDays:
          events[index].eventType === 2 && !events[index].schoolOpenDays
            ? "This field is mandatory"
            : null,
        schoolOpenHours:
          events[index].eventType === 2 && !events[index].schoolOpenHours
            ? "This field is mandatory"
            : null,
        schoolIntroduction:
          events[index].eventType === 2 && !events[index].schoolIntroduction
            ? "This field is mandatory"
            : null,
        schoolSpecialInst:
          events[index].eventType === 2 && !events[index].schoolSpecialInst
            ? "This field is mandatory"
            : null,
        schoolOwnerEmail:
          events[index].eventType === 2
            ? validations.email(events[index].schoolOwnerEmail)
            : null,
        // zipcode: zipcode.length < 6 && "Please check this input and try again.",
        schoolOwnerSocial:
          events[index].eventType === 2 && !events[index].schoolOwnerSocial
            ? "This field is mandatory"
            : null,
        // eventTitle: events.forEach((element) => {
        //   (element.events[index].eventType === 1 || element.events[index].eventType === 3) &&
        //     !element.eventTitle &&
        //     "This field is mandatory";
        // }),
        eventTitle:
          (events[index].eventType === 1 || events[index].eventType === 3) &&
          !events[index].eventTitle
            ? "This field is mandatory"
            : null,
        eventDescription:
          (events[index].eventType === 1 || events[index].eventType === 3) &&
          !events[index].eventDescription
            ? "This field is mandatory"
            : null,
        eventOrganizerFirstName:
          (events[index].eventType === 1 || events[index].eventType === 3) &&
          !events[index].eventOrganizerFirstName
            ? "This field is mandatory"
            : null,
        eventOrganizerLastName:
          (events[index].eventType === 1 || events[index].eventType === 3) &&
          !events[index].eventOrganizerLastName
            ? "This field is mandatory"
            : null,
        eventOrganizerPhoneNumber:
          (events[index].eventType === 1 || events[index].eventType === 3) &&
          !events[index].eventOrganizerPhoneNumber
            ? "This field is mandatory"
            : null,
        eventOrganizerEmail:
          events[index].eventType === 1 || events[index].eventType === 3
            ? validations.email(events[index].eventOrganizerEmail)
            : null,
        eventOrganizerSocials:
          (events[index].eventType === 1 || events[index].eventType === 3) &&
          !events[index].eventOrganizerSocials
            ? "This field is mandatory"
            : null,
        eventInstructions:
          (events[index].eventType === 1 || events[index].eventType === 3) &&
          !events[index].eventInstructions
            ? "This field is mandatory"
            : null,
        relatedAsso:
          (events[index].eventType === 1 || events[index].eventType === 3) &&
          !events[index].relatedAsso
            ? "This field is mandatory"
            : null,
        seminarCost:
          events[index].eventType === 3 && !events[index].seminarCost
            ? "This field is mandatory"
            : null,
        specialInstructions:
          events[index].eventType === 3 && !events[index].specialInstructions
            ? "This field is mandatory"
            : null,
        eventDetails:
          events[index].eventType === 3 && !events[index].eventDetails
            ? "This field is mandatory"
            : null,
        eventAddress:
          events[index].eventType === 3 && !events[index].eventAddress
            ? "This field is mandatory"
            : null,
        eventZipCode:
          events[index].eventType === 3 && !events[index].eventZipCode
            ? "This field is mandatory"
            : null,
        eventTime:
          events[index].eventType === 1 && !events[index].eventTime
            ? "This field is mandatory"
            : null,
      });
    }

    setErrors(tempErrors);

    for (let index = 0; index < tempErrors.length; index++) {
      let noError = Object.values(tempErrors[index]).every(
        (x) => x === null || x === ""
      );
      if (!noError) {
        window.scrollTo(0, 0);

        // setTimeout(function () {
        //   $("#error_move").attr("id", "");
        //   $(".error").first().attr("id", "error_move");
        //   $(window).scrollTop($("#error_move").position().top);
        // }, 500);
        return;
      }
    }
    // console.log("pass");

    submitHandler();
  };

  const submitHandler = () => {
    // console.log("passed", events);

    setRerender(true);

    const formData = new FormData();

    let eventsArr = [];
    let schoolArr = [];
    let seminarArr = [];

    for (var index = 0; index < events.length; index++) {
      // SCHOOL / GYM
      if (events[index].eventType === 2) {
        schoolArr.push({
          start_date: moment(events[index].eventStartDate).format("YYYY-MM-DD"),
          end_date: moment(events[index].eventEndDate).format("YYYY-MM-DD"),
          description: events[index].eventDescription,
          is_approved: userData?.role === 0 ? true : false,
          title: events[index].schoolName,
          address: events[index].schoolAddress,
          zip_code: events[index].schoolZipCode,
          country: events[index].schoolCountry,
          owner_first_name: events[index].schoolOwnerFName,
          owner_last_name: events[index].schoolOwnerLName,
          owner_phone_number: events[index].schoolOwnerPhone,
          owner_email: events[index].schoolOwnerEmail,
          price_min_ranges: events[index].schoolPriceRangeMin,
          price_max_ranges: events[index].schoolPriceRangeMax,
          days_of_operation: events[index].schoolOpenDays,
          hours_of_operation: events[index].schoolOpenHours,
          introduction: events[index].schoolIntroduction,
          owner_social_media_links: events[index].schoolOwnerSocial,
          special_instructions: events[index].schoolSpecialInst,
          user: userData.id,
          type: "SchoolGym",
        });

        // if (events[index].eventType === 2 && schoolArr?.length > 0) {
        //   schoolArr[index]["type"] = "SchoolGym";
        // }
      }

      if (events[index].eventType === 1) {
        eventsArr.push({
          start_date: moment(events[index].eventStartDate).format("YYYY-MM-DD"),
          end_date: moment(events[index].eventEndDate).format("YYYY-MM-DD"),
          description: events[index].eventDescription,
          is_approved: userData?.role === 0 ? true : false,
          title: events[index].eventTitle,
          country: events[index].eventCountry,
          time: events[index].eventTime,
          organizer_first_name: events[index].eventOrganizerFirstName,
          organizer_last_name: events[index].eventOrganizerLastName,
          organizer_phone_number: events[index].eventOrganizerPhoneNumber,
          organizer_email: events[index].eventOrganizerEmail,
          organizer_social_media_links: events[index].eventOrganizerSocials,
          does_this_event_accept_foreign_participants:
            events[index].isForeignPart,
          instructions_for_the_event: events[index].eventInstructions,
          related_associations_or_organizations: events[index].relatedAsso,
          eventType: events[index].eventType,
          user: userData.id,
          type: "Events",
        });

        // if (events[index].eventType === 1) {
        //   eventsArr[index]["type"] = "Events";
        // }

        if (events[index].eventAddress) {
          eventsArr[index]["eventAddress"] = events[index].eventAddress;
        }
        if (events[index].eventZipCode) {
          eventsArr[index]["eventZipCode"] = events[index].eventZipCode;
        }
      }

      if (events[index].eventType === 3) {
        seminarArr.push({
          start_date: moment(events[index].eventStartDate).format("YYYY-MM-DD"),
          end_date: moment(events[index].eventEndDate).format("YYYY-MM-DD"),
          description: events[index].eventDescription,
          is_approved: userData?.role === 0 ? true : false,
          title: events[index].eventTitle,
          address: events[index].eventAddress,
          zip_code: events[index].eventZipCode,
          country: events[index].eventCountry,
          time: events[index].eventTime,
          organizer_first_name: events[index].eventOrganizerFirstName,
          organizer_last_name: events[index].eventOrganizerLastName,
          organizer_phone_number: events[index].eventOrganizerPhoneNumber,
          organizer_email: events[index].eventOrganizerEmail,
          organizer_social_media_links: events[index].eventOrganizerSocials,
          does_this_event_accept_foreign_participants:
            events[index].isForeignPart,
          instructions_for_the_event: events[index].eventInstructions,
          related_associations_or_organizations: events[index].relatedAsso,
          cost_of_seminar: events[index].seminarCost,
          special_instructions: events[index].specialInstructions,
          details: events[index].eventDetails,
          eventType: events[index].eventType,
          user: userData.id,
          type: "SeminarInformation",
        });

        // if (events[index].eventType === 3) {
        //   seminarArr[index]["type"] = "SeminarInformation";
        // }
        if (events[index].reasonOpenSeminar) {
          seminarArr[index]["reasonOpenSeminar"] = events[index].eventZipCode;
        }
      }
    }

    if (eventsArr?.length > 0) {
      for (let index = 0; index < eventsArr.length; index++) {
        formData.append("event", JSON.stringify(eventsArr[index]));
        if (files?.length > 0 && files[index]) {
          formData.append("image", files[index]);
        }
      }
      dispatch(addEventAction(formData, "event"));
    }
    if (schoolArr?.length > 0) {
      for (let index = 0; index < schoolArr.length; index++) {
        formData.append("school", JSON.stringify(schoolArr[index]));
        if (files?.length > 0 && files[index]) {
          formData.append("image", files[index]);
        }
      }
      dispatch(addEventAction(formData, "school"));
    }
    if (seminarArr?.length > 0) {
      for (let index = 0; index < seminarArr.length; index++) {
        formData.append("seminar", JSON.stringify(seminarArr[index]));
        if (files?.length > 0 && files[index]) {
          formData.append("image", files[index]);
        }
      }
      dispatch(addEventAction(formData, "seminar"));
    }
  };

  useEffect(() => {
    if (successAdd && rerender) {
      swal({
        title: "Successfully Complete",
        text: "Event(s) added successfully",
        className: "successAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 5000,
      });
      navigate("/events-list");
    }

    // if (errorAdd && rerender) {
    //   swal({
    //     title: "Error",
    //     text: errorAdd,
    //     className: "errorAlert",
    //     icon: "/img/image 2.png",
    //     buttons: false,
    //     timer: 5000,
    //   });
    // }
  }, [successAdd]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [errorAdd]);

  const imageMimeType = /image\/(png|jpg|jpeg)/i;

  const mapped =
    errorAdd && Object.entries(errorAdd)?.map?.(([k, v]) => `${k}: ${v}`);

  return (
    <>
      {/* {isLoading && <LoadingSpinner />} */}
      <>
        <div className=" w-full bg-blue-100 relative overflow-y-auto">
          <main>
            <div className="pt-6 px-4">
              <div className="xl:gap-4 my-4">
                <div className="common-text-font-fam heading-top">
                  <h3 className="text-black text-3xl font-bold font-medium ">
                    Add Event
                  </h3>
                </div>
                <div className="terms-privacy-fight bg-white rounded-md mb-8 mt-3 p-4 sm:p-6">
                  <div className=" justify-between mb-12 mt-12">
                    <div className="blog_add">
                      <section className=" dark:bg-gray-900">
                        <div className="blogs_forms w-full rounded-lg">
                          <div>
                            <div className="userform">
                              {/* <div className="h-100 d-flex align-items-center justify-content-center"> */}
                              {/* {JSON.stringify(errorAdd)} */}

                              <div
                                style={{ paddingBottom: errorAdd && "30px" }}
                              >
                                {errorAdd &&
                                  mapped?.map?.((item, index) => (
                                    <div
                                      key={index}
                                      style={{ color: "#D14F4F" }}
                                    >
                                      <li
                                        className="travelcompany-input"
                                        key={index}
                                      >
                                        <span className="input-label">
                                          {item}
                                        </span>
                                      </li>
                                    </div>
                                  ))}
                              </div>

                              {events?.map((item, index) => (
                                <>
                                  <div
                                    key={index}
                                    className="SelectEventTypeDiv my-4 align-items-center justify-content-center"
                                  >
                                    <h1 className="text-xl font-bold">Select the type of event</h1>
                                    <Select
                                      className="selectinputEventType"
                                      open={item.isOpen}
                                      onOpen={() => {
                                        handleChangeEvent(
                                          true,
                                          index,
                                          "isOpen"
                                        );
                                      }}
                                      onClose={() => {
                                        handleChangeEvent(
                                          false,
                                          index,
                                          "isOpen"
                                        );
                                      }}
                                      MenuProps={menuProps}
                                      value={item.eventType}
                                      onChange={(e) => {
                                        handleChangeEvent(
                                          e.target.value,
                                          index,
                                          "eventType"
                                        );
                                      }}
                                      displayEmpty
                                      inputProps={{
                                        "aria-label": "Without label",
                                      }}
                                    >
                                      <MenuItem value={1}>Event</MenuItem>
                                      <MenuItem value={2}>
                                        School or Gym
                                      </MenuItem>
                                      <MenuItem value={3}>Seminar</MenuItem>
                                    </Select>
                                  </div>

                                  <div className="EventdetailsEventsDiv">
                                    <h1 className="">
                                      {item.eventType === 1
                                        ? "Event Information"
                                        : item.eventType === 2
                                        ? "School/Gym Information"
                                        : item.eventType === 3
                                        ? "Seminar Information"
                                        : null}
                                    </h1>
                                  </div>

                                  <div className="InputEventTitleDiv">
                                    <h4 className="">Image</h4>

                                    <span {...getRootProps()}>
                                      <input {...getInputProps()} />
                                      {files[index] ? (
                                        <img
                                          className="h-16 w-16 rounded-full"
                                          src={files[index]?.preview}
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
                                        opacity: errors[index]?.eventImage
                                          ? 1
                                          : 0,
                                      }}
                                    >
                                      {errors[index]?.eventImage ?? "valid"}
                                    </span>
                                  </div>

                                  {(item.eventType === 1 ||
                                    item.eventType === 3) && (
                                    <>
                                      <div className="InputEventTitleDiv">
                                        <h4 className="">Event Title</h4>
                                        <input
                                          className="eventTitleInput"
                                          type="text"
                                          name="title"
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "eventTitle"
                                            );
                                          }}
                                          value={item.eventTitle}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]?.eventTitle
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.eventTitle ?? "valid"}
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
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "eventDescription"
                                            );
                                          }}
                                          value={item.eventDescription}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.eventDescription
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.eventDescription ??
                                            "valid"}
                                        </span>
                                      </div>

                                      <div className="EventAddAddressArea">
                                        <h4 className="">
                                          Event Address
                                          {item.eventType === 1 && "(Optional)"}
                                        </h4>
                                        <textarea
                                          className="eventAddressArea"
                                          placeholder=""
                                          maxLength={4000}
                                          value={item.eventAddress}
                                          onChange={(e) => {
                                            // setEventAddress(e.target.value);
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "eventAddress"
                                            );
                                          }}
                                        />
                                      </div>

                                      <div className="EventAddZipCodeArea">
                                        <h4 className="">
                                          Event Zip Code
                                          {item.eventType === 1 && "(Optional)"}
                                        </h4>
                                        <input
                                          className="eventZipCodeInput"
                                          placeholder=""
                                          maxLength={6}
                                          onKeyDown={blockInvalidChar}
                                          value={item.eventZipCode}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value.replace(
                                                /[^0-9.]/g,
                                                ""
                                              ),
                                              index,
                                              "eventZipCode"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]?.eventZipCode
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.eventZipCode ??
                                            "valid"}
                                        </span>
                                      </div>

                                      <div className="SelectEventCountryDiv">
                                        <h1>Select Event Country</h1>
                                        <Select
                                          className="selectinputEventCountry"
                                          open={item.isOpenCountry}
                                          onOpen={() => {
                                            handleChangeEvent(
                                              true,
                                              index,
                                              "isOpenCountry"
                                            );
                                          }}
                                          onClose={() => {
                                            handleChangeEvent(
                                              false,
                                              index,
                                              "isOpenCountry"
                                            );
                                          }}
                                          MenuProps={menuProps}
                                          value={item.eventCountry}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "eventCountry"
                                            );
                                          }}
                                          displayEmpty
                                          inputProps={{
                                            "aria-label": "Without label",
                                          }}
                                        >
                                          {countryListOptions?.map(
                                            (country) => (
                                              <MenuItem
                                                key={country.value}
                                                value={country.value}
                                              >
                                                {country.label}
                                              </MenuItem>
                                            )
                                          )}
                                        </Select>
                                      </div>
                                    </>
                                  )}

                                  {(item.eventType === 1 ||
                                    item.eventType === 3) && (
                                    <div className="event-date-section flex justify-between">
                                      <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                      >
                                        <DatePicker
                                          label="Start Date"
                                          value={item.eventStartDate}
                                          // formatDate={(item) =>
                                          //   moment(new Date()).format(
                                          //     "DD-MM-YYYY"
                                          //   )
                                          // }
                                          minDate={new Date()}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e,
                                              index,
                                              "eventStartDate"
                                            );
                                            // setEventStartDate(e);
                                          }}
                                          // onChange={(e) => {
                                          //   updateEventList(
                                          //     index,
                                          //     "start_date",
                                          //     e
                                          //   );
                                          // }}
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
                                          value={item.eventEndDate}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e,
                                              index,
                                              "eventEndDate"
                                            );
                                            // setEventEndDate(e);
                                          }}
                                          // onChange={(e) => {
                                          //   updateEventList(
                                          //     index,
                                          //     "end_date",
                                          //     e
                                          //   );
                                          // }}
                                          minDate={item.eventStartDate}
                                          renderInput={(params) => (
                                            <TextField {...params} />
                                          )}
                                          inputFormat="YYYY-MM-DD"
                                          disablePast
                                        />
                                      </LocalizationProvider>
                                    </div>
                                  )}

                                  {item.eventType === 1 && (
                                    <div className="SchoolEventTimeEvent my-3">
                                      <h1>Select Event Time</h1>
                                      <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                      >
                                        <TimePicker
                                          label="Basic example"
                                          value={item.eventTime}
                                          onChange={(newValue) => {
                                            handleChangeEvent(
                                              newValue,
                                              index,
                                              "eventTime"
                                            );
                                          }}
                                          renderInput={(params) => (
                                            <TextField {...params} />
                                          )}
                                        />
                                      </LocalizationProvider>
                                      <span
                                        style={{
                                          color: "#D14F4F",
                                          opacity: errors[index]?.eventTime
                                            ? 1
                                            : 0,
                                        }}
                                      >
                                        {errors[index]?.eventTime ?? "valid"}
                                      </span>
                                    </div>
                                  )}

                                  {(item.eventType === 1 ||
                                    item.eventType === 3) && (
                                    <>
                                      <div className="SelectEventCountryDiv">
                                        <h1>Organizer First Name</h1>
                                        <input
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.eventOrganizerFirstName}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "eventOrganizerFirstName"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.eventOrganizerFirstName
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]
                                            ?.eventOrganizerFirstName ??
                                            "valid"}
                                        </span>
                                      </div>

                                      <div className="SelectEventCountryDiv">
                                        <h1>Organizer Last Name</h1>
                                        <input
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.eventOrganizerLastName}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "eventOrganizerLastName"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.eventOrganizerLastName
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]
                                            ?.eventOrganizerLastName ?? "valid"}
                                        </span>
                                      </div>

                                      <div className="SelectEventCountryDiv">
                                        <h1>Organizer Phone Number</h1>
                                        <input
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.eventOrganizerPhoneNumber}
                                          onKeyDown={blockInvalidChar}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value.replace(
                                                /[^0-9.]/g,
                                                ""
                                              ),
                                              index,
                                              "eventOrganizerPhoneNumber"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.eventOrganizerPhoneNumber
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]
                                            ?.eventOrganizerPhoneNumber ??
                                            "valid"}
                                        </span>
                                      </div>

                                      <div className="SelectEventCountryDiv">
                                        <h1>Organizer Email</h1>
                                        <input
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.eventOrganizerEmail}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "eventOrganizerEmail"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.eventOrganizerEmail
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.eventOrganizerEmail ??
                                            "valid"}
                                        </span>
                                      </div>

                                      <div className="OrganizerSocialEvent">
                                        <h1>Organizer Social Media Links</h1>
                                        <input
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.eventOrganizerSocials}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "eventOrganizerSocials"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.eventOrganizerSocials
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]
                                            ?.eventOrganizerSocials ?? "valid"}
                                        </span>
                                      </div>

                                      <div className="SelectEventCountryDiv">
                                        <h1>Instructions for the event</h1>
                                        <textarea
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.eventInstructions}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "eventInstructions"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.eventInstructions
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.eventInstructions ??
                                            "valid"}
                                        </span>
                                      </div>

                                      <div className="SelectEventCountryDiv">
                                        <h1>
                                          Related Associations or Organizations
                                        </h1>
                                        <textarea
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.relatedAsso}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "relatedAsso"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]?.relatedAsso
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.relatedAsso ??
                                            "valid"}
                                        </span>
                                      </div>
                                    </>
                                  )}

                                  {item.eventType === 2 && (
                                    <>
                                      <div className="SelectEventCountryDiv">
                                        <h1>School/Gym Name</h1>
                                        <input
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.schoolName}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "schoolName"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]?.schoolName
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.schoolName ?? "valid"}
                                        </span>
                                      </div>

                                      <div className="SelectEventCountryDiv">
                                        <h1>School/Gym Address</h1>
                                        <textarea
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          maxLength={4000}
                                          value={item.schoolAddress}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "schoolAddress"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.schoolAddress
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.schoolAddress ??
                                            "valid"}
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
                                          value={item.schoolZipCode}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value.replace(
                                                /[^0-9.]/g,
                                                ""
                                              ),
                                              index,
                                              "schoolZipCode"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.schoolZipCode
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.schoolZipCode ??
                                            "valid"}
                                        </span>
                                      </div>

                                      <div className="SelectEventCountryDiv">
                                        <h1>School/Gym Country</h1>
                                        <Select
                                          className="selectinputEventCountry"
                                          open={item.isOpenSchoolCountry}
                                          onOpen={() => {
                                            // setIsOpenSchoolCountry(true);
                                            handleChangeEvent(
                                              true,
                                              index,
                                              "isOpenSchoolCountry"
                                            );
                                          }}
                                          onClose={() => {
                                            handleChangeEvent(
                                              false,
                                              index,
                                              "isOpenSchoolCountry"
                                            );
                                            // setIsOpenSchoolCountry(false);
                                          }}
                                          MenuProps={menuProps}
                                          value={item.schoolCountry}
                                          onChange={
                                            (e) =>
                                              handleChangeEvent(
                                                e.target.value,
                                                index,
                                                "schoolCountry"
                                              )
                                            // setSchoolCountry(e.target.value)
                                          }
                                          displayEmpty
                                          inputProps={{
                                            "aria-label": "Without label",
                                          }}
                                        >
                                          {countryListOptions?.map(
                                            (country) => (
                                              <MenuItem
                                                key={country.value}
                                                value={country.value}
                                              >
                                                {country.label}
                                              </MenuItem>
                                            )
                                          )}
                                        </Select>
                                      </div>

                                      <div className="SelectEventCountryDiv">
                                        <h1>School/Gym Owner First Name</h1>
                                        <input
                                          type="text"
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.schoolOwnerFName}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "schoolOwnerFName"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.schoolOwnerFName
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.schoolOwnerFName ??
                                            "valid"}
                                        </span>
                                      </div>

                                      <div className="SelectEventCountryDiv">
                                        <h1>School/Gym Owner Last Name</h1>
                                        <input
                                          type="text"
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.schoolOwnerLName}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "schoolOwnerLName"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.schoolOwnerLName
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.schoolOwnerLName ??
                                            "valid"}
                                        </span>
                                      </div>

                                      <div className="SelectEventCountryDiv">
                                        <h1>School/Gym Owner Phone Number</h1>
                                        <input
                                          type="text"
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.schoolOwnerPhone}
                                          onKeyDown={blockInvalidChar}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value.replace(
                                                /[^0-9.]/g,
                                                ""
                                              ),
                                              index,
                                              "schoolOwnerPhone"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.schoolOwnerPhone
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.schoolOwnerPhone ??
                                            "valid"}
                                        </span>
                                      </div>

                                      <div className="SelectEventCountryDiv">
                                        <h1>School/Gym Owner Email</h1>
                                        <input
                                          type="text"
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.schoolOwnerEmail}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "schoolOwnerEmail"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.schoolOwnerEmail
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.schoolOwnerEmail ??
                                            "valid"}
                                        </span>
                                      </div>

                                      <div className="SelectEventCountryDiv">
                                        <h1>
                                          School/Gym Owner Social Media Links
                                        </h1>
                                        <input
                                          type="text"
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.schoolOwnerSocial}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "schoolOwnerSocial"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.schoolOwnerSocial
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.schoolOwnerSocial ??
                                            "valid"}
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
                                                value={item.schoolPriceRangeMin}
                                                onChange={(e) => {
                                                  handleChangeEvent(
                                                    e.target.value.replace(
                                                      /[^0-9.]/g,
                                                      ""
                                                    ),
                                                    index,
                                                    "schoolPriceRangeMin"
                                                  );
                                                }}
                                              />
                                              <span
                                                style={{
                                                  color: "#D14F4F",
                                                  opacity: errors[index]
                                                    ?.schoolPriceRangeMin
                                                    ? 1
                                                    : 0,
                                                }}
                                              >
                                                {errors[index]
                                                  ?.schoolPriceRangeMin ??
                                                  "valid"}
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
                                                value={item.schoolPriceRangeMax}
                                                onChange={(e) => {
                                                  handleChangeEvent(
                                                    e.target.value.replace(
                                                      /[^0-9.]/g,
                                                      ""
                                                    ),
                                                    index,
                                                    "schoolPriceRangeMax"
                                                  );
                                                }}
                                              />
                                              <span
                                                style={{
                                                  color: "#D14F4F",
                                                  opacity: errors[index]
                                                    ?.schoolPriceRangeMax
                                                    ? 1
                                                    : 0,
                                                }}
                                              >
                                                {errors[index]
                                                  ?.schoolPriceRangeMax ??
                                                  "valid"}
                                              </span>
                                            </div>
                                            <span
                                              style={{
                                                color: "#D14F4F",
                                                opacity: errors[index]
                                                  ?.schoolPriceRange
                                                  ? 1
                                                  : 0,
                                              }}
                                            >
                                              {errors[index]
                                                ?.schoolPriceRange ?? "valid"}
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
                                          value={item.schoolOpenDays}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value.replace(
                                                /[^0-7.]/g,
                                                ""
                                              ),
                                              index,
                                              "schoolOpenDays"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.schoolOpenDays
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.schoolOpenDays ??
                                            "valid"}
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
                                          value={item.schoolOpenHours}
                                          // minLength={5}
                                          maxLength={2}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value.replace(
                                                /[^0-9.]/g,
                                                ""
                                              ),
                                              index,
                                              "schoolOpenHours"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.schoolOpenHours
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.schoolOpenHours ??
                                            "valid"}
                                        </span>
                                      </div>

                                      <div className="SchoolIntroEvent">
                                        <h1>School/Gym Introduction</h1>
                                        <input
                                          type="text"
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.schoolIntroduction}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "schoolIntroduction"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.schoolIntroduction
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.schoolIntroduction ??
                                            "valid"}
                                        </span>
                                      </div>

                                      <div className="SchoolInstructionEvent">
                                        <h1>School/Gym Special Instructions</h1>
                                        <input
                                          type="text"
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.schoolSpecialInst}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "schoolSpecialInst"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.schoolSpecialInst
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.schoolSpecialInst ??
                                            "valid"}
                                        </span>
                                      </div>
                                    </>
                                  )}

                                  {(item.eventType === 1 ||
                                    item.eventType === 3) && (
                                    <>
                                      <div className="EventAcceptForeignDiv">
                                        <h1>
                                          Does this event accept foreign
                                          participants?
                                        </h1>
                                        <FormControl>
                                          <RadioGroup
                                            row
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={item.isForeignPart}
                                            onChange={(e) =>
                                              handleChangeEvent(
                                                e,
                                                index,
                                                "isForeignPart"
                                              )
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

                                      {!item.isForeignPart && (
                                        <div className="SeminarIfEventAdd">
                                          <h1>
                                            Why is this seminar only open to
                                            this group of people? (Optional)
                                          </h1>
                                          <input
                                            type="text"
                                            className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                            placeholder=""
                                            //   maxLength={4000}
                                            value={item.reasonOpenSeminar}
                                            onChange={(e) => {
                                              handleChangeEvent(
                                                e.target.value,
                                                index,
                                                "reasonOpenSeminar"
                                              );
                                            }}
                                          />
                                        </div>
                                      )}
                                    </>
                                  )}

                                  {item.eventType === 3 && (
                                    <>
                                      <div className="CostSeminarEvent">
                                        <h1>Cost of Seminar</h1>
                                        <input
                                          type="text"
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.seminarCost}
                                          maxLength={10}
                                          onKeyDown={blockInvalidChar}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value.replace(
                                                /[^0-9.]/g,
                                                ""
                                              ),
                                              index,
                                              "seminarCost"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]?.seminarCost
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.seminarCost ??
                                            "valid"}
                                        </span>
                                      </div>
                                      <div className="SpecialInstEvent">
                                        <h1>Special Instructions</h1>
                                        <textarea
                                          type="text"
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.specialInstructions}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "specialInstructions"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]
                                              ?.specialInstructions
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.specialInstructions ??
                                            "valid"}
                                        </span>
                                      </div>

                                      <div className="EventDetailsEventDiv">
                                        <h1>Event Details</h1>
                                        <textarea
                                          type="text"
                                          className="w-551 border-1 border-radius h-180 Textbox-textarea bkC2 descrclass"
                                          placeholder=""
                                          //   maxLength={4000}
                                          value={item.eventDetails}
                                          onChange={(e) => {
                                            handleChangeEvent(
                                              e.target.value,
                                              index,
                                              "eventDetails"
                                            );
                                          }}
                                        />
                                        <span
                                          style={{
                                            color: "#D14F4F",
                                            opacity: errors[index]?.eventDetails
                                              ? 1
                                              : 0,
                                          }}
                                        >
                                          {errors[index]?.eventDetails ??
                                            "valid"}
                                        </span>
                                      </div>
                                    </>
                                  )}

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

                                  <div className="my-4">
                                    {events.length - 1 === index &&
                                      events.length < 20 && (
                                        <button
                                          type="button"
                                          onClick={handleAddEvents}
                                          className="add-event-btn"
                                        >
                                          Add more
                                        </button>
                                      )}
                                  </div>
                                </>
                              ))}

                              <div className="SubmitHandlerEventAdd">
                                <button
                                  type="button"
                                  onClick={(e) => validateSubmit(e)}
                                >
                                  Submit
                                </button>
                              </div>

                              {/* </div> */}
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
      {/* )} */}
    </>
  );
}

export default User_add_event;
