import React,{useEffect} from "react";
import PropTypes from "prop-types";
import videojs from "video.js";
import Modal from "../common/Modal/Modal";
import CloseBtn from "../common/CloseBtn/CloseBtn";
import VolumnBtn from "../common/VolumnBtn/VolumnBtn";
import {
  logo,
  leftTricolor,
  rightTricolor,
} from "../../constants/requiredAssets";
import { STORY_LINK } from "../../constants/variable";
import "./UserVideo.css";

const UserVideoComponent = (props) => {
  const { userData } = props;
  const [showAlert, toggleAlert] = React.useState(false);
  const [isMuted, toggleMute] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (typeof videojs !== "undefined") {
        const player = videojs("profile_video");
        player.play();
      }
    }, 1000);
  }, []);

  const showModalBox = () => {
    toggleAlert(true);
  };

  return (
    <>
      <CloseBtn {...props} />
      <section className={`${"verticalScrolling"}`}>
        <div className={"fContent"}>
          <img src={logo} alt="workmob" />
        </div>
        <div className={"fHeading"}>
          <h1>
            <img id="leftTriClr" src={leftTricolor} alt="left tri color" />
            भारत की अपनी
          </h1>
          <h2>
            PROFESSIONAL COMMUNITY KI AWAAZ
            <img id="rightTriClr" src={rightTricolor} alt="right tri color" />
          </h2>
        </div>

        <div className={"videoContainer"}>
          <video
            controls={false}
            playsInline
            poster={userData.thumb}
            autoPlay={false}
            muted={isMuted}
            id="profile_video"
            preload="auto"
          >
            <track hidden kind="captions" />
            <source
              type="application/x-mpegURL"
              src={userData.short_video || userData.videoUrl}
            />
          </video>
          <div className={"buttonContainer"}>
            <a className={"btn"} href={STORY_LINK}>
              Watch full story
            </a>
            <div className={"iconContainer"}>
              <button
                onClick={showModalBox}
                className={"btnIcon"}
                type="button"
              >
                <i className="icon icon-share" />
              </button>
              <button
                onClick={showModalBox}
                className={"btnIcon"}
                type="button"
              >
                <i className="icon icon-heart-filled" />
              </button>
            </div>
          </div>
          <div className="volumeBtn_userVideo">
            <VolumnBtn handleClick={toggleMute} isMuted={isMuted} />
          </div>
        </div>
        <Modal showAlert={showAlert} toggleAlert={toggleAlert} />
      </section>
    </>
  );
};

export default UserVideoComponent;

UserVideoComponent.propTypes = {
  userData: PropTypes.object.isRequired,
};
