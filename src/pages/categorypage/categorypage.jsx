import React, { useState } from "react";
import "./categorypage.css";
import "./../searchpage/searchpage.css";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import GreetingsCommonHeading from "../../components/greetingVideo/greetingsCommonHeading";
import CloseBtn from "../../components/common/CloseBtn/CloseBtn";
import LoaderComponent from "../../components/common/Loader/Loader";

const Categorypage = () => {
  const [searchString, setSearchString] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [widthCheck, setWidthCheck] = useState(null);
  const [loader, setLoader] = useState(true);
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

  // Handling category api
  useEffect(() => {
    setLoader(true);
    const greetingsCategoryApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/namaste-category.json`
    );
    const gyanCategoryApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/gyan-category.json`
    );
    const motivationCategoryApi = fetch(
      `https://cdn.workmob.com/stories_workmob/config/hope-category.json`
    );
    const apiSending = pathname.startsWith("/greetings")
      ? greetingsCategoryApi
      : pathname.startsWith("/gyan")
      ? gyanCategoryApi
      : motivationCategoryApi;

    apiSending
      .then((values) => values.json())
      .then((result) => {
        setLoader(false);
        const mainData = result.filter(
          (item) => item.video_landscape_thumb !== ""
        );
        setCategoryList(mainData);
      })
      .catch((err) => console.log(err));
  }, [pathname]);

  // Here filter the videos
  const filteredDataVideo = categoryList.filter((cate) => {
    if (searchString === "") {
      return cate;
    } else {
      return cate.category.toLowerCase().includes(searchString);
    }
  });

  // Here sending user to other page
  const handlePush = (item) => {
    if (pathname.startsWith("/greetings")) {
      history.push(`/greetings/${item.category}`);
    } else if (pathname.startsWith("/gyan")) {
      history.push(`/gyan/${item.category}`);
    } else if (pathname.startsWith("/motivation")) {
      history.push(`/motivation/${item.category}`);
    }
  };

  // Here loader
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
      <div className="categories-main-search">
        <div className="categories-search">
          <i className="categories-searchIcon bi bi-search"></i>
          <input
            className="categories-optionsInput"
            placeholder={"Search Category"}
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
                          ? `https://cdn.workmob.com/stories_workmob/images/greetings_category/${category.category}.png`
                          : ` https://cdn.workmob.com/stories_workmob/images/category-bg/${category.category.toLowerCase()}.png`
                      }
                      alt={`${category.category} imageIcon`}
                    />
                  </section>
                );
              })}
          </div>
          <div className="greeting-category">
            {filteredDataVideo.length > 0 ? (
              [...filteredDataVideo]
                .reverse()
                .slice(widthCheck || searchString.length != 0 ? 0 : 5)
                .map((category, index) => (
                  <section key={index} onClick={() => handlePush(category)}>
                    <img
                      src={
                        pathname.startsWith("/greetings")
                          ? `https://cdn.workmob.com/stories_workmob/images/greetings_category/${category.category}.png`
                          : ` https://cdn.workmob.com/stories_workmob/images/category-bg/${category.category.toLowerCase()}.png`
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
      ) : (
        <div className="no-category">No Category Available.</div>
      )}
    </>
  );
};

export default Categorypage;
