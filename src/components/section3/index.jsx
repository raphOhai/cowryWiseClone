import React from "react";
import { advert } from "../advert";
import Animate from "../hooks/animator";

const Section3 = () => {
  Animate("sideSlide");
  return (
    <div>
      <div className="alignStart widthRestrict defaultPadding ">
        <p id="Section3" className="mainText2 Section3 ">
          You name it, we’ve figured it out.
        </p>
      </div>
      <div style={{ marginBottom: "3rem" }} id="ScrollDiv" className="example shiftTop ">
        {advert.map((m) => (
          <div className="advartCards alignStart  flex track sideSlide group">
            <div className="widthRestrict2 ">
                <em id="advertCommar"  className="mainText2">
                    "
                </em>
              <p id="advertText" className="mainText2">
                {m.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
