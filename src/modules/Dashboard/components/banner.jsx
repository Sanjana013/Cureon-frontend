import React from "react";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#293379] via-[#1e2a6b] to-[#151d4f] flex items-center justify-center px-6 sm:px-8 lg:px-16">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="max-w-2xl text-white space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Your Personal
              <span className="block bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Health Companion
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-gray-100 font-light">
              Experience the future of healthcare with Curomate. Our intelligent
              platform streamlines medical appointments, provides smart
              medication reminders, and keeps your health journey organized and
              stress-free.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Instant Medical Consultation",
                "Smart Appointment Scheduling",
                "Medication Reminders",
                "Health Progress Tracking",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  </div>
                  <span className="text-gray-200 text-sm font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-4">
            <Link to="/chat">
              <button className="group relative bg-white text-[#293379] font-semibold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="flex items-center gap-3">
                  Ask CUROMATE
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>

            <p className="text-sm text-gray-300 flex items-center gap-2">
              <span className="w-1 h-1 bg-green-400 rounded-full"></span>
              Available 24/7 • Secure & Confidential
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-96 h-96">
            {/* Background Orb */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-xl" />

            {/* Main Card */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="text-white/60 text-sm">Health Dashboard</div>
              </div>

              {/* Content Grid with Images */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    img: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
                    label: "Consult",
                    color: "bg-blue-500/20",
                  },
                  {
                    img: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png",
                    label: "Meds",
                    color: "bg-purple-500/20",
                  },
                  {
                    img: "https://cdn-icons-png.flaticon.com/512/747/747310.png",
                    label: "Schedule",
                    color: "bg-green-500/20",
                  },
                  {
                    img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
                    label: "Track",
                    color: "bg-orange-500/20",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl p-4 text-center backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-300 cursor-pointer group ${item.color}`}
                  >
                    <div className="mb-2 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={item.img}
                        alt={item.label}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="text-white text-sm font-medium">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Status Bar */}
              <div className="mt-6 bg-white/5 rounded-full p-1">
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 w-3/4 h-2 rounded-full"></div>
              </div>
              <div className="text-center text-white/60 text-xs mt-2">
                Health Score: 85% • Updated just now
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400/10 rounded-2xl rotate-12 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-400/10 rounded-2xl -rotate-12 animate-float-delayed"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
