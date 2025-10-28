import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useChat } from "../context/chatContext";
import { FaPaperPlane } from "react-icons/fa";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <div className="flex-shrink-0 p-3 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-4xl mx-auto">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message Curomate..."
          className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#293379] dark:focus:ring-blue-500 transition-all text-sm"
        />
        <Button
          type="submit"
          className="bg-[#293379] dark:bg-blue-700 hover:bg-[#3a4a9c] dark:hover:bg-blue-600 text-white px-3 transition-all duration-300"
          disabled={!message.trim()}
        >
          <FaPaperPlane className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
