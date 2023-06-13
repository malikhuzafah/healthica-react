// src/components/Chat.js
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

const Chat = ({ user }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Join the chat room when the component mounts
    socket.emit("join", "645ea90c19622ea2c9a1a987");
    // socket.emit("join", user.id);

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, [user]);

  useEffect(() => {
    // Listen for incoming messages
    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off("message");
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();

    // Send the message to the server
    socket.emit("message", { senderId: user.id, message });

    // Reset the input field
    setMessage("");
  };

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}</strong>: {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
