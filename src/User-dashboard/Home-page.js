import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";


const Home_page = () => {
 
const dispatch = useDispatch();
  
  const { userData } = useSelector((state) => state.authReducer);


  return (
    <div className="HomepageMain">
     
      <h3 className="font-bold text-center mt-2 mb-6  text-2xl">WHAT'S TRENDING NOW</h3>
      <div className="tournament-main my-4 grid sm:grid-cols-2">
        <div className="tournament-near-you mx-2 shadow-sm pl-6 pr-2 pt-2">
          <h3 className="font-bold text-indigo-800 text-center  font-sans text-2xl">
            Tournament Near You
          </h3>
          <div className="first-tournament border-b border-slate-400 my-4">
            <h3 className="font-bold text-xl">San Diego Kendo Club</h3>
            <p className="font-light my-2 w-3/4 text-xs">
              Wangehagum Middle School,Student Activity Room 9230 Gold Coast
              Drive,San Deigo,CA 92126
            </p>
          </div>
          <div className="first-tournament border-b border-slate-400 my-4">
            <h3 className="font-bold  text-xl">Seshimkwan</h3>
            <p className="font-light my-2 w-3/4 text-xs">
              2181 EI Camino Real,Santo Clara, Ca 95035
            </p>
          </div>
          <div className="first-tournament border-b border-slate-400 my-4">
            <h3 className="font-bold  text-xl">TACC Kendo Dojo (TACC KENDO FORMOSA) </h3>
            <p className="font-light my-2 w-3/4 text-xs">
              Taiwanese American Community Center 7838 Wilkerson Court, San
              Diego CA 9211
            </p>
          </div>
          <div className="first-tournament border-b border-slate-400 my-4">
            <h3 className="font-bold  text-xl">West Los Angeles Kendo Dojo</h3>
            <p className="font-light my-2 w-3/4 text-xs">
              2110 Corinth Ave., West Los Angeles, CA 90025{" "}
            </p>
          </div>
          <div className="first-tournament border-b border-slate-400 my-4">
            <h3 className="font-bold  text-xl">UCLA / LA Kendo Dojo </h3>
            <p className="font-light my-2 w-3/4 text-xs">
              UCLA (John Wooden Center) 220 Westwood Plaza, Los Angeles, CA
              90024{" "}
            </p>
          </div>
          <div className="first-tournament border-b border-slate-400 my-4">
            <h3 className="font-bold  text-xl">UCSB Kendo Dojo </h3>
            <p className="font-light my-2 w-3/4 text-xs">
              UCSB (302obertson Gymnasium, Room 2320) 18 Ocean Rd, Isla Vista,
              CA 93117{" "}
            </p>
          </div>
          <div className="first-tournament border-b border-slate-400 my-4">
            <h3 className="font-bold  text-xl ">Saipan Kenbu Kan </h3>
            <p className="font-light my-2 w-3/4 text-xs">
              2F Himawari Store Garapan Saipan, MP96950{" "}
            </p>
          </div>
        </div>
        <div className="event-space-images sm:mr-8">
          <div className="event-first-section shadow-sm pb-16 mb-2 px-2 pt-2">
            <img src="img/Group.png" />
            <div className="event-names mx-1 mt-2">
              <h3 className="text-indigo-800 font-bold  text-xl">Event Space </h3>
              <h3 className="font-serif text-black mt-1">
                Only Events will be shown here{" "}
              </h3>
            </div>
          </div>
          <div className="event-first-section  pb-16  px-2 pt-2">
            <img src="img/Group.png" />
            <div className="event-names px-1 mt-2">
              <h3 className="text-indigo-800 font-bold  text-xl">Event Space </h3>
              <h3 className="font-serif text-black mt-1">
                Only Events will be shown here{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_page;
