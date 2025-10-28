import React from "react";

const DoctorConsultation = () => {
  const specialties = [
    {
      title: "Period doubts or Pregnancy",
      description: "Expert guidance on menstrual health",
      buttonText: "CONSULT NOW",
      icon: "🩺",
      color: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
    },
    {
      title: "Acne or skin issues",
      description: "Professional advice for clear skin",
      buttonText: "CONSULT NOW",
      icon: "🔬",
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    {
      title: "Performance issues",
      description: "Confidential intimate health consultations",
      buttonText: "CONSULT NOW",
      icon: "💊",
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
    },
    {
      title: "Cold, cough or fever",
      description: "Quick relief for common illnesses",
      buttonText: "CONSULT NOW",
      icon: "🌡",
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200",
    },
    {
      title: "Child health",
      description: "Pediatric care for your little ones",
      buttonText: "CONSULT NOW",
      icon: "👶",
      color: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-200",
    },
    {
      title: "Mental wellness",
      description: "Support for depression & anxiety",
      buttonText: "CONSULT NOW",
      icon: "🧠",
      color: "from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Consult Top Doctors Online for{" "}
            <span className="text-blue-600">Any Health Concern</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Private online consultations with verified doctors in all
            specialties
          </p>
        </div>

        {/* Professional Circular Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* ✅ FIXED TEMPLATE STRING HERE */}
              <div
                className={`w-36 h-36 bg-gradient-to-br ${specialty.color} rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border ${specialty.borderColor} flex flex-col items-center justify-center p-4 mb-4 group-hover:shadow-lg`}
              >
                <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {specialty.icon}
                </div>
                <button className="text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
                  CONSULT
                </button>
              </div>

              {/* Content */}
              <div className="px-2">
                <h3 className="text-sm font-semibold text-gray-800 mb-2 leading-tight min-h-[40px] flex items-center justify-center">
                  {specialty.title}
                </h3>
                <p className="text-xs text-gray-600 leading-tight">
                  {specialty.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
            View All Specialties
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorConsultation;
