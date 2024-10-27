import React, { useState, useEffect } from "react";
import "./SliderDiv.css";
import Slider from "./Slider/Slider";
// import categorydata from "./responses/categorydata";
// Categories={categorydata.Categories}

export default function () {
  return (
    <>
      <div className="sliderdiv">
        <div className="slidercenterdiv">
          <Slider />
        </div>
      </div>
    </>
  );
}
