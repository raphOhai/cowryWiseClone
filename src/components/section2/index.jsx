import React from "react";

const Section2 = () => {
  return (
    <>
      {/* <div style={{}} className="niceBacground shiTopTabAndMobile5 "></div> */}
      <div className="defaultPadding returnBacground shiTopTabAndMobile5 ">
        <div className="defaultPadding">
          <div  className="stack3 center ">
            <p id="sectionNote" className="smallMainText2">
              Stay the course, reap the reward
            </p>
            <p id="largerText" className="smallText">
              if you invested
            </p>

            <p
              style={{ marginTop: "-4rem" }}
              id="startAmount"
              className="smallMainText"
            >
              <span id="NiaraSymbol" className="center">
                {" "}
                ₦{" "}
              </span>{" "}
              5,000
            </p>
            <div style={{ marginTop: "-4rem" }} className="flexBox2">
              <div>
                <p className="">Monthly</p>
              </div>
              <div>
                <p className="">Last year</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "3rem" }} className="defaultPadding">
            <input
              className="input"
              type="range"
              min="5000"
              max="10000000"
              step="1000"
              value="900000"
              data-v-c125b038=""
            />
          </div>

          <div style={{ marginTop: "3rem" }} className="stack3 center">
            <p id="largerText" className="smallText">
              today you'd have
            </p>

            <p
              style={{ marginTop: "-4rem" }}
              id="profitAmount"
              className="smallMainText"
            >
              <span id="NiaraSymbol" className="center">
                {" "}
                ₦{" "}
              </span>{" "}
              234,600
            </p>
          </div>
          <div style={{marginTop:"3rem"}} className="center flex defaultPadding stack">
            <div className="specailBox defaultPadding">
              <p>₦40,690,301 earned in returns on CowryWise</p>
            </div>
            <p style={{ fontSize: ".9rem" }} className="smallText2">
              *In the bank you'd have earned <span style={{color:"black"}}> ₦1,690,301 </span>
            </p>
            <p style={{marginTop:"2rem",maxWidth:"60rem"}} className="smallText textAlignCenter smallText2">
              Calculations are based on the average performance of conservative
              mutual funds on Cowrywise from 2019. Calculation excludes
              processing fees.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
