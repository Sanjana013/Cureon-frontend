import { useState, useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import bgImg from "@/assets/static/bg-image.png";
import feature1Img from "@/assets/static/feature1.png";
import feature2Img from "@/assets/static/feature2.jpg";
import feature3Img from "@/assets/static/feature3.png";
import feature4Img from "@/assets/static/feature4.jpg";
import promo from "@/assets/static/promovid.mp4";
import { motion, useAnimation, useInView } from "framer-motion";
import Lottie from "lottie-react";
import docbot from "@/assets/static/Doctor.json";

import { FaRegHandPaper, FaMoon, FaSun, FaTimes } from "react-icons/fa";

export default function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const messages = [
    "Hi, I'm Curomate",
    "I help you with smart solutions",
    "Let's make your day productive!",
    "Ready to explore?",
  ];

  const [msgIndex, setMsgIndex] = useState(0);

  // Debug effect
  useEffect(() => {
    console.log("Current dark mode state:", isDarkMode);
    console.log("HTML classes:", document.documentElement.classList);
    console.log("Local storage theme:", localStorage.getItem("theme"));
  }, [isDarkMode]);

  // Initialize dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      // Don't set localStorage here to avoid overriding user preference
    }
  }, []);

  const toggleDarkMode = () => {
    console.log("Toggle clicked, current mode:", isDarkMode);

    if (isDarkMode) {
      // Switching to light mode
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("Switched to light mode");
    } else {
      // Switching to dark mode
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("Switched to dark mode");
    }
  };

  // Add video handler functions
  const openVideo = () => {
    setShowVideo(true);
    // Prevent body scroll when video is open
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setShowVideo(false);
    // Restore body scroll
    document.body.style.overflow = "unset";
  };

  // Close video on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && showVideo) {
        closeVideo();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showVideo]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const medicationRef = useRef(null);
  const appointmentsRef = useRef(null);
  const trackerRef = useRef(null);
  const additionalRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      {/* Video Modal - ADD THIS */}
      {showVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeVideo}
        >
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full p-2"
            >
              <FaTimes className="h-8 w-6" />
            </button>

            {/* Video Player */}
            <video
              className="w-full h-full object-contain rounded-lg"
              controls
              autoPlay
              muted
            >
              <source src={promo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {!showVideo && (
        <nav className="flex justify-between items-center p-6 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md sticky top-0 z-50 shadow-xl transition-colors">
          {/* Logo */}
          <h1 className="text-3xl font-extrabold text-[#293379] dark:text-blue-300 tracking-wide hover:cursor-default">
            Cureon
          </h1>

          {/* Nav Links */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="font-medium text-[#293379] dark:text-blue-200 hover:text-[#fa003f] dark:hover:text-blue-100 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="https://appinventiv.com/blog/ai-chatbot-in-healthcare/"
              className="font-medium text-[#293379] dark:text-blue-200 hover:text-[#fa003f] dark:hover:text-blue-100 transition-all duration-300"
            >
              Blog
            </Link>

            {/* Explore Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-[#293379] dark:bg-blue-700 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-[#3a4a9c] dark:hover:bg-blue-600 transition-all duration-300">
                  Explore
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-0 dark:border-gray-700 shadow-2xl rounded-xl p-2 w-60">
                {[
                  { title: "Quick Consultations", ref: medicationRef },
                  {
                    title: "Instant Doctor Appointments",
                    ref: appointmentsRef,
                  },
                  { title: "Medication Reminders", ref: trackerRef },
                  { title: "Additional Features", ref: additionalRef },
                ].map((item, idx) => (
                  <DropdownMenuItem
                    key={idx}
                    className="rounded-lg hover:bg-gradient-to-r hover:from-[#3b82f6] hover:to-[#4e46e571] dark:hover:from-blue-600 dark:hover:to-purple-600 text-gray-900 dark:text-gray-100 transition-all duration-300 cursor-pointer"
                    onClick={() => scrollToSection(item.ref)}
                  >
                    {item.title}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login Button */}
            <Link to="/login">
              <Button className="bg-[#016b61] dark:bg-[#018377] text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-[#015951] dark:hover:bg-[#016b61] transition-all duration-300">
                Login
              </Button>
            </Link>

            {/* Dark Mode Toggle - Simplified */}
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-700/80 flex items-center justify-center transition-all duration-300 border border-gray-300 dark:border-gray-600"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <FaSun className="h-5 w-5 text-yellow-400" />
              ) : (
                <FaMoon className="h-5 w-5 text-[#293379]" />
              )}
            </button>
          </div>
        </nav>
      )}

      {/* Body */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[85vh] bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-10 md:px-16 py-10 md:py-0 transition-colors">
        {/* Left: Hero Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-8">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#293379] dark:text-white leading-tight">
            Your Health Companion
          </h2>
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 max-w-lg mx-auto md:mx-0">
            Track your health, book appointments, and stay in control of your
            wellness journey — all with a touch of AI care.
          </p>
          <div>
            {/* <Button
              onClick={() => window.open(promo, "_blank")}
              className="px-10 py-4 text-lg bg-[#293379] dark:bg-blue-700 text-white hover:scale-105 hover:bg-[#3a4a9c] dark:hover:bg-blue-600 transition-all duration-300 shadow-md"
            >
              <i class="fa-solid fa-circle-play"></i>
              &nbsp; Know Us
            </Button> */}
            <Button
              onClick={openVideo}
              className="px-10 py-4 text-lg bg-[#016b61] dark:bg-[#018377] text-white hover:scale-105 hover:bg-[#015951] dark:hover:bg-[#016b61] transition-all duration-300 shadow-md"
            >
              <i className="fa-solid fa-circle-play"></i>
              &nbsp; Know Us
            </Button>
          </div>
        </div>
        {/* Right: Curomate Animation */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative">
          {/* Speech Bubble */}
          <div className="absolute top-4 md:top-4 bg-white dark:bg-gray-800 text-[#293379] dark:text-blue-200 px-5 py-2 rounded-full shadow-lg text-sm font-semibold flex items-center gap-2 animate-bounce">
            <div className="flex items-center gap-2 leading-none">
              <FaRegHandPaper className="text-[rgb(30,48,80)] dark:text-blue-200" />
              <span>
                {messages[msgIndex].includes("Curomate") ? (
                  <>
                    Hi, I'm{" "}
                    <span className="font-bold text-[#fa003f] dark:text-red-400">
                      Curomate
                    </span>
                  </>
                ) : (
                  messages[msgIndex]
                )}
              </span>
            </div>
          </div>

          {/* Animation */}
          <div className="max-w-xs md:max-w-sm lg:max-w-md mt-6 md:mt-10">
            <Lottie animationData={docbot} loop={true} />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-32 space-y-24 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
        <FeatureCard
          refProp={medicationRef}
          title="Quick Consultations"
          text="Get instant consultations with licensed doctors online. Avoid long queues and manage your health efficiently from the comfort of your home."
          imgSrc={feature1Img}
          reverse={false}
        />
        <FeatureCard
          refProp={appointmentsRef}
          title="Instant Doctor Appointments"
          text="Schedule appointments instantly with verified professionals. Receive notifications and reminders so you never miss a session."
          imgSrc={feature2Img}
          reverse={true}
        />
        <FeatureCard
          refProp={trackerRef}
          title="Medication Reminders"
          text="Set up personalized medication schedules. Get automatic alerts and track your daily doses to ensure a healthy routine."
          imgSrc={feature3Img}
          reverse={false}
        />
        <FeatureCard
          refProp={additionalRef}
          title="Happy Healthing"
          text="Monitor your symptoms, track vitals, maintain health logs, and explore extra wellness tools tailored to your needs."
          imgSrc={feature4Img}
          reverse={true}
        />
      </section>

      {/* Footer */}
      <footer className="bg-[#293379] dark:bg-gray-900 backdrop-blur-md text-white/90 p-8 mt-auto shadow-inner transition-colors">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section — Brand + Motto */}
          <div>
            <h2 className="text-xl font-bold mb-2">Cureon</h2>
            <p className="text-white/70 dark:text-gray-300 text-sm">
              Empowering your medical health journey with care, technology, and
              compassion, one step at-a-time.
            </p>
            <p className="text-white/60 dark:text-gray-400 text-xs mt-3">
              Designed with{" "}
              <i className="fa-solid fa-heart text-[#fa003f] dark:text-red-400"></i>{" "}
              for your health
            </p>
          </div>

          {/* Right Section — Contact + Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm text-white/80 dark:text-gray-300">
              <i className="fa-solid fa-mobile"></i> +91 00000 00000
            </p>
            <p className="text-sm text-white/80 dark:text-gray-300">
              <i className="fa-solid fa-envelope"></i> support@cureon.com
            </p>
            <p className="text-sm text-white/80 dark:text-gray-300">
              <i className="fa-solid fa-location-dot"></i> 123 Health Street,
              Kolkata, India
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-3 mt-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 dark:bg-gray-700 flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 dark:bg-gray-700 flex items-center justify-center hover:bg-black transition-all duration-300"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 dark:bg-gray-700 flex items-center justify-center hover:bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] to-[#d62976] transition-all duration-300"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Policy Links Row */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80 dark:text-gray-300 mt-10">
          <a
            href="#"
            className="hover:text-[#fa003f] dark:hover:text-red-400 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-[#fa003f] dark:hover:text-red-400 transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-[#fa003f] dark:hover:text-red-400 transition-colors"
          >
            Cookie Policy
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 dark:border-gray-600 mt-1 pt-3 text-center text-white/70 dark:text-gray-400 text-xs">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">Cureon</span>. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

// // Feature Card Component with Dark Mode
// function FeatureCard({ title, text, imgSrc, reverse = false, refProp }) {
//   return (
//     <div
//       ref={refProp}
//       className={`flex flex-col md:flex-row items-center gap-10 p-6 md:p-10 ${
//         reverse ? "md:flex-row-reverse" : ""
//       }`}
//     >
//       <div className="w-full md:w-1/2 overflow-hidden">
//         <img
//           src={imgSrc}
//           alt={title}
//           className="w-full h-[350px] object-cover rounded-lg shadow-lg"
//         />
//       </div>

//       <div className="md:w-1/2 flex flex-col justify-center text-[#293379] dark:text-white">
//         <h3 className="text-4xl font-bold mb-4">{title}</h3>
//         <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
//           {text}
//         </p>
//       </div>
//     </div>
//   );
// }

function FeatureCard({ title, text, imgSrc, reverse = false, refProp }) {
  const localRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const node = localRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [controls]);

  const imageVariants = {
    hidden: { x: reverse ? 150 : -150, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { x: reverse ? -100 : 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div
      ref={(node) => {
        localRef.current = node;
        if (refProp) refProp.current = node;
      }}
      className={`flex flex-col md:flex-row items-center gap-10 p-6 md:p-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Animated image */}
      <motion.div
        className="w-full md:w-1/2 overflow-hidden"
        variants={imageVariants}
        initial="hidden"
        animate={controls}
      >
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-[350px] object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Animated text - Fixed dark mode classes */}
      <motion.div
        className="md:w-1/2 flex flex-col justify-center text-[#293379] dark:text-white transition-colors duration-300"
        variants={textVariants}
        initial="hidden"
        animate={controls}
      >
        <h3 className="text-4xl font-bold mb-4">{title}</h3>
        <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed transition-colors duration-300">
          {text}
        </p>
      </motion.div>
    </div>
  );
}
