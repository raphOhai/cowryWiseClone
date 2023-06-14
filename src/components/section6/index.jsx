import React from "react";
import "./section6.css";
import StartRating from "../../assets/startRating";

const Section6 = () => {
  return (
    <div className="defaultPadding">
      <div className="section6Grid maxWidth">
        {/* <div className="flex, center">
          <div className="section6Cards ">
            <div className="stack">
              <div className="section6Grid2">
                <div className="flex alignStart">
                  <div className="section6FlexBox2">
                    <div className="flex center">
                      <h1 className="mainText2 rating">
                        4.4<span className="smallText"> /5</span>
                      </h1>
                    </div>
                    <div className="flex center">
                      <StartRating />
                    </div>
                  </div>
                </div>
                <div className="flex alignEnd">
                  <div style={{ marginTop: "-.8rem" }} className="center">
                    <img
                      className="appStoreBox"
                      src="/dowloadBadge.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <h2 id="cardsText" className="mainText2">
                Available on the Play Store
              </h2>
              <p id="cardParagraph" className="smallText ">
                “User interface is fantastic, deposits and withdrawals flawless
                and fast. I wish I had discovered this years ago, would have
                been a millionaire by now” - Obiora, Nov 2021
              </p>
              <div style={{ marginTop: "2rem" }}>
                <p className="smallSpecialText downloadNowCta">DOWNLOAD NOW</p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex, center">
          <div className="section6Cards ">
            <div className="stack">
              <div className="section6Grid2">
                <div className="flex alignStart">
                  <div className="section6FlexBox2">
                    <div className="flex center">
                      <h1 className="mainText2 rating">
                        4.4<span className="smallText"> /5</span>
                      </h1>
                    </div>
                    <div className="flex center">
                      <StartRating />
                    </div>
                  </div>
                </div>
                <div className=" AlignEnd">
                  <div>
                    <div style={{ marginTop: "-.8rem" }} className="center">
                      <img
                        className="appStoreBox"
                        src="/dowloadBadge.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h2 id="cardsText" className="mainText2">
                Available on the Play Store
              </h2>
              <p id="cardParagraph" className="smallText ">
                “User interface is fantastic, deposits and withdrawals flawless
                and fast. I wish I had discovered this years ago, would have
                been a millionaire by now” - Obiora, Nov 2021
              </p>
              <div style={{ marginTop: "2rem" }}>
                <p className="smallSpecialText downloadNowCta">DOWNLOAD NOW</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex, center">
          <div className="section6Cards ">
            <div className="stack">
              <div className="section6Grid2">
                <div className="flex alignStart">
                  <div className="section6FlexBox2">
                    <div className="flex center">
                      <h1 className="mainText2 rating">
                        4.4<span className="smallText"> /5</span>
                      </h1>
                    </div>
                    <div className="flex center">
                      <StartRating />
                    </div>
                  </div>
                </div>
                <div className=" AlignEnd">
                  <div>
                    <div style={{ marginTop: "-.8rem" }} className="center">
                      <img className="appStoreBox" src="/appStore.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <h2 id="cardsText" className="mainText2">
                Available on the Play Store
              </h2>
              <p id="cardParagraph" className="smallText ">
                “User interface is fantastic, deposits and withdrawals flawless
                and fast. I wish I had discovered this years ago, would have
                been a millionaire by now” - Obiora, Nov 2021
              </p>
              <div style={{ marginTop: "2rem" }}>
                <p className="smallSpecialText downloadNowCta">DOWNLOAD NOW</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
