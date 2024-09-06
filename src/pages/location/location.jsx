import React, { useState } from "react";
import "./../categorypage/categorypage.css";
import "./../searchpage/searchpage.css";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import GreetingsCommonHeading from "../../components/greetingVideo/greetingsCommonHeading";
import CloseBtn from "../../components/common/CloseBtn/CloseBtn";

const Location = () => {
  const [searchString, setSearchString] = useState("");
  const [locationList, setLocationList] = useState([]);
  const [widthCheck, setWidthCheck] = useState(null);
  const { pathname } = useLocation();
  const history = useHistory();

  // Handling width
  useEffect(() => {
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
    return () => {
      window.removeEventListener("resize", widthCheck);
    };
  }, []);

  // Handling location api
  useEffect(() => {
    const greetingsLocationApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/LocationMaster.json`
    );
    const gyanLocationApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/LocationMaster.json`
    );
    const apiSending = pathname.startsWith("/greetings")
      ? greetingsLocationApi
      : gyanLocationApi;

    apiSending
      .then((values) => values.json())
      .then((result) => {
        setLocationList(result);
      });
  }, [pathname]);

  // Here filter the videos
  const filteredDataVideo = locationList.filter((cate) => {
    if (searchString === "") {
      return cate;
    } else {
      return cate.location.toLowerCase().includes(searchString);
    }
  });

  // Here sending user to other page
  const handlePush = (item) => {
    const itemmain = item.id.replace(/_/g,'-')
    if (pathname.startsWith("/greetings")) {
      history.push(`/greetingslocation/${itemmain}`);
    } else {
      history.push(`/gyanlocation/${itemmain}`);
    }
  };

  return (
    <>
     <CloseBtn
        locationType={
          pathname.startsWith("/greetings") ? "/greetings" : "/gyan"
        }
      />
      <GreetingsCommonHeading />
      <div className="categories-main-search">
        <div className="categories-search">
          <i className="categories-searchIcon bi bi-search"></i>
          <input
            className="categories-optionsInput"
            placeholder={"Search City"}
            onChange={(e) => setSearchString(e.target.value)}
            value={searchString}
          />
        </div>
      </div>
      {filteredDataVideo.length > 0 ? (
        <div className="categories-gridContainer">
          <div
            className={`categories-topRow categories-categoryTopRow ${
              searchString.length === 0 && !widthCheck ? "" : "d-none"
            }`}
          >
            {[...filteredDataVideo]
              .reverse()
              .slice(0, 5)
              .map((category, index) => {
                return (
                  <section
                    className={"categories-locationLink"}
                    key={index}
                    onClick={() => handlePush(category)}
                  >
                    <img
                      className="categories-optionsImage"
                      src={
                        pathname.startsWith("/greetings")
                          ? `https://cdn.workmob.com/stories_workmob/images/locations/${category.id.toLowerCase()}.png`
                          : `https://cdn.workmob.com/stories_workmob/images/locations/${category.id.toLowerCase()}.png`
                      }
                      alt={`${category.category} imageIcon`}
                    />
                  </section>
                );
              })}
          </div>
          <div className="greeting-category">
            {filteredDataVideo && filteredDataVideo.length > 0 ? (
              [...filteredDataVideo]
                .reverse()
                .slice(widthCheck || searchString.length != 0 ? 0 : 5)
                .map((category, index) => (
                  <section key={index} onClick={() => handlePush(category)}>
                    <img
                      src={
                        pathname.startsWith("/greetings")
                          ? `https://cdn.workmob.com/stories_workmob/images/locations/${category.id.toLowerCase()}.png`
                          : `https://cdn.workmob.com/stories_workmob/images/locations/${category.id.toLowerCase()}.png`
                      }
                      alt={`${category.category} imageIcon`}
                    />
                  </section>
                ))
            ) : (
              <div className="no-category">No Category Available.</div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Location;
