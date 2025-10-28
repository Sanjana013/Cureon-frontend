import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useChat } from "../context/chatContext";
import {
  FaPlus,
  FaTrash,
  FaMoon,
  FaSun,
  FaCog,
  FaQuestionCircle,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  const {
    chats,
    activeChat,
    setActiveChat,
    createNewChat,
    deleteChat,
    isDarkMode,
    toggleDarkMode,
  } = useChat();
  const [hoveredChat, setHoveredChat] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="w-64 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-r border-gray-200 dark:border-gray-700 flex flex-col h-full transition-all duration-300">
      {/* Header with Close Button */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <Button
          onClick={createNewChat}
          className="flex-1 bg-[#293379] dark:bg-blue-700 hover:bg-[#3a4a9c] dark:hover:bg-blue-600 text-white transition-all duration-300 mr-2"
        >
          <FaPlus className="mr-2 h-4 w-4" />
          New Chat
        </Button>
        <Button
          onClick={onClose}
          variant="link"
          className="w-10 h-10 p-0  "
          aria-label="Close sidebar"
        >
          <FaTimes className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        </Button>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto p-2">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`relative p-3 rounded-lg mb-1 cursor-pointer transition-all duration-200 ${
              activeChat === chat.id
                ? "bg-[#293379] text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
            }`}
            onMouseEnter={() => setHoveredChat(chat.id)}
            onMouseLeave={() => setHoveredChat(null)}
            onClick={() => setActiveChat(chat.id)}
          >
            <div className="flex items-center justify-between">
              <span className="truncate text-sm font-medium">{chat.title}</span>

              {hoveredChat === chat.id && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteChat(chat.id);
                  }}
                  className="p-1 hover:bg-red-500 rounded transition-colors"
                >
                  <FaTrash className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section - Circular Icons */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-center gap-3">
          {/* Settings Icon */}
          <button
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-all duration-300 border border-gray-300 dark:border-gray-600"
            aria-label="Settings"
          >
            <FaCog className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Help Icon */}
          <button
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-all duration-300 border border-gray-300 dark:border-gray-600"
            aria-label="Help"
          >
            <FaQuestionCircle className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Theme Toggle - Circular */}
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-all duration-300 border border-gray-300 dark:border-gray-600"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? (
              <FaSun className="h-4 w-4 text-yellow-400" />
            ) : (
              <FaMoon className="h-4 w-4 text-[#293379]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
