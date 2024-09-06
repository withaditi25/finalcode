import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styles from "./VideoThumbnail.module.css";
import SkeletonVideoThumbnail from "../skeleton/videoThumbnail";
import VideoThumbNew from "./videoThumbNew";
import LoaderComponent from "../Loader/Loader";

export default function VideoThumbnail(props) {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const imgRef = useRef();
  const history = useHistory();
  const { pathname } = useLocation();
  let {
    GreetingVideoComponent,
    pathnameProp,
    categoryDataUrl,
    videoListUrlProp,
    categoryName,
    previousPath,
  } = props;
  let prevLocation;
  let videoListUrl;

  if (pathname.startsWith("/gyan")) {
    videoListUrl = GreetingVideoComponent
      ? `https://cdn.workmob.com/stories_workmob/config/gyan-category-index/${videoListUrlProp}.json`
      : categoryDataUrl;
  } else if (pathname.startsWith("/motivation")) {
    videoListUrl = GreetingVideoComponent
      ? `https://cdn.workmob.com/stories_workmob/config/hope-category-index/${videoListUrlProp}.json`
      : categoryDataUrl;
  } else {
    let newItem = `https://cdn.workmob.com/stories_workmob/config/namaste-category-index/${videoListUrlProp}.json`;
    videoListUrl = GreetingVideoComponent ? newItem : categoryDataUrl;
  }

  history.listen((nextLocation) => {
    prevLocation = nextLocation;
  });

  useLayoutEffect(() => {
    setLoader(true);
    fetch(videoListUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((res) => {
        const mainData = res.filter((item) => item.video_landscape_thumb != "");
        setData(mainData);
      });
    setLoader(false);
    return () => {
      setData([]);
    };
  }, [videoListUrl]);

  useEffect(() => {
    if (
      pathname === `/greetings/${categoryName}` ||
      pathname === `/gyan` ||
      pathname === `/motivation`
    ) {
      let isThrottle = false;
      let path = sessionStorage.getItem("checkPath");
      let scroll = path == "1" ? sessionStorage.getItem("greetings") : 0;
      function storeScroll() {
        if (isThrottle) return;
        isThrottle = true;
        setTimeout(() => {
          scroll = window.scrollY;
          isThrottle = false;
        }, 200);
      }
      window.scrollTo(0, sessionStorage.getItem("greetings"));
      sessionStorage.setItem("greetings", 0);
      document.addEventListener("scroll", storeScroll);
      return () => {
        sessionStorage.setItem("greetings", scroll);
        // document.removeEventListener('scroll', storeScroll)
      };
    }
  }, [data, pathname]);

  useEffect(() => {
    if (pathname === pathnameProp) {
      sessionStorage.setItem("endSlice", 9);
      let pageYoffset = Math.round(
        Number(sessionStorage.getItem("PageYoffset"))
      );
      // setTimeout(() => {
      //   window.scrollTo(0, pageYoffset);
      //   sessionStorage.removeItem("PageYoffset");
      // }, 200);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  let itemCheck = sessionStorage.getItem("checkPath");
  let cardIndexData = sessionStorage.getItem("cardIndex");
  cardIndexData = cardIndexData >= 11 ? +cardIndexData + 7 : 18;
  itemCheck = itemCheck == "1" ? cardIndexData : 12;

  if (loader) {
    return <LoaderComponent />;
  }

  const onVideoClick = (e, item, data) => {
    const indexCheck = data?.findIndex((value) => value?.slug == item?.slug);
    sessionStorage.setItem("cardIndex", indexCheck);
    let pathCheck = pathnameProp?.split("/")[1];
    if (pathname === pathnameProp) {
      sessionStorage.setItem("PageYoffset", window.scrollY);
    }
    //  else {
    //   window.scrollTo(0, 0);
    // }
    history.push({
      pathname: `${pathnameProp}/${item?.slug}`,
      state: {
        item,
        data,
        videoListUrl,
      },
    });
  };

  let newArray = [];
  let removeExtraVideo = [...data];
  removeExtraVideo = removeExtraVideo.filter(
    (item) => item.video_landscape_thumb != ""
  );
  let arr = [...removeExtraVideo];
  let lengthCheck = removeExtraVideo.length > 12 ? 12 : removeExtraVideo.length;
  for (
    let i = 1;
    window.innerWidth < 767 ? i <= lengthCheck : i <= lengthCheck;
    i++
  ) {
    const random = Math.floor(Math.random() * (removeExtraVideo.length - i));
    newArray.push(arr[random]);
    arr[random] = arr[removeExtraVideo.length - i];
  }
  if (data.length < 1) {
    return <SkeletonVideoThumbnail />;
  }

  return (
    <div>
      <div className={styles.greetingVideoContainer}>
        {!GreetingVideoComponent ? (
          <VideoThumbNew
            styles={styles}
            data={data}
            imgRef={imgRef}
            onVideoClick={onVideoClick}
            pageLimit={50}
            dataLimit={itemCheck}
          />
        ) : (
          newArray?.map((item, index) => (
            <div key={index}>
              <section
                ref={imgRef}
                id="vid_section"
                onClick={(e) => onVideoClick(e, item, removeExtraVideo)}
                className={styles.greetVidSection}
              >
                <img
                  className={styles.videoLandscapeThumb}
                  src={item?.video_landscape_thumb}
                  alt="thumb"
                />
                <div className={styles.playIconContainer}>
                  <i className={`icon icon-play ${styles.playIcon}`} />
                </div>
              </section>
              {!pathname.startsWith("/greetings") &&
                !pathname.startsWith("/motivation") && (
                  <p className="text-white">{item.storyHeading}</p>
                )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
