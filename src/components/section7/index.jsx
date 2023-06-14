import React from "react";
import "./section7.css";
const Section7 = () => {
  return (
    <div className="lastCtaPadding maxWidth">
      <div className="lastCta lastCtaPadding">
        <div className="lastCtaGrid">
          <div>
            <p id="lastCtaText" className="mainText widthRestri">
              Sign up for free. Start investing today.
            </p>
          </div>
          <div className="flex center">

            <div className="inputBox">
              <input type="email" placeholder="email" />
              <button className="mainBtn lastCtaBtn hideMobile">
                sign up for free
              </button>
            </div>

          </div>
          <div style={{}} className="widthRestric flex alignStart">
            <button className="mainBtn lastCtaBtn HideDesktopAndTab">
              sign up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
