import React from "react";

const Message = ({ message }) => {
  return (
    <div
      className={`flex gap-3 p-3 ${
        message.isUser
          ? "bg-white dark:bg-gray-800"
          : "bg-gray-50 dark:bg-gray-900/50"
      } transition-colors`}
    >
      {/* Avatar - Smaller */}
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${
          message.isUser ? "bg-[#fa003f]" : "bg-[#293379]"
        }`}
      >
        {message.isUser ? "U" : "C"}
      </div>

      {/* Message Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-gray-900 dark:text-white text-sm">
            {message.isUser ? "You" : "Curomate"}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap text-sm">
          {message.content}
        </p>
      </div>
    </div>
  );
};

export default Message;
