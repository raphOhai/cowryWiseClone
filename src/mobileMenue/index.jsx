import React from "react";
import DropDownIcon from "../assets/dropDownIcon";
import "./mobileMenue.css";
import Animate from "../components/hooks/animator";
import MultipleAnimator from "../components/hooks/animator2";
const MobileMenue = () => {
    MultipleAnimator()
  return (
    <div className="menueBox fastTransition">
      <div className="gridMobileMenue ">
        <div className="grid defaultPadding ">
          <div
            id="menu"
            style={{ marginTop: "6rem" }}
            className=" alignStart  meMenueBoxItem"
          >
            <div className="header-items  SlideUp  group ">
              <p id="menueText2" className="smallText">
                Personal
              </p>
              <DropDownIcon color={"#fff"} />
            </div>

            <div className="header-items SlideUp  group ">
              <p id="menueText2" className="smallText">
                Business
              </p>
              <DropDownIcon color={"#fff"} />
            </div>

            <div className="header-items SlideUp  group">
              <p id="menueText2" className="smallText">
                Developer
              </p>
              <DropDownIcon color={"#fff"} />
            </div>

            <div className="header-items SlideUp  group">
              <p id="MenuMinorText" className="smallText">
                Sign Up
              </p>
            </div>

            <div className="header-items SlideUp  group">
              <p id="MenuMinorText" className="smallText">
                login In
              </p>
            </div>

            <div className="header-items SlideUp  group">
              <p id="MenuMinorText" className="smallText">
                About
              </p>
            </div>
            <div className="header-items SlideUp  group">
              <p id="MenuMinorText" className="smallText">
                FAQ's
              </p>
            </div>
            <div className="header-items SlideUp  group">
              <p id="MenuMinorText" className="smallText">
                Security
              </p>
            </div>
            <div className="header-items SlideUp  group">
              <p id="MenuMinorText" className="smallText">
                Learn
              </p>
            </div>
          </div>
        </div>
        <div className="flexMenue defaultPadding  SlideUp transition  ">
          <p id="MenuMinorText2" className="smallText  meMenueBoxItem ">
            Cowrywise Financial Technology Limited ("Cowrywise") is a fund
            manager duly licensed by the Securities and Exchange Commission
            (SEC) of Nigeria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenue;
