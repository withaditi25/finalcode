import React from 'react';
import PropTypes from 'prop-types';

import './Layout.scss';
import './Fontello.scss';

 const Layout = ({ children }) => {
  return <> {children}</>
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
