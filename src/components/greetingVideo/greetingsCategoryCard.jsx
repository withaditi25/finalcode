import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const GreetingsCategoryCard = ({ categoryList, filteredData }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  const handleCategory = () => {
    if (pathname === "/motivation") {
      history.push("/motivationcategory");
    } else if (pathname === "/greetings") {
      history.push("/greetingscategory");
    } else if (pathname === "/gyan") {
      history.push("/gyancategory");
    }
  };

  return (
    <>
      {(pathname == "/greetings" ||
        pathname == "/gyan" ||
        pathname == "/motivation") &&
      categoryList &&
      categoryList.length > 0 ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1 className="greeting-header-cat">CATEGORY</h1>
            <i
              onClick={handleCategory}
              style={{ fontSize: "0.8rem", cursor: "pointer" }}
              className="icon icon-right-arrow greeting-header-cat"
            />
          </div>
          <div className="noScrollbar categories-gridContainer">
            <div
              className={`categories-topRow categories-categoryTopRow ${
                filteredData.length < 4 ? " filteredDataItem" : " "
              }`}
            >
              {filteredData.length > 0
                ? [...filteredData]
                    .reverse()
                    .slice(0, 6)
                    .map((categories, index) => {
                      return (
                        <Link
                          className="categories-locationLink"
                          key={index}
                          to={
                            pathname.startsWith("/greetings")
                              ? `/greetings/${categories.category}`
                              : pathname.startsWith("/gyan")
                              ? `/gyan/${categories.category}`
                              : `/motivation/${categories.category}`
                          }
                        >
                          <img
                            className="categories-optionsImage"
                            src={
                              pathname === "/greetings"
                                ? `https://cdn.workmob.com/stories_workmob/images/greetings_category/${categories.category}.png`
                                : ` https://cdn.workmob.com/stories_workmob/images/category-bg/${categories.category.toLowerCase()}.png`
                            }
                            alt={`${categories.category} imageIcon`}
                          />
                        </Link>
                      );
                    })
                : null}
            </div>
          </div>

          <div className={`categories-topRow categories-categoryTopRow`}>
            {filteredData.length > 12
              ? [...filteredData]
                  .reverse()
                  .slice(6, 12)
                  .map((categories, index) => {
                    return (
                      <Link
                        className="categories-locationLink"
                        key={index}
                        to={
                          pathname.startsWith("/greetings")
                            ? `/greetings/${categories.category}`
                            : pathname.startsWith("/gyan")
                            ? `/gyan/${categories.category}`
                            : `/motivation/${categories.category}`
                        }
                      >
                        <img
                          className="categories-optionsImage"
                          src={
                            pathname === "/greetings"
                              ? `https://cdn.workmob.com/stories_workmob/images/greetings_category/${categories.category}.png`
                              : ` https://cdn.workmob.com/stories_workmob/images/category-bg/${categories.category.toLowerCase()}.png`
                          }
                          alt={`${categories.category} imageIcon`}
                        />
                      </Link>
                    );
                  })
              : null}
          </div>
        </>
      ) : null}
    </>
  );
};

export default GreetingsCategoryCard;
