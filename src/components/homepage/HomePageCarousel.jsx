import React, { useEffect, useState } from "react";
import fetchAPI from "../../data/api";
import styles from "./HomePageCarousel.module.css";
import VideoJS from "../common/VideoJS/VideoJsNew";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";

const HomePageCarousel = ({
  currentHomeVideo,
  currentHomeVideoPaused,
  isCarouselPlaying,
  setIsCarouselPlaying,
}) => {
  const [data, setData] = useState([]);
  const [isMute, setIsMute] = useState(true);
  const [currentCarouselVideo, setCurrentCarouselVideo] = useState();
  const apiOn = () => {
    return new Promise((resolve) => {
      const url =
        "https://cdn.workmob.com/stories_workmob/config/youtube-trending.json";
      fetchAPI(url, (data) => {
        resolve(data);
      });
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiOn();
      if (response) {
        setData(response);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length) {
      const currentVideo = document.querySelector(".swiper-slide-active video");
      if (currentVideo) {
        setCurrentCarouselVideo(currentVideo);
      }
    }
  }, [data]);

  useEffect(() => {
    if (currentCarouselVideo && currentHomeVideo) {
      if (
        currentHomeVideoPaused &&
        currentCarouselVideo.getBoundingClientRect().top < window.innerHeight
      ) {
        currentCarouselVideo.play();
        setIsCarouselPlaying(true);
      } else {
        currentCarouselVideo.pause();
        setIsCarouselPlaying(false);
      }
    }
  }, [currentCarouselVideo, currentHomeVideo, currentHomeVideoPaused]);

  useEffect(() => {
    if (currentCarouselVideo) {
      togglePlayIcon();
    }
  }, [currentCarouselVideo]);

  function togglePlayIcon() {
    const playIcon = document.querySelector(
      ".swiper-slide-active .carouselPlayIcon"
    );
    playIcon.style.opacity = 1;
    setTimeout(() => {
      playIcon.style.opacity = 0;
    }, 1000);
  }

  function togglePlaying(event) {
    if (
      currentCarouselVideo &&
      currentHomeVideo &&
      event.target === event.currentTarget
    ) {
      togglePlayIcon();
      currentHomeVideo.pause();

      if (currentCarouselVideo) {
        isCarouselPlaying
          ? currentCarouselVideo.pause()
          : currentCarouselVideo.play();
      }
      setIsCarouselPlaying(!isCarouselPlaying);
    }
  }

  function toggleMute() {
    if (currentCarouselVideo) {
      currentCarouselVideo.muted = !isMute;
      setIsMute(!isMute);
    }
  }

  function handleSlideChange() {
    const allSlides = document.querySelectorAll(".swiper-slide video");
    const currentVideo = document.querySelector(".swiper-slide-active video");
    allSlides.forEach((v) => v.pause());
    setCurrentCarouselVideo(currentVideo);
    if (currentVideo) {
      isMute ? (currentVideo.muted = true) : (currentVideo.muted = false);
    }
  }

  return (
    <div className={styles.homePageCarousel}>
      {data && (
        <Swiper
          slidesPerView={1.2}
          spaceBetween={18}
          centeredSlides={true}
          loop={true}
          initialSlide={2}
          breakpoints={{
            700: {
              spaceBetween: 50,
            },
          }}
          onSlideChangeTransitionEnd={handleSlideChange}
        >
          {data.map((v, i) => (
            <SwiperSlide key={i}>
              <div
                className={styles.videoContainer}
                onClick={togglePlaying}
                style={{ "--padding-top": "56.25%" }}
              >
                <VideoJS
                  options={{
                    id: v.slug,
                    poster: v.mobileThumb,
                    muted: true,
                    preload: "metadata",
                    autoplay: false,
                    controls: false,
                    sources: [
                      {
                        src: v.short_video,
                        type: "application/x-mpegURL",
                      },
                    ],
                  }}
                />
                {currentCarouselVideo?.id.includes(v.slug) && (
                  <>
                    <i
                      className={`icon-${isCarouselPlaying ? "pause-1" : "play"}
                      ${
                        isCarouselPlaying
                          ? styles.customIcon
                          : styles.customPlayIcon
                      }
               
                      carouselPlayIcon`}
                    ></i>
                    <div className={styles.muteContainer} onClick={toggleMute}>
                      <span className={styles.muteText}>
                        Tap to {isMute ? "unmute" : "mute"}
                      </span>
                      <i
                        className={`icon-${isMute ? "mute" : "unmute"} ${
                          styles.customIconMute
                        }`}
                      ></i>
                    </div>
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default HomePageCarousel;
