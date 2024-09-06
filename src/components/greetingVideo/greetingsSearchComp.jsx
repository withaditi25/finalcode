import React from "react";
import { Link, useLocation } from "react-router-dom";

const GreetingsSearchComp = ({
  setSearchVideo,
  searchVideo,
  filteredDataVideo,
}) => {
  const { pathname } = useLocation();

  return (
    <div className="">
      {(pathname == "/greetings" ||
        pathname == "/gyan" ||
        pathname.includes("/greetingsinsights") ||
        pathname.includes("/gyaninsights")) && (
        <div className="categories-main-search">
          <div className="categories-search">
            <i className="categories-searchIcon bi bi-search"></i>
            <input
              className="categories-optionsInput"
              placeholder={"Search Videos"}
              onChange={(e) => setSearchVideo(e.target.value)}
              value={searchVideo}
            />
          </div>
        </div>
      )}

      {(pathname == "/greetings" ||
        pathname == "/gyan" ||
        pathname.includes("/greetingsinsights") ||
        pathname.includes("/gyaninsights")) &&
      filteredDataVideo &&
      filteredDataVideo.length > 0 ? (
        <div className="greetingVideoContainer">
          {filteredDataVideo.map((item, index) => {
            return (
              <Link
                to={
                  pathname.includes("greetingsinsights")
                    ? `/greetings/${item.storyType
                        .toLowerCase()
                        .replace(/ /g, "-")}/${item.slug}`
                    : pathname.includes("gyaninsights")
                    ? `/gyan/${item.storyType
                        .toLowerCase()
                        .replace(/ /g, "-")}/${item.slug}`
                    : `${pathname}/${item.storyType
                        .toLowerCase()
                        .replace(/ /g, "-")}/${item.slug}`
                }
                key={index}
              >
                <section id="vid_section" className="greetVidSection">
                  <img
                    className="videoLandscapeThumb"
                    src={item?.video_landscape_thumb}
                    alt="thumb"
                  />
                  <div className="playIconContainer">
                    <i className={`icon icon-play playIcon`} />
                  </div>
                </section>
                {!pathname.startsWith("/greetings") &&
                  !pathname.startsWith("/motivation") && (
                    <p className="text-white">{item.storyHeading}</p>
                  )}
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="no-category">No Video Available.</div>
      )}
    </div>
  );
};

export default GreetingsSearchComp;
