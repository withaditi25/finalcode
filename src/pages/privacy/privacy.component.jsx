import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Page from '../../components/Page/Page';
import Helmet from "react-helmet";

const Privacy = (props) => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <Layout>
      <Helmet> 
        <meta charSet="utf-8" />
        <title>Workmob – Privacy Policy</title>
        <style>
          {'a {color: #b9b9b9}'}
        </style>
      </Helmet>
      <Page locationType={"/"} {...props}>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <div className="row">
                <div className="col-12">
                  <ul className='tabs'>
                    <li><Link to='/terms'>Terms & Conditions</Link></li>|
                    <li><Link to='/terms-contests'>Contest T&Cs</Link></li>|
                    <li className='active'><span>Privacy Policy</span></li>
                  </ul>
                </div>
              </div>
              <h3 className="text-left text-uppercase mt-3 mb-3 font-weight-bold text-white">Workmob Privacy Policy</h3>
              <p className='text-white mt-4'>(Last updated on September 2023)<br /><br /></p>

              <p className="text-white mb20">1. &nbsp;<strong>Introduction</strong></p>
              <ol className="listing text-white">
                <li>
                  <span className="list">1.</span>
                  <p>
                    Workmob Private Limited (<strong>"Company"</strong> or <strong>"We"</strong>) respects your privacy
                    and is committed to protecting it. Please read this privacy policy (<strong>“Policy”</strong>)
                    carefully to understand our practices regarding your information. By
                    installing, subscribing to, accessing or using the Workmob Platform, you
                    agree to this Policy.
                  </p>
                </li>
                <li>
                  <span className="list">2.</span>
                  This Policy describes (i) the types of information we may collect when you install, subscribe to, access, and/or use the features of Workmob Platform; (ii) the types of information we may collect or that you may provide when any advertisement or promotional campaign is displayed by Company on Workmob Platform or as part of your interaction with such advertisement by Company;
                  (iii) how we use that information, and the purposes for which we collect it; and (iv) how we disclose such information.
                </li>
                <li>
                  <span className="list">3.</span>
                  As used in this Policy, “Workmob Platform” means and refers to Workmob’s proprietary Initiatives called 'Workmob - Meri Kahani, Workmob - Intro, Workmob - Youngstars, Workmob - Market, Workmob-Greetings, Workmob Gyan', which enables end-users to explore, discover, view, upload and and share their life experiences, career journey,
                  and the real story behind your products and services through the power of video with the people of India.
                </li>
                <li>
                  <span className="list">4.</span>
                  This Policy applies only to information we obtain from you through the Workmob Platform. This Policy does not apply to websites or landing pages you may access through the Workmob Platform or your direct interaction with
                  any third party including an advertiser even if you engage with any specific advertisement through the Workmob Platform, nor does it apply to information that you provide to or that is collected by any third party. We encourage you to read any such third party terms, conditions, policies,
                  notices etc. before providing information on or to such third parties including Sites.
                </li>
              </ol>

              <p className="text-white mb20">2. &nbsp;<strong>Information we collect and how we collect it</strong></p>
              <ol className="listing text-white">
                <p className="text-white mb20">1. &nbsp; We collect information from and about users of our Workmob Platform as stated herein </p>
                <li>
                  <ol className="listing text-white">
                    <li>
                      <span className="list">1.</span>
                      <p>
                        <strong>Information you provide to us with prompts <br /><br /></strong>
                        If you elect to install, launch, access and/or use the Workmob Platform, we will ask you to provide certain information to create your account such as name and email.
                        You may also provide the Workmob Platform with additional information such as content, location, areas of interest, preferences etc. in order to customize the experience for you.

                        <br />
                        <br />
                        Workmob Platform is meant for general audience and is not targeted towards users below 13 years of age, therefore,
                        we do not knowingly request access to, collect or process personal information of any such user.
                      </p>
                    </li>
                    <li className="column">
                      <p className="flexRow mb20">
                        <span className="list">2.</span>
                        <span>
                          <strong>Other Information we collect without prompts <br /><br /></strong>

                        </span>
                      </p>
                      <ol className="listing text-white">
                        <li>
                          <span className="list">1.</span>
                          <p>
                            <strong>Workmob Platform usage details: </strong>
                            Details of your access to and use of the Workmob Platform, including interaction data, logs of access and usage,
                            and other performance data and the resources that you access and use on or through the Workmob Platform, content you read,
                            view, watch, interact with.

                          </p>
                        </li>
                        <li>
                          <span className="list">2.</span>
                          <p>
                            <strong>Device Information: </strong>
                            We may collect information about or on your device such as the online device identifiers,
                            advertising identifiers, device make, IP Address, display features, operating system make, browser type, network/wifi the content type of the ad.
                          </p>
                        </li>
                        <li>
                          <span className="list">3.</span>
                          <p>
                            <strong>Location Information: </strong>
                            The Workmob Platform collects information about the location of your smart device if you permit. You can choose whether or not to allow the Workmob Platform to collect information about your device's location by turning off the location settings on your device. If you block the use of location information, some parts
                            of the Workmob Platform may then be inaccessible or not function properly. Workmob Platform may read your location on city level from your cellular network to enhance your experience and the content we serve you. This city level location data is solely used by our recommendation engine to serve your content.
                          </p>
                        </li>
                        <li className="column">
                          <p >
                            <span className="list">4.</span>
                            <strong>Tracking Technologies: </strong>
                         
                          </p>
                          <ol className="listing text-white">
                            <li>
                              <span className="list">
                                1.
                              </span>
                              Cookies or pixels (or mobile cookies/pixels). A
                              cookie is a small file placed on your smart device.
                              It may be possible to refuse/accept cookies by
                              activating the appropriate setting on your smart
                              device. However, if you select this setting you may
                              be unable to access certain features of the
                              Workmob Platform.
                            </li>
                            <li>
                              <span className="list">
                                2.
                              </span>
                              Beacons. Pages of the Workmob Platform may
                              contain small files known as beacons (also
                              referred to as clear gifs, pixel tags, and singlepixel gifs) that permits Company to improve its
                              services, for example, recording the popularity of
                              certain application content, verifying system and
                              server integrity.
                            </li>
                          </ol>
                        </li>
                        <li>
                          <span className="list">5.</span>
                          <p>
                            <strong>Third-Party Information Collection: </strong>
                            When you use the Workmob Platform or its content, certain third parties may use automatic information collection
                            technologies to collect information about you or your device. These third parties may include Ad Partners, ad servers,
                            attribution partners and analytics companies, your device manufacturer and/or your network service provider etc. These
                            third parties may use tracking technologies to collect information about you, your device and your interaction when you use the Workmob Platform.
                            The information they collect may be associated with your personal information or they may collect information, including personal information, about your online activities over time and across different websites, apps, and other online services. They may use this information to provide you with interest-based (behavioral) advertising or other targeted content. While we contractually require all our partners to comply with applicable privacy laws, please note that we do not control these third parties’ tracking technologies.
                          </p>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>

              <p className="text-white mb20">3. &nbsp;<strong>How Your Information is used</strong></p>
              <ol className="listing text-white">
                <p className="text-white mb20">We may use information that is collected about you or that you provide, to (collectively referred to as “Permitted Purposes”):</p>
                <li>
                  <span className="list">1.</span>
                  <p>
                    Provide you with the Workmob Platform features and its contents, such as location-based events and any other content.
                  </p>
                </li>
                <li>
                  <span className="list">2.</span>
                  <p>
                    Provide advertisements, promotions and/or offerings that may be of interest to you.
                  </p>
                </li>
                <li>
                  <span className="list">3.</span>
                  <p>
                    Notify you when any relevant Workmob Platform updates or upgrades are available and require notification.
                  </p>
                </li>
                <li>
                  <span className="list">4.</span>
                  <p>
                    Estimate our audience size and usage patterns.
                  </p>
                </li>
                <li>
                  <span className="list">5.</span>
                  <p>
                    Speed up your searches.
                  </p>
                </li>
                <li>
                  <span className="list">6.</span>
                  <p>
                    Improve our customer services and account maintenance including to detect, deter and prevent fraud, fraudulent traffic or to protect the security of our systems.
                  </p>
                </li>
                <li>
                  <span className="list">7.</span>
                  <p>
                    Make disclosures in the event of merger, sale, other asset transfers or other relevant corporate transactions. If we are involved in a merger, acquisition,
                    financing due diligence, reorganization, bankruptcy, receivership, purchase or sale of assets, or transition of service to another provider,
                    then your information may be sold or transferred as part of such a transaction, as permitted by law and/or contract.
                  </p>
                </li>
                <li>
                  <p>
                    If you decide to opt-in to our mailing list, you will receive emails that may include Company news, updates, related product or service information, etc.
                    If at any time you would like to unsubscribe from receiving future emails, please follow the detailed unsubscribe instructions at the bottom of each email or you may email us at
                    &nbsp;<a href="mailto:support@workmob.com">support@workmob.com</a>.
                  </p>
                </li>
              </ol>

              <p className="text-white mb20">4. &nbsp;<strong>Disclosure of your information for Permitted Purpose</strong></p>
              <ol className="listing text-white">
                <p className="text-white mb20">
                <span className="list">- </span>
                  We may disclose aggregated information about our users, and information that does not identify any individual or device. We may also disclose information that we collect, or you provide:
                  {/* To our key shareholders, board, investors (debt or equity) and Affiliates.
                  Partners. We may share your data with our Ad Partners, vendors, customers, data partners, measurement companies, and other third parties we partner with for providing our products and services. */}
                </p>
                <li>
                  <span className="list">1.</span>
                  <p>
                    To our key shareholders, board, investors (debt or equity) and Affiliates.
                  </p>
                </li>
                <li>
                  <span className="list">2.</span>
                  <p>
                    Partners. We may share your data with our Ad Partners,
                    vendors, customers, data partners, measurement companies,
                    and other third parties we partner with for providing our products
                    and services.
                  </p>
                </li>
                <li>
                  <span className="list">3.</span>
                <p>
                  Legal Disclosures. We may access, preserve, and disclose any
                  information we store associated with you to external parties if
                  we, in good faith, believe doing so is required or appropriate to:
                  comply with law enforcement or national security requests and legal process, such as a court order or subpoena; protect your, our or others’ rights, property, or safety;
                  enforce our policies or contracts; collect amounts owed to us; or assist with an investigation or prosecution of suspected or actual illegal activity.
                  {/* You acknowledge that some of the recipients of your information may be located outside your country of residence. Where we transfer your information to such third parties,
                  we will endeavor to ensure that your information remains secure from unauthorized disclosure or theft. To the extent required under data privacy laws of the applicable jurisdiction, we may transfer such information pursuant to consent
                  or through applicable data protection agreements or other mechanisms permitted under such laws. */}
                </p>
                </li>
                <li>
                <span className="list">- </span>
                  You acknowledge that some of the recipients of your information may be
                  located outside your country of residence. Where we transfer your
                  information to such third parties, we will endeavor to ensure that your
                  information remains secure from unauthorized disclosure or theft. To the
                  extent required under data privacy laws of the applicable jurisdiction, we may
                  transfer such information pursuant to consent or through applicable data
                  protection agreements or other mechanisms permitted under such laws.
                </li>
              </ol>

              <p className="text-white mb20">5. &nbsp;<strong>Your Choices About Our Collection, Use, and Disclosure of Your Information</strong></p>
              <ol className="listing text-white">
                <p className="text-white mb20">
                  We strive to provide you with choices regarding the information you provide to us. You may elect to disable, uninstall or unsubscribe from the Workmob Platform.

                </p>
                <li>
                  <span className="list">1.</span>
                  <p>
                    <strong>Location data collection:</strong> You may opt out of the location data collection by Workmob Platform by turning off the location settings on your device. Note, however, that opting out of the Workmob Platform’s collection of
                    location information will cause its location-based features to be disabled.
                    Workmob Platform may read your location on city level from your cellular network to enhance your experience and the content we serve you. This city level location data is solely used by our recommendation engine to serve you content.
                    {/* 2. Tracking Technologies: You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent or use your settings to disable certain features or opt out of targeted advertising etc. If you disable or refuse cookies
                    or block the use of other tracking technologies, some parts of the Workmob Platform may then be inaccessible or not function properly. */}
                  </p>
                </li>
                <li>
                  <span className="list">2.</span>
                  <p>
                    <strong>Tracking Technologies:</strong> You can set your browser to refuse
                    all or some browser cookies, or to alert you when cookies are
                    being sent or use your settings to disable certain features or opt
                    out of targeted advertising etc. If you disable or refuse cookies
                    or block the use of other tracking technologies, some parts of
                    the Workmob Platform may then be inaccessible or not function
                    properly.
                  </p>
                </li>
              </ol>

              <p className="text-white mb20">6. &nbsp;<strong>Data Security</strong></p>
              <ol className="listing text-white">
                <li>
                  <p>
                    We have implemented suitable technical and organizational measures to secure your personal information in compliance with our legal and privacy requirements and contractual obligations. Unfortunately,
                    the transmission of information via the Internet and mobile platforms is not completely secure.
                  </p>
                </li>
              </ol>

              <p className="text-white mb20">7. &nbsp;<strong>Data Retention Period</strong></p>
              <ol className="listing text-white">
                <li>
                  <p>
                    Company may retain the information relating to your device collected
                    for a period of up to 36 months, unless otherwise required by law or applicable contract.
                    <br />
                    <br />
                    Company may retain the information it obtains about you as per the instructions of its
                    customers or partners who provide such information or as required to fulfill our contractual obligations.
                    <br />
                    <br />
                    After the applicable retention period, the Company may retain and use such data in an aggregated format, as necessary for internal analytical purposes,
                    to comply with its legal obligations, resolve disputes (including billing) and enforce agreements.
                  </p>
                </li>
              </ol>

              <p className="text-white mb20">8. &nbsp;<strong>Child’s Privacy Policy</strong></p>
              <ol className="listing text-white">
                <li>
                <span className="list">1. </span>
                  <p>
                    For Workmob Youngstars initiative this privacy policy explains how we collect, use, and protect the personal information of children who use our app. We respect the privacy of children and their parents, and we comply with the children's privacy protection and other applicable laws.
                    When children use the app, Youngstars doesn't collect personal information like name, address, or contact information from your child.
                  </p>
                </li>

                <li>
                <span className="list">2. </span>
                  <p>
                  We do not share or sell this information to any third parties, except as required by law or with the parent's consent. Parents can access, review, delete, or withdraw their consent for their child's information at any time by contacting us.
                    We hope this policy helps you understand how we respect and protect your child's privacy.
                  </p>
                </li>

              </ol>

              <p className="text-white mb20">9. &nbsp;<strong>Changes to Our Privacy Policy</strong></p>
              <ol className="listing text-white">
                <li>
                  <p>
                  We may update our privacy policy from time to time. If we make any material changes, we will notify you by means of a notice on this site prior to the change becoming effective. Please check our Privacy Policy regularly to ensure you have read the latest version.
                    
                  </p>
                </li>
              </ol>

              <p className="text-white mb20">10. &nbsp;<strong> Contact Information</strong></p>
              <ol className="listing text-white">
                <li>
                  <p>
                  To ask questions, exercise applicable data subject rights or comment about this Policy and our privacy practices, please email us  at &nbsp;<a href="mailto:support@workmob.com">support@workmob.com</a>.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Page>
    </Layout>
  )
}

export default Privacy;
