// LoadingIcon.js

import React from 'react';
import './LoadingIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingIcon = () => {
  return (
    <div className="cards__item loading-icon">
      <div className="cards__item__link loading-icon-link">
        <div className="loading-icon-pic-wrap">
          <FontAwesomeIcon icon={faSpinner} spin size="1x" />
        </div>
        <div className="cards__item__info loading-icon-info">
          <p className="cards__item__text loading-icon-text">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingIcon;

