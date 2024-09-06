import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import Page from "../../components/Page/Page";
import { Helmet } from "react-helmet";

const TermsContests = (props) => {
  return (
    <Layout>
      <Helmet>
        <style>{"a {color: #b9b9b9}"}</style>
      </Helmet>
      <Page locationType={"/"} {...props}>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <div className="row">
                <div className="col-12">
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <ul className="tabs">
                    <li>
                      <Link to="/terms">Terms & Conditions</Link>
                    </li>{" "}
                    |
                    <li className="active">
                      <span>Contest T&Cs</span>
                    </li>{" "}
                    |
                    <li>
                      <Link to="/privacy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <h3
                className="mt-5 mb-3 font-weight-bold text-white"
              >
                Workmob Contests Terms and Conditions
              </h3>
              <p className="text-white mt-4">
                (Last updated on September 2023)
                <br />
                <br />
              </p>
              <p className="text-white">
                Your acceptance and acknowledgement of these terms and conditions (“terms of use”) is a legal agreement between you (“end user, your or you”) and Workmob.
                The terms govern your participation in Meri Kahani Editions on the Workmob platform. You acknowledge and agree that you satisfy all Meri Kahani Editions eligibility requirements as provided herein below.
                This document is an electronic record and does not require any physical or digital signatures.
                <br />
                <br />
                “Workmob Platform” means and refers to Workmob’s proprietary initiatives called 'Workmob - Meri Kahani, Workmob - Intro, Workmob - Youngstars, Workmob - Market, Workmob-Greetings, Workmob Gyan',
                which enables end-users to explore, discover, view, upload and share their life experiences, career journey, and the real story behind your products and services through the power of video with the people of India.
                The Workmob platform may either be (i) downloaded and installed by you from a third-party application store; (ii) viewed on the website  &nbsp;
                <Link to="/">“www.workmob.com”</Link>
                <br />
                <br />
                Please carefully read these Meri Kahani Editions Terms and Conditions before participating in Meri Kahani Editions on the Workmob Platform.
                <br />
                <br />
              </p>

              <p className="text-white">
                &nbsp;&nbsp; 1. &nbsp;<strong>GENERAL</strong>
              </p>
              <ol className="listing text-white">
                <li>
                  <span className="list">1.</span>
                  <p>
                    These Terms incorporate by reference Workmob User Terms and Conditions as set out in {" "}
                    <Link to="/terms">https://www.workmob.com/terms</Link> and
                    Workmob Privacy Policy as set out in{" "}
                    <Link to="/privacy">https://www.workmob.com/privacy</Link>
                    &nbsp; which you agree by using the Workmob Platform.
                  </p>
                </li>
              </ol>

              <p className="text-white">
                &nbsp;&nbsp; 2. &nbsp;<strong> MERI KAHANI EDITIONS</strong>
              </p>
              <ol className="listing text-white">
                <li>
                  <span className="list">1.</span>
                  Workmob runs Meri Kahani Editions where users can receive awards/rewards for (i) sharing their life experiences, career journey, entrepreneurial journey etc.; (ii) getting the most number of likes and/ or similar engagement among all participants on such created content; (iii) getting selected as 'Karmayogis' by the Jury members.
                </li>
                <li>
                  <span className="list">2.</span>
                  The awards/rewards are in the form of certificates, digital gift cards or physical gifts.
                </li>
                <li>
                  <span className="list">3.</span>
                  Users do not need to pay to participate in Meri Kahani Editions.
                </li>
                <li className="column">
                  <p className="flexRow mb20">
                    <span className="list">4.</span>
                    By downloading the Workmob Platform from Apple’s App Store, you specifically acknowledge and agree that:
                  </p>
                  <ol className="listing">
                    <li>
                      <span className="list">-</span>
                      Apple is not involved in any way with the Meri Kahani Editions run on the Workmob Platform.
                    </li>
                    <li>
                      <span className="list">-</span>
                      These Terms are between Workmob and you; Apple is not a party to these Terms.
                    </li>
                    <li>
                      <span className="list">-</span>
                      Apple is not responsible for the Workmob Platform or the content thereof and has no obligation whatsoever with respect to the Platform.
                    </li>
                  </ol>
                </li>
                <li>
                  <span className="list">5.</span>
                  Any queries related to Meri Kahani Editions must be addressed to &nbsp;
                  <a href="mailito:support@workmob.com">support@workmob.com</a>.
                </li>
                <li>
                  <span className="list">6.</span>
                  By participating in a Meri Kahani Editions on the Workmob Platform, you agree to the Meri Kahani Editions Terms & Conditions.
                </li>
              </ol>

              <p className="text-white">
                &nbsp;&nbsp; 3. &nbsp;<strong>ELIGIBILITY</strong>
              </p>
              <ol className="listing text-white">
                <li>
                  <span className="list">1.</span>
                  <p>
                  You need to fulfill the following eligibility criteria to enter a Meri Kahani Editions on the Workmob Platform: (a) You should be an individual legal resident of the Republic of India; (b) You should be of an age 18 years or above at the time of entry into the Meri Kahani Editions;
                   except in case of Workmob - Youngstars, which is an initiative intended for children under 18 years of age, where you can watch videos of India's young and talented children who are making a difference in various fields.
                  If you are under 18 years of age, then please use Workmob-Youngstars to share your talents and skills. (d) You should enter a Workmob Meri Kahani Editions through the mobile application or website of &nbsp;
                   <Link to="/"> www.workmob.com</Link> or  <Link to="https://stories.workmob.com/"> stories.workmob.com </Link>; &nbsp;
                  and (e) You should have a valid proof of identity and age in the form of a copy of PAN Card / Driving License / Voter ID / Indian passport. Employees of Workmob, 
                  their immediate family members (spouses, domestic partners, parents, grandparents, siblings, children and grandchildren)
                  are not eligible to enter the Meri Kahani Editions.
                  </p>
                </li>
              </ol>

              <p className="text-white">
                &nbsp;&nbsp; 4. &nbsp;
                <strong> MERI KAHANI EDITIONS DETAILS AND HOW TO PARTICIPATE</strong>
              </p>
              <ol className="listing text-white">
                <li>
                  <span className="list">1.</span>
                  The start and end date ("Meri Kahani Editions Period") of every Meri Kahani Editions will be clearly mentioned on the Meri Kahani Editions detail page. To enter, you must, during the Meri Kahani Editions Period: (a) sign-in to your Workmob account. If you do not have an account,
                  you would need to sign-up for a Workmob account, to be able to enter into a Meri Kahani Editions; (b) once signed-in, you can participate in a Meri Kahani Editions by navigating to the "Meri Kahani Editions" page.
                </li>
              </ol>

              <p className="text-white">
                &nbsp;&nbsp; 5. &nbsp;<strong> OTHER MERI KAHANI EDITIONS:</strong>
              </p>
              <ol className="listing text-white">
                <li>
                  <span className="list">1.</span>
                  Please note that we may be running similar Meri Kahani Editions or promotions at the same time. By entering a Meri Kahani Editions, you will not be eligible to receive any benefit and/ or rewards/awards in any other promotion/ Meri Kahani Editions unless you enter each promotion/ Meri Kahani Editions separately.
                </li>
              </ol>

              <p className="text-white">
                &nbsp;&nbsp; 6. &nbsp;<strong>ODDS OF BEING SELECTED</strong>
              </p>
              <ol className="listing text-white">
                <li>
                  <span className="list">1.</span>
                  Odds of being selected depend on the number of eligible entries received. Eligible
                  entries are ones that satisfy the eligibility criteria outlined above and follow the steps outlined in the "Meri Kahani Editions Details and the How to Participate" section above.
                </li>
              </ol>
              <p className="text-white">
                &nbsp;&nbsp; 7. &nbsp;<strong>AWARDS</strong>
              </p>
              <ol className="listing text-white">
                <li>
                  <span className="list">1.</span>
                  Workmob will notify the selected participants, eligible to claim the award, by email within 48 hours of the Meri Kahani Editions end date.
                  Each award will be awarded "AS IS" and WITHOUT WARRANTY OF ANY KIND, express or implied (including, without limitation, any implied warranty of merchantability or fitness for a particular purpose).
                </li>
              </ol>
              {/* <p className="text-white">
                &nbsp;&nbsp; 8. &nbsp;<strong>PRIZE</strong>
              </p>
              <ol  className="listing text-white">
                <li>
                  <span className="list">1.</span>
                  Workmob will notify the winning participants, eligible to
                  claim the Prize, by email within 48 hours of the contest end
                  date. Each Prize will be awarded "AS IS" and WITHOUT WARRANTY
                  OF ANY KIND, express or implied (including, without
                  limitation, any implied warranty of merchantability or fitness
                  for a particular purpose).
                </li>
              </ol> */}

              <p className="text-white">
                &nbsp;&nbsp; 8. &nbsp;<strong>ADDITIONAL TERMS</strong>
              </p>
              <ol className="listing text-white">
                <li>
                  <span className="list">1.</span>
                  Workmob may, to the maximum extent permitted by applicable law and in its sole discretion, change any of the terms or cancel a Meri Kahani Editions at any time; or modify, terminate, or suspend a Meri Kahani Editions should viruses, worms, bugs,
                  unauthorized human intervention or other causes beyond its control corrupt or impair the administration, security, fairness or proper play of a Meri Kahani Editions or submission of entries. Workmob is not responsible for: (a) lost, misdirected, late, incomplete, or unintelligible entries or for
                  inaccurate entry information, whether caused by you or by any of the equipment or programming associated with or utilized in a Meri Kahani Editions, or by any technical or human error that may occur in the processing of entries; (b) any printing or typographical errors in any materials associated with a
                  Meri Kahani Editions; (c) any error in the operation or transmission, theft, destruction, unauthorized access to, or alteration of, entries, or for technical, network, telephone, computer, hardware or software, malfunctions of any kind, or inaccurate transmission of,
                  or failure to receive any entry information on account of technical problems or traffic congestion on the Internet or at any website; or (d) injury or damage to your or any other computer or mobile resulting from downloading any materials in connection with a Meri Kahani Editions. Workmob may, in its sole discretion,
                  disqualify any individual found to be: (a) tampering with the entry process or the operation of the Meri Kahani Editions; (b) acting in violation of these T&Cs; or (c) acting in an unsportsmanlike or disruptive manner or with intent to annoy, abuse, threaten or harass any other person. If your entry is incomplete or if you use robotic, automatic,
                  programmed or similar entry methods, your entry will be void. The authorized subscriber of the e-mail account used to enter a Meri Kahani Editions at the actual time of entry will be deemed to be the participant and must comply with these
                  T&Cs in the event of a dispute as to entries submitted by multiple users having the same e-mail account. The authorized account subscriber is the natural person who is assigned an e-mail address by an internet access provider, on-line service provider, or other organization responsible for assigning e-mail addresses for the domains associated with
                  the submitted e-mail addresses. No benefits greater than those described in these T&Cs will be awarded.
                </li>
              </ol>

              <p className="text-white">
                &nbsp;&nbsp; 9. &nbsp;<strong>MISCELLANEOUS</strong>
              </p>
              <ol className="listing text-white">
                <li>
                  <span className="list">1.</span>
                  Meri Kahani Editions and all accompanying materials are © 2020 by Workmob. All rights reserved. No requests for transfer or assignment or redemption of the benefits shall be entertained.
                  You agree that all decisions made by Workmob related to Meri Kahani Editions are final and binding on you. Failure by Workmob to enforce any of these T&Cs in any instance shall not be deemed to be a waiver of the
                  T&Cs and shall not give rise to any claim by any person. These T&Cs are governed by the laws of India and courts at New Delhi shall have the exclusive jurisdiction in respect of any disputes or any matter arising here from.
                </li>
              </ol>

              <p className="text-white">
                &nbsp;&nbsp; 10. &nbsp;<strong>FORCE MAJEURE</strong>
              </p>
              <ol className="listing text-white">
                <li>
                  <span className="list">1.</span>
                  Meri Kahani Editions are subject to force majeure circumstances including without limitation, floods, natural disasters, war, act of terror, political unrests, technical snags,
                  act of God or any circumstance beyond the reasonable control of Workmob ("Force Majeure Event"). Workmob shall be not liable for any delay or adverse effect caused to you as a result of a Force Majeure Event.
                </li>
              </ol>

              <p className="text-white">
                &nbsp;&nbsp; 11. &nbsp;<strong>PUBLICITY RELEASE</strong>
              </p>
              <ol className="listing text-white">
                <li>
                  <span className="list">1.</span>
                  By participating in a Meri Kahani Editions, you give Workmob permission to use your name, image, voice, and/or appearance as such may be embodied in any pictures, photos, video recordings, audiotapes,
                  digital images, and the like, taken or made in relation to a Meri Kahani Editions and any promotions, events, or Meri Kahani Editions to follow. You agree that Workmob has the right to publish your
                  saved item details for any communication, promotions, events, or Meri Kahani Editions that follow. You agree that Workmob and/ or its affiliates have complete ownership of such pictures, etc., including the entire copyright,
                  and may use them for any purpose. These uses include, but are not limited to illustrations, bulletins, exhibitions, videotapes, reprints, reproductions, publications, advertisements, and any promotional or educational materials
                  in any medium now known or later developed, including the internet. You acknowledge that you will not receive any compensation, etc. for the use of such pictures, etc., and hereby release Workmob and its agents and assigns from
                  any and all claims which arise out of or are in any way connected with such use. You give your consent to Workmob, agents and assigns to use your name to promote a Meri Kahani Editions and any promotions, events, or Meri Kahani Editions to follow.
                </li>
              </ol>

              <p className="text-white">
                &nbsp;&nbsp; 12. &nbsp;<strong>LIABILITY RELEASE</strong>
              </p>
              <ol className="listing text-white">
                <li>
                  <span className="list">1.</span>
                  Meri Kahani Editions are made purely on a "best effort" basis and participating in Meri Kahani Editions is voluntary.
                  By participating in Meri Kahani Editions, you will be legally bound hereby, to release from liability, and hold harmless Workmob,
                  and any of its employees or agents representing or related to Workmob and its services/products. This release is for any and all liability
                  for personal injuries (including death), property loss or damage, and misuse of the benefits/ awards offered under a Meri Kahani Editions,
                  in connection with any activity or directly or indirectly, by reason of the acceptance, possession, or participation in a Meri Kahani Editions,
                  even if caused or contributed to by Workmob’s negligence.
                </li>
              </ol>

              <p className="text-white">
                &nbsp;&nbsp; 13. &nbsp;<strong>SELECTION ANNOUNCEMENT</strong>
              </p>
              <ol className="listing text-white">
                <li>
                  <span className="list">1.</span>
                  <p>
                  After Workmob confirms the selected community member/s, Workmob will contact each community member individually through email. Workmob will also post the community member/s names on
                    <Link to="/"> www.workmob.com</Link> 48 hours after a Meri Kahani Editions end date.
                  </p>
                </li>
              </ol>

              <p className="text-white">
                &nbsp;&nbsp; 14. &nbsp;<strong>CONTACT</strong>
              </p>
              <ol className="listing text-white">
                <li>
                  <span className="list">1.</span>
                  <p>
                  For any details regarding Meri Kahani Editions and the awards thereof, please contact Workmob Customer Care at {" "}
                    <a href="mailito:support@workmob.com">
                      {" "}
                      support@workmob.com
                    </a>
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Page>
    </Layout>
  );
};

export default TermsContests;
