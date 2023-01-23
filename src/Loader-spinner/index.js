import React from "react";
import "./spinner.css";

export default function LoaderSpinner() {
  return (
    <>
      <div class="ajax-flipper-overlay"></div>
      <div class="ajax-flipper-container">
        <div class="ajax-flipper flip-animation">
          <img src="\image 5.png" class="ajax-flip-img" />
          <h5 className="mt-4 text-center text-blue-800">Please Wait...</h5>
        </div>
        <div class="ajax-flipper overlap-flip-animation">
          <img src="\image 5.png" class="ajax-flip-img rotate-180-y" />
        </div>
      </div>
    </>
  );
}
