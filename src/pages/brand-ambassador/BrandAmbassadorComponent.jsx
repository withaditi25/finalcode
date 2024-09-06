import { useEffect, useRef, useState } from "react";
import fetchAPI from "../../data/api";
import BrandAmbassadorCarousel from "../../components/brand-ambassador/BrandAmbassadorCarousel";
import Slider from "react-slick";
import styles from "./BrandAmbassadorComponent.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { logo } from "../../constants/requiredAssets";
import BrandAmbassadorFooter from "../../components/brand-ambassador/BrandAmbassadorFooter";
import Layout from "../../components/Layout/Layout";
import CloseBtn from "../../components/common/CloseBtn/CloseBtn";
import MemberPageSkeleton from "../../components/common/skeleton/memberPageSkeleton";
import Helmet from "react-helmet";

const BrandAmbassadorComponent = (props) => {
  const [data, setData] = useState([]);
  const [videoToPlay, setVideoToPlay] = useState();
  const [thumbIndex, setThumbIndex] = useState(0);
  const customeSlider = useRef();
  const mouseDownXRef = useRef();
  const mouseUpXRef = useRef();

  const apiOn = () => {
    return new Promise((resolve) => {
      const url = `https://cdn.workmob.com/stories_workmob/promotional/brand-ambassador/brand_ambassador.json`;
      fetchAPI(url, (callback) => {
        resolve(callback);
      });
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiOn();
      if (!!response) {
        setData(response["web"]);
        setVideoToPlay(response["web"][0]);
      }
    };
    fetchData();
  }, []);

  const sliderSettings = {
    slidesToShow: 3.5,
    slidesToScroll: 1,
    speed: 300,
    infinite: false,
    arrows: false,
    className: styles.slides,
  };

  const changeVideo = (e, el, index) => {
    // is slider is NOT scrolled or window is smaller
    if (Math.abs(mouseDownXRef.current - mouseUpXRef.current) <= 5 || window.innerWidth <= 768) {
      setVideoToPlay(el);
      setThumbIndex(index);
      window.scrollTo(0, 15);
    }
  };
  if (data.length < 1) {
    return <MemberPageSkeleton />;
  }

  return (
    <Layout>
      <div>
        <Helmet>
          <meta
            name="description"
            content="Become a Brand Ambassador. Inspire people to share their life, career and business experiences. Help spread this initiative and grow our community of Indian professionals from all fields."
          />
          <title>
            Workmob Brand Ambassadors: Support this movement & help our
            initiative
          </title>
        </Helmet>
        <CloseBtn locationType={"/"} {...props} />
        <div className={styles.logoContainer}>
          <img className={styles.brandLogo} src={logo} alt='logoicon' />
        </div>
        <h1 className={styles.pageTitle}>
          Brand Ambassadors #WorkmobBelievers
        </h1>
        <div className={styles.vidThumbContainer}>
          <div className={styles.bigVideo}>
            {videoToPlay && <BrandAmbassadorCarousel data={videoToPlay} />}
          </div>
          <section className={styles.thumbSection}>
            <div className={styles.thumbContainer}>
              {window.innerWidth > 768 ? (
                <div
                  onMouseDown={(event) => {
                    mouseDownXRef.current = event.clientX;
                  }}
                  onMouseUp={(event) => {
                    mouseUpXRef.current = event.clientX;
                  }}
                >
                  <Slider ref={customeSlider} {...sliderSettings}>
                    {data?.map((el, index) => (
                      <div
                        className={styles.imgContainer}
                        key={index}
                        onClick={(e) => changeVideo(e, el, index)}
                      >
                        <img
                          className={styles.thumbnail}
                          style={{
                            width: "100%",
                            border:
                              thumbIndex === index
                                ? "2px solid rgba(199,191,191,.7)"
                                : "",
                          }}
                          src={el.bgimage}
                          alt='icon'
                        />
                        <div className={styles.clickContainer}>
                          <i className={`${styles.playIcon} icon-play`} />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              ) : (
                <>
                  {data?.map((el, index) => (
                    <div
                      className={styles.imgContainer}
                      key={index}
                      onClick={(e) => changeVideo(e, el, index)}
                    >
                      <img
                        className={styles.thumbnail}
                        style={
                          thumbIndex === index
                            ? { border: "1px solid white" }
                            : { border: "none" }
                        }
                        src={el.bgimage}
                        alt='icon'
                      />
                    </div>
                  ))}
                </>
              )}
              <div></div>
            </div>
            <BrandAmbassadorFooter />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default BrandAmbassadorComponent;
