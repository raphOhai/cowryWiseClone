import React from "react";
import Logo from "../../assets/logo";
import DropDownIcon from "../../assets/dropDownIcon";

const Header = () => {
  return (
    <div className="header defaultPadding ">
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
        <p className="smallSpecialText  hideMobileAndTabFlex">login</p>
        <button className="mainBtn hideMobileAndTabFlex ">sign up for free</button>
      </div>
  
    </div>
  );
};

export default Header;
