import React, { useState, useRef, useEffect } from "react";
import styles from "./HomePage.module.css";
import HomePageFooter from "./HomePageFooter";
import VideoJS from "../common/VideoJS/VideoJsNew";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../../constants/requiredAssets";
import HomePageCarousel from "./HomePageCarousel";

const HomePageDesktop = ({ data }) => {
  const dataSliceLength = data.length;
  const playIconTimeoutRef = useRef();
  const headerRef = useRef();
  const playerListRef = useRef([]);
  const [playState, setPlayState] = useState(
    Array.from({ length: dataSliceLength }, () => false)
  );
  const [isMute, setIsMute] = useState(true);
  const [currentHomeVideo, setCurrentHomeVideo] = useState();
  const [currentHomeVideoPaused, setCurrentHomeVideoPaused] = useState(false);
  const [playerListReady, setPlayerListReady] = useState(false);
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(false);
  const [greetingsCategory, setGreetingsCategory] = useState(null);
  const [gyanCategory, setGyanCategory] = useState(null);
  const [hopeCateory, setHopeCategory] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    let timeout;
    function playVisibleVideo() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const playerList = playerListRef.current;
        const videoHeight = playerList[0].clientHeight;
        const positionList = playerList.map(
          (v) => v.getBoundingClientRect().top
        );
        const positionListFiltered = positionList.filter(
          (v) => v >= -videoHeight / 5
        );
        let smallestPostion;
        if (positionListFiltered.length) {
          // minimum value
          smallestPostion = positionListFiltered.reduce((a, b) =>
            Math.min(a, b)
          );
        }
        for (let [i, position] of positionList.entries()) {
          const player = playerList[i];
          if (position === smallestPostion) {
            togglePlay(true, i);
          } else {
            player.pause();
          }
        }
      }, 50);
    }

    if (playerListReady) {
      playVisibleVideo();
      document.addEventListener("scroll", playVisibleVideo);
      return () => document.removeEventListener("scroll", playVisibleVideo);
    }
  }, [playerListReady]);

  useEffect(() => {
    let isThrottle;
    function changeHeaderBg() {
      if (isThrottle) return;
      isThrottle = true;
      setTimeout(() => {
        const header = headerRef.current;
        if (header) {
          if (window.scrollY) {
            header.style.background = "black";
            header.style.boxShadow = "rgba(255, 255, 255, 0.2) 0px 3px 6px";
          } else {
            header.removeAttribute("style");
          }
        }
        isThrottle = false;
      }, 100);
    }
    document.addEventListener("scroll", changeHeaderBg);
    return () => document.removeEventListener("scroll", changeHeaderBg);
  }, []);

  useEffect(() => {
    function listener(event) {
      if (event.type === "play") {
        setCurrentHomeVideoPaused(false);
      } else if (event.type === "pause") {
        setCurrentHomeVideoPaused(true);
      }
    }

    if (currentHomeVideo) {
      currentHomeVideo.addEventListener("play", listener);
      currentHomeVideo.addEventListener("pause", listener);
      return () => {
        currentHomeVideo.removeEventListener("play", listener);
        currentHomeVideo.removeEventListener("pause", listener);
      };
    }
  }, [currentHomeVideo]);

  useEffect(() => {
    const greetingsApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/namaste-category.json`
    );
    const gyanApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/gyan-category.json`
    );
    const hopeAPi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/hope-category.json`
    );
    Promise.all([greetingsApi, gyanApi, hopeAPi]).then((values) => {
      values[0].json().then((result) => {
        let resultData = result.reverse();
        setGreetingsCategory(resultData[0].category);
      });
      values[1].json().then((result) => {
        let resultData = result.reverse();
        setGyanCategory(resultData[0].category);
      });
      values[2].json().then((result) => {
        let resultData = result.reverse();
        const value = resultData[0].category;
        setHopeCategory(value);
      });
    });
  }, []);

  useEffect(() => {
    // Handling video scroller
    if (pathname === "/") {
      sessionStorage.removeItem("/greetingssearch");
      sessionStorage.removeItem("/gyansearch");
      sessionStorage.removeItem("/motivationsearch");
    }
    sessionStorage.setItem("checkPath", 0);
    sessionStorage.setItem("cardIndex", 11);
  }, []);

  function handlePlayerReady(player, i) {
    playerListRef.current[i] = player.children_[0];
    if (i === dataSliceLength - 1) {
      setPlayerListReady(true);
    }
  }

  function togglePlayIcon(i) {
    const playIcons = document.querySelectorAll(".homePagePlayIcon");
    const currentPlayIcon = playIcons[i];
    if (currentPlayIcon) {
      playIcons.forEach((v) => (v.style.opacity = 1));
      clearTimeout(playIconTimeoutRef.current);
      playIconTimeoutRef.current = setTimeout(() => {
        currentPlayIcon.style.opacity = 0;
      }, 500);
    }
  }

  function togglePlay(isCurrentTarget, i) {
    if (playerListReady && isCurrentTarget) {
      const playerList = playerListRef.current;
      const currentVideo = playerList[i];
      const newPlayState = playState.map(() => false);
      togglePlayIcon(i);
      playerList.forEach((v, playerIndex) => {
        if (playerIndex !== i) {
          v.pause();
        }
      });
      if (playState[i]) {
        currentVideo.pause();
      } else {
        currentVideo.play();
        setCurrentHomeVideo(currentVideo);
      }
      newPlayState[i] = !playState[i];
      setPlayState(newPlayState);
    }
  }

  function toggleMute() {
    if (playerListReady) {
      const muteValue = !isMute;
      for (let player of playerListRef.current) {
        if (
          player.id.includes("merikahani") ||
          player.id.includes("greetings")
        ) {
          player.muted = muteValue;
        }
      }
      setIsMute(muteValue);
    }
  }

  const paddingStyles = {
    promotional: "41.70%",
    gyanmanch: "41.70%",
    profile: "41.70%",
    greetings: "46.87%",
    youngstars: "41.70%",
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.homePageHeader} ref={headerRef}>
        <div className={styles.headerLinks}>
          <a
            className={styles.headerLink}
            href="https://stories.workmob.com/local"
          >
            <svg viewBox="0 0 384 512" fill="white" width="100%">
              <path d="M192 0C85.97 0 0 85.97 0 192c0 77.41 26.97 99.03 172.3 309.7C177 508.6 184.5 512 192 512s14.95-3.441 19.72-10.32C357 291 384 269.4 384 192C384 85.97 298 0 192 0zM198.6 492.6C196.5 495.6 193.6 495.1 192 495.1s-4.496-.4473-6.549-3.41c-25.93-37.59-48.1-69.17-67.02-96.12C31.64 272.8 16 250.6 16 192c0-97.05 78.95-176 176-176s176 78.95 176 176c0 58.55-15.64 80.83-102.4 204.5C246.6 423.4 224.5 454.1 198.6 492.6zM192 111.1c-44.18 0-80 35.82-80 80c0 44.18 35.82 80 80 80s80-35.82 80-80C272 147.8 236.2 111.1 192 111.1zM192 256c-35.29 0-64-28.71-64-64c0-35.29 28.71-64 64-64s64 28.71 64 64C256 227.3 227.3 256 192 256z" />
            </svg>
          </a>
          <a
            className={styles.headerLink}
            href="https://stories.workmob.com/categories"
          >
            <svg viewBox="0 0 512 512" fill="white" width="100%">
              <path d="M160 0H64C28.65 0 0 28.65 0 64v96c0 35.35 28.65 64 64 64h96c35.35 0 64-28.65 64-64V64C224 28.65 195.3 0 160 0zM192 160c0 17.64-14.36 32-32 32H64C46.36 192 32 177.6 32 160V64c0-17.64 14.36-32 32-32h96c17.64 0 32 14.36 32 32V160zM160 288H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h96c35.35 0 64-28.65 64-64v-96C224 316.7 195.3 288 160 288zM192 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32v-96c0-17.64 14.36-32 32-32h96c17.64 0 32 14.36 32 32V448zM448 0h-96c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h96c35.35 0 64-28.65 64-64V64C512 28.65 483.3 0 448 0zM480 160c0 17.64-14.36 32-32 32h-96c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h96c17.64 0 32 14.36 32 32V160zM448 288h-96c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h96c35.35 0 64-28.65 64-64v-96C512 316.7 483.3 288 448 288zM480 448c0 17.64-14.36 32-32 32h-96c-17.64 0-32-14.36-32-32v-96c0-17.64 14.36-32 32-32h96c17.64 0 32 14.36 32 32V448z" />
            </svg>
          </a>
          <a
            className={styles.headerLink}
            href="https://stories.workmob.com/voices"
          >
            <svg viewBox="0 0 512 512" fill="white" width="100%">
              <path d="M507.3 484.7l-141.5-141.5C397 306.8 415.1 259.7 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c51.68 0 98.85-18.96 135.2-50.15l141.5 141.5C487.8 510.4 491.9 512 496 512s8.188-1.562 11.31-4.688C513.6 501.1 513.6 490.9 507.3 484.7zM208 384C110.1 384 32 305 32 208S110.1 32 208 32S384 110.1 384 208S305 384 208 384z" />
            </svg>
          </a>
        </div>
        <img className={styles.logoImg} src={logo} alt="workmob logo" />
        {currentHomeVideo?.id.includes("promotional") && !isCarouselPlaying && (
          <a
            className={styles.customBtn}
            href="https://stories.workmob.com"
            target="_blank"
          >
            Watch stories
          </a>
        )}
        {currentHomeVideo?.id.includes("profile") && !isCarouselPlaying && (
          <a
            className={styles.customBtn}
            href="https://stories.workmob.com/merikahani"
            target="_blank"
          >
            Share your story
          </a>
        )}
        {currentHomeVideo?.id.includes("greetings") && !isCarouselPlaying && (
          <Link
            to={{ pathname: "https://greetings.workmob.com/" }}
            target="_blank"
            className={styles.customBtn}
          >
            <span className={styles.fullText}>Watch greeting videos</span>
            <span className={styles.shortText}>Watch greetings</span>
          </Link>
        )}
        {isCarouselPlaying ? (
          <Link
            to={{ pathname: "https://motivation.workmob.com/" }}
            target="_blank"
            className={styles.customBtn}
          >
            <span className={styles.fullText}>Watch Motivational Videos</span>
            <span className={styles.shortText}>Watch Motivational</span>
          </Link>
        ) : (
          currentHomeVideo?.id.includes("gyanmanch") && (
            <Link
              to={{ pathname: "https://gyan.workmob.com/" }}
              target="_blank"
              className={styles.customBtn}
            >
              Watch Gyanmanch
            </Link>
          )
        )}
        {currentHomeVideo?.id.includes("youngstars") && !isCarouselPlaying && (
          <Link
            to={{ pathname: "https://youngstars.workmob.com/" }}
            target="_blank"
            className={styles.customBtn}
          >
            <span className={styles.fullText}>Watch Youngstars Videos</span>
            <span className={styles.shortText}>Watch Youngstars</span>
          </Link>
        )}
      </div>
      <div className={styles.homePageVideos}>
        {data.slice(0, dataSliceLength).map((v, i) => (
          <section
            key={i}
            className={styles.videoContainer}
            style={{
              "--padding-top": paddingStyles[v.type],
            }}
            onClick={(event) =>
              togglePlay(event.target === event.currentTarget, i)
            }
          >
            <VideoJS
              onReady={(player) => handlePlayerReady(player, i)}
              options={{
                id: v.type,
                muted: true,
                autoplay: i === 0 ? "muted" : false,
                loop: true,
                preload: "metadata",
                controls: false,
                sources: [
                  {
                    src: v.video,
                    type: "application/x-mpegURL",
                  },
                ],
              }}
              videoProps={{
                poster: v.background,
              }}
            />
            {/* mute button */}
            {/* {currentHomeVideo?.id.includes(v.type) &&
              (v.type === "merikahani" || v.type === "greetings") && (
                <div className={styles.muteContainer} onClick={toggleMute}>
                  <span className={styles.muteText}>
                    Tap to {isMute ? "unmute" : "mute"}
                  </span>
                  <i
                    className={`icon-${isMute ? "mute" : "unmute"} ${
                      styles.customIcon
                    }`}
                  ></i>
                </div>
              )} */}
            {/* play icon */}
            <i
              className={`icon-${playState[i] ? "pause-1" : "play"} ${
                playState[i] ? styles.customIcon : styles.customPlayIcon
              }  homePagePlayIcon`}
            ></i>
          </section>
        ))}
      </div>
      <HomePageCarousel
        currentHomeVideo={currentHomeVideo}
        currentHomeVideoPaused={currentHomeVideoPaused}
        isCarouselPlaying={isCarouselPlaying}
        setIsCarouselPlaying={setIsCarouselPlaying}
      />
      <HomePageFooter />
    </div>
  );
};

export default HomePageDesktop;
