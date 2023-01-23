import React from "react";
import { Link } from "react-router-dom";

function Admin_help() {
  return (
    <>
      <div className=" w-full bg-blue-100 relative overflow-y-auto">
        <main>
          <div className="pt-6 px-4">
            <div className="xl:gap-4 my-4">
              <div className="common-text-font-fam heading-top">
                <h3 className="text-black text-3xl font-bold font-medium mb-10">
                  Help Page
                </h3>
              </div>
              <div className="terms-privacy-fight bg-white rounded-md mb-8 mt-3 p-4 sm:p-6">
                <div className=" justify-between mb-12 mt-12">
                  <div className="blog_add">
                    <section className=" dark:bg-gray-900">
                      <div className="blogs_forms w-full rounded-lg">
                        <div>
                          <div className="space-y-4 md:space-y-6">
                            <div>
                              <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                  Subject:
                                </label>
                                <input
                                  type="subject"
                                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="subject"
                                />
                              </div>
                            </div>

                            <label class="block w-1/2">
                              <span class="sr-only">Choose File</span>
                              <input
                                type="file"
                                class="block text-sm  file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-800 file:text-white hover:file:bg-blue-700 focus:outline-none"
                              />
                            </label>

                            <div>
                              <div>
                                <label
                                  htmlFor="message"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Message:
                                </label>
                                <textarea
                                  rows="4"
                                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="type message
                                  "
                                ></textarea>
                              </div>
                            </div>

                            <div className="submit_cancel-btn grid sm:grid-cols-2 gap-4 ">
                              <button
                                type="submit"
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
}

export default Admin_help;
