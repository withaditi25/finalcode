import React, {useEffect} from "react";
import PropTypes from "prop-types";
import HomePageDesktop from "./HomePageDesktop";

const HomePageComponent = ({ data }) => {
  useEffect(() => {
    let isThrottle = false;
    let scroll = 0;
    function storeScroll() {
      if (isThrottle) return;
      isThrottle = true;
      setTimeout(() => {
        scroll = window.scrollY;
        isThrottle = false;
      }, 200);
    }
    window.scroll(0, sessionStorage.getItem('scroll') || 0);
    document.addEventListener('scroll', storeScroll);
    return () => {
      sessionStorage.setItem('scroll', scroll);
      document.removeEventListener('scroll', storeScroll)
    };
  }, []);

  return (
    <div>
      <HomePageDesktop data={data.web} />
    </div>
  );
};

HomePageComponent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePageComponent;
