import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const GreetingsTopVideo = ({ topVideoCard }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  const handleCategory = () =>{
    if(pathname === "/motivation"){
      history.push("/motivationsearch")
    }else  if(pathname === "/greetings"){
      history.push("/greetingssearch")
    }else  if(pathname === "/gyan"){
      history.push("/gyansearch")
    }
  }

  return (
    <>
      {(pathname === "/gyan" ||
        pathname === "/greetings" ||
        pathname === "/motivation") && (
        <div className="greeting-randomvideo-set">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1 className="greeting-header-cat">Top Videos</h1>
            <i
              onClick={handleCategory}
              style={{ fontSize: "0.8rem", cursor: "pointer" }}
              className="icon icon-right-arrow greeting-header-cat"
            />
          </div>
          <div className="greetingVideoContainer">
            {topVideoCard.map((item, index) => {
              return (
                <div key={index}>
                  <section
                    id="vid_section"
                    onClick={(e) => {
                      history.push(
                        `${pathname}/${item.storyType
                          .toLowerCase()
                          .replace(/ /g, "-")}/${item.slug}`
                      );
                    }}
                    className="greetVidSection"
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
                  {false && (
                      <p className="text-white">{item.storyHeading}</p>
                    )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default GreetingsTopVideo;
