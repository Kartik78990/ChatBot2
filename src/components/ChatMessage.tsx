import React from 'react';
import chatbotimage from '../assets/chatbot.jpg';


interface ChatMessageProps {
  text: string;
  isUser: boolean;
  timestamp?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ text, isUser, timestamp }) => {
  return (
    <div className={`flex mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <img src={chatbotimage} alt="Chatbot" className="w-10 h-10 rounded-lg mr-4 object-contain"/>
      )}
      <div className="flex flex-col max-w-[70%]">
        <div 
          className={`p-4 rounded-2xl ${
            isUser 
              ? 'bg-purple-600 text-white ml-4' 
              : 'bg-[#2d2d50] text-white'
          }`}
        >
          <p className="text-base whitespace-pre-wrap">{text}</p>
        </div>
        {timestamp && (
          <span className="text-sm text-gray-500 mt-2 mx-2">{timestamp}</span>
        )}
      </div>
      {isUser && (
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 flex-shrink-0 ml-4 flex items-center justify-center">
          <span className="text-white">KP</span>
        </div>
      )}
    </div>
  );
};

export default ChatMessage