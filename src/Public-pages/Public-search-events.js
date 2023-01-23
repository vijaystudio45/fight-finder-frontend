import React, { useState, useEffect } from "react";
import { upcomingEventsAction } from "../Redux/Action/Events-new-action";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import { createFilterOptions } from "@material-ui/lab/Autocomplete";
import TextField from "@mui/material/TextField";

function SearchEvents() {
  const dispatch = useDispatch();

  const [myVar, setMyVar] = useState("Upcoming");

  const [search, setSearch] = useState("");

  const { upcomingEvents: eventsList, success } = useSelector(
    (state) => state.upcomingEventsReducer
  );

  useEffect(() => {
    dispatch(upcomingEventsAction());
  }, []);

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) =>
      option?.events
        ? option?.events?.title
        : option?.schoolgym
        ? option?.schoolgym?.title
        : option?.seminarnformation
        ? option?.seminarnformation?.title
        : "",
  });

  const handleChangeSearch = (value) => {
    dispatch(upcomingEventsAction(value));
  };

  return (
    <>
      <div className="addevent">
        <div className="container">
          <div className="main_add_events py-3 mt-4">
            <div className="search_bar text-center">
              <div className="inline-block w-1/4">
                <div className="mb-3">
                  <div className="input-group mb-4 ">
                    {/* <Autocomplete
                      // disabled={!showbutton || !companyvalue}
                      value={search}
                      name="search"
                      className="form-control input-groups px-3 py-1.5 font-normal rounded-md text-gray-700 bg-white  border border-solid border-gray-300"
                      // className="agency-workflow-approvers-selenium"
                      // value={approvers}
                      // multiple
                      id="tags-outlined"
                      // defaultValue=""
                      // open={isOpenApprovers}
                      // onInputChange={handleSearchAutocomplete}
                      filterOptions={filterOptions}
                      options={eventsList ?? []}
                      getOptionLabel={(option) =>
                        option?.events
                          ? option?.events?.title
                          : option?.schoolgym
                          ? option?.schoolgym?.title
                          : option?.seminarnformation
                          ? option?.seminarnformation?.title
                          : ""
                      }
                      // onChange={(event, value) => setSkills(value)}
                      onChange={(e, v) => {
                        setSearch(v);
                        // handleSearchChange(e, v);
                      }}
                      inputProps={{
                        "aria-label": "Without label",
                      }}
                      filterSelectedOptions
                      // noOptionsText={
                      //   "Press enter to add this skill and select again"
                      // }
                      hiddenLabel="true"
                      onKeyDown={(e) => {
                        setSearch(e.target.value);
                        handleChangeSearch(e.target.value);
                      }}
                      autoHighlight={true}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth placeholder="Search" />
                      )}
                      isOptionEqualToValue={
                        (option, value) =>
                          value === undefined ||
                          value === "" ||
                          option.id === value.id
                        // option.value == value.value
                      }
                    /> */}
                    <input
                      type="search"
                      className="form-control input-groups px-3 py-1.5 font-normal rounded-md text-gray-700 bg-white  border border-solid border-gray-300"
                      placeholder="Enter Your Location"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn text-white px-3 py-1.5 bg-blue-800 font-bold hover:none   rounded-full flex items-center"
                      type="button"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="upcoming_contnet flex font-bold text-sm py-2 ml-8">
              <button
                onClick={() => {
                  setMyVar("Upcoming");
                }}
                className={
                  myVar == "Upcoming"
                    ? "upcoming_past active1 border-b-2 border-indigo-500"
                    : "upcoming_past"
                }
              >
                UPCOMING
              </button>
              <button
                onClick={() => {
                  setMyVar("Past");
                }}
                className={
                  myVar == "Past"
                    ? "upcoming_past ml-3 border-b-2 border-indigo-500"
                    : "upcoming_past ml-3  active1 "
                }
              >
                PAST
              </button>
            </div>

            <div className="tournament-main my-4 flex">
              {myVar == "Upcoming" ? (
                <>
                  <div className="tournament-near-you mx-8 shadow-md pl-12 pr-16  w-3/4">
                    <div className="first-tournament text-sm border-b border-slate-400 my-4">
                      <h3 className="font-bold text-xl">
                        San Diego Kendo Club
                      </h3>
                      <p className="font-light text-xs my-2 w-1/3 text-xs">
                        Wangehagum Middle School,Student Activity Room 9230 Gold
                        Coast Drive,San Deigo,CA 92126
                      </p>
                    </div>
                    <div className="first-tournament border-b border-slate-400 my-4">
                      <h3 className="font-bold text-xl">Seshimkwan</h3>
                      <p className="font-light my-2 w-1/3 text-xs">
                        2181 EI Camino Real,Santo Clara, Ca 95035
                      </p>
                    </div>
                    <div className="first-tournament border-b border-slate-400 my-4">
                      <h3 className="font-bold  text-xl">
                        TACC Kendo Dojo (TACC KENDO FORMOSA){" "}
                      </h3>
                      <p className="font-light my-2 w-1/3 text-xs">
                        Taiwanese American Community Center 7838 Wilkerson
                        Court, San Diego CA 9211
                      </p>
                    </div>
                    <div className="first-tournament border-b border-slate-400 my-4">
                      <h3 className="font-bold  text-xl">
                        West Los Angeles Kendo Dojo
                      </h3>
                      <p className="font-light my-2 w-1/3 text-xs">
                        2110 Corinth Ave., West Los Angeles, CA 90025{" "}
                      </p>
                    </div>
                    <div className="first-tournament border-b border-slate-400 my-4">
                      <h3 className="font-bold  text-xl">
                        UCLA / LA Kendo Dojo{" "}
                      </h3>
                      <p className="font-light my-2 w-1/3 text-xs">
                        UCLA (John Wooden Center) 220 Westwood Plaza, Los
                        Angeles, CA 90024{" "}
                      </p>
                    </div>
                    <div className="first-tournament border-b border-slate-400 my-4">
                      <h3 className="font-bold  text-xl">UCSB Kendo Dojo </h3>
                      <p className="font-light my-2 w-1/3 text-xs">
                        UCSB (302obertson Gymnasium, Room 2320) 18 Ocean Rd,
                        Isla Vista, CA 93117{" "}
                      </p>
                    </div>
                    <div className="first-tournament border-b border-slate-400 my-4">
                      <h3 className="font-bold  text-xl">Saipan Kenbu Kan </h3>
                      <p className="font-light my-2 w-1/3 text-xs">
                        2F Himawari Store Garapan Saipan, MP96950{" "}
                      </p>
                    </div>
                  </div>
                </>
              ) : myVar == "Past" ? (
                <>
                  <div className="tournament-near-you mx-2 shadow-md pl-6 pr-16  w-3/4">
                    <div className="first-tournament text-lg my-4">
                      <h3 className="font-bold">Coming Soon</h3>
                    </div>
                  </div>
                </>
              ) : null}

              <div className="event-space-images w-1/4 pl-6 pr-6 text-center">
                <div className="main_filter_contnet ">
                  <div className="filter_div">
                    <button className="pr-16 pl-3 pb-0 bg-indigo-400 text-white font-bold text-xl">
                      Filter
                    </button>
                  </div>
                  <div className="multiple_contnet mt-8 ml-12">
                    <div className="look_contnet d-flex">
                      <h5 className="text-sm text-bold w-20">Look Up by</h5>
                      <div className="empty_box pr-16 pl-3 bg-zinc-200 ml-1"></div>
                    </div>
                    <div className="look_contnet d-flex mt-2">
                      <h5 className="text-sm text-bold w-20">Distance</h5>
                      <div className="empty_box pr-16 pl-3 bg-zinc-200 ml-1"></div>
                    </div>
                    <div className="look_contnet d-flex mt-2">
                      <h5 className="text-sm text-bold w-20">Discipline </h5>
                      <div className="empty_box pr-16 pl-3 bg-zinc-200 ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="blank_space mt-8">
                  <div class="box-border h-100 w-100 bg-zinc-200 p-4 text-center ">
                    <h6 className="blank_space">
                      Blank Space Left intentionally{" "}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchEvents;
