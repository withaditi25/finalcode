import React from 'react';
import PropTypes from 'prop-types';
import SweetAlert from 'react-bootstrap-sweetalert';
import  './Modal.css';
import appStore from './appstore.png';
import playStore from './playstore.png';
import CloseBtn from '../CloseBtn/CloseBtn';
import {APPLE_LINK, ANDROID_LINK } from '../../../constants/variable';

export default function Modal({ showAlert, toggleAlert }) {
  const closeModal = () => {
    toggleAlert(false);
  };
  
  return (
    <SweetAlert
      onConfirm={()=>{}}
      show={showAlert}
      showCancel={false}
      showConfirm={false}
      style={{ padding: 0, borderRadius: 15 }}
      onCancel={closeModal}
      title=""
      showCloseButton
    >
      <div className='modalContainer'>
        <CloseBtn handleClick={closeModal} />
        <p>Download App</p>
        <div className='dFlex'>
          <a
            onClick={closeModal}
            target="_blank"
            href={ANDROID_LINK}
            rel="noreferrer"
          >
            <img width="100" src={playStore} alt="playstore" />
          </a>
          <a
            onClick={closeModal}
            target="_blank"
            href={APPLE_LINK}
            rel="noreferrer"
          >
            <img width="100" src={appStore} alt="appstore" />
          </a>
        </div>
      </div>
    </SweetAlert>
  );
}

Modal.propTypes = {
  showAlert: PropTypes.bool.isRequired,
  toggleAlert: PropTypes.func.isRequired,
};
