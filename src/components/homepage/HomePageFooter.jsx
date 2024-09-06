import React from "react";
import styles from "./HomePageFooter.module.css";
import { Link } from "react-router-dom";
import { heart, playStore, appStore } from "../../constants/requiredAssets";
import {
  APPLE_LINK,
  ANDROID_LINK,
} from "../../constants/variable";
import {
  facebook,
  linkedin,
  twitter,
  workmobWhite,
  youtube,
  instagram,
} from "../../constants/requiredAssets";

const HomePageFooter = ({ windowWidth }) => {
  return (
    <section className={styles.footerMain}>

      <div className={styles.homeFooterContainer}>
        <div className={styles.fContent}>
          <div className={styles.homepageFooterSlogan}>
            <p id={styles.homePageFooterWhatsapp}>
              <span>अपनी कहानी का वीडियो रिकॉर्ड करने के लिए हमें</span>
              <span>+919001985566 पर WhatsApp करें |</span>
            </p>
          </div>
        </div>
        <div className={styles.socialPlaystoreContainer}>
          <div className={styles.socialLogos + " " + "d-none d-md-block"}>
            <a target="_blank" href="https://stories.workmob.com/">
              <img
                id={styles.workmobLogo}
                src={workmobWhite}
                alt="workmobWhite"
              />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCqOjwc1ZJmhy5oJJM3rhziA"
            >
              <img id={styles.youtube} src={youtube} alt="youtube" />
            </a>
            <a target="_blank" href="https://www.instagram.com/workmobapp/">
              <img id={styles.instagram} src={instagram} alt="instagram" />
            </a>
            <a target="_blank" href="https://www.facebook.com/workmobapp/">
              <img id={styles.facebook} src={facebook} alt="facebook" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/workmobapp/"
            >
              <img id={styles.linkedin} src={linkedin} alt="linkedin" />
            </a>
            <a target="_blank" href="https://twitter.com/Workmob">
              <img id={styles.twitter} src={twitter} alt="twitter" />
            </a>
          </div>
          <div className={styles.homeStoreBtn}>
            <a
              target="_blank"
              href={ANDROID_LINK}
              className={styles.storeLinks}
              rel="noreferrer"
            >
              <img src={playStore} alt="google" />
            </a>
            <a
              target="_blank"
              href={APPLE_LINK}
              className={styles.storeLinks}
              rel="noreferrer"
            >
              <img src={appStore} alt="apple" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottomContainer}>
        <div className={styles.bottomC}>
          <ul className={styles.bottomUL}>
            <li className={styles.bottomLI}>
              <Link to="/about">About</Link>
            </li>
            <li className={styles.bottomLI}>
              <Link to="/terms">Terms</Link>
            </li>
            <li className={styles.bottomLI}>
              <Link to="/legal">Legal</Link>
            </li>
            <li className={styles.bottomLI}>
              <Link to="/privacy">Privacy</Link>
            </li>
            <li className={styles.bottomLI}>
              <Link to="/brand-ambassador">Ambassador</Link>
            </li>
          </ul>
        </div>
        <div className={styles.bottomB}>
          <p className={styles.bottomBCopyRight}>
            <span>Made with</span>
            <img id={styles.heartPic} width="12" src={heart} alt="heart" />
            <span>in India</span>
          </p>
        </div>
        <div className={styles.bottomA}>
          <li
            className={styles.copyRightText}
          >
            ©2022 Workmob Pvt. Ltd. All rights reserved.
          </li>
        </div>
      </div>
    </section>
  );
};

export default HomePageFooter;
