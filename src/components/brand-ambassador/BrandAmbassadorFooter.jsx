import {
  facebook,
  linkedin,
  twitter,
  workmobWhite,
  youtube,
  instagram,
  leftTricolor,
  rightTricolor,
} from "../../constants/requiredAssets";
import styles from "./BrandAmbassadorFooter.module.css";

const BrandAmbassadorFooter = ({ windowWidth }) => {
  return (
    <section className={styles.footerMain}>
      <div className={styles.footerContainer}>
        <div className={styles.fHeading}>
          <h1>
            <img
              id={styles.leftTriClr}
              src={leftTricolor}
              alt="left tri color"
            />
            <span className={styles.footerText}>भारत की अपनी</span>
          </h1>
          <h2>
            <span className={styles.footerText}>PROFESSIONAL COMMUNITY KI AWAAZ</span>
            <img
              id={styles.rightTriClr}
              src={rightTricolor}
              alt="right tri color"
            />
          </h2>

          <div className={styles.ParaOne}>
            <p className={styles.flag}>
              <span>बनाओ </span>
              <span> अपनी </span>
              <span>पहचान</span>
            </p>
          </div>
        </div>
        <div className={styles.socialContainer}>
          <div className={styles.socialLogos}>
            <a target="_blank" href="https://stories.workmob.com/">
              <img src={workmobWhite} alt="workmobWhite" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCqOjwc1ZJmhy5oJJM3rhziA"
            >
              <img id={styles.youtube} src={youtube} alt="youtube" />
            </a>
            <a target="_blank" href="https://www.instagram.com/workmobapp/">
              <img src={instagram} alt="instagram" />
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
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandAmbassadorFooter;
