import React, { useState, useEffect, useMemo } from "react";
import countryList from "react-select-country-list";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";

import { updateProfile } from "../Redux/Action/authentication-action";

function Admin_profile() {
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.authReducer);

  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [zip_code, setZip_code] = useState("");
  const [country, setCountry] = useState("US");
  const [competition_level, setCompetition_level] = useState(null);
  const [martial_art_style, setMartial_art_style] = useState("");
  const [about_me, setAbout_me] = useState("");
  const [mobile_number, setMobile_number] = useState("");
  const [gender, setGender] = useState(null);

  const [profilePic, setProfilePic] = useState();
  const [profilePicChange, setProfilePicChange] = useState();

  const [rerender, setRerender] = useState(false);

  const [open, setOpen] = useState(false);

  const { success: successUpdate, error: errorUpdate } = useSelector(
    (state) => state.UpdateprofileReducer
  );

  const { error } = useSelector((state) => state.UpdateprofileReducer);

  const submitHandler = async (e) => {
    e.preventDefault();

    setRerender(true);

    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("about_me", about_me);
    formData.append("mobile_number", mobile_number);
    formData.append("gender", gender);
    formData.append("username", username);
    formData.append("email", email);
    if (age) {
      formData.append("age", age);
    }
    if (weight) {
      formData.append("weight", weight);
    }
    if (zip_code) {
      formData.append("zip_code", zip_code);
    }

    formData.append("martial_art_style", martial_art_style);
    formData.append("competition_level", competition_level);
    formData.append("country", country);
    if (profilePicChange) {
      formData.append("profile_image_update", profilePic);
    }
    dispatch(updateProfile(formData));

    // const config = {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     Authorization: `Bearer ${userData.token}`,
    //   },
    // };

    //   const update_profile = await axios
    //     .post(`${BACKEND_URL}update-user-profile/`, formData, config)
    //     .then((res) => {
    //       console.log("response", res.data);
    //       swal({
    //         title: "Successfully Complete",
    //         text: "Profile updated successfully",
    //         className: "successAlert",
    //         icon: "img/SuccessAlert.png",
    //         buttons: false,
    //       });
    //       navigate("/profile");
    //     })
  };

  useEffect(() => {
    setUserData();
  }, []);

  const setUserData = () => {
    setFirst_name(userData?.first_name);
    setLast_name(userData?.last_name);
    setAbout_me(userData?.about_me);
    setMobile_number(userData?.mobile_number);
    setGender(userData?.gender);
    setProfilePic(userData?.profile_image_update);
    setUsername(userData?.username);
    setEmail(userData?.email);
    setAge(userData?.age);
    setWeight(userData?.weight);
    setZip_code(userData?.zip_code);
    if (userData?.country) {
      setCountry(userData?.country);
    }
    setCompetition_level(userData?.competition_level);
    setMartial_art_style(userData?.martial_art_style);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUserData();
  };

  const imageMimeType = /image\/(png|jpg|jpeg)/i;

  const profilePicHandler = (e) => {
    const file = e.target.files[0];
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
    if (e.target.files[0]) {
      setProfilePicChange(true);
      setProfilePic(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (successUpdate && rerender) {
      swal({
        title: "Successfully Complete",
        text: "Profile updated successfully",
        className: "successAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 5000,
      });
      handleClose();
      setRerender(false);
    }

    if (errorUpdate && rerender) {
      swal({
        title: "Error",
        text: errorUpdate,
        className: "errorAlert",
        icon: "/img/image 2.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
    }
  }, [successUpdate, errorUpdate]);

  const countryListOptions = useMemo(() => countryList().getData(), []);

  const mapped =
    error && Object.entries(error)?.map?.(([k, v]) => `${k}: ${v}`);

  return (
    <>
      <>
        <div className=" w-full bg-blue-100 relative h-screen">
          {/* {isLoading ? (
            <LoaderSpinner />
          ) : ( */}
          <main>
            <div className="pt-6 px-4">
              <div className="xl:gap-4 my-4">
                <div className="heading-top">
                  <h3 className="common-text-font-fam text-black text-3xl font-bold">
                    Profile Page
                  </h3>
                </div>
                <div className="bg-white rounded-md mb-8 mt-3 p-4 sm:p-6  text-center">
                  <div className=" justify-between mb-12 mt-12">
                    <div className="container mx-auto">
                      <div className="md:flex no-wrap md:-mx-2 ">
                        <div className="w-full md:w-3/12 md:mx-2">
                          <div className="shadow p-3 border-t-4 border-green-400">
                            <div className="text-center my-2">
                              {profilePic ? (
                                <img
                                  className="h-16 w-16 rounded-full mx-auto"
                                  src={
                                    profilePicChange
                                      ? URL.createObjectURL(profilePic)
                                      : profilePic
                                  }
                                />
                              ) : (
                                <img
                                  className="h-16 w-16 rounded-full mx-auto"
                                  src="/img/avataruser.png"
                                />
                              )}
                              <input
                                type="file"
                                onChange={(e) => {
                                  profilePicHandler(e);
                                }}
                                hidden
                                alt="ProfileImg"
                                id="upload"
                              />
                              <label
                                className="upload-profileImg"
                                htmlFor="upload"
                              >
                                {" "}
                                <i
                                  className="fa fa-edit text-lg text-gray-800"
                                  style={{ cursor: "pointer" }}
                                ></i>
                              </label>

                              <button
                                disabled={!profilePicChange}
                                onClick={(e) => submitHandler(e)}
                              >
                                Update
                              </button>
                              <p className="text-gray-900 font-bold text-xl leading-8 my-1">
                                {userData?.username}
                              </p>
                            </div>
                            <h1 className=""></h1>

                            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                              <p>
                                {userData?.about_me
                                  ? userData?.about_me
                                  : "No Description"}
                              </p>
                            </p>
                            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                              {/* <li className="flex items-center py-3">
                                  <span>Status</span>
                                  <span className="ml-auto">
                                <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                                      Active
                                    </span>
                                  </span>
                                </li> */}
                              <li className="flex items-center py-3">
                                <span>Member since</span>
                                <span className="ml-auto">
                                  {userData?.created_at}
                                </span>
                              </li>
                            </ul>
                          </div>

                          <div className="my-4"></div>
                        </div>

                        <div className="w-full md:w-9/12 mx-2 h-64">
                          <div className="shadow p-3 rounded-sm">
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                              <span clas="text-green-500">
                                <svg
                                  className="h-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                  />
                                </svg>
                              </span>
                              <span className="tracking-wide">About</span>
                              <div className="edit-prfile-drop">
                                <span className="tracking-wide ml-2">
                                  <i
                                    onClick={handleClickOpen}
                                    className="fa fa-edit text-lg text-gray-800"
                                  ></i>
                                </span>
                              </div>
                              <Dialog
                                className="profile_dialog-box overflow-y-auto"
                                open={open}
                                onClose={handleClose}
                              >
                                <DialogTitle className="profileImgHeading">
                                  Profile Information{" "}
                                  <span onClick={handleClose}>
                                    <i className="fa-solid fa-xmark"></i>
                                  </span>
                                </DialogTitle>
                                <div className="dialogcontent_and_actions">
                                  <DialogContent>
                                    <div className="items-center">
                                      <div className="bg-white">
                                        <h4 className="flex justify-center p-3 text-[22px]">
                                          Edit Profile
                                        </h4>

                                        <div className="px-6">
                                          <div className="flex flex-wrap justify-center">
                                            <div className="w-full flex justify-center">
                                              <div className="relative">
                                                <div className="text-center my-2">
                                                  {profilePic ? (
                                                    <img
                                                      className="relative w-36 h-36	 rounded-full mx-auto"
                                                      src={
                                                        profilePicChange
                                                          ? URL.createObjectURL(
                                                              profilePic
                                                            )
                                                          : profilePic
                                                      }
                                                    />
                                                  ) : (
                                                    <img
                                                      className="w-36 h-36 rounded-full mx-auto"
                                                      src="/img/avataruser.png"
                                                    />
                                                  )}
                                                  <input
                                                    type="file"
                                                    onChange={(e) => {
                                                      profilePicHandler(e);
                                                    }}
                                                    hidden
                                                    alt="ProfileImg"
                                                    id="upload"
                                                  />
                                                  <label
                                                    className="upload-profileImg absolute"
                                                    htmlFor="upload"
                                                  >
                                                    {" "}
                                                    <i
                                                      className="fa fa-edit button-edit text-lg text-gray-800"
                                                      style={{
                                                        cursor: "pointer",
                                                      }}
                                                    ></i>
                                                  </label>

                                                  {/* <button
                                                    onClick={(e) =>
                                                      submitHandler(e)
                                                    }
                                                  >
                                                    Update
                                                  </button> */}
                                                  <p className="text-gray-900 font-bold text-xl leading-8 my-1">
                                                    {userData?.username}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          {/* {error && (
                                            <>
                                              {" "}
                                              {Object?.values(error)?.map(
                                                (
                                                  email,
                                                  username,
                                                  key,
                                                  value
                                                ) => {
                                                  return (
                                                    <div>
                                                      <h2>
                                                        {key} : 1{username.key}
                                                      </h2>
                                                    </div>
                                                  );
                                                }
                                              )}
                                            </>
                                          )} */}
                                          <div className="">
                                            {error &&
                                              mapped?.map?.((item, index) => (
                                                <div
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
                                        </div>
                                        <div className="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
                                          <div className="col-span-6 relative">
                                            <span className="absolute bg-white left-3 -top-[12px] px-2">
                                              First name
                                            </span>
                                            <input
                                              type="text"
                                              maxLength={50}
                                              value={first_name}
                                              onChange={(e) => {
                                                setFirst_name(e.target.value);
                                              }}
                                              placeholder="First name"
                                              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                                            />
                                          </div>

                                          <div className="col-span-6 relative">
                                            <span className="absolute bg-white left-3 -top-[12px] px-2">
                                              Last name
                                            </span>
                                            <input
                                              maxLength={50}
                                              value={last_name}
                                              onChange={(e) => {
                                                setLast_name(e.target.value);
                                              }}
                                              type="text"
                                              placeholder="Last name"
                                              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                                            />
                                          </div>

                                          <div className="col-span-6 relative">
                                            <span className="absolute bg-white left-3 -top-[12px] px-2">
                                              Username
                                            </span>
                                            <input
                                              type="text"
                                              value={username}
                                              maxLength={20}
                                              onChange={(e) => {
                                                setUsername(e.target.value);
                                              }}
                                              placeholder="username"
                                              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                                            />
                                          </div>
                                          <div className="col-span-6 relative">
                                            <span className="absolute bg-white left-3 -top-[12px] px-2">
                                              Phone Number
                                            </span>
                                            <input
                                              type="text"
                                              maxLength={12}
                                              value={mobile_number}
                                              onChange={(e) => {
                                                setMobile_number(
                                                  e.target.value.replace(
                                                    /[^0-9.]/g,
                                                    ""
                                                  )
                                                );
                                              }}
                                              placeholder="phone number"
                                              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                                            />
                                          </div>
                                          <div className="col-span-6 relative">
                                            <span className="absolute bg-white left-3 -top-[12px] px-2">
                                              Email
                                            </span>
                                            <input
                                              type="text"
                                              value={email}
                                              maxLength={50}
                                              onChange={(e) => {
                                                setEmail(e.target.value);
                                              }}
                                              placeholder="email"
                                              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                                            />
                                          </div>
                                          <div className="col-span-6 relative">
                                            <span className="absolute bg-white left-3 -top-[12px] px-2">
                                              Age
                                            </span>
                                            <input
                                              type="text"
                                              value={age}
                                              maxLength={2}
                                              onKeyDown={blockInvalidChar}
                                              onChange={(e) => {
                                                setAge(
                                                  e.target.value.replace(
                                                    /[^0-9.]/g,
                                                    ""
                                                  )
                                                );
                                              }}
                                              placeholder="age"
                                              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                                            />
                                          </div>
                                          <div className="col-span-6 relative">
                                            <span className="absolute bg-white left-3 -top-[12px] px-2">
                                              Weight
                                            </span>
                                            <input
                                              type="text"
                                              value={weight}
                                              maxLength={3}
                                              onKeyDown={blockInvalidChar}
                                              onChange={(e) => {
                                                setWeight(
                                                  e.target.value.replace(
                                                    /[^0-9.]/g,
                                                    ""
                                                  )
                                                );
                                              }}
                                              placeholder="weight"
                                              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                                            />
                                          </div>
                                          <div className="col-span-6 relative">
                                            <span className="absolute bg-white left-3 -top-[12px] px-2">
                                              Martial art Style
                                            </span>
                                            <input
                                              type="text"
                                              value={martial_art_style}
                                              maxLength={50}
                                              onChange={(e) => {
                                                setMartial_art_style(
                                                  e.target.value
                                                );
                                              }}
                                              placeholder="martial art style"
                                              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                                            />
                                          </div>
                                          <div className="col-span-6 relative">
                                            <span className="absolute bg-white left-3 -top-[12px] px-2">
                                              Competition level
                                            </span>
                                            <select
                                              value={competition_level}
                                              onChange={(e) => {
                                                setCompetition_level(
                                                  e.target.value
                                                );
                                              }}
                                              type="text"
                                              placeholder="Competition level"
                                              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                                            >
                                              <option value={null}>
                                                Select level
                                              </option>
                                              <option value={"Recreational"}>
                                                Recreational
                                              </option>
                                              <option value={"Amateur"}>
                                                Amateur
                                              </option>
                                              <option value={"Professional"}>
                                                Professional
                                              </option>
                                            </select>
                                          </div>
                                          <div className="col-span-6 relative">
                                            <span className="absolute bg-white left-3 -top-[12px] px-2">
                                              Zip code
                                            </span>
                                            <input
                                              type="text"
                                              value={zip_code}
                                              maxLength={6}
                                              onKeyDown={blockInvalidChar}
                                              onChange={(e) => {
                                                setZip_code(
                                                  e.target.value.replace(
                                                    /[^0-9.]/g,
                                                    ""
                                                  )
                                                );
                                              }}
                                              placeholder="zip code"
                                              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                                            />
                                          </div>

                                          <div className="col-span-6 relative">
                                            <span className="absolute bg-white left-3 -top-[12px] px-2">
                                              Country
                                            </span>
                                            <select
                                              onChange={(e) => {
                                                setCountry(e.target.value);
                                              }}
                                              value={country}
                                              type="text"
                                              placeholder="phone number"
                                              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                                            >
                                              {countryListOptions?.map(
                                                (country) => (
                                                  <option value={country.value}>
                                                    {country.label}
                                                  </option>
                                                )
                                              )}
                                            </select>
                                          </div>

                                          <div className="col-span-6 relative">
                                            <span className="absolute bg-white left-3 -top-[12px] px-2">
                                              Gender
                                            </span>
                                            <select
                                              value={gender}
                                              onChange={(e) => {
                                                setGender(e.target.value);
                                              }}
                                              type="text"
                                              placeholder="phone number"
                                              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                                            >
                                              <option value={null}>
                                                Select gender
                                              </option>
                                              <option value="Male">Male</option>
                                              <option value="Female">
                                                Female
                                              </option>
                                              <option value="Other">
                                                Other
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="col-span-6 relative">
                                          <span className="absolute bg-white left-3 -top-[12px] px-2">
                                            About me
                                          </span>
                                          <textarea
                                            value={about_me}
                                            maxLength={1000}
                                            onChange={(e) => {
                                              setAbout_me(e.target.value);
                                            }}
                                            placeholder="Type Description"
                                            className="text-[13px] h-24 text-gray-700 w-full border-2 px-2 p-2 rounded-sm"
                                          />
                                        </div>

                                        {/* <div className="px-4 text-right py-2">
                                          <button
                                            onClick={submitHandler}
                                            className="h-10 w-32 rounded-sm shadow-md text-white text-[16px]  bg-blue-600"
                                          >
                                            Save
                                          </button>
                                          <button
                                            onClick={handleClose}
                                            className="h-10 w-32 rounded-sm shadow-md text-blue-600 text-[16px] border-4 border-blue-500/100 ml-4"
                                          >
                                            Cancel
                                          </button>
                                        </div> */}

                                        <div className="submit_cancel-btn grid sm:grid-cols-2 gap-4 w-1/2 float: right py-4">
                                          <button
                                            type="submit"
                                            onClick={submitHandler}
                                            className="text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-100"
                                          >
                                            Save
                                          </button>

                                          <button
                                            onClick={handleClose}
                                            type="submit"
                                            className="text-blue-800 bg-blue-white border-2 border-blue-800 border-rose-600  focus:ring-4 focus:outline-none  font-bold rounded-lg text-sm px-5 py-2.5 text-center  w-100"
                                          >
                                            Cancel
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </DialogContent>
                                </div>
                              </Dialog>
                            </div>
                            <div className="text-gray-700">
                              <div className="grid md:grid-cols-2 text-sm">
                                <div className="grid grid-cols-2">
                                  <div className="px-4 py-2 font-semibold">
                                    First Name
                                  </div>
                                  <div className="px-4 py-2">
                                    {" "}
                                    {userData?.first_name
                                      ? userData?.first_name
                                      : "N/A"}
                                  </div>
                                </div>
                                <div className="grid grid-cols-2">
                                  <div className="px-4 py-2 font-semibold">
                                    Last Name
                                  </div>
                                  <div className="px-4 py-2">
                                    {userData?.last_name
                                      ? userData?.last_name
                                      : "N/A"}
                                  </div>
                                </div>
                                <div className="grid grid-cols-2">
                                  <div className="px-4 py-2 font-semibold">
                                    Username
                                  </div>
                                  <div className="px-4 py-2">
                                    {userData?.username
                                      ? userData?.username
                                      : "N/A"}
                                  </div>
                                </div>
                                <div className="grid grid-cols-2">
                                  <div className="px-4 py-2 font-semibold">
                                    Email
                                  </div>
                                  <div className="px-4 py-2">
                                    {userData?.email ? userData?.email : "N/A"}
                                  </div>
                                </div>
                                <div className="grid grid-cols-2">
                                  <div className="px-4 py-2 font-semibold">
                                    Gender
                                  </div>
                                  <div className="px-4 py-2">Male</div>
                                </div>
                                <div className="grid grid-cols-2">
                                  <div className="px-4 py-2 font-semibold">
                                    Competition level
                                  </div>
                                  <div className="px-4 py-2">
                                    {userData?.competition_level
                                      ? userData?.competition_level
                                      : "N/A"}
                                  </div>
                                </div>
                                <div className="grid grid-cols-2">
                                  <div className="px-4 py-2 font-semibold">
                                    Contact No.
                                  </div>
                                  <div className="px-4 py-2">
                                    {userData?.mobile_number
                                      ? userData?.mobile_number
                                      : "N/A"}
                                  </div>
                                </div>
                                <div className="grid grid-cols-2">
                                  <div className="px-4 py-2 font-semibold">
                                    Age
                                  </div>
                                  <div className="px-4 py-2">
                                    {userData?.age ? userData?.age : "N/A"}
                                  </div>
                                </div>
                                <div className="grid grid-cols-2">
                                  <div className="px-4 py-2 font-semibold">
                                    Weight
                                  </div>
                                  <div className="px-4 py-2">
                                    {userData?.weight
                                      ? userData?.weight
                                      : "N/A"}
                                  </div>
                                </div>
                                <div className="grid grid-cols-2">
                                  <div className="px-4 py-2 font-semibold">
                                    Martial art style
                                  </div>
                                  <div className="px-4 py-2">
                                    {userData?.martial_art_style
                                      ? userData?.martial_art_style
                                      : "N/A"}
                                  </div>
                                </div>
                                <div className="grid grid-cols-2">
                                  <div className="px-4 py-2 font-semibold">
                                    zip_code
                                  </div>
                                  <div className="px-4 py-2">
                                    {userData?.zip_code
                                      ? userData?.zip_code
                                      : "N/A"}
                                  </div>
                                </div>
                                <div className="grid grid-cols-2">
                                  <div className="px-4 py-2 font-semibold">
                                    country
                                  </div>
                                  <div className="px-4 py-2">
                                    {userData?.country
                                      ? userData?.country
                                      : "N/A"}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="my-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* )} */}
        </div>
      </>
    </>
  );
}

export default Admin_profile;
