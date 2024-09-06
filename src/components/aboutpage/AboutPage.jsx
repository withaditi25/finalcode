import React, {useEffect, useRef, useState} from "react";
import styles from "./AboutPage.module.css";
import data from "./data";
import CloseBtn from "../common/CloseBtn/CloseBtn";
import VideoJS from "../common/VideoJS/VideoJsNew";
import {
  // logo,
  playStore,
  appStore,
  heart,
  facebook,
  linkedin,
  twitter,
  // mobiles,
  karmayogionKaUtsav,
  FirstEdition,
  // fifteenLakh,
  // fiftyWinners,
  // prestigious,
  prerakKahaniyan,
  instagram,
  youtube,
  workmobWhite,
  leftTricolor,
  rightTricolor,
  // GroupMobile,
} from "../../constants/requiredAssets";
import { APPLE_LINK, ANDROID_LINK } from "../../constants/variable";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutPage(props) {
  const [currentTarget, setCurrentTarget] = React.useState(null);
  const firstVideoRef = useRef();
  const secondVideoRef = useRef();
  const [isMute, setIsMute] = useState(true);
  const [isPlaying, setIsPlaying] = useState([true, false]);
  
  const handleClick = (e) => {
    const { id } = e.currentTarget;
    setCurrentTarget(id);
    document.querySelectorAll("video").forEach((vid) => vid.pause());
    if (currentTarget !== id) {
      document.getElementById(id.replace("-div", "")).play();
    }
    else {
      setCurrentTarget(null);
    }
  };

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    let isThrottle = false;
    function listenScroll() {
      if (isThrottle) return;
      const firstVideo = firstVideoRef.current;
      const secondVideo = secondVideoRef.current;
      isThrottle = true;
      setTimeout(() => {
        if (firstVideo && secondVideo) {
          if (firstVideo.getBoundingClientRect().top >= 0) {
            firstVideo.play();
            secondVideo.pause();
            setIsPlaying([true, false])
          }     
          else {
            firstVideo.pause();
            secondVideo.play();
            setIsPlaying([false, true]);
          }
        }
        isThrottle = false;
      }, 200);
    }

    listenScroll();
    window.scroll(0, 0);
    window.addEventListener('scroll', listenScroll);
    return () => window.removeEventListener('scroll', listenScroll);
  }, []);

  function toggleMute() {
    const newMute = !isMute;
    firstVideoRef.current.muted = newMute;
    secondVideoRef.current.muted = newMute;
    setIsMute(newMute);
  }

  return (
    <>
      <CloseBtn locationType={"/"} {...props} />
      <section className={styles.footerMain}>
        <div className={styles.firstVideoContainer}>
          <VideoJS
            onReady={(player) => {
              firstVideoRef.current = player.children_[0];
            }}
            options={{
              id: "AboutPage-firstVideo",
              autoplay: "muted",
              muted: true,
              loop: true,
              controls: false,
              preload: "metadata",
              sources: [
                {
                  src: "https://cdn.workmob.com/stories_workmob/promotional/About/about-top-video/about-top-video.m3u8",
                  type: "application/x-mpegURL",
                },
              ],
            }}
            videoProps={{
              poster:
                "https://cdn.workmob.com/stories_workmob/promotional/About/about-top.jpg",
            }}
          />
          {isPlaying[0] && (
            <div className={styles.iconsContainer}>
              <div className={styles.muteIconContainer} onClick={toggleMute}>
                <span>Tap to {isMute ? "unmute" : "mute"}</span>
                <i
                  className={`${styles.videoIcon} icon-` + (isMute ? "mute" : "unmute")}
                ></i>
              </div>
            </div>
          )}
        </div>
        <div className={styles.secondVideoContainer}>
          <VideoJS
            onReady={(player) => {
              secondVideoRef.current = player.children_[0];
            }}
            options={{
              autoplay: false,
              controls: false,
              muted: true,
              sources: [
                {
                  src: "https://cdn.workmob.com/stories_workmob/promotional/amrit_mahotsav/kunal-sir-amrit-mahotsav/kunal-sir-amrit-mahotsav.m3u8",
                  type: "application/x-mpegURL",
                },
              ],
            }}
            videoProps={{
              poster:
              'https://cdn.workmob.com/stories_workmob/promotional/amrit_mahotsav/kunal-sir-amrit-mahotsav.jpg',
            }}
          />
          {isPlaying[1] && (
            <div className={styles.iconsContainer}>
              <div className={styles.muteIconContainer} onClick={toggleMute}>
                <span>Tap to {isMute ? "unmute" : "mute"}</span>
                <i
                  className={`${styles.videoIcon} icon-` + (isMute ? "mute" : "unmute")}
                ></i>
              </div>
              <div className={styles.videoIcon} onClick={() => secondVideoRef.current.requestFullscreen()}>
                <svg viewBox="0 0 448 512" fill='white' style={{width:'100%',height:'100%'}}>
                  <path d="M144 32h-128C7.156 32 0 39.16 0 48v128C0 184.8 7.156 192 16 192S32 184.8 32 176V64h112C152.8 64 160 56.84 160 48S152.8 32 144 32zM144 448H32v-112C32 327.2 24.84 320 16 320S0 327.2 0 336v128C0 472.8 7.156 480 16 480h128C152.8 480 160 472.8 160 464S152.8 448 144 448zM432 320c-8.844 0-16 7.156-16 16V448h-112c-8.844 0-16 7.156-16 16s7.156 16 16 16h128c8.844 0 16-7.156 16-16v-128C448 327.2 440.8 320 432 320zM432 32h-128C295.2 32 288 39.16 288 48S295.2 64 304 64H416v112C416 184.8 423.2 192 432 192S448 184.8 448 176v-128C448 39.16 440.8 32 432 32z" />
                </svg>
              </div>
            </div>
          )}
        </div>

        <div className={styles.aboutitemstext} >
          <div className={styles.aboutPara}>
            {window.innerWidth > 768 ? (
              <>
                {" "}
                <img
                  id={styles.prerakKahaniyan}
                  src={prerakKahaniyan}
                  alt="prerak kahaniyan"
                />
                <img
                  id={styles.firstEdition}
                  src={FirstEdition}
                  alt="FirstEdition"
                />{" "}
              </>
            ) : null}
            <div className={styles.fHeading}>
              <h1 className={styles.headingOne}>
                <img
                  className={styles.triColorLeft}
                  src={leftTricolor}
                  alt="left tri color"
                />
                <span>भारत की अपनी</span>
              </h1>
              <h2 className={styles.headingTwo}>
                <span>PROFESSIONAL COMMUNITY KI </span>
                <span className={styles.headingTwoAwaaz}>
                  AWAAZ
                  <img
                    className={styles.triColorRight}
                    src={rightTricolor}
                    alt="right tri color"
                  />
                </span>
              </h2>
            </div>
            <div className={styles.aboutParaTwo}>
              <p className={styles.flag}>
                <span>बनाओ </span>
                <span> अपनी </span>
                <span>पहचान</span>
              </p>
            </div>
            <p>
              एक मुहिम, जिसमें प्रोफेशनल्स, क्रिएटर्स, व्यापारी, उद्योगपति और
              सामाजिक कार्यकर्ता अपनी प्रेरक कहानियों के माध्यम से भारतवर्ष में
              अनुभवों से सीखने की परम्परा को आगे बढ़ा रहे है। आप भी जुड़िए इस
              मुहिम से और अपनी कहानी से लोगों को प्रेरित करें, आशा दें और उन्हें
              नई राह दिखाएं
            </p>
          </div>

          <div className={styles.tagsContainer}>
            <div className={styles.tagOne}>
              <div>
                <img
                  id={styles.kahaniyoKaUtsav}
                  src={karmayogionKaUtsav}
                  alt="karmayogion ka utsav"
                />
              </div>
              <p className="my-3" >
                अनुभवों की इस मुहीम को हम एक उत्सव के रूप में मनाते हैं
              </p>
            </div>
            <div className={styles.tagTwo}></div>
          </div>
          <div className={styles.fContent}>
            <div className={styles.videoListing}>
              <Slider {...sliderSettings}>
                {data.map((item) => (
                  <div
                    tabIndex="0"
                    role="button"
                    key={item.uId}
                    onClick={handleClick}
                    onKeyDown={handleClick}
                    id={item.id}
                    className={styles.vidoeContainerItem}
                  >
                    <video
                      muted={false}
                      poster={item.poster}
                      id={item.videoId}
                      preload="auto"
                    >
                      <track hidden kind="captions" />
                      <source src={item.video} />
                    </video>
                    {currentTarget !== item.id && (
                      <div className={`${styles.playButtonOuter}`}>
                        <div className={styles.playButton} />
                      </div>
                    )}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className={styles.aboutFlagTwoContainer}>
            <div id={styles.aboutFlagTwo}>
              <p className="m-0">Lets Inspire Together</p>
            </div>
            <p id={styles.aboutFlagThree}>We can. India can.</p>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <div className={styles.footer}>
            <div className={styles.dialogueContainer}>
              <p className={styles.dialogue}>
                अपनी कहानी का वीडियो रिकॉर्ड करने के लिए
              </p>
              <p className={styles.dialogue}>
                हमें +91 9001 98 55 66 पर WhatsApp करें |
              </p>
              <p className={`${styles.copyRight} ${styles.orange}`}>
                100% free to use and download
              </p>
            </div>

            <div className={styles.socialLogos + " " + "d-none"}>
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
            <div className={styles.dflex}>
              <li className={styles.copyRightText}>
                ©2022 Workmob Pvt. Ltd. All rights reserved.
              </li>
              <p className={styles.copyRight}>
                Made with <img width="12" src={heart} alt="heart" /> in India{" "}
              </p>
              <div className={styles.dflexLinks}>
                <a target="_blank" href={ANDROID_LINK} rel="noreferrer">
                  <img src={playStore} alt="playstore" />
                </a>
                <a target="_blank" href={APPLE_LINK} rel="noreferrer">
                  <img src={appStore} alt="appstore" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
