import React from "react";
import { useLocation } from "react-router-dom";
import greetingsData from "./../../pages/greetings/greetingsData.json";
import "./greetingsCommonHeading.css";

const GreetingsCommonHeading = () => {
  const { pathname } = useLocation();
  let heading = "";
  let tagline = "";
  let paragraph = "";
  const { greetingsJson, gyanJson, motivationJson } = greetingsData;

  // Handling the GGM headind and other data
  if (pathname.startsWith("/greetings")) {
    heading = greetingsJson.heading;
    tagline = greetingsJson.tagline;
    paragraph = greetingsJson.paragraph;
  } else if (pathname.startsWith("/gyan")) {
    heading = gyanJson.heading;
    tagline = gyanJson.tagline;
    paragraph = gyanJson.paragraph;
  } else if (pathname.startsWith("/motivation")) {
    heading = motivationJson.heading;
    tagline = motivationJson.tagline;
    paragraph = motivationJson.paragraph;
  }

  return (
    <div>
      <h1 className={"VideoList-title"}>{heading}</h1>
      <h3 className="VideoList-tagline">{tagline}</h3>
      {!!paragraph && <p className="VideoList-paragraph">{paragraph}</p>}
    </div>
  );
};

export default GreetingsCommonHeading;
