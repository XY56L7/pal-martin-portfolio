import React, { useState } from 'react';
import Head from 'next/head';
import ChatbotIcon from './ChatbotIcon';
import './ChatbotComponent.css';
import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';


const ChatbotComponent = () => {
  const [chatHistory,setChatHistory] = useState([]);

  return (
    <>

      <div className="container">
        <div className="chatbot-popup">
          <div className="chat-header">
            <div className="header-info">
              <ChatbotIcon />
              <h2 className="logo text">Chatbot</h2>
            </div>
            <button className="material-symbols-outlined">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>            </button>
          </div>

          <div className="chat-body">
            <div className="message bot-message">
              <ChatbotIcon />
              <p className="message-text">
                Hey there <br /> How can I help you?
              </p>
            </div>

            {chatHistory.map((chat,index) => (
              <ChatMessage key={index} chat={chat} />
            ))}

            
          </div>

          <div className="chat-footer">
            <ChatForm  setChatHistory={setChatHistory} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatbotComponent;
