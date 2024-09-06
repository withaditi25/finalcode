import React,{useEffect} from "react";
import fetchAPI from "../../data/api";
import Layout from "../../components/Layout";
import HomePageComponent from "../../components/homepage/HomePage";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const [data, setData] = React.useState();

  const apiOn = () => {
    return new Promise((resolve) => {
      const url = `https://cdn.workmob.com/stories_workmob/web_home/about-new-08-april.json`;
      fetchAPI(url, (callback) => {
        resolve(callback);
      });
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiOn();
      if (!!response) {
        setData(response);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Banao Apni Pehchan - one digital page, many personal branding videos. An initiative to share your life experiences, career journey, and the real story behind your products & services through the power of video."
        />
        <title>Workmob - Bharat ki Apni Professional Community Ki Awaaz.</title>
      </Helmet>
      <HomePageComponent data={data} />
    </Layout>
  );
};

export default HomePage;
