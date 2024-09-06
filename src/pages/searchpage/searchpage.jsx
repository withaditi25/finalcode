import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import CloseBtn from "../../components/common/CloseBtn/CloseBtn";
import LoaderComponent from "../../components/common/Loader/Loader";
import GreetingsCommonHeading from "../../components/greetingVideo/greetingsCommonHeading";
import "./searchpage.css";

const Searchpage = () => {
  const { pathname } = useLocation();
  let itemCheck = JSON.parse(sessionStorage.getItem(pathname))?.index;
  const [allVideo, setAllVideo] = useState([]);
  const [searchVideo, setSearchVideo] = useState("");
  const [paginateData, setPaginateData] = useState(
    itemCheck ? Number(itemCheck) + 20 : 12
  );
  const [loader, setLoader] = useState(true);
  const history = useHistory();
  const totalVideos = useRef();

  // Handling scroller
  useEffect(() => {
    const scroller = window.addEventListener("scroll", (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= Number(scrollHeight) - 50) {
        if (paginateData <= totalVideos.current) {
          setPaginateData((prev) => prev + 17);
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", scroller);
    };
  }, [paginateData]);

  // Handling videos api
  useEffect(() => {
    setLoader(true);
    const grettingsCardApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/namaste-stories-top.json`
    );
    const gyanCardApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/gyan-stories-top.json`
    );
    const motivationCardApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/hope-stories-hope.json`
    );
    const apiSending = pathname.startsWith("/greetings")
      ? grettingsCardApi
      : pathname.startsWith("/gyan")
      ? gyanCardApi
      : motivationCardApi;

    apiSending
      .then((values) => values.json())
      .then((result) => {
        setLoader(false);
        const mainData = result.filter(
          (item) => item.video_landscape_thumb !== ""
        );
        totalVideos.current = mainData.length;
        setAllVideo(mainData);
      })
      .catch((err) => console.log(err));
  }, [pathname]);

  // Handling scrollPosition
  useEffect(() => {
    let itemCheckNew = JSON.parse(sessionStorage.getItem(pathname))?.position;
    window.scrollTo(0, itemCheckNew);
  }, [allVideo]);

  // Handling filter the videos and paginate
  const filteredDataVideo = allVideo
    .filter((cate) => {
      if (searchVideo === "") {
        return cate;
      } else {
        return cate.name.toLowerCase().includes(searchVideo);
      }
    })
    .slice(0, paginateData);

  // Handling sending user to other page
  const handlePush = (item, index) => {
    sessionStorage.setItem(
      pathname,
      JSON.stringify({ index: index, position: window.scrollY })
    );
    if (pathname.startsWith("/greetings")) {
      history.push(
        `/greetings/${item.storyType.toLowerCase().replace(/ /g, "-")}/${
          item.slug
        }`
      );
    } else if(pathname.startsWith("/gyan")){
      history.push(
        `/gyan/${item.storyType.toLowerCase().replace(/ /g, "-")}/${item.slug}`
      );
    }
    else if(pathname.startsWith("/motivation")){
      history.push(
        `/motivation/${item.storyType.toLowerCase().replace(/ /g, "-")}/${item.slug}`
      );
    }
  };

  // Handling loader
  if (loader) {
    return <LoaderComponent />;
  }

  return (
    <>
      <CloseBtn
        locationType={
          pathname.startsWith("/greetings")
            ? "/greetings"
            : pathname.startsWith("/gyan")
            ? "/gyan"
            : "/motivation"
        }
      />
      <GreetingsCommonHeading />
      <div>
        <div className="categories-main-search">
          <div className="categories-search">
            <i className="categories-searchIcon bi bi-search"></i>
            <input
              className="categories-optionsInput"
              placeholder={"Search Video"}
              onChange={(e) => setSearchVideo(e.target.value)}
              value={searchVideo}
            />
          </div>
        </div>

        {filteredDataVideo && filteredDataVideo.length > 0 ? (
          <div className="greetingVideoContainer">
            {filteredDataVideo.map((item, index) => {
              return (
                <section
                  key={index}
                  id="vid_section"
                  className={`greetVidSection`}
                  onClick={() => handlePush(item, index)}
                >
                  <img
                    className="videoLandscapeThumb"
                    src={item?.video_landscape_thumb}
                    alt="thumb"
                  />
                  <div className="playIconContainer">
                    <i className={`icon icon-play playIcon`} />
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="no-category">No Video Available.</div>
        )}
      </div>
    </>
  );
};

export default Searchpage;

{
  /* {!pathname.startsWith("/greetings") &&
                    !pathname.startsWith("/motivation") && (
                      <p className="text-white">{item.storyHeading}</p>
                    )} */
}
