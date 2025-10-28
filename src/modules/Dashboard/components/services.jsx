import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Find Doctors",
      description: "Book appointments with top specialists near you",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: "Connect within 60 seconds",
      buttonText: "Book Now",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      delay: "0",
    },
    {
      title: "Lab Tests",
      description: "Safe and trusted lab tests with accurate results",
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: "Home collection available",
      buttonText: "Get Tested",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      delay: "200",
    },
    {
      title: "Quick Consults",
      description: "Instant video consultation with certified doctors",
      image:
        "https://media.istockphoto.com/id/1349348394/photo/female-patient-speaking-with-her-paediatrician-in-a-doctors-office.jpg?s=612x612&w=0&k=20&c=Z5ym-PS_03HGCjSmxsWJ2rxuJchArCZfV8TFyMWQyTg=",
      stats: "Available 24/7",
      buttonText: "Start Consult",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      delay: "400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Healthcare Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access premium healthcare services with just a few clicks. Fast,
            reliable, and trusted by thousands of patients worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              style={{ animationDelay: `${service.delay}ms` }}
            >
              {/* Background Gradient Elements */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
              />
              <div
                className={`absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
              />
              <div
                className={`absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
              />

              <div className="relative p-8 h-full flex flex-col">
                {/* Image Container */}
                <div className="mb-8">
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-gray-700">
                      {service.stats}
                    </span>
                  </div>

                  <button
                    className={`w-full bg-gradient-to-r ${service.gradient} text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 active:scale-95 group`}
                  >
                    <span className="flex items-center justify-center gap-3">
                      {service.buttonText}
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </span>
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 -z-10`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-700 font-medium">
                24/7 Available Support
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-gray-700 font-medium">
                100% Secure & Confidential
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
