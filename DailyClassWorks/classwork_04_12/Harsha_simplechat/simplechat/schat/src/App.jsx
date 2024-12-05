import React, { useState } from "react";
import ChatList from "./components/ChatList";
import ChatInput from "./components/ChatInput";

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    const newMessage = { id: Date.now(), text };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="chat-app">
      <h1>Simple Chat App</h1>
      {messages.length === 0 ? (
        <p>No messages yet!</p>
      ) : (
        <ChatList messages={messages} />
      )}
      <ChatInput onSend={addMessage} />
    </div>
  );
}

export default App;
