import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Banner from "./components/banner.jsx";
import Services from "./components/services.jsx";
import Consultation from "./components/consultation.jsx";
import Appointment from "./components/appointment.jsx";
import Footer from "./components/footer.jsx";

function Dashboard() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Consultation />
      <Appointment />
      <Footer />
    </>
  );
}

export default Dashboard;
