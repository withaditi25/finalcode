import React from "react";
import { useLocation } from "react-router-dom";

const GreetingsFooter = ({ bottomText, isScrollDown }) => {
  const { pathname } = useLocation();
  const grettingsPath = pathname.split("/").length > 2;

  return (
    <div
      className={`VideoList-fixedBottom ${
        grettingsPath
          ? !isScrollDown
            ? "VideoList-fixedBottomHidden"
            : ""
          : isScrollDown
          ? "VideoList-fixedBottomHidden"
          : ""
      }`}
    >
      <div className="VideoList-bottomText">{bottomText}</div>
      <a
        className="VideoList-contactUs"
        href="https://wa.me/919001985566?text=I%20want%20to%20join%20your%20movement."
        target="_blank"
      >
        Contact Us
      </a>
    </div>
  );
};

export default GreetingsFooter;
