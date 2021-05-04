import React from 'react';

import './Message.css';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const inComingName = name.trim().toLowerCase();

  if (user === inComingName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div>
      <p className="message__name">{inComingName}</p>
      <p className="message__text">{text}</p>
    </div>
  ) : (
    <div className="message__container">
      <div className="message__box">
        <p className="message__text">{text}</p>
      </div>
      <p className="message__user">{user}</p>
    </div>
  );
};

export default Message;
