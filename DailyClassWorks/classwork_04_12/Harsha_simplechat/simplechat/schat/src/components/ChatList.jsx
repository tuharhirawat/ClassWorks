import React from 'react';
import Message from './Message';

const ChatList = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.length === 0 ? (
        <p>No messages yet!</p> // Show this if no messages
      ) : (
        messages.map((message) => <Message key={message.id} text={message.text} />) // Render each message
      )}
    </div>
  );
};

export default ChatList;

