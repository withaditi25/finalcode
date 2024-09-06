import React from "react";
import Layout from "../../components/Layout";
import AboutPageComponent from "../../components/aboutpage/AboutPage";
import Helmet from "react-helmet";
const AboutPage = (props) => {
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Learn about Workmob, the platform for professionals to tell their life stories, build meaningful relationships and to inspire & learn."
        />
        <title>
          About Workmob, the trusted professional community to share life
          stories, inspire, learn.
        </title>
      </Helmet>
      <AboutPageComponent {...props} />
    </Layout>
  );
};

export default AboutPage;
