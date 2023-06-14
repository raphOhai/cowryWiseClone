import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShowRangeValue } from "../../reducer/profitAnalyser";

const Section2 = () => {
  const {
    rangeValue,
    cowryWiseProfit,
    bankProfit,
    crytoProfit,
    NftProfit,
    TotalProfit,
  } = useSelector((state) => state.profitAnalyser);
  const dispatch = useDispatch();
  return (
    <>
      {/* <div style={{}} className="niceBacground shiTopTabAndMobile5 "></div> */}
      <div className="defaultPadding returnBacground ">
        <div className="defaultPadding">
          <div className="stack3 center ">
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
              {rangeValue.toLocaleString()}
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
              onChange={(e) => dispatch(ShowRangeValue(e.target.value))}
              className="input"
              type="range"
              min="5000"
              max="10000000"
              step="1000"
              value={rangeValue}
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
              className="smallMainText transition"
            >
              <span id="NiaraSymbol" className="center">
                {" "}
                ₦{" "}
              </span>{" "}
              {TotalProfit.toLocaleString()}
            </p>
          </div>
          <div
            style={{ marginTop: "3rem" }}
            className="center flex defaultPadding stack"
          >
            <div className="specailBox defaultPadding">
              <p>
                ₦{cowryWiseProfit.toLocaleString()} earned in returns on
                CowryWise
              </p>
            </div>
            <p style={{ fontSize: ".9rem" }} className="smallText2">
              *In the bank you'd have earned{" "}
              <span style={{ color: "black" }}>
                {" "}
                ₦{bankProfit.toLocaleString()}
              </span>
            </p>

            <p style={{ fontSize: ".9rem" }} className="smallText2">
              *In crypto you'd have lost{" "}
              <span style={{ color: "black" }}>
                
                ₦{NftProfit.toLocaleString()}
              </span>
            </p>
            <p style={{ fontSize: ".9rem" }} className="smallText2">
              *if you had bought an NFT you'd have lost{" "}
              <span style={{ color: "black" }}>
                {" "}
                ₦{NftProfit.toLocaleString()}
              </span>
            </p>
            <p
              style={{ marginTop: "2rem", maxWidth: "60rem" }}
              className="smallText textAlignCenter smallText2"
            >
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
