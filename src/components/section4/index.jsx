import React from "react";
import "./section4.css";
import phone from "/muckup.png";
import Line1 from "../../assets/Line1";
const Section4 = () => {
  return (
    <div className="sectionDiv">
      <div>
        <div className="grid4 defaultPadding">
          <div className="section4Background hideMobileAndTabFlex">
            <div
              style={{ marginTop: "5rem", marginLeft: "5rem" }}
              className=" muckupContainer center flex"
            >
              <img className="muckup" src={phone} alt="" />
            </div>
          </div>
          <div className="shiTopTabAndMobileSection4">
            <div
              style={{ marginTop: "8rem", marginLeft: "5rem" }}
              className="stack "
            >
              <div className="stack4">
                <p
                  style={{ marginLeft: "3rem" }}
                  id="section4MainHeading"
                  className="smallMainText2"
                >
                  It only takes 5 minutes
                </p>
                <div style={{ marginTop: "4rem" }} className="grid5">
                  <div style={{ marginLeft: "3rem" }} className="stack5">
                    <div className="stack4">
                      <div className="center">
                        <p id="strockNumber" className="smallMainText2">
                          01
                        </p>
                      </div>
                      <div style={{ marginLeft: ".5rem" }} className="center">
                        <Line1 />
                      </div>
                    </div>
                    <div style={{ marginTop: "-1.5rem" }} className="stack4">
                      <div className="center">
                        <p id="strockNumber" className="smallMainText2">
                          02
                        </p>
                      </div>
                      <div style={{ marginLeft: ".5rem" }} className="center">
                        <Line1 />
                      </div>
                    </div>
                    <div style={{ marginTop: "-1.5rem" }} className="stack4">
                      <div className="center">
                        <p id="strockNumber" className="smallMainText2">
                          03
                        </p>
                      </div>
                      <div
                        style={{ marginLeft: ".5rem" }}
                        className="center"
                      ></div>
                    </div>
                  </div>
                  <div className="stack5">
                    <div style={{ marginTop: ".02rem" }} className="stack4">
                      <p id="demoHeading" className="smallMainText2">
                        Create an account
                      </p>
                      <div className="widthRestrict2">
                        <p id="demoParagraph" className="smallText">
                          {" "}
                          Sign up for an account with your name, email and phone
                          number.
                        </p>
                      </div>
                    </div>

                    <div style={{ marginTop: ".5rem" }} className="stack4">
                      <p id="demoHeading" className="smallMainText2">
                        Create an account
                      </p>
                      <div className="widthRestrict2">
                        <p id="demoParagraph" className="smallText">
                          {" "}
                          Sign up for an account with your name, email and phone
                          number.
                        </p>
                      </div>
                    </div>
                    <div style={{ marginTop: "1.3rem" }} className="stack4">
                      <p id="demoHeading" className="smallMainText2">
                        Create an account
                      </p>
                      <div className="widthRestrict2">
                        <p id="demoParagraph" className="smallText">
                          {" "}
                          Sign up for an account with your name, email and phone
                          number.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ marginTop: "5rem", marginLeft: "3rem" }}
                  className="flex alignStart widthRestrict2"
                >
                  <button className="mainBtn">sign up new</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
