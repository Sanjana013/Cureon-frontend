import { Routes, Route } from "react-router-dom";
import Dashboard from "@/modules/Dashboard/dashboard";
import ChatPage from "@/modules/AuthPages/ChatPage/chatPage";

const AuthRouter = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
};

export default AuthRouter;
