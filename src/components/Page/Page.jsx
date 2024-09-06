import React from 'react';
import PropTypes from 'prop-types';
import './Page.css';
import CloseBtn from '../common/CloseBtn/CloseBtn'

const Page = (props) => {
  return (
    <>
      <CloseBtn {...props} />
      {props.children}
    </> 
  );
}

export default Page

Page.propTypes = {
  props: PropTypes.object.isRequired,
};
