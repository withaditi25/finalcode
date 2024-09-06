import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { Link, useLocation } from "react-router-dom";

const GreetingsFooterScroller = ({
  isScrollDown,
  categoryList,
  setActiveClass,
  activeClass,
}) => {
  const { pathname } = useLocation();
  const categoryName = pathname.split("/").slice(2);


  return (
    <>
      {pathname === `/greetings/${categoryName[0]}` ||
      pathname === `/gyan/${categoryName[0]}` ||
      pathname === `/motivation/${categoryName[0]}` ? (
        <div className={"small-fixed-section fixed-bottom"}>
          <div
            className={
              "small-fixed-section-container" +
              (isScrollDown ? " container-animate-footer" : "")
            }
          >
            <ScrollContainer className="scroll-container fixed-container-child">
              {[...categoryList]
                .reverse()
                .slice(0, 4)
                .map((category, index) => {
                  return (
                    <Link
                      key={index}
                      className={activeClass === index ? "text-red" : ""}
                      to={
                        pathname.startsWith("/greetings")
                          ? `/greetings/${category.category}`
                          : pathname.startsWith("/gyan")
                          ? `/gyan/${category.category}`
                          : `/motivation/${category.category}`
                      }
                      onClick={() => {
                        setActiveClass(index);
                        sessionStorage.setItem("checkPath", 0);
                      }}
                    >
                      <img
                        className={
                          activeClass === index
                            ? "text-red-image"
                            : "text-red-image-opacity"
                        }
                        alt={category.category}
                        src={
                          pathname === `/greetings/${categoryName[0]}`
                            ? `https://cdn.workmob.com/stories_workmob/images/greetings_category/${category.category}.png`
                            : `https://cdn.workmob.com/stories_workmob/images/category-bg/${category.category.toLowerCase()}.png`
                        }
                      />
                    </Link>
                  );
                })}
              <Link
                to={
                  pathname.startsWith("/greetings")
                    ? `/greetings`
                    : pathname.startsWith("/gyan")
                    ? `/gyan`
                    : "/motivation"
                }
                className="more-cateogories"
              >
                <p>More</p>
              </Link>
            </ScrollContainer>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default GreetingsFooterScroller;
