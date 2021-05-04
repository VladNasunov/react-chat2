import React from 'react';

import Chat from './components/Chat/Chat';
import JoinWithName from './components/Join/JoinWithName';
import JoinWithRoom from './components/Join/JoinWithRoom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={JoinWithName} />
      <Route path="/room" exact component={JoinWithRoom} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;
