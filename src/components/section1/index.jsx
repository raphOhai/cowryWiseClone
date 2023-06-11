import React from "react";
import Savings from "../../assets/savings";

const Section1 = () => {
  return (
    <div
      style={{ }}
      className="grid shiftTo defaultPadding fullHeigh shiTopTabAndMobile "
    >
      <div className="stack">
        <h1 className="mainText2">
          Get a <em className="littleStyle">little </em> richer each day
        </h1>
        <h6 className="smallMainText2">
          One small step today, a giant leap for tomorrow.
        </h6>
        <div>
          <button className="mainBtn">start your Financial Journey</button>
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
