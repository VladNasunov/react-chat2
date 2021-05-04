import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getLocation } from '../../utils/utils';

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    const { name } = getLocation(window.location);
    setName(name);
  }, []);

  return (
    <div className="joinOuterContainer">
      <input
        placeholder="Room"
        className="joinInput"
        type="text"
        onChange={(event) => setRoom(event.target.value)}
      />
      <Link to={`/chat?name=${name}&room=${room}`}>
        <button className="join__name" type="submit">
          Sign
        </button>
      </Link>
    </div>
  );
}
