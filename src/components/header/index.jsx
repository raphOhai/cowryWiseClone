import React from "react";
import Logo from "../../assets/logo";
import DropDownIcon from "../../assets/dropDownIcon";
import { ClickedMenue } from "../hooks/menueAnimation";

const Header = () => {
  return (
    <div className=" headerBox">
      <div
        id="header"
        className="header defaultPadding transition "
      >
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

        <div className="center ">
          <div
            onClick={() => ClickedMenue()}
            className="pieStack center hideDextopFlex"
          >
            <div className="pieStrocks hideDextopFlex transition dashes whitePieMenu"></div>
            <div className="pieStrocks2 hideDextopFlex transition dashes whitePieMenu"></div>
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
