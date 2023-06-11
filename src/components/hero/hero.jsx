import React from "react";
import MainImage from "/mainImage.png";
import Block from "../../assets/block";
const Hero = () => {
  return (
    // <div>Hero</div>
    <>
      <div className="stack">
        <div
          style={{ maxWidth: "45rem" }}
          className="stack HideDesktop widthRestric defaultPadding"
        >
          <p style={{ maxWidth: "35rem" }} className="mainText widthRestric">
            Put your money to work.
          </p>

          <h6
            style={{ maxWidth: "35rem" }}
            className="smallMainText widthRestric"
          >
            Invest wisely. Grow wealth.
          </h6>
          <div className="gridImail1 hidePhone">
            <div className="center HideMobile">
              <input className="inputField" placeholder="your name..." />
            </div>

            <div className="center">
              <button className="mainBtn ">sign up for free</button>
            </div>
          </div>
          <div className="flex">
            <div className="HideDesktopAndTab">
              {" "}
              <img className="appStoreBox" src="/appStore.svg" alt="" />
            </div>
            <div className="HideDesktopAndTab">
              <img className="appStoreBox" src="/dowloadBadge.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="grid defaultPadding shiftTop">
          <div className="shiTopTabAndMobile2">
            <div className="relative">
              <div className="relativeBlock">
                <img className="responsive" src="/Rectangle1.png" alt="" />
                {/* <Block /> */}
              </div>
              <div className="relativePic">
                <img className="responsive" src={MainImage} alt="" />
              </div>
              <div className="WhiteBox relativeBox  ">
                <div className="stack">
                  <p className="smallText">
                    I've become more conscious of how I spend my money and also
                    about investing. Now, I feel comfortable spending knowing my
                    Cowrywise account is there.
                  </p>
                  <div className="flexBox">
                    <p className="smallNormalText">Wuraolo F</p>
                    <p className="smallSpecialText">@Wuraolo F</p>
                  </div>
                </div>
                {/* <img className="responsive" src={MainImage} alt="" /> */}
              </div>
            </div>
          </div>

          <div>
            <div className="stack shiftTop2 ShowDeskTop ">
              {/* <p className="mainText"> </p> */}
              <p className="mainText">Put your money to work.</p>

              <h6 className="smallMainText">Invest wisely. Grow wealth.</h6>
              <div className="gridImail1">
                <div className="center">
                  <input className="inputField" placeholder="your name..." />
                </div>

                <div className="center">
                  <button className="mainBtn ">sign up for free</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
