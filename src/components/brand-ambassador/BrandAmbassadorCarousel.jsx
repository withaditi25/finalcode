import React,{useEffect} from "react";
import videojs from "video.js";
import VolumnBtn from "../common/VolumnBtn/VolumnBtn";
import "../greetingVideo/greetingVideoComponent";
import styles from "../../pages/brand-ambassador/BrandAmbassadorComponent.module.css";

const BrandAmbassadorCarousel = ({ data, index }) => {
  const [isMuted, toggleMute] = React.useState(true);
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    // you can handle player events here
    player.on("waiting", () => {
      console.log("player is waiting");
    });
    player.on("dispose", () => {
      console.log("player will dispose");
    });
    //play only active index video
    player.autoplay(data.video);
  };

  useEffect(() => {
    const player = playerRef.current;
    if (!!player) {
      if (data.video) {
        player.play();
      } else {
        player.pause();
      }
    }
  }, [data]);

  useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;
      const player = (playerRef.current = videojs(
        videoElement,
        data.video,
        () => {
          handlePlayerReady(player);
        }
      ));
    } else {
      // you can update player here [update player through props]
      const player = playerRef.current;
      player.autoplay(data.video.autoplay);
      player.src(data.video);
    }
  }, [data]);

  function errorHandler(event) {
    if (event.target.error) {
      event.target.style.background = "black";
      event.target.style.opacity = "60%";
    } else {
      event.target.style.background = "rgba(0, 0, 0, 0.5)";
    }
  }

  return (
    <div>
      <section
        style={{ minHeight: "auto" }}
        className={styles.verticalScrolling}
      >
        <div
          style={{ width: "70% !important" }}
          className={styles.videoContainer}
        >
          <video
            ref={videoRef}
            controls={false}
            playsInline
            poster={data.bgimage}
            autoPlay={true}
            muted={isMuted}
            id="profile_video"
            preload="auto"
            onError={errorHandler}
            loop={true}
          >
            <track hidden kind="captions" />
            <source type="application/x-mpegURL" src={data.video} />
          </video>
          <div>
            <div className={styles.muteContainer}>
              <VolumnBtn
                handleClick={toggleMute}
                isMuted={isMuted}
                component={"MemberCarousel"}
              />
            </div>

            <div
              onClick={() => videoRef.current.webkitRequestFullScreen()}
              className={styles.fullScrnContainer}
            >
              <div className={styles.internalContainer}>
                <div className={styles.box1}></div>
                <div className={styles.box2}></div>
                <div className={styles.box3}></div>
                <div className={styles.box4}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandAmbassadorCarousel;
