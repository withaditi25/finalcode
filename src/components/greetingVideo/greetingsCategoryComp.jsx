import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const GreetingsCategoryComp = ({
  categoryList,
  updateSearchString,
  searchString,
  filteredData,
  widthCheck,
  locationComp,
  filteredLocationItem,
  locationData,
}) => {
  const { pathname } = useLocation();

  useEffect(()=>{
    return () =>{
      updateSearchString('')
    }
  },[])

  return (
    <>
      {(pathname == "/greetings" || pathname == "/gyan" || pathname.includes("/greetingsinsights") ||
        pathname.includes("/gyaninsights")) && (
        <div className="categories-main-search">
          <div className="categories-search">
            <i className="categories-searchIcon bi bi-search"></i>
            <input
              className="categories-optionsInput"
              placeholder={locationComp ? "Search City" : "Search Category"}
              onChange={(e) => updateSearchString(e.target.value)}
              value={searchString}
            />
          </div>
        </div>
      )}

      {(pathname == "/greetings" || pathname == "/gyan" || pathname.includes("/greetingsinsights") ||
        pathname.includes("/gyaninsights")) &&
      (categoryList || locationData) &&
      (categoryList.length > 0 || locationData.length > 0) ? (
        <div className="noScrollbar categories-gridContainer">
          <div
            className={`categories-topRow categories-categoryTopRow ${
              searchString.length === 0 && !widthCheck ? "" : "d-none"
            }`}
          >
            {(locationComp ? [...filteredLocationItem] : [...filteredData])
              .reverse()
              .slice(0, 5)
              .map((category, index) => {
                return (
                  <Link
                    className={
                      locationComp
                        ? "categories-locationLink categories-locationLink-new"
                        : "categories-locationLink"
                    }
                    key={index}
                    to={
                      !locationComp
                        ? pathname.startsWith("/greetings")
                          ? `/greetings/${category.category}`
                          : `/gyan/${category.category}`
                        : "#"
                    }
                  >
                    <img
                      className="categories-optionsImage"
                      src={
                        (pathname === "/greetings" || pathname.includes("/greetingsinsights"))
                          ? locationComp
                            ? `https://cdn.workmob.com/stories_workmob/images/locations/${category.id.toLowerCase()}.png`
                            : `https://cdn.workmob.com/stories_workmob/images/greetings_category/${category.category}.png`
                          : locationComp
                          ? `https://cdn.workmob.com/stories_workmob/images/locations/${category.id.toLowerCase()}.png`
                          : ` https://cdn.workmob.com/stories_workmob/images/category-bg/${category.category}.png`
                      }
                      alt={
                        locationComp
                          ? `${category.location} imageIcon`
                          : `${category.category} imageIcon`
                      }
                    />
                  </Link>
                );
              })}
          </div>
          <div className="greeting-category">
            {filteredData.length > 0 || filteredLocationItem.length > 0 ? (
              (locationComp ? [...filteredLocationItem] : [...filteredData])
                .reverse()
                .slice(widthCheck || searchString.length != 0 ? 0 : 5)
                .map((category, index) => (
                  <Link
                    className=""
                    key={index}
                    to={
                      !locationComp
                        ? pathname.startsWith("/greetings")
                          ? `/greetings/${category.category}`
                          : `/gyan/${category.category}`
                        : "#"
                    }
                  >
                    <img
                      className=""
                      src={
                        (pathname === "/greetings" || pathname.includes("/greetingsinsights"))
                          ? locationComp
                            ? `https://cdn.workmob.com/stories_workmob/images/locations/${category.id.toLowerCase()}.png`
                            : `https://cdn.workmob.com/stories_workmob/images/greetings_category/${category.category}.png`
                          : locationComp
                          ? `https://cdn.workmob.com/stories_workmob/images/locations/${category.id.toLowerCase()}.png`
                          : ` https://cdn.workmob.com/stories_workmob/images/category-bg/${category.category}.png`
                      }
                      alt={
                        locationComp
                          ? `${category.location} imageIcon`
                          : `${category.category} imageIcon`
                      }
                    />
                  </Link>
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

export default GreetingsCategoryComp;
