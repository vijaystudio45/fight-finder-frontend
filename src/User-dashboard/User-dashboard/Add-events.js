import React, { useState } from "react";

function Addevents() {
  const [myVar, setMyVar] = useState("coming");

  return (
    <>
      <div className="main_add_events py-3 mt-4">
        <div className="search_bar text-center">
          <div className="inline-block w-1/4">
            <div className="mb-3">
              <div className="input-group mb-4 ">
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
          <div className="submit_evnts float-right">
            <button className="px-4 py-2.5 bg-blue-800 text-white font-serif text-sm leading-tight  shadow-md ml-3 flex items-center mr-12">
              Submit an event
            </button>
          </div>
        </div>

        <div className="flex justify-center mx-4">
          <div className="w-full rounded shadow-md">
            {/* <div className="px-32 py-2">
              <img className="w-100" src="/img/Mask Group 4.png" alt="map" />
            </div> */}
            <div
              id="map-container-google-1"
              className="z-depth-1-half map-container"
            >
              <iframe
                className="map_image w-full h-full"
                src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="upcoming_contnet flex font-bold text-sm py-2 ml-8">
          <button
            onClick={() => {
              setMyVar("coming");
            }}
            className={
              myVar == "coming"
                ? "upcoming_past active1 border-b-2 border-indigo-500"
                : "upcoming_past"
            }
          >
            UPCOMING
          </button>
          <button
            onClick={() => {
              setMyVar("past");
            }}
            className={
              myVar == "coming"
                ? "upcoming_past ml-3  active1 "
                : "upcoming_past ml-3 border-b-2 border-indigo-500"
            }
          >
            PAST
          </button>
        </div>

        <div className="tournament-main my-4 flex">
          {myVar == "coming" ? (
            <>
              <div className="tournament-near-you mx-8 shadow-md pl-12 pr-16  w-3/4">
                <div className="first-tournament text-sm border-b border-slate-400 my-4">
                  <h3 className="font-bold text-xl">San Diego Kendo Club</h3>
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
                    Taiwanese American Community Center 7838 Wilkerson Court,
                    San Diego CA 9211
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
                  <h3 className="font-bold  text-xl">UCLA / LA Kendo Dojo </h3>
                  <p className="font-light my-2 w-1/3 text-xs">
                    UCLA (John Wooden Center) 220 Westwood Plaza, Los Angeles,
                    CA 90024{" "}
                  </p>
                </div>
                <div className="first-tournament border-b border-slate-400 my-4">
                  <h3 className="font-bold  text-xl">UCSB Kendo Dojo </h3>
                  <p className="font-light my-2 w-1/3 text-xs">
                    UCSB (302obertson Gymnasium, Room 2320) 18 Ocean Rd, Isla
                    Vista, CA 93117{" "}
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
          ) : myVar == "past" ? (
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
                <h6 className="blank_space">Blank Space Left intentionally </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addevents;
