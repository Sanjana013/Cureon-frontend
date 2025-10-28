import React, { createContext, useContext, useState, useEffect } from "react";

const ChatContext = createContext();

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState({ name: "John Doe" }); // Replace with actual user data

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // Chat management
  const createNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      title: "New Chat",
      messages: [],
      createdAt: new Date(),
    };
    setChats((prev) => [newChat, ...prev]);
    setActiveChat(newChat.id);
    return newChat.id;
  };

  const deleteChat = (chatId) => {
    setChats((prev) => prev.filter((chat) => chat.id !== chatId));
    if (activeChat === chatId) {
      setActiveChat(chats.length > 1 ? chats[1].id : null);
    }
  };

  const sendMessage = async (message) => {
    if (!activeChat) return;

    const userMessage = {
      id: Date.now().toString(),
      content: message,
      isUser: true,
      timestamp: new Date(),
    };

    // Update chat with user message
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChat
          ? { ...chat, messages: [...chat.messages, userMessage] }
          : chat
      )
    );

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        content:
          "I'm Curomate, your health companion! How can I assist you with your health concerns today?",
        isUser: false,
        timestamp: new Date(),
      };

      setChats((prev) =>
        prev.map((chat) =>
          chat.id === activeChat
            ? { ...chat, messages: [...chat.messages, aiMessage] }
            : chat
        )
      );
    }, 1000);
  };

  const value = {
    chats,
    activeChat,
    setActiveChat,
    createNewChat,
    deleteChat,
    sendMessage,
    isDarkMode,
    toggleDarkMode,
    user,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
