import "./greetingVideo.css";
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import videojs from "video.js";
import CloseBtn from "../common/CloseBtn/CloseBtn";
import VolumnBtn from "../common/VolumnBtn/VolumnBtn";
import VideoThumbnail from "../common/VideoThumbnail/videothumbnail";
import { logo } from "../../constants/requiredAssets";
import { useLocation, useParams } from "react-router-dom";

const GreetingVideoComponent = (props) => {
  const { userData, videoListUrl, storySlug } = props;
  const [isMuted, toggleMute] = useState(true);
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const previousUrl = useRef(userData.video_url_landscape);
  const { pathname } = useLocation();
  const { userId } = useParams();
  const pathnameProp = pathname.replace(`/${userId}`, "");
  const categoryNameNew = pathname.split("/");

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    player.on("waiting", () => {
      console.log("player is waiting");
    });
    player.on("dispose", () => {
      console.log("player will dispose");
    });
    player.autoplay(previousUrl.current === userData.video_url_landscape);
  };

  useEffect(() => {
    const player = playerRef.current;
    if (!!player) {
      if (previousUrl.current === userData.video_url_landscape) {
        player.play();
      } else {
        player.pause();
      }
    }
  }, [props]);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;
      const player = (playerRef.current = videojs(
        videoElement,
        userData.video_url_landscape,
        () => {
          handlePlayerReady(player);
        }
      ));
    } else {
      const player = playerRef.current;
      player.autoplay(userData.video_url_landscape.autoplay);
      player.src(userData.video_url_landscape);
    }
  }, [props]);

  function errorHandler(event) {
    if (event.target.error) {
      event.target.style.background = "black";
      event.target.style.opacity = "60%";
    } else {
      event.target.style.background = "none";
      event.target.style.opacity = 1;
    }
  }

  return (
    <div>
      <CloseBtn
        locationType={
          pathname.startsWith("/greetings")
            ? "/greetings"
            : pathname.startsWith("/gyan")
            ? "/gyan"
            : "/motivation"
        }
      />
      <section className={`${"verticalScrolling"}`}>
        <div className={"greetingLogo"}>
          <img src={logo} alt="workmob" />
        </div>
        <div className={"videoContainer"}>
          <video
            ref={videoRef}
            controls={false}
            playsInline
            autoPlay={true}
            muted={isMuted}
            id="profile_video"
            preload="auto"
            onError={errorHandler}
          >
            <track hidden kind="captions" />
            <source
              type="application/x-mpegURL"
              src={userData.video_url_landscape}
            />
          </video>
          <VolumnBtn handleClick={toggleMute} isMuted={isMuted} />
        </div>
        <h3 className="greeting-heading-header">
          {userData && userData.storyHeading}
        </h3>
        {!!storySlug && (
          <a
            className="GreetingVideoComponent-fullStoryLink"
            target="_blank"
            href={`https://stories.workmob.com/${storySlug}`}
          >
            View my page
          </a>
        )}
        <VideoThumbnail
          GreetingVideoComponent={"GreetingVideoComponent"}
          pathnameProp={pathnameProp}
          videoListUrlProp={
            videoListUrl && videoListUrl.length > 0
              ? videoListUrl
              : categoryNameNew[2]
          }
        />
      </section>
    </div>
  );
};

export default GreetingVideoComponent;

GreetingVideoComponent.propTypes = {
  userData: PropTypes.object.isRequired,
};
