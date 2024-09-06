import React,{useEffect} from "react";
import PropTypes from "prop-types";
import videojs from "video.js";
import Modal from "../common/Modal/Modal";
import CloseBtn from "../common/CloseBtn/CloseBtn";
import VolumnBtn from "../common/VolumnBtn/VolumnBtn";
import styles from "./UserProfile.module.css";
import { logo } from "../../constants/requiredAssets";
import { STORY_LINK } from "../../constants/variable";

const UserProfileComponent = (props) => {
  const { userData } = props;
  const [showAlert, toggleAlert] = React.useState(false);
  const [isMuted, toggleMute] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (typeof videojs !== "undefined") {
        const player = videojs("profile_video");
        player.play();
      }
    }, 100);
  }, []);

  const showModalBox = () => {
    toggleAlert(true);
  };
  return (
    <>
      <CloseBtn {...props} />
      <section className={`${styles.verticalScrolling}`}>
        <a
          href={STORY_LINK}
          target="_blank"
          className={styles.watchStories}
          rel="noreferrer"
        >
          Watch Stories
        </a>
        <div className={styles.fHeading}>
          <h1>भारत का अपना </h1>
          <h2>Professional community video app</h2>
        </div>
        <div className={styles.fContent}>
          <img src={logo} alt="workmob" />
        </div>
        {userData.story[0]?.videoUrl && (
          <div className={styles.videoContainer}>
            <video
              playsInline
              controls={false}
              poster={userData.story[0]?.thumb}
              autoPlay={false}
              muted={isMuted}
              id="profile_video"
              preload="auto"
            >
              <track hidden kind="captions" />
              <source
                type="application/x-mpegURL"
                src={userData.story[0]?.videoUrl}
              />
            </video>
            <VolumnBtn handleClick={toggleMute} isMuted={isMuted} />
          </div>
        )}
        <div className={styles.userProfileInfo}>
          <h3>{userData.name}</h3>
          {(!!userData.job_title || !!userData.company_name) && (
            <p>
              <i className="icon icon-company" />
              {`${userData.job_title} at ${userData.company_name}`}
            </p>
          )}
          {!!userData.city && (
            <p>
              <i className="icon icon-location" />
              {userData.city}
            </p>
          )}
          <div className={styles.buttonContainer}>
            <button onClick={showModalBox} className={styles.btn} type="button">
              My Fans
            </button>
            <button onClick={showModalBox} className={styles.btn} type="button">
              Share profile
            </button>
          </div>
        </div>
        <Modal showAlert={showAlert} toggleAlert={toggleAlert} />
      </section>
    </>
  );
};

export default UserProfileComponent;

UserProfileComponent.propTypes = {
  userData: PropTypes.object.isRequired,
};
