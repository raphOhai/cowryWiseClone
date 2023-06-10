import React from "react";
import "./section7.css";
const Section7 = () => {
  return (
    <div className="defaultPadding">
      <div className="lastCta defaultPadding">
        <div className="section7Grid">
          <div>
            <p id="lastCtaText"  className="mainText widthRestric2">
              Sign up for free. Start investing today.
            </p>
          </div>
          <div className="flex center">
            <div className="inputBox">
              <input type="email" placeholder="email"/>
              <button className="mainBtn lastCtaBtn">
                sign up for free

              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
