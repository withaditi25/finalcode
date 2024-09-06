import React,{useEffect} from 'react';
import Layout from '../../components/Layout';
import UserVideoComponent from '../../components/UserVideo/UserVideo';
import NotFound from '../not-found/not-found.component';
import fetchAPI from '../../data/api';
import LoaderComponent from "../../components/common/Loader/Loader";

const getStorySlugType = (storyType) => {
  let storySlugType = 'story-detail';
  switch (storyType) {
    case 'hope':
      storySlugType = 'hope-story-detail';
      break;
    case 'gyan':
      storySlugType = 'gyan-story-detail';
      break;
    case 'greetings':
      storySlugType = 'namaste-story-detail';
      break;
    default:
      storySlugType = 'story-detail';
  }
  return storySlugType;
};

const  UserProfileVideo  = (props) => {
  const { storyType, id } = props.match.params;
  const [userData, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  const apiOn = () => {
    return new Promise(resolve => {
      const storySlugType = getStorySlugType(storyType);
      const url = `https://cdn.workmob.com/stories_workmob/config/${storySlugType}/${id}.json`;
      fetchAPI(url, callback => {
        resolve(callback);
      });
    });
  }

  useEffect(()=>{
    const fetchData = async () => {
        const response = await apiOn();
        setData(response)        
        setLoading(false)
    }
    fetchData();
  },[props.match.params])

  if(loading){
    return <LoaderComponent />
  }

  return(
    <Layout>
      {
        userData 
        ? 
        <UserVideoComponent userData={userData} {...props} />
        : 
        <NotFound title="not found" />
      }
    </Layout>
  )

}

export default UserProfileVideo;

