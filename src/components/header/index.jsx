import React from "react";
import Logo from "../../assets/logo";
import DropDownIcon from "../../assets/dropDownIcon";

const Header = () => {
  return (
    <div className="header defaultPadding">
      <div className="center">
        <Logo />
        <div className="header-items">
          <p className="smallText">personal</p>
          <DropDownIcon />
        </div>
        <div className="header-items">
          <p className="smallText">Business</p>
          <DropDownIcon />
        </div>
        <div className="header-items">
          <p className="smallText">Developer</p>
          <DropDownIcon />
        </div>
        <div className="header-items">
          <p className="smallText">Learn</p>
          {/* <DropDownIcon/> */}
        </div>
      </div>

      <div className="center">
        <p className="smallSpecialText">login</p>
        <button className="mainBtn ">sign up for free</button>
      </div>
  
    </div>
  );
};

export default Header;
