import React from "react";
import Savings from "../../assets/savings";
import MultipleAnimator from "../hooks/animator2";
import InterSectionChecker from "../hooks/animator";
import { DecreaseHeight, IncreaseHeight } from "../../reducer/DrawSvg";

const Section1 = () => {
  MultipleAnimator();
  InterSectionChecker("trigger",  IncreaseHeight, DecreaseHeight );
  return (
    <div style={{}} className="grid shiftTo  fullHeigh shiTopTabAndMobile  ">
      <div className="stack sideSlide1 defaultPadding">
        <h1 className="mainText2">
          Get a <em className="littleStyle SlideUp">little </em> richer each day
        </h1>
        <h6 className="smallMainText2">
          One small step today, a giant leap for tomorrow.
        </h6>
        <div>
          <button className="mainBtn trigger">
            start your Financial Journey
          </button>
        </div>
      </div>
      <div>
        <div className="svgBars  overFlowHidden">
          <Savings />
        </div>
      </div>
    </div>
  );
};

export default Section1;
