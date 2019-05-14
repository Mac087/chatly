import React, { useState } from 'react';

function Chatroom({ username, avatar, messages, handleNewMsg }) {

  const [newMsg, updateMsg] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (newMsg === '') return;
    const msgObj = {
      id: messages.length,
      username,
      avatar,
      time: Date.now().toLocaleString(),
      body: newMsg
    };
    handleNewMsg(newMsg);
  };

  const displayMessages = (
    <ul id="messages" className="col-sm-12">
      {messages.map(msg =>
        <li>
          <div className="user-image">
            <img alt="User Icon" src={msg.avatar} />
          </div>
          <div className="user-message ml-2">
            <div className="user-name-time font-weight-bold">{msg.username} <span>{msg.time}</span></div>
            <div className="message-text">{msg.body}</div>
          </div>
        </li>
      )}
    </ul>
  );

  return (
    <div className="col-9 message-form">
      <div className="room-header row mb-4">
        <div className="col-3 d-inline-block my-auto"><span className="curr-room-text">General Channel</span> <span className="curr-room-num-users">Users 3 <i className="fas fa-user"></i></span></div>
      </div>
      <div>
        {displayMessages}
      </div>
      <form id="user-input" onSubmit={handleSubmit}>
        <div className="col-12">
          <input id="user-message" className="form-control" type="text" value={newMsg} onChange={(e) => updateMsg(e.target.value)} placeholder="Enter your message" />
        </div>
      </form>
    </div>
  );
}

export default Chatroom;