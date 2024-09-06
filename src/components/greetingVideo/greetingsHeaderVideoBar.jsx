import React from "react";
import { useLocation } from "react-router-dom";
import VideoJS from "../common/VideoJS/VideoJsNew";
import GreetingsHeader from "./greetingsHeader";

const GreetingsHeaderVideoBar = ({
  videoTopMain,
  handleToggle,
  heading,
  tagline,
  paragraph,
}) => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/greetings" ||
      pathname === "/gyan" ||
      pathname === "/motivation" ? (
        videoTopMain != undefined && (
          <div
            className="Categories-videoContainer"
            onClick={(event) => handleToggle(event)}
          >
            <GreetingsHeader heading={heading} />
            <div
              className="paddingClassVideo"
              style={
                pathname === "/gyan"
                  ? { paddingTop: "56.25%" }
                  : { paddingTop: "46.87%" }
              }
            ></div>
            <VideoJS
              options={{
                id: pathname,
                muted: true,
                autoplay: "muted",
                loop: true,
                preload: "metadata",
                controls: false,
                sources: [
                  {
                    src:
                      pathname === "/greetings"
                        ? videoTopMain?.greetings?.video
                        : pathname === "/gyan"
                        ? videoTopMain?.gyanmanch?.video
                        : videoTopMain?.motivation?.video,
                    type: "application/x-mpegURL",
                  },
                ],
              }}
              videoProps={{
                poster:
                  pathname === "/greetings"
                    ? videoTopMain?.greetings?.background
                    : pathname === "/gyan"
                    ? videoTopMain?.gyanmanch?.background
                    : videoTopMain?.motivation?.background,
              }}
            />
          </div>
        )
      ) : (
        <>
          <h1
            className={
              "VideoList-title" +
              (pathname.startsWith("/greetings")
                ? " VideoList-greetingsTitle"
                : "")
            }
          >
            {heading}
          </h1>
          <h3 className="VideoList-tagline">{tagline}</h3>
          {!!paragraph && <p className="VideoList-paragraph">{paragraph}</p>}
        </>
      )}
    </>
  );
};

export default GreetingsHeaderVideoBar;
