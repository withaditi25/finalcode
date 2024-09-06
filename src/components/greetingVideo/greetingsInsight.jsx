import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";

const GreetingsInsight = () => {
  const [insightData, setInsightData] = useState([]);
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    fetch("https://cdn.workmob.com/stories_workmob/config/insightlisting.json")
      .then((res) => res.json())
      .then((res) => setInsightData(res));
  }, []);

  const handleCategory = () => {
    if (pathname === "/motivation") {
      history.push("/motivationinsights");
    } else if (pathname === "/greetings") {
      history.push("/greetingsinsights");
    } else if (pathname === "/gyan") {
      history.push("/gyaninsights");
    }
  };

  return (
    <>
      {(pathname === "/gyan" ||   pathname === "/motivation" || pathname === "/greetings" || pathname.startsWith("/greetingsinsights")) && (
        <div className="greeting-randomvideo-set">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1 className="greeting-header-cat">INSIGHTS</h1>
            <i
              onClick={handleCategory}
              style={{ fontSize: "0.8rem", cursor: "pointer" }}
              className="icon icon-right-arrow greeting-header-cat"
            />
          </div>
          <div className="insightDataMain-div">
            {insightData && insightData.length > 0
              ? insightData.slice(0, 2).map((item, index) => {
                  return (
                    <Link
                      to={(pathname === "/greetings" || pathname.startsWith("/greetingsinsights")) ?`/greetingsinsights/${item.slug}` : pathname === "/gyan" ? `/gyaninsights/${item.slug}` :`/motivationinsights/${item.slug}`}
                      key={index}
                      className="insightItemDiv"
                    >
                      <img src={item.thumb} alt="insightIcon" />
                      <div>{item.storyHeading}</div>
                    </Link>
                  );
                })
              : null}
          </div>
        </div>
      )}
    </>
  );
};

export default GreetingsInsight;
