import React from "react";
import { useChat } from "../context/chatContext";
import Message from "./chatMessage";
import ChatInput from "./chatInput";
import Lottie from "lottie-react";
import docbot from "@/assets/static/animabot.json";

const ChatArea = () => {
  const { chats, activeChat } = useChat();

  const currentChat = chats.find((chat) => chat.id === activeChat);
  const hasMessages = currentChat?.messages && currentChat.messages.length > 0;

  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      {/* Messages Container - Fixed height calculation */}
      <div className="flex-1 overflow-y-auto flex flex-col">
        {hasMessages ? (
          <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-start">
            {currentChat.messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}

            {/* Add some padding at the bottom for better spacing */}
            <div className="h-4"></div>
          </div>
        ) : (
          /* Welcome Animation - Made more compact */
          <div className="flex flex-col items-center justify-center h-full text-center p-6 max-w-2xl mx-auto">
            <div className="max-w-xs mb-6">
              <Lottie animationData={docbot} loop={true} />
            </div>
            <h2 className="text-2xl font-bold text-[#293379] dark:text-white mb-3">
              Hi I'm Curomate!
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-2">
              Your AI Health Companion
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
              Ask me anything about your health concerns, medications, or
              wellness journey.
            </p>
          </div>
        )}
      </div>

      {/* Chat Input - Fixed positioning */}
      <div className="flex-shrink-0">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatArea;
