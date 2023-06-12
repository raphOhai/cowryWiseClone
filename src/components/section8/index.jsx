import React from "react";
import "./section8.css";
const Section8 = () => {
  return (
    <div className="stack defaultPadding">
      <div className="section8Grid ">
        <div className="footerStack">
          <p id="footerHeading" className="mainText">
            Company
          </p>
          <div className="section6Stack">
            <p id="footerMainText" className="smallText">
              About Us
            </p>
            <p id="footerMainText" className="smallText">
              Press
            </p>
            <p id="footerMainText" className="smallText">
              Careers
            </p>
            <p id="footerMainText" className="smallText">
              Ambassadors
            </p>
            <p id="footerMainText" className="smallText">
              Complaints Management
            </p>
            <p id="footerMainText" className="smallText">
              Privacy
            </p>
            <p id="footerMainText" className="smallText">
              Terms
            </p>
          </div>
        </div>

        <div className="footerStack">
          <p id="footerHeading" className="mainText">
            Product
          </p>
          <div className="section6Stack">
            <p id="footerMainText" className="smallText">
              Saving Plans
            </p>
            <p id="footerMainText" className="smallText">
              Investment Plans
            </p>{" "}
            <p id="footerMainText" className="smallText">
              Mutual Funds
            </p>
            <p id="footerMainText" className="smallText">
              Embed API
            </p>{" "}
            <p id="footerMainText" className="smallText">
              Sprout
            </p>
            <p id="footerMainText" className="smallText">
              Circles
            </p>{" "}
            <p id="footerMainText" className="smallText">
              Got a suggestion?
            </p>
          </div>
        </div>

        <div className="footerStack">
          <p id="footerHeading" className="mainText">
            Resources
          </p>
          <div className="section6Stack">
            <p id="footerMainText" className="smallText">
              Customer Stories
            </p>
            <p id="footerMainText" className="smallText">
              Media
            </p>{" "}
            <p id="footerMainText" className="smallText">
              FAQs
            </p>
            <p id="footerMainText" className="smallText">
              Security
            </p>{" "}
            <p id="footerMainText" className="smallText">
              Estimate your Interest
            </p>
            <p id="footerMainText" className="smallText">
              Plan Education
            </p>{" "}
            <p id="footerMainText" className="smallText">
              Engineering
            </p>
            <p id="footerMainText" className="smallText">
              Blog
            </p>
            <p id="footerMainText" className="smallText">
              Help Center
            </p>
          </div>
        </div>

        <div className="footerStack">
          <p id="footerHeading" className="mainText">
            Contact
          </p>
          <div className="section6Stack">
            <p id="footerMainText" className="smallText">
              support@cowrywise.com
            </p>
            <p id="footerMainText" className="smallText">
              WhatsApp ↗
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="stack">
        <div style={{ marginTop: "4rem" }} className="section8Grid2">
          <div className="section6Stack">
            <div>
              <p id="footerBlackText" className=" mainTex">
                🇳🇬 &nbsp; 5C Reverend Ogunbiyi Street, Ikeja GRA, Lagos Nigeria.
              </p>
            </div>
            <div>
              <p id="footerBlackText" className=" mainTex">
                🇺🇸 &nbsp; 2261 Market Street #4817 San Francisco, CA 94114
              </p>
            </div>
          </div>
          <div className="">
            <div className=" alignEnd">
              <div className="  secBox">
                <div className="secBadgeGrid">
                  <div className="flex center">
                    <img
                      style={{ height: "30px", width: "30px" }}
                      src="https://cowrywise.com/images/license/sec.png"
                      alt=""
                    />
                  </div>

                  <div className="flex center">
                    <div className="secBadgeStack">
                      <p id="lisence" className="mainText">
                        LicensedBy the SEC
                      </p>
                      <p id="lisence2" className="smallText">
                        Fund Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "4rem" }} className="stack">
          <p id="footerNote" className="smallText">
            Cowrywise Financial Technology Limited (“Cowrywise”) is a fund
            manager duly licensed by the Securities and Exchange Commission
            (SEC) of Nigeria.
          </p>
          <p id="footerNote" className="smallText">
            Our mutual funds are managed by our fund management partners and
            made available to our clients through our web and mobile
            applications. The fund manager for each mutual fund is disclosed on
            every mutual fund’s profile page. Any historical returns or expected
            returns are hypothetical in nature and may not reflect actual future
            performance. View full list of available mutual funds on Cowrywise.
          </p>
          <p id="footerNote" className="smallText">
            Stash account is a 10-digit virtual bank account number in line with
            the Nigeria Uniform Bank Account Number (NUBAN) numbering system.
            The NUBAN accounts are generated with the names of selected banks
            through our payment partners. In order for a user to be eligible for
            Stash account number, they must have completed their KYC and added
            their Bank Verification Number (BVN). Stash is used for the purpose
            of receiving money transfers in place of a regular debit card. It
            also receives the proceeds from the sale of any mutual fund on
            Cowrywise.
          </p>
          <p id="footerNote" className="smallText">
            The content on this website does not constitute a complete
            description of Cowrywise’s offerings and services. By using this
            website, you accept our Terms of Use and Privacy Policy.
          </p>
          <p id="footerNote" className="smallText">
            Google Play and the Google Play logo are trademarks of Google LLC.
            Apple, the Apple logo, and iPhone are trademarks of Apple Inc.
            registered in the U.S.
          </p>

          <p id="footerNote" className="smallText">
            ©2023 Cowrywise Financial Technology. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section8;
