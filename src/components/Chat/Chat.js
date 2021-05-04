import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import ChatInfo from '../ChatInfo/ChatInfo';
import ChatInput from '../ChatInput/ChatInput';

import { getLocation } from '../../utils/utils';

import './Chat.css';

const URL = 'localhost:5000';

let socket;

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = getLocation(window.location);

    socket = io(URL, { transports: ['websocket', 'polling', 'flashsocket'] });

    setRoom(room);
    setName(name);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, []);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <ChatInfo room={room} />
        <Messages messages={messages} name={name} />
        <ChatInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
