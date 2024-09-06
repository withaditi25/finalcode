import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import CloseBtn from "../../components/common/CloseBtn/CloseBtn";
import LoaderComponent from "../../components/common/Loader/Loader";
import GreetingsHeader from "../../components/greetingVideo/greetingsHeader";
import GreetingsSubFooter from "../../components/greetingVideo/greetingsSubFooter";
import Socialshare from "../../components/socialshare/socialshare";
import greetingsData from "./../greetings/greetingsData.json";
import "./insight.css";

const Insight = () => {
  const [insightData, setInsightData] = useState({});
  const [insightDataMain, setInsightDataMain] = useState([]);
  const [loader, setLoader] = useState(true);
  const { pathname } = useLocation();
  const params = useParams();
  const { greetingsJson, gyanJson, motivationJson } = greetingsData;

  useEffect(() => {
    setLoader(true);
    fetch("https://cdn.workmob.com/stories_workmob/config/insightlisting.json")
      .then((res) => res.json())
      .then((res) => {
        const result = res.find((item) => item.slug === pathname.split("/")[2]);
        setInsightData(result);
        setInsightDataMain(res);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, [pathname]);

  // Handling the GGM headind and other data
  let heading;
  if (pathname.startsWith("/greetings")) {
    heading = greetingsJson.heading;
  } else if (pathname.startsWith("/gyan")) {
    heading = gyanJson.heading;
  } else if (pathname.startsWith("/motivation")) {
    heading = motivationJson.heading;
  }

  // Here loader
  if (loader) {
    return <LoaderComponent />;
  }

  if (params?.id) {
    return (
      <>
        <GreetingsHeader
          heading={
            pathname.startsWith("/greetingsinsights")
              ? "शुभकामनाएं"
              : pathname.startsWith("/gyaninsights")
              ? "ज्ञान मंच"
              : "आशा"
          }
          type="insights"
        />
        <CloseBtn
          locationType={
            pathname.startsWith("/greetingsinsights")
              ? "/greetings"
              : pathname.startsWith("/gyan")
              ? "/gyan"
              : "/motivation"
          }
        />
        <div className="container mt-5 mt-md-0">
          {/* Heading and Image */}
          <div className="bg-trabsparent p-0 position-relative pt-3 pt-md-5 mb-4">
            <h1 className="text-white font-weight-bold mb-4 font-50 charter-regular heading">
              {insightData?.storyHeading}
            </h1>
            <img
              className="img-fluid w-100 banner"
              src={insightData?.full}
              alt={"insightIcon"}
            />
          </div>
          {/* Text Content */}
          <div className="row position-relative articleDetail">
            <div className="col-12 text-white content">
              <div
                className="mb-3"
                dangerouslySetInnerHTML={{ __html: insightData?.fullStory }}
              />
            </div>
            <div className="col-12">
              <p className="text-white">{insightData?.date}</p>
            </div>
          </div>
          {/* Social Share */}
          <Socialshare
            emailText={insightData?.metaTitle}
            emailSub="Interesting Read"
            insightData={insightData?.storyHeading}
          />
        </div>
        {/* Footer */}
        <GreetingsSubFooter insightpage={"insightpage"} />
      </>
    );
  } else {
    return (
      <>
        <GreetingsHeader
          heading={
            pathname.startsWith("/greetingsinsights")
              ? "शुभकामनाएं"
              : pathname.startsWith("/gyaninsights")
              ? "ज्ञान मंच"
              : "आशा"
          }
          type="insights"
        />
        <CloseBtn
          locationType={
            pathname.startsWith("/greetingsinsights")
              ? "/greetings"
              : pathname.startsWith("/gyan")
              ? "/gyan"
              : "/motivation"
          }
        />
        <div className="greeting-randomvideo-set mt-5">
          <h1 className="greeting-header-cat">Insights</h1>
          <div className="insightDataMain-div">
            {insightDataMain && insightDataMain.length > 0
              ? insightDataMain.slice(0, 2).map((item, index) => {
                  return (
                    <Link
                      to={
                        pathname === "/greetings" ||
                        pathname.startsWith("/greetingsinsights")
                          ? `/greetingsinsights/${item.slug}`
                          : pathname === "/gyan"
                          ? `/gyaninsights/${item.slug}`
                          : `/motivationinsights/${item.slug}`
                      }
                      key={index}
                      className="insightItemDiv"
                    >
                      <img src={item.thumb} alt="insightIcon" />
                      <div>{item?.storyHeading}</div>
                    </Link>
                  );
                })
              : null}
          </div>
        </div>
        {/* Footer */}
        <GreetingsSubFooter insightpage={"insightpage"} />
      </>
    );
  }
};

export default Insight;
