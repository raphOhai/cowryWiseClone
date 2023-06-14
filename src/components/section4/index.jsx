import React from "react";
import "./section4.css";
import phone from "/muckup.png";
import Line1 from "../../assets/Line1";
import Animate from "../hooks/animator";
import MultipleAnimator from "../hooks/animator2";

const Section4 = () => {
  // animate2("fastSlide")
  MultipleAnimator()
  return (
    <div className="sectionDiv maxWidth">
      <div>
        <div className="grid4 defaultPadding">
          <div className="">
            <div
              style={{ marginTop: "5rem", }}
              className=" hidePhoneTab flex center"
            >
              <img  className="responsivePhone fastSlide" src={phone} alt="" />
            </div>
          </div>
          <div className=" flex alignStart">
            <div style={{ marginTop: "8rem" }} className="stack ">
              <div className="stack4">
                <p id="section4MainHeading" className="smallMainText2">
                  It only takes 5 minutes
                </p>
                <div style={{ marginTop: "4rem" }} className="gri">
                  {/* <div style={{ marginLeft: "3rem" }} className="stack5">
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
                  </div> */}
                  <div className="stack">
                    <div className="flexBoxNoWrap slideDown group">
                      <div className="flex center">
                        <p id="strockNumber" className="smallMainText2">
                          01
                        </p>
                      </div>

                      <p id="demoHeading" className="smallMainText2">
                        Create an account
                      </p>
                    </div>

                    <div className="flexBoxNoWrap slideDown group">
                      <div
                        style={{ marginLeft: ".5rem" }}
                        className="flex center"
                      >
                        <Line1 />
                      </div>

                      <div className="widthRestrict flex center">
                        <p id="demoParagraph" className="smallText ">
                          {" "}
                          Sign up for an account with your name, email and phone
                          number.
                        </p>
                      </div>
                    </div>

                    <div className="flexBoxNoWrap slideDown group">
                      <div className="flex center">
                        <p id="strockNumber" className="smallMainText2">
                          02
                        </p>
                      </div>

                      <p id="demoHeading" className="smallMainText2">
                        Create an account
                      </p>
                    </div>

                    <div className="flexBoxNoWrap slideDown group">
                      <div
                        style={{ marginLeft: ".5rem" }}
                        className="flex center"
                      >
                        <Line1 />
                      </div>

                      <div className="widthRestrict2 flex center">
                        <p id="demoParagraph" className="smallText ">
                          {" "}
                          Sign up for an account with your name, email and phone
                          number.
                        </p>
                      </div>
                    </div>
                    <div className="flexBoxNoWrap slideDown group">
                      <div className="flex center">
                        <p id="strockNumber" className="smallMainText2">
                          03
                        </p>
                      </div>

                      <p id="demoHeading" className="smallMainText2">
                        Create an account
                      </p>
                    </div>

                    <div className="flexBoxNoWrap slideDown group">
                      <div
                        style={{ marginLeft: ".5rem" }}
                        className="flex center"
                      >
                        {/* <Line1 /> */}
                      </div>

                      <div className="widthRestrict2 flex center">
                        <p id="demoParagraph" className="smallText ">
                          {" "}
                          Sign up for an account with your name, email and phone
                          number.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ marginTop: "5rem" }}
                  className="flex alignStart widthRestrict2 ctaBtn"
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
