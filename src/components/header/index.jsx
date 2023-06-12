import React from "react";
import Logo from "../../assets/logo";
import DropDownIcon from "../../assets/dropDownIcon";
import { ClickedMenue } from "../hooks/menueAnimation";
import { useSelector } from "react-redux";

const Header = () => {
  const { pieMenueColor } = useSelector((state) => state.logoColor);
  return (
    <div className=" headerBox  fastTransition">
      <div id="header" className="header defaultPadding fastTransition ">
        <div className="center">
          <Logo />
          <div className="header-items hideMobileAndTabFlex">
            <p className="smallText">personal</p>
            <DropDownIcon />
          </div>
          <div className="header-items hideMobileAndTabFlex">
            <p className="smallText">Business</p>
            <DropDownIcon />
          </div>
          <div className="header-items hideMobileAndTabFlex">
            <p className="smallText">Developer</p>
            <DropDownIcon />
          </div>
          <div className="header-items hideMobileAndTabFlex">
            <p className="smallText">Learn</p>
            {/* <DropDownIcon/> */}
          </div>
        </div>

        <div className="center elevate ">
          <div
            onClick={() => ClickedMenue()}
            className="pieStack center hideDextopFlex"
          >
            <div
              style={{ backgroundColor: pieMenueColor }}
              className="pieStrocks hideDextopFlex transition dashes whitePieMenu"
            ></div>
            <div
              style={{ backgroundColor: pieMenueColor }}
              className="pieStrocks2 hideDextopFlex transition dashes whitePieMenu"
            ></div>
          </div>
          <p className="smallSpecialText  hideMobileAndTabFlex">login</p>
          <button className="mainBtn hideMobileAndTabFlex ">
            sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
