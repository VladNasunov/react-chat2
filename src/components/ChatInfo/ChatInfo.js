import React from 'react';

import './ChatInfo.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <button> close</button>
      </a>
    </div>
  </div>
);

export default InfoBar;
