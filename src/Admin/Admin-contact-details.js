import React, { useState, useEffect } from "react";
import { contactDetails } from "../Redux/Action/Admin-blog-action";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import { contactDetailGet } from "../Redux/Action/Admin-blog-action";

import { validations } from "../utils";
import { Link } from "react-router-dom";

/* Admin Add Form  */
export const Admin_add_contact = () => {
  const dispatch = useDispatch();
  const formData = new FormData();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [rerender, setRerender] = useState(false);
  // const [contactid,setContactid]= useState(getcontactdetails)
  const [errors, setErrors] = useState({
    email: null,
    phone: null,
    address: null,
  });

  const { success, error, message, contactData } = useSelector(
    (state) => state.contactDetailsReducer
  );
  const { getcontactdetails } = useSelector(
    (state) => state.contactDetailGetReducer
  );

  useEffect(() => {
    dispatch(contactDetailGet());
  }, []);

  const validateSubmit = (e) => {
    // e.preventDefault();
    const tempErrors = {
      email: validations.email(email),
      phone: validations.phoneNumber(phone),
      address: validations.Address(address),
    };
    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      console.log(
        "..values",
        Object.values(tempErrors).filter((value) => value)
      );
      return;
    }
    submitHandler();
  };

  const submitHandler = () => {
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    dispatch(contactDetails(formData));
    setRerender(true);
  };

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

  useEffect(() => {
    if (getcontactdetails) {
      setEmail(getcontactdetails[0]?.email);
      setPhone(getcontactdetails[0]?.phone);
      setAddress(getcontactdetails[0]?.address);
    }
  }, [getcontactdetails]);
  return (
    <>
      <div className=" w-full bg-blue-100 relative ">
        <main>
          <div className="pt-6 px-4">
            <div className="xl:gap-4 my-4">
              <div className="heading-top">
                <h3 className="common-text-font-fam text-black text-3xl font-bold">
                  Contact Setting
                </h3>
              </div>
              <div className="terms-privacy-fight bg-white rounded-md mb-8 mt-3 p-4 sm:p-6 ">
                <div className=" justify-between mb-12 mt-12">
                  <div className="blog_add">
                    <section className="">
                      <div className="blogs_forms w-full rounded-lg">
                        <div>
                          <div className="space-y-4 md:space-y-6">
                            <div
                              class={
                                errors.email ? "inputCntnr error" : "inputCntnr"
                              }
                            >
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Email
                              </label>
                              <input
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                  setErrors({ ...errors, email: null });
                                }}
                                type="email"
                                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Add email"
                              />
                              <span
                                style={{
                                  color: "#D14F4F",
                                  float: "right",
                                  fontSize: "13px",
                                  opacity: errors.email ? 1 : 0,
                                }}
                              >
                                {errors.email ?? "valid"}
                              </span>
                            </div>
                            <div
                              class={
                                errors.phone ? "inputCntnr error" : "inputCntnr"
                              }
                            >
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Phone No.
                              </label>
                              <input
                                value={phone}
                                onChange={(e) => {
                                  setPhone(e.target.value);
                                  setErrors({ ...errors, phone: null });
                                }}
                                type="number"
                                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Add phone no."
                              />
                              <span
                                style={{
                                  color: "#D14F4F",
                                  float: "right",
                                  fontSize: "13px",
                                  opacity: errors.phone ? 1 : 0,
                                }}
                              >
                                {errors.phone ?? "valid"}
                              </span>
                            </div>

                            <div
                              class={
                                errors.address
                                  ? "inputCntnr error"
                                  : "inputCntnr"
                              }
                            >
                              <label
                                for="message"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Address
                              </label>
                              <textarea
                                value={address}
                                onChange={(e) => {
                                  setAddress(e.target.value);
                                  setErrors({ ...errors, address: null });
                                }}
                                rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Write your address here..."
                              ></textarea>
                              <span
                                style={{
                                  color: "#D14F4F",
                                  float: "right",
                                  fontSize: "13px",
                                  opacity: errors.address ? 1 : 0,
                                }}
                              >
                                {errors.address ?? "valid"}
                              </span>
                            </div>
                            <div className="flex items-center justify-between"></div>
                            <div className="submit_cancel-btn grid sm:grid-cols-2 gap-4 flex">
                              <div className="save-contact-btn">
                                <button
                                  onClick={validateSubmit}
                                  type="submit"
                                  className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-100"
                                >
                                  Save
                                </button>
                              </div>
                              <div className="cancel-contact-btn">
                                <Link to="/home">
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
};
