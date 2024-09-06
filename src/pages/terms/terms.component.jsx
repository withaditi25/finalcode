import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Page from '../../components/Page/Page';
import Helmet from 'react-helmet';

const Terms = (props) => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <Layout>
      <Helmet>
        <meta name="description" content="View Workmob terms and conditions." />
        <title>Workmob Terms and Conditions</title>
        <style>
          {'a {color: #b9b9b9}'}
        </style>
      </Helmet>
      <Page locationType={"/"} {...props}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <ul className='tabs'>
                    <li className='active'><span>Terms & Conditions</span></li> |
                    <li><Link to='/terms-contests'>Contest T&Cs</Link></li> |
                    <li><Link to='/privacy'>Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>
              <h3 className="mt-5 mb-3 font-weight-bold text-white">Workmob User Terms and Conditions</h3>
              <p className="text-white mt-4">(Last updated on September 2023)<br /><br /></p>
              <p className='text-white'>
                Your acceptance and acknowledgement of these terms and conditions (“terms of use”) is a legal agreement between you (“end user, your or you”) and Workmob Private Limited (“Workmob”). The terms govern your use of the Workmob platform. This document is an electronic record and does not require any physical or digital signatures.

                <br /><br />
                “Company, us, our or we” as used herein means Workmob Private Limited having its registered office at Khasara No. 1165/1146/478, 1166/479, 1167/1140/478, Plot No.1, IT Park, MIA (Ext.), Udaipur - 313003, Rajasthan, India.
                <br /><br />
                “Workmob Platform” means and refers to Workmob’s proprietary Initiatives called 'Workmob - Meri Kahani, Workmob - Intro, Workmob - Youngstars, Workmob - Market, Workmob-Greetings, Workmob Gyan', which enables end-users to explore, discover, view, upload and and share their life experiences, career journey, and the real story behind your products and services through the power of video with the people of India.
                <br /><br />
                Any information, materials and content contributed to the Workmob Platform is for public consumption (except for private chat messages) and deemed non-confidential. We encourage you to exercise caution and not share and/or contribute such information, content and materials that are private and/or confidential in nature.
                <br /><br />

                The Workmob platform may either be (i) downloaded and installed by you from a third-party application store; (ii) viewed on the website  &nbsp;
                <Link to='/'>“www.workmob.com”</Link>
                <br /><br />
                Please carefully read these Terms before downloading, accessing or using
                the Workmob Platform.
                <br /><br />
              </p>
              <div className="terms">

                <p className="mb20 text-white">1. &nbsp;<strong>GENERAL</strong></p>
                <ol className="listing text-white">
                  <li>
                    <span className="list">1.</span>
                    By installing, accessing or using the Workmob Platform, you agree to these Terms. If you do not agree to these Terms, you may elect to uninstall or unsubscribe or disable certain features from the Workmob Platform and in which case all or some of its features will not be made available to you.
                    The Workmob Platform may also fail to operate and not provide you with optimum experience.
                  </li>
                  <li>
                    <span className="list">2.</span>
                    You will have to comply with any software, device licenses and/or terms of use for the use of the third-party application store from which you download the Workmob Platform.
                  </li>
                  <li>
                    <span className="list">3.</span>
                    <p>
                      These Terms incorporate by reference Workmob (<strong>“Privacy
                        Policy”</strong>) as set out at <Link to='/privacy'>https://www.workmob.com/privacy.</Link> By using the Workmob Platform, you agree to be bound by the Privacy Policy.
                    </p>
                  </li>
                  <li>
                    <span className="list">4.</span>
                    You must be at least 13 years old to use the Workmob Platform; however, children of all ages may use the Service and Workmob-Youngstars if enabled by a parent or legal guardian.
                    Youngstars, which is an initiative for children under 18 who want to share their talents and skills in different fields.
                  </li>
                  <li>
                    <span className="list">5.</span>
                    Permission by Parent or Guardian -If you are a minor in your country, you need to have your parent or guardian’s permission to use the Workmob Platform. Please ask them to read this Agreement with you. If you are a parent or legal guardian of a minor in your country,
                    by allowing your child to use the Workmob Platform, you agree to the terms of this Agreement and are responsible for your child’s activity on the platform.
                  </li>
                  <li>
                    <span className="list">6.</span>
                    We make no representation that content and/or materials on the Workmob Platform are appropriate for use in locations outside India or that the Workmob Platform complies with any country's privacy laws.
                    Accessing the Workmob Platform or materials from territories where the content is deemed illegal, is prohibited.
                    If you access the Workmob Platform, you do so on your own initiative and are responsible for compliance with local laws.
                  </li>
                  <li>
                    <span className="list">7.</span>
                    <p>
                      These Terms apply to all users of the Workmob Platform, including users who view and access the content and also users who are contributors of the materials.
                      <strong>“Content”</strong> includes the text, software, scripts, graphics, photos, sounds, music, videos, audio-visual combinations, interactive features and other materials you may view on and access through the Workmob Platform. This includes messages, posts, chat, and other original content.
                      <strong>“Materials”</strong>
                      includes the text, software, scripts, graphics, photos, sounds, music, videos, audio-visual combinations, interactive features and other materials and content that you may contribute in any manner to the Workmob Platform. This includes your contributions to the messages, posts and chat.
                    </p>
                  </li>
                </ol>

                <p className="mb20 text-white">2. &nbsp;<strong>ACKNOWLEDGEMENTS</strong></p>
                <ol className="listing text-white">
                  <p className="mb20">1. &nbsp; You agree and acknowledge that: </p>
                  <li>
                    <ol className="listing">
                      <li>
                        <span className="list">1.</span>
                        <p>The Workmob Platform includes third party content, or promotional material (collectively
                          <strong>“Third Party Content”</strong>)
                          and it is hereby clarified that Workmob is not responsible or liable for any Third Party Content, the intellectual property and other proprietary rights in the Third Party Content. Workmob is not responsible for the accuracy of any content or materials which may be accessed by you. Your use of the Workmob Platform,
                          materials and the content, including your election to view, contribute, interact with or action upon the same is at your sole risk and discretion.
                        </p>
                      </li>
                      <li>
                        <span className="list">2.</span>
                        You will need to make your own independent judgment regarding your (i) direct interaction with any third-party landing pages/ websites/ applications where Workmob redirects you; or (ii) Your participation in promotions or interaction with Third Party Content on the Workmob Platform. We assume no liability for the same and your correspondence or business dealings with, or participation in promotions found on Workmob Platform, including payment and delivery of related goods or services, and any other terms, conditions, warranties or representations associated with such dealings, shall be solely between you and such third party.
                        We urge you to refer and review the terms of use, warranties and license agreements of such third-party promotions, websites, applications and other landing pages that you interact with.
                      </li>
                      <li>
                        <span className="list">3.</span>
                        You are responsible for providing, at your own expense, all equipment and resources necessary to use the Workmob Platform and services, including a computer, software, and internet access (including payment of all fees associated with such access). Mobile Internet transmissions are never completely private or secure and the transmission of content, materials and your use of the Workmob Platform may be affected, interrupted or disrupted for reasons beyond Workmob’s reasonable control.
                        Any message or information you send using Workmob Platform may be read or intercepted by others, even if there is a special notice that a particular transmission is encrypted.
                      </li>
                    </ol>
                  </li>
                </ol>
                <p className="mb20 text-white">3. &nbsp;<strong>REGISTRATION DATA AND PRIVACY</strong></p>
                <ol className="listing text-white">
                  <li>
                    <span className="list">1.</span>
                    <p>
                      In order to access the services or features on the Workmob Platform, you are required to use an account and password or sign up using a supported social login account. You will not use another user's account without permission. You may obtain an account, only by completing our online registration form.
                      The online registration form requests certain information and data (including without limitation name, email etc.) ("Registration Data"). You are required to maintain and update your registration data. By registering, you agree that all information provided in the registration data is true and accurate
                      and that you will maintain and update this information as and when required, keeping it current, complete, and accurate. In the event wherein the information disclosed by you is identified as inaccurate/false, we have all the rights to delete your account and block all activities carried on the Workmob Platform. Further we do not have/share any liability in the event of any financial loss or any form of damages due to the inaccurate information provided by the user of the Workmob Platform. You are solely responsible for the activity that occurs on your account, and you must keep your account password, if any, secure. You must notify Workmob immediately of any breach of security or unauthorized use of your account. You may not use your account to breach security of another account or attempt to gain unauthorized access to our network or server.
                      Not all areas of the Workmob Platform may be available to you or other authorized users of the Workmob Platform. You shall not interfere with anyone else's use and enjoyment of the Workmob Platform or any associated services or features. Users who violate systems or network security may incur criminal or civil liability in accordance with the law of the land.
                    </p>
                  </li>
                  <li>
                    <span className="list">2.</span>
                    <p>
                      Some of the registration data may be considered personal information under data privacy laws applicable in relevant jurisdictions. Further, for Workmob Platform to provide optimum
                      end user experience, we may also collect and/or obtain certain other end user information (including without limitation phone device-related information, IP address, location data etc.).
                      You consent to such end user information and the registration data being collected, used and processed in accordance with the provisions of the Privacy Policy. By providing the registration data you also consent and agree to Workmob’s use of the registration data to contact you for improving our services and for supporting users to improve and maximize their experience of the Workmob Platform including in relation to the contributions and provision of materials for the Workmob Platform. The Privacy Policy explains how we collect, use and share your data when you use Workmob Platform.

                    </p>
                  </li>
                  <li>
                    <span className="list">3.</span>
                    <p>
                      We reserve the right to take down or remove any content or materials at our discretion without any liability whatsoever.
                    </p>
                  </li>
                </ol>

                <p className="mb20 text-white">4. &nbsp;<strong>LICENSE AND CONTENT RESTRICTIONS</strong></p>
                <ol className="listing text-white">
                  <li className="column">
                    <p className="flexRow mb20">
                      <span className="list">1.</span>
                      LICENSE RESTRICTIONS: Except as expressly set out in these Terms, you agree:
                    </p>
                    <ol className="listing">
                      <li>
                        <span className="list">-</span>
                        <p>
                          not to copy the Workmob Platform (including its specific design, user interface);
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          not to rent, lease, sub-license, loan, translate, merge, adapt, vary or modify the Workmob Platform;
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          not to disassemble, decompile, reverse-engineer or create derivative works based on the whole or any part of the Workmob Platform.
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          not to provide or otherwise make available the Workmob Platform
                          in whole or in part (including object and source code), in any form
                          to any person without prior written consent from us;
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          to comply with all technology control or export laws and regulations that apply to the technologies used or supported by Workmob Platform in your use of the Workmob Platform.
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          to not use the Workmob Platform in an unlawful manner, for any unlawful purpose, or in any manner inconsistent with these Terms, or act fraudulently or maliciously, for example, by hacking into or inserting malicious code, including viruses, or harmful data, into Workmob Platform and shall at all times remain compliant with laws applicable to your use of Workmob Platform;
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          to not infringe our intellectual property rights or those of any third party or any license terms in relation to your use of Workmob Platform or any service associated;
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          not use the Workmob Platform in a way that could damage, disable, overburden, impair or compromise our systems or security or interfere with other users; and
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          not collect or harvest any information or data obtained from any Workmob Platform or our systems or attempt to decipher any transmissions to or from the servers running any service for the Workmob Platform including attempt to sale, resale, broker, rebroker, reverse-engineer or make derivative works of such data.
                        </p>
                      </li>
                    </ol>
                  </li>
                  <li className="column">
                    <p className="flexRow mb20">
                      <span className="list">2.</span>
                      CONTENT USE RESTRICTIONS: The content is provided to you ‘AS IS’. You may access Content for your information and personal use solely
                      as intended through the provided functionality of the service and as permitted under these Terms. You may not:
                    </p>
                    <ol className="listing">
                      <li>
                        <span className="list">-</span>
                        <p>
                          use content in an obscene, pornographic, defamatory, disparaging, infringing or other unlawful manner or in violation of any applicable laws, proprietary or privacy rights; unless expressly permitted pursuant to Workmob Platform, use the content for any commercial, promotional, advertorial, endorsement, advertising or merchandising purpose; share, re-distribute, reproduce, download, sub-license, publish, copy, create derivative works, offer for sale or use the content displayed on Workmob Platform
                          (unless you are specifically permitted to share or copy by way of a ‘Share’ button); re-order, modify, edit, obscure or truncate in any way the content on Workmob Platform.
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>

                          You understand that when using the Workmob Platform, you will be exposed to content from a variety of sources, and that Workmob is not responsible for the accuracy,
                          usefulness, safety, or intellectual property rights of or relating to such content. You further understand and acknowledge that you may be exposed to Content that is inaccurate,
                          offensive, indecent, or objectionable, and you agree to waive, and hereby do waive, any legal or equitable rights or remedies you have or may have against Workmob with respect thereto.

                        </p>
                      </li>
                      {/* <li>
                        <span className="list">3.</span>
                        <p>
                          share, re-distribute, reproduce, download, sub-license, publish, copy, create derivative works, offer for sale or use the content displayed on Workmob Platform (unless you are specifically permitted to share or copy by way of a ‘Share’ button);
                        </p>
                      </li>
                      <li>
                        <span className="list">4.</span>
                        <p>
                          re-order, modify, edit, obscure or truncate in any way the content on Workmob Platform.
                        </p>
                      </li> */}
                    </ol>
                  </li>
                  {/* <li>
                    <span className="list">5.</span>
                    <p>
                      You understand that when using the Workmob Platform, you will be exposed to content from a variety of sources, and that Workmob is not responsible for the accuracy, usefulness, safety, or intellectual property rights of or relating to such content.
                      You further understand and acknowledge that you may be exposed to Content that is inaccurate, offensive, indecent, or objectionable, and you agree to waive, and hereby do waive, any legal or equitable rights or remedies you have or may have against Workmob with respect thereto.
                    </p>
                  </li> */}
                </ol>

                <p className="mb20 text-white">5. &nbsp;<strong>YOUR MATERIALS, CONDUCT AND RESPONSIBILITY</strong></p>
                <ol className="listing text-white">
                  <li>
                    <span className="list">1.</span>
                    <p>
                      You shall be solely responsible for your materials and the consequences of submitting and publishing your Materials on the Workmob Platform. You affirm, represent, and warrant that you own or have the necessary licenses,
                      rights, consents, and permissions to publish materials that you submit; and you license to Workmob all patent, trademark, trade secret, copyright or other proprietary rights in and to such content for publication on the Workmob Platform pursuant to these Terms. You may request to remove your materials from the Workmob Platform at any time.
                      You must inform Workmob to remove your materials if you no longer have the rights required by these terms.
                    </p>
                  </li>
                  <li className="column">
                    <p className="flexRow mb20">
                      <span className="list">2.</span>
                      By posting/sharing information in or otherwise using any communications service, chat, messages, software library,
                      or other interactive service that may be available to you on or through the Workmob Platform, you agree that you will not upload, share, post, or otherwise distribute or facilitate distribution of any materials that:
                    </p>
                    <ol className="listing">
                      <li>
                        <span className="list">-</span>
                        <p>
                          is unlawful, threatening, abusive, harassing, defamatory, libellous, deceptive, fraudulent, invasive of another user’s privacy, or is otherwise tortious or contains explicit or graphic descriptions or accounts of sexual acts
                          (including but not limited to sexual language of a violent or threatening nature directed at another individual or group of individuals), or otherwise violates Workmob’s content guidelines, rules or policies;
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          harms minor in anyway or is grossly harmful, blasphemous; hateful,
                          or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling;
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          victimizes, harasses, degrades, or intimidates an individual or group of individuals based on religion, gender,
                          sexual orientation, race, ethnicity, age, disability, or other legally protected basis
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          belongs to another person and to which the user does not have any right to and/or infringes on any right of publicity, moral right, or other proprietary right of any party;
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          constitutes unauthorized or unsolicited advertising, junk or bulk email (also known as "spamming"), chain letters, any other form of unauthorized solicitation, or any form of lottery or gambling;
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          contains software viruses or any other computer code, files, or programs that are designed or intended to disrupt, damage, or limit the functioning of any software, hardware, or telecommunications
                          equipment or to damage or obtain unauthorized access to any data or other information of any third party;
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          impersonates any person or entity, including any of our employees or representatives or deceives or misleads the addressee about the origin of such content and/or messages or communicates any
                          information which is grossly offensive or menacing in nature;
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          threatens the unity, integrity, defense, security or sovereignty of any nation, friendly relations with foreign states, or public order or causes incitement to the
                          commission of any cognizable offense or prevents investigation of any offense or is insulting any other nation.
                        </p>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <span className="list">3.</span>
                    <p>
                      You acknowledge that we neither endorse nor assume any liability for the contents of any material uploaded or submitted by third party users
                      of the Workmob Platform. We have no obligation to pre-screen, monitor, or edit the content posted/shared by users of communications services,
                      chat, messages, software libraries, or other interactive services that may be available on or through the Workmob Platform. However, we may elect to pre-screen,
                      monitor or edit any content to the extent required to be in compliance with applicable laws and Workmob’s policies and guidelines. Additionally, we and our agents
                      have the right at our sole discretion to remove any materials that, in our judgment, does not comply with these Terms and any other rules of user conduct for our Workmob Platform,
                      or is otherwise harmful, objectionable, or inaccurate. You agree that we are not responsible for any failure or delay in removing such materials. You hereby consent to any such removal
                      deemed appropriate by us, and, you waive any claim against us arising out of such removal of materials and agree to indemnify and hold us harmless from any and all claims asserted based upon such removal.
                    </p>
                  </li>
                  <li>
                    <span className="list">4.</span>
                    <p>
                      If Workmob reasonably believes that any material is in breach of these Terms, applicable laws, or any legal or contractual obligations of Workmob, or may cause harm to Workmob, its users, or third parties,
                      it may remove or take down that materials at its discretion, without any liability whatsoever.
                    </p>
                  </li>
                  <li>
                    <span className="list">5.</span>
                    <p>
                      You agree that we may, at any time and at our sole discretion, terminate your membership, account, or other affiliation with our Workmob Platform without prior serving any notice to you for violating any of the above
                      Terms and associated provisions. Upon such termination, you agree that we may remove any and all material or content that you may have posted/shared to/on our Workmob Platform. In addition, you acknowledge that we do and will cooperate fully with any investigations of violations of systems or network security at other sites, including cooperating with law enforcement authorities in investigating suspected criminal or civil violations.
                    </p>
                  </li>
                  <li>
                    <span className="list">6.</span>
                    <p>
                      You understand that Workmob does not guarantee any confidentiality with respect to any materials you submit. Subject to our Privacy Policy, we treat all information, communication or material that you transmit to the Workmob Platform or to us, whether by electronic mail, post, or other means, for any reason, as non-confidential and non-proprietary except the private chat messages. By submitting any information to us, you are placing the
                      information in the public domain and hence, the information is deemed non-confidential.
                    </p>
                  </li>
                  <li>
                    <span className="list">7.</span>
                    <p>
                      For clarity, you retain all of your ownership rights in your content. However, by submitting content to Workmob, you hereby grant Workmob a worldwide, non-exclusive, royalty-free, commercial use, sub-licensable and transferable license to use, reproduce, distribute, prepare derivative works of, display, modify, re-brand, publish, adapt, make available online or electronically transmit, and perform the content in connection with the Workmob Platform,
                      without limitation for promoting and redistributing part or all of the content (and derivative works thereof) in any media formats and through any media channels.
                    </p>
                  </li>
                </ol>

                {/* <p className="mb20 text-white">6. &nbsp;<strong>CHAT FUNCTIONALITY</strong></p>
                <ol className="listing text-white">
                  <li>
                    <span className="list">1.</span>
                    <p>
                      Workmob will not be responsible for any information shared between the
                      users. The information and other details shared for any potential
                      transaction occurring on the Workmob Platform is at their individual risk
                      and Workmob Platform shares no liability in the event of any damages
                      arising out of such transaction. The exchange of information is solely
                      between the users of Workmob Platform. This means that both the users
                      are directly responsible to each other for their information shared on the
                      chat section of Workmob Platform.
                    </p>
                  </li>
                  <li>
                    <span className="list">2.</span>
                    <p>
                      While using the chat functionality, you are prohibited to host, display,
                      upload, modify, publish, transmit, update or share such information as
                      listed in section 5.2 and otherwise as mandated by (Indian) Information
                      Technology Act, 2000 and its rules and regulations thereunder including
                      read with Information Technology (Intermediaries Guidelines) Rules, 2011
                      <strong> (“Infotech Laws”)</strong>.
                    </p>
                  </li>
                  <li>
                    <span className="list">3.</span>
                    <p>
                      We may make email, messaging, blogging, or chat services (collectively,
                      <strong>"Communications"</strong>) available to users of our Workmob Platform. We will
                      not inspect or disclose the contents of your private communications
                      except with the consent of the sender or the recipient, or in the narrowly
                      defined situations provided under the applicable privacy laws or as
                      otherwise required by law or by court or governmental order. Further
                      information concerning our treatment of your private communications is
                      available in our Privacy Policy.
                    </p>
                  </li>
                  <li>
                    <span className="list">4.</span>
                    <p>
                      At our sole discretion, we may employ automated monitoring devices or
                      techniques to protect our users from mass unsolicited communications
                      (also known as <strong>"spam"</strong>) and/or other types of electronic communications
                      that we deem inconsistent with our business purposes. However, such
                      devices or techniques are not perfect and may affect the transmission of
                      both legitimate and unsolicited communications between parties.
                      Regardless, you agree that we are not responsible for any legitimate
                      communication that is blocked, or for any unsolicited communication that
                      is not blocked.
                    </p>
                  </li>
                </ol> */}

                <p className="mb20 text-white">6. &nbsp;<strong>UNAUTHORIZED USE OF MATERIALS/CONTENT</strong></p>
                <ol className="listing text-white">
                  <li className="column">
                    <p className="flexRow mb20">
                      <span className="list">1.</span>
                      We view the removal or "take down" of content from the Workmob Platform as a significant step. Consequently, if you believe your copyright has been infringed by a posting/sharing on the Workmob Platform,
                      we ask that you send notification to our ‘Designated Agent’ (as identified below). To be effective and to support immediate removal of the allegedly infringing material or content, your notification to our designated agent needs to include the following:
                    </p>
                    <ol className="listing">
                      <li>
                        <span className="list">1.</span>
                        Detailed identification of your copyrighted or otherwise protected work that you believe has been infringed.
                      </li>
                      <li>
                        <span className="list">2.</span>
                        <p>
                          Identification of the specific content or material on the Workmob Platform that you claim is infringing your copyrighted or otherwise protected work identified in item #1 above.
                        </p>
                      </li>
                      <li>
                        <span className="list">3.</span>
                        <p>
                          Your contact information (email address preferred).
                        </p>
                      </li>
                      <li>
                        <span className="list">4.</span>
                        <p>
                          Contact information for the owner/administrator of the allegedly infringing webpage or other content (email address preferred).
                        </p>
                      </li>
                      <li>
                        <span className="list">5.</span>
                        <p>
                          You must also include the following statements in your written notification:

                          <br />
                          <br />
                          <em>
                            “I have a good faith belief that use of the copyrighted materials work described in this notification as allegedly infringing is not authorized by the copyright owner, its agent, or the law.
                            <br />
                            <br />
                            I swear, under penalty of perjury, that the information in this notification is accurate and that I am the copyright owner, or I am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.”
                          </em>
                        </p>
                      </li>
                      <li>
                        <span className={'list'}>6.</span>
                        You must then sign your written notification.
                      </li>
                      <li>
                        <span className={'list'}>7.</span>
                        <p>Finally, send the completed written notification to <a href="mailto:support@workmob.com">support@workmob.com</a></p>
                      </li>
                    </ol>
                  </li>
                </ol>

                <p className="mb20 text-white">7. &nbsp;<strong> AWARDS - EDITIONS</strong></p>
                <ol className="listing text-white">
                  <li>
                    <span className="list">1.</span>
                    <p>
                      Workmob Private Limited (“Workmob”) celebrates its community members by honoring them with awards for (i) sharing their life experiences, entrepreneurial journey and career journey;
                      (ii) getting the most number of likes and/ or similar engagement among all community members on such created content; (iii) getting selected by jury members
                    </p>
                  </li>
                  <li>
                    <span className="list">2.</span>
                    <p>
                      The rewards are in the form of digital gift cards.
                    </p>
                  </li>
                  <li>
                    <span className="list">3.</span>
                    <p>
                      Community members do not need to pay to participate in contests.
                    </p>
                  </li>
                  <li className="column">
                    <p className="flexRow mb20">
                      <span className="list">4.</span>
                      By downloading the Workmob Platform from Apple’s App Store, you specifically acknowledge and agree that:
                    </p>
                    <ol className="listing">
                      <li>
                        <span className="list">-</span>
                        <p>
                          Apple is not involved in any way with the awards/events run on the Workmob Platform.
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          These Terms are between Workmob and you; Apple is not a party to these Terms.
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          Apple is not responsible for the Workmob Platform or the content thereof and has no obligation whatsoever with respect to the Platform.

                        </p>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <span className="list">5.</span>
                    <p>
                      Any queries related to contests must be addressed to <a href="mailto:support@workmob.com">support@workmob.com</a>.
                    </p>
                  </li>
                  <li>
                    <span className="list">6.</span>
                    <p>By participating in a an award/event on the Workmob Platform, you agree to the Terms & Conditions as set out in
                      <Link to="/merikahani">https://stories.workmob.com/merikahani</Link>
                    </p>
                  </li>
                </ol>

                <p className="mb20 text-white">8. &nbsp;<strong>TRADEMARKS AND COPYRIGHTS</strong></p>
                <ol className="listing text-white">
                  <li>
                    {/* <span className="list">1.</span> */}
                    Workmob, the Workmob logo and other Workmob trademarks, service marks, graphics, and logos used in connection with the Workmob Platform are trademarks or registered trademarks of Workmob. You are not granted any right or license with respect to any of the aforesaid trademarks and any use of such trademarks. Further, all copyright in and to the Workmob Platform and/or to the extent stipulated herein, the content is the copyright of Workmob.
                    All such copyright and marks are protected under applicable copyright, trademark, and other domestic and international proprietary rights laws. Any violation of copyright and other proprietary laws may result in severe civil and criminal penalties, including monetary damages.
                  </li>
                </ol>

                <p className="mb20 text-white">9. &nbsp;<strong>LIMITED WARRANTY AND DISCLAIMER</strong></p>
                <ol className="listing text-white">
                  <li>
                    <span className="list">1.</span>
                    Any implied warranties including those prescribed by statute are expressly disclaimed.
                  </li>
                  <li>
                    <span className="list">2.</span>
                    To the maximum extent permitted by law, the Workmob platform is provided to you “as is,” with all faults, without warranty of any kind, without performance assurances or guarantees of any kind, and your use is at your sole risk. The entire risk of satisfactory quality and performance resides with you. Workmob does not make, and hereby disclaim, any and all express, implied or statutory warranties, including implied warranties of condition,
                    uninterrupted use, accuracy of data (including but not limited to location data), merchantability, satisfactory quality, fitness for a particular purpose, non-infringement of third party rights, and warranties (if any) arising from a course of dealing, usage, or trade practice. Workmob does not warrant against interference with your enjoyment of the Workmob platform; will meet your requirements; that the Workmob platform will be uninterrupted or
                    error-free, or that the Workmob platform will interoperate or be compatible with any other service or that any errors in the Workmob platform will be corrected. No oral or written advice provided by Workmob or any authorized representative shall create a warranty. Some jurisdictions do not allow the exclusion of or limitations on implied warranties or the limitations on the applicable statutory rights of a consumer, so some or all of the above exclusions and limitations apply only to the fullest extent permitted by law in the applicable jurisdiction.
                  </li>
                  <li>
                    <span className="list">3.</span>
                    Workmob is an intermediary platform in accordance with the Infotech laws. We allow users to access and use content and contribute materials, while exercising diligence to the extent required under the applicable Infotech laws.
                    We do not refer, endorse, recommend, verify, evaluate or guarantee any actions, outcome, information in connection with the Workmob platform or the content or materials, nor do we warrant the validity, accuracy, completeness, safety, legality, quality, or applicability of anything said, displayed, promoted or provided for in the Workmob platform, as it is intended solely for the purpose of sharing one's experiences, and thoughts in form of life stories, career journey, entrepreneurial journey  etc.
                    The user is responsible for his/ her own decisions and actions undertaken including while providing any materials.
                  </li>
                  <li>
                    <span className="list">4.</span>
                    The views and opinions expressed in videos on ‘Workmob’s Platforms’ are those of the speakers. They do not necessarily reflect or represent views and opinions of Workmob. Workmob Pvt Ltd., cannot be held accountable for all or any view or information expressed in these videos.
                    The video content has been made available for informational purposes only and establishes that Workmob, will not be responsible for any harm, loss or any other damage that may occur if users follow any advice. This also applies to any content relating to medical, health, wellness, and physical exercise.
                    If you have a complaint about something or find your content is being used incorrectly please contact Workmob.
                  </li>
                </ol>

                <p className="mb20 text-white">10. &nbsp;<strong>LIMITATION OF LIABILITY</strong></p>
                <ol className="listing text-white">
                  <li>
                    <span className="list">1.</span>
                    In no event will Workmob be liable for loss of profits, special, incidental or consequential damages resulting from possession, access, use or malfunction of the Workmob application or website, including but not limited to, damages to property, loss of goodwill, device failure or malfunction and, to the extent
                    permitted by law, damages, property damages or punitive damages from any causes of action arising out of or related to these terms, whether arising in tort (including negligence), contract, strict liability or otherwise and whether or not Workmob has been advised of the possibility of such damages.
                    In no event shall Workmob liability for all damages (except as required by applicable law) exceed an amount equivalent to five hundred United States Dollars. These limitations of liability shall not be applicable solely to the extent that any specific provision of this limitation of liability is prohibited by any federal,
                    state, or municipal law, which cannot be preempted. These terms give you specific legal rights, and you may have other rights that vary from jurisdiction to jurisdiction.
                  </li>
                  <li className="column">
                    <p className="mb20">
                      <span className="list">2.</span>
                      Nothing in these Terms shall limit or exclude our liability for:
                    </p>
                    <ol className="listing">
                      <li>
                        <span className="list">-</span>
                        death or personal injury resulting from our gross negligence;
                      </li>
                      <li>
                        <span className="list">-</span>
                        fraud or fraudulent misrepresentation; and
                      </li>
                      <li>
                        <span className="list">-</span>
                        any other liability that cannot be excluded or limited by applicable laws.
                      </li>
                    </ol>
                  </li>
                </ol>

                <p className="mb20 text-white">11. &nbsp;<strong>TERMINATION</strong></p>
                <ol className="listing text-white">
                  <li>
                    
                    These Terms will terminate automatically if you fail to or Workmob suspects that you have failed to comply with its Terms and Conditions. In such an event, your Workmob Platform may be disabled and you must cease using the Workmob Platform,
                    the content and other materials comprising the Workmob Platform. Workmob reserves the right, without liability, to change, suspend, remove, disable or terminate access to the Workmob Platform, content and other materials comprising the Workmob
                    Platform or certain areas or features of the Workmob Platform, at any time for any reason (including without limitation to protect our interests, on account of investigation for a suspected violation of these Terms or as a result of us finding
                    that a violation of these Terms has occurred), with or without notice. Workmob further reserves the right to change, modify, update, impose limits, deny or create different access to the use of the Workmob Platform, the content and materials comprising
                    the Workmob platform and/or its features, or any part thereof, without prior notice provided however Workmob will comply with all applicable privacy laws in implementing such changes.
                  </li>
                </ol>

                <p className="mb20 text-white">12. &nbsp;<strong>INDEMNITY</strong></p>
                <ol className="listing text-white">
                  <li>
                    You hereby agree to defend, indemnify and hold harmless Workmob, its officers, directors, employees and agents, from and against any and all claims, damages, actions, losses, liabilities, costs,
                    and expenses (including but not limited to attorney's fees) arising from: (i) Your use of and access of the Workmob Platform, content and any materials comprising the Workmob Platform;
                    (ii) Your materials contributed to the Workmob Platform (iii) Your violation of any terms and conditions, policies etc. accepted by you; and (iv) Your violation of any third party rights.
                    This defense and indemnification obligation will survive these Terms and your use of the Workmob Platform.
                  </li>
                </ol>

                <p className="mb20 text-white">13. &nbsp;<strong>EVENTS OUTSIDE OUR CONTROL</strong></p>
                <ol className="listing text-white">
                  <li>
                    <p>
                      We will not be liable or responsible for any failure to perform, or delay in performance of, any of our obligations under these Terms that is caused by any act or event beyond our reasonable control, including pandemics, epidemics, war,
                      strikes, industrial action, lock outs, government lockdowns/ shutdowns, accidents, fire, blockade, terrorism or threat of terrorism, natural catastrophes, failure of public or private telecommunications networks (“<strong>Event Outside Our Control </strong>”).
                      If an Event Outside Our Control takes place that affects the performance of our obligations under these Terms: (a) Our obligations under these Terms will be suspended and the time for performance of our obligations will be extended for the duration
                      of the Event Outside Our Control; (b) We will use our reasonable endeavors to find a solution by which our obligations under these Terms may be performed despite the Event Outside Our Control.
                    </p>
                  </li>
                </ol>
                <p className="mb20 text-white">14. &nbsp;<strong>OTHER IMPORTANT TERMS</strong></p>
                <ol className="listing text-white">
                  <li>
                    <span className="list">1.</span>
                    <p>
                      MISCELLANEOUS: These Terms and the Privacy Policy represent the complete agreement concerning this license between the parties and supersede all prior agreements and representations between them.
                      Workmob reserves the right, at its discretion, to change, modify, add or remove portions of these Terms provided that in case of any material changes which impacts the rights and obligations of the End User,
                      Workmob shall post the updated material terms on this page. In addition, when using particular features, services or materials on the Workmob Platform, you shall also be subject to any posted rules applicable to such features,
                      services or materials that may contain terms and conditions in addition to those in these Terms. All such additional guidelines or rules are hereby incorporated by reference into these Terms. The date these Terms were last revised is identified at the top of the page. Subject to requirements of express consent under any applicable data privacy laws which we comply with, your continued use of the Workmob Platform after we make changes is deemed to be acceptance of those changes, so please check the applicable Terms and policies periodically for updates.

                      <br />
                      <br />
                      If any provision of these Terms is held to be unenforceable for any reason, such provision shall be reformed only to the extent necessary to make it enforceable and the remaining provisions of these Terms shall not be affected.
                      You may not assign your rights and obligations under these Terms to any party, and any purported attempt to do so will be null and void. We may freely assign our rights and obligations under these Terms of Use to any party whatsoever without any permission from you.

                    </p>
                  </li>
                  <li>
                    <span className="list">2.</span>
                    <p>
                      GOVERNING LAW AND DISPUTE RESOLUTION: Except in cases of exclusive jurisdiction of applicable local laws or where expressly prohibited by applicable laws, these Terms, its subject matter and its formation,
                      are governed by Indian law. You and we both agree that the competent courts of India will have non-exclusive jurisdiction.
                    </p>
                  </li>
                  <li className="column">
                    <p className="flexRow mb20">
                      <span className="list"> 3. </span>
                      CONTACT INFORMATION AND GRIEVANCE OFFICER:
                    </p>
                    <ol className="listing">
                      <li>
                        <span className="list">-</span>
                        <p>
                          <strong>Customer Support:</strong>  Any enquiries you may have about our service and features or if you need assistance with the Workmob Platform, you may email us at
                          &nbsp; <a href="mailto:support@workmob.com">support@workmob.com</a>
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          <strong>Data Privacy:</strong>
                          To ask questions on data privacy, exercise applicable data subject rights (to the extent you may enjoy any data subject rights as per privacy laws applicable to you)
                          and our privacy practices, please email us at &nbsp;
                          <a href="mailto:support@workmob.com">support@workmob.com</a>
                        </p>
                      </li>
                      <li>
                        <span className="list">-</span>
                        <p>
                          <strong>Reporting Objectionable Content to Grievance Officer:</strong> If you see something objectionable, offensive, or adversely affects you or your community, you can report it to our Grievance Officer at
                          &nbsp; <a href="mailto:support@workmob.com">support@workmob.com</a> with the relevant details of your complaint/ concern.
                          Please keep in mind that mere reporting to Workmob doesn't guarantee that certain content will be removed from the Workmob Platform, however, we are committed to creating a safe environment and will consider all your genuine grievances/ complaints.
                        </p>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </Layout>
  )
}

export default Terms;
