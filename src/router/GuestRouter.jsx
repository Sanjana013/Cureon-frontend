import { Routes, Route } from "react-router-dom";
import LandingPage from "@/modules/Guest/landingPage";
import LoginPage from "@/modules/Auth/components/loginPage";
import RegisterPage from "@/modules/Auth/components/registerPage";
import DoctorRegister from "@/modules/Auth/components/doctorRegister";

const GuestRouter = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/doctor-register" element={<DoctorRegister />} />
    </Routes>
  );
};

export default GuestRouter;
