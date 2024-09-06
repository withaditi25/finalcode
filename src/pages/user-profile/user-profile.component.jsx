import React, {useState, useEffect} from "react";
import NotFound from "../not-found/not-found.component";
import fetchAPI from "../../data/api";
import LoaderComponent from "../../components/common/Loader/Loader";
import {useParams} from 'react-router-dom';
import { Helmet } from "react-helmet";

const UserProfile = (props) => {
  const {lang, id} = useParams();
  const [slugOfId, setSlugOfId] = useState();
  const [loading, setLoading] = useState(true);
  const [documentTitle, setDocumentTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');

  const apiOn = (url) => {
    return new Promise((resolve) => {
      fetchAPI(url, (data) => {
        resolve(data);
      });
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const trendingTags = await apiOn('https://cdn.workmob.com/stories_workmob/promotional/tags_bg_10_june.json');
      const idLowerCase = id.toLowerCase();
      let matchFound = false;

      for (let tag of trendingTags) {
        if (tag.workmobUserName.toLowerCase() === idLowerCase) {
          const name = tag.workmobUserName;
          setSlugOfId(`/tags/${tag.tag_name.toLowerCase().replace(/ /g, '-')}`);
          setDocumentTitle(`Inspiring Stories of Professionals Grouped by Tags | ${name}`);
          matchFound = true;
          break;
        }
      }

      if (!matchFound) {
        const masterIndex = await apiOn('https://cdn.workmob.com/stories_workmob/config/MasterIndex.json');   
        for (let userObj of masterIndex) {
          const name = userObj.workmobUserName;
          const slug = userObj.slug;
          if (name && slug && name.toLowerCase() === idLowerCase) {
            setSlugOfId(`/${slug}`);
            const userDetail = await apiOn(`https://cdn.workmob.com/stories_workmob/config/story-detail/${slug}.json`);
            const {metaTitle, metaDesc} = userDetail;
            metaTitle && setDocumentTitle(metaTitle);
            metaDesc && setMetaDescription(metaDesc);
            break;
          }
        }
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (slugOfId) {
      window.location.href = `https://stories.workmob.com${lang ? '/hindi' : ''}${slugOfId}`;
    }
  }, [lang, slugOfId])
  if (loading) {
    return <LoaderComponent />;
  }
  if (!slugOfId) {
    return (
      <NotFound title="not found" />
    );
  }

  return (
    <>
      <Helmet>
        <title>Workmob - {documentTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
    </>
  );
};

export default UserProfile;
