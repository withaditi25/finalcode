import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logo } from "../../constants/requiredAssets";
import './NotFound.css';

const NotFoundComponent = ({ title }) => {
  return (
    <div className={"root"}>
      <div className='NotFound-container'>
        <div className="text-center">
          <img src={logo} alt="logo" />
        </div>
        <div className='NotFound-content'>
          <h1 className="not-found-title">{title}</h1>
          <Link to="/" className="not-found-title">Go to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundComponent;

NotFoundComponent.propTypes = {
  title: PropTypes.string.isRequired,
};
