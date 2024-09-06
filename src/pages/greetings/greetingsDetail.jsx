import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import GreetingVideoComponent from "../../components/greetingVideo/greetingVideoComponent";
import NotFound from "../not-found/not-found.component";
import fetchAPI from "../../data/api";
import SkeletonGreetingVideo from "../../components/common/skeleton/GreetingVideo";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const GreetingDetail = (props) => {
  const { pathname } = useLocation();
  const { userId } = props.match.params;
  const [userData, setUserData] = useState(null);
  const [storySlug, setStorySlug] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  let videoObjUrl;
  let documentTitle = userData?.metaTitle || "";
  let metaDescription = userData?.metaDesc || "";

  if (pathname.startsWith("/greetings")) {
    videoObjUrl = `https://cdn.workmob.com/stories_workmob/config/namaste-story-detail/${userId}.json`;
  } else if (pathname.startsWith("/gyan")) {
    videoObjUrl = `https://cdn.workmob.com/stories_workmob/config/gyan-story-detail/${userId}.json`;
  } else if (pathname.startsWith("/motivation")) {
    videoObjUrl = `https://cdn.workmob.com/stories_workmob/config/hope-story-detail/${userId}.json`;
  }

  const apiOn = (url) => {
    return new Promise((resolve) => {
      fetchAPI(url, (callback) => {
        resolve(callback);
      });
    });
  };

  useEffect(() => {
    sessionStorage.setItem("checkPath", 1);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiOn(videoObjUrl);
      if(response){
        const { instructor } = response;
        setUserData(response);
        setIsLoading(false);
        if (!instructor) return;
        const userJson = await apiOn(
          `https://cdn.workmob.com/stories_workmob/config/instructor/${instructor}.json`
        );
        const slug = userJson?.story[0]?.slug;
        if (slug) {
          setStorySlug(slug);
        }else{
          return
        }
      }

    };

    fetchData();
  }, [userId]);

  if (isLoading) {
    return <SkeletonGreetingVideo />;
  }

  return (
    <Layout>
      <Helmet>
        <meta name="description" content={metaDescription} />
        <title>{documentTitle}</title>
      </Helmet>
      {userData ? (
        <GreetingVideoComponent
          userData={userData}
          loading={isLoading}
          storySlug={storySlug}
          {...props}
        />
      ) : (
        <NotFound title="not found" />
      )}
    </Layout>
  );
};

export default GreetingDetail;
