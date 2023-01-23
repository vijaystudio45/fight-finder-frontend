import React from "react";

function About_us() {
  return (
    <>
    <div className="about_us_main">
    <div className="about_image">
      <img className="w-100" src="\img\kendo ready 1.png" />
    </div>
    <div className="submit_event bg-zinc-400 pt-3">
      <h4 className="text-white text-center text-2xl font-bold">
        ABOUT THE FIGHT FINDER
      </h4>
    </div>
    <div className="btn_contnet">
      <h6 className="font-serif sm:px-32 px-8 my-8 text-1xl text-gray-500">
       <span> Hello and welcome to thefightfinder.com!</span><br/>Founded in 2019,
        TheFightFinder.com was built with the purpose toconnect all those
        interested in martial arts, no matter their discipline,organization
        or affiliation. By giving our community a space for us to find
        events and communicate, we hope this will increase the unity among
        martial artists and allow for our world wide martial arts community
        to become a little bit closer. <br/>Our Mission - To provide martial
        artist a space where they can find competitons, events, seminars and
        training locations in one place.<br/> Our Vision - Allowing martial
        artists of various disciplines to connect with members of their
        respective communities and also allow them to explore other
        disciplines.<br/> We hope you enjoy our site and what we have to offer.
        Please feel free to send us your thoughts for any improvements or
        questions you may have.
      </h6>
    </div>
  </div>
    </>
  );
}

export default About_us;
