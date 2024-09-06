import "./greetingsHome.css";
import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import CloseBtn from "../../components/common/CloseBtn/CloseBtn";
import VideoThumbnail from "../../components/common/VideoThumbnail/videothumbnail";
import Layout from "../../components/Layout/Layout";
import { useLocation } from "react-router-dom";
import greetingsData from "./greetingsData.json";
import GreetingsFooter from "../../components/greetingVideo/greetingsFooter";
import GreetingsFooterScroller from "../../components/greetingVideo/greetingsFooterScroller";
import GreetingsHeaderVideoBar from "../../components/greetingVideo/greetingsHeaderVideoBar";
import GreetingsTopVideo from "../../components/greetingVideo/greetingsTopVideo";
import GreetingsCategoryCard from "../../components/greetingVideo/greetingsCategoryCard";
import GreetingsInsight from "../../components/greetingVideo/greetingsInsight";
import GreetingsSubFooter from "../../components/greetingVideo/greetingsSubFooter";

const GreetingsHome = (props) => {
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [searchString, updateSearchString] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [categoryDataUrl, setCategoryDataUrl] = useState(null);
  const [widthCheck, setWidthCheck] = useState(null);
  const [activeClass, setActiveClass] = useState(null);
  const [playVideo, setPlayVideo] = useState(true);
  const [topVideoCard, setTopVideoCard] = useState([]);
  const [videoTopMain, setVideoTopMain] = useState(null);
  const { pathname } = useLocation();
  const videoRef = useRef(null);
  let documentTitle = "";
  let metaDescription = "";
  let heading = "";
  let tagline = "";
  let paragraph = "";
  let bottomText;
  const categoryName = pathname.split("/").slice(2);
  const { greetingsJson, gyanJson, motivationJson } = greetingsData;

  // Handling video scroller
  useEffect(() => {
    if (
      pathname === "/greetings" ||
      pathname === "/gyan" ||
      pathname === "/motivation"
    ) {
      sessionStorage.removeItem("/greetingssearch");
      sessionStorage.removeItem("/gyansearch");
      sessionStorage.removeItem("/motivationsearch");
    }
  });

  // Handling GGM header video and footer ups downs and width handling using eventlistner
  useEffect(() => {
    // Here we are getting the all GREETGYANMOTIVATION page top video
    fetch(
      ` https://cdn.workmob.com/stories_workmob/web_home/about-new-08-april.json`
    ).then((res) =>
      res.json().then((result) => {
        const data = {
          greetings: result.web.find((item) => item.type === "greetings"),
          gyanmanch: result.web.find((item) => item.type === "gyanmanch"),
          motivation: result.web.find((item) => item.type === "profile"),
        };
        setVideoTopMain(data);
      })
    );

    // Here we are checking the width for main category card showing condition
    if (window.innerWidth < 950) {
      setWidthCheck(true);
    }
    const widthCheck = () => {
      if (window.innerWidth > 950) {
        setWidthCheck(false);
      } else {
        setWidthCheck(true);
      }
    };
    window.addEventListener("resize", widthCheck);

    // Here we are handling the state for footer ups and down
    let lastScroll;
    let isThrottle;
    function listenScroll() {
      if (isThrottle) return;
      isThrottle = true;
      setTimeout(() => {
        const currentScroll = window.scrollY;
        if (lastScroll < currentScroll) {
          setIsScrollDown(true);
        } else {
          setIsScrollDown(false);
        }
        lastScroll = currentScroll;
        isThrottle = false;
      }, 100);
    }
    document.addEventListener("scroll", listenScroll);

    return () => {
      window.removeEventListener("resize", widthCheck);
      document.removeEventListener("scroll", listenScroll);
    };
  }, []);

  // Handling categories and top card and location api
  useEffect(() => {
    const grettingsCardApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/namaste-stories-top.json`
    );
    const greetingsCategoryApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/namaste-category.json`
    );
    const greetingsLocationApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/LocationMaster.json`
    );
    const gyanCardApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/gyan-stories-top.json`
    );
    const gyanCategoryApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/gyan-category.json`
    );
    const gyanLocationApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/LocationMaster.json`
    );
    const motivationCardApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/hope-stories-hope.json`
    );
    const motivationCategoryApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/hope-category.json`
    );
    const motivationLocationApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/LocationMaster.json`
    );

    const greetingsPageApi = [
      grettingsCardApi,
      greetingsCategoryApi,
      greetingsLocationApi,
    ];
    const gyanPageApi = [gyanCardApi, gyanCategoryApi, gyanLocationApi];
    const motivationPageApi = [
      motivationCardApi,
      motivationCategoryApi,
      motivationLocationApi,
    ];
    const apiSending = pathname.startsWith("/greetings")
      ? greetingsPageApi
      : pathname.startsWith("/motivation")
      ? motivationPageApi
      : gyanPageApi;
    Promise.all(apiSending).then((values) => {
      values[0].json().then((result) => {
        const mainData = result.filter(
          (item) => item.video_landscape_thumb !== ""
        );
        const data = mainData.slice(0, 12);
        setTopVideoCard(data);
      });
      values[1].json().then((result) => {
        setCategoryList(result);
        const resultData = [...result]
          .reverse()
          .findIndex((item) => item.category === categoryName[0]);
        setActiveClass(resultData);
      });
      values[2].json().then((result) => {
        // setLocationData(result);
      });
    });
  }, [pathname]);

  // Handling api for single category data
  useEffect(() => {
    if (
      categoryName &&
      categoryName.length > 0 &&
      pathname.startsWith("/greetings")
    ) {
      setCategoryDataUrl(
        `https://cdn.workmob.com/stories_workmob/config/namaste-category-index/${categoryName}.json`
      );
    } else if (
      categoryName &&
      categoryName.length > 0 &&
      pathname.startsWith("/gyan")
    ) {
      setCategoryDataUrl(
        `https://cdn.workmob.com/stories_workmob/config/gyan-category-index/${categoryName}.json`
      );
    } else if (
      categoryName &&
      categoryName.length > 0 &&
      pathname.startsWith("/motivation")
    ) {
      setCategoryDataUrl(
        `https://cdn.workmob.com/stories_workmob/config/hope-category-index/${categoryName}.json`
      );
    } else {
      setCategoryDataUrl(null);
    }
  }, [pathname]);

  // Handling the active class scrolling effect
  useEffect(() => {
    if (window.innerWidth < 1300) {
      if (categoryName && categoryName.length > 0) {
        const activeItem = document.getElementsByClassName("text-red");
        const scrollar = document.getElementsByClassName("scroll-container");
        let positions = activeItem[0]?.getBoundingClientRect();
        const scroll = scrollar[0]?.getBoundingClientRect();
        const item = scrollar[0];
        if (item && positions?.x > scroll?.x) {
          item.scrollLeft +=
            positions?.x -
            (window.innerWidth < 400
              ? 120
              : window.innerWidth > 400 && window.innerWidth < 500
              ? 190
              : window.innerWidth > 500 && window.innerWidth < 600
              ? 220
              : window.innerWidth > 600 && window.innerWidth < 700
              ? 270
              : window.innerWidth > 700 && window.innerWidth < 800
              ? 300
              : window.innerWidth > 800 && window.innerWidth < 900
              ? 350
              : window.innerWidth < 1300
              ? 400
              : 0);
        }
      }
    }
  }, [activeClass]);

  // Handling the play and pause of header video
  useEffect(() => {
    if (playVideo) {
      videoRef?.current?.play();
    } else {
      videoRef?.current?.pause();
    }
  }, [playVideo]);

  // Handling the GGM headind and other data
  if (pathname.startsWith("/greetings")) {
    documentTitle = greetingsJson.documentTitle;
    metaDescription = greetingsJson.metaDescription;
    heading = greetingsJson.heading;
    tagline = greetingsJson.tagline;
    paragraph = greetingsJson.paragraph;
    bottomText = (
      <>
        <span>{greetingsJson.spanMain}</span>
        <span>{greetingsJson.spanSub}</span>
      </>
    );
  } else if (pathname.startsWith("/gyan")) {
    documentTitle = gyanJson.documentTitle;
    metaDescription = gyanJson.metaDescription;
    heading = gyanJson.heading;
    tagline = gyanJson.tagline;
    paragraph = gyanJson.paragraph;
    bottomText = (
      <>
        <span>{gyanJson.spanMain}</span>
        <span>{gyanJson.spanSub}</span>
      </>
    );
  } else if (pathname.startsWith("/motivation")) {
    documentTitle = motivationJson.documentTitle;
    metaDescription = motivationJson.metaDescription;
    heading = motivationJson.heading;
    tagline = motivationJson.tagline;
    paragraph = motivationJson.paragraph;
    bottomText = (
      <>
        <span>{motivationJson.spanMain}</span>
      </>
    );
  }

  // Here are are filtering the data
  const filteredData = categoryList.filter((cate) => {
    if (searchString === "") {
      return cate;
    } else {
      return cate.category.toLowerCase().includes(searchString);
    }
  });

  // Here we are handling the state for play and pause of top header video
  const handleToggle = (event) => {
    if (event.target.tagName === "VIDEO") {
      videoRef.current = event.target;
      setPlayVideo(!playVideo);
    }
  };

  return (
    <Layout>
      <div className="VideoList">
        <Helmet>
          <meta name="description" content={metaDescription} />
          <title>{documentTitle}</title>
        </Helmet>
        <CloseBtn
          locationType={
            pathname === "/greetings" ||
            pathname === "/gyan" ||
            pathname === "/motivation"
              ? "/"
              : pathname.startsWith("/greetings")
              ? "/greetings"
              : pathname.startsWith("/gyan")
              ? "/gyan"
              : "/motivation"
          }
        />

        {/* Handling top header bar where video element and other heading */}
        <GreetingsHeaderVideoBar
          videoTopMain={videoTopMain}
          handleToggle={handleToggle}
          heading={heading}
          tagline={tagline}
          paragraph={paragraph}
        />

        {/* Handling the video cards of every category */}
        {!!categoryDataUrl && (
          <VideoThumbnail
            pathnameProp={pathname}
            categoryDataUrl={categoryDataUrl}
            categoryName={categoryName}
            previousPath={props?.location?.state?.pathname}
          />
        )}

        {/* Handling the footer of application */}
        <GreetingsFooter bottomText={bottomText} isScrollDown={isScrollDown} />

        {/* Handling the top videos */}
        <GreetingsTopVideo topVideoCard={topVideoCard} />

        {/* Handling the category card  */}
        <GreetingsCategoryCard
          categoryList={categoryList}
          updateSearchString={updateSearchString}
          searchString={searchString}
          filteredData={filteredData}
          widthCheck={widthCheck}
        />

        {/* Handling the insights data */}
        <GreetingsInsight />

        {/* Handling the Sub-footer */}
        <GreetingsSubFooter />

        {/* Handling the fixed category card footer of Greetings and Gyan and Motivation */}
        <GreetingsFooterScroller
          isScrollDown={isScrollDown}
          categoryList={categoryList}
          activeClass={activeClass}
          setActiveClass={setActiveClass}
        />
      </div>
    </Layout>
  );
};

export default GreetingsHome;
