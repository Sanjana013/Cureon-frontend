import React, { useState } from "react";
import { ChatProvider, useChat } from "./context/chatContext";
import Sidebar from "./components/sidebar";
import ChatArea from "./components/chatArea";
import { FaUserCircle, FaBars } from "react-icons/fa";

// Main Content Component
const ChatContent = () => {
  const { user } = useChat();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Top Navigation Bar */}
        <nav className="flex-shrink-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 px-6 py-3 flex justify-between items-center shadow-sm transition-colors">
          <div className="flex items-center gap-4">
            {/* Hamburger Button to open sidebar */}
            {!isSidebarOpen && (
              <button
                onClick={toggleSidebar}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-all duration-300 border border-gray-300 dark:border-gray-600"
                aria-label="Open sidebar"
              >
                <FaBars className="h-4 w-4 text-gray-600 dark:text-gray-300" />
              </button>
            )}
            <h1 className="text-xl font-bold text-[#293379] dark:text-blue-300">
              Curomate
            </h1>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">
              {user.name}
            </span>
            <FaUserCircle className="h-6 w-6 text-[#293379] dark:text-blue-300" />
          </div>
        </nav>

        {/* Chat Area */}
        <ChatArea />
      </div>
    </div>
  );
};

// Main Chat Page with Provider
const ChatPage = () => {
  return (
    <ChatProvider>
      <ChatContent />
    </ChatProvider>
  );
};

export default ChatPage;
