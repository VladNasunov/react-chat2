import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');

  return (
    <div className="joinOuterContainer">
      <input
        placeholder="Name"
        className="joinInput"
        type="text"
        onChange={(event) => setName(event.target.value)}
      />
      <Link to={`/room?name=${name}`}>
        <button className="join__name" type="submit">
          Sign In
        </button>
      </Link>
    </div>
  );
}
