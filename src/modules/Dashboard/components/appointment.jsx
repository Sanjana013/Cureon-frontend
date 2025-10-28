import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const doctors = [
  {
    title: "Gynecologist/Obstetrician",
    desc: "Explore for women's health, pregnancy and infertility treatments",
    img: "https://www.ankurahospitals.com/wp-content/uploads/2021/03/2021-03-01.png",
  },
  {
    title: "Dietitian/Nutrition",
    desc: "Get guidance on eating right, weight management and sports nutrition",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  },
  {
    title: "Physiotherapist",
    desc: "Pulled a muscle? Get it treated by a trained physiotherapist",
    img: "https://media.istockphoto.com/id/805089584/photo/just-relax-ill-take-care-of-the-rest.jpg?s=612x612&w=0&k=20&c=QRmBhp-E_v8rFStb7hkgHmcz2ZrsAW2AdWcZxINhsvc=",
  },
  {
    title: "General Surgeon",
    desc: "Need to get operated? Find the right surgeon for you",
    img: "https://www.medicaltrusthospital.com/uploads/images/ARMP2270.jpg",
  },
  {
    title: "Dermatologist",
    desc: "Treat acne, allergies, and other skin problems with expert help",
    img: "https://www.drdivyasharma.com/assets/website/blog/2022/05/10/3.png",
  },
  {
    title: "Cardiologist",
    desc: "Get your heart checked by expert cardiologists near you",
    img: "https://static.wixstatic.com/media/958934_522797a3dab246d79a7977b2bd129584~mv2.png/v1/fill/w_640,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/958934_522797a3dab246d79a7977b2bd129584~mv2.png",
  },
  {
    title: "Dentist",
    desc: "Keep your smile healthy with dental checkups and cleanings",
    img: "https://bizimages.withfloats.com/actual/66fffab1350a9ba1e9b04a6d.jpg",
  },
  {
    title: "ENT Specialist",
    desc: "Consult for ear, nose, and throat related health issues",
    img: "https://alhosnmedicalcenter.com/wp-content/uploads/2025/05/image2.jpg",
  },
  {
    title: "Pediatrician",
    desc: "Expert care for your child's health and development",
    img: "https://studymrcpch.com/wp-content/uploads/2024/08/MRCPCH-AUG-14-850x600.jpg",
  },
  {
    title: "Orthopedic",
    desc: "Treatment for bones, joints, and musculoskeletal issues",
    img: "https://www.opaortho.com/wp-content/uploads/2021/12/Doctor-shows-the-spine-conditions.jpg",
  },
  {
    title: "Neurologist",
    desc: "Specialized care for brain and nervous system disorders",
    img: "https://www.logansportmemorial.org/wp-content/uploads/what-does-a-neurologist-do.jpg",
  },
  {
    title: "Psychiatrist",
    desc: "Mental health care and therapy for emotional wellbeing",
    img: "https://vinitahealth.com/wp-content/uploads/2023/09/female-indian-physician-communication-with-male-patients-scaled.webp",
  },
];

const DoctorSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const cardWidth = 266; // min-w-[250px] + gap-6 = 250 + 16 = 266
      const visibleCards = Math.floor(current.clientWidth / cardWidth);
      const scrollAmount = cardWidth * visibleCards;

      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-6 lg:px-10 py-10 bg-white relative">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
          Book an appointment for an{" "}
          <span className="text-blue-600">in-clinic consultation</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Find experienced doctors across all specialties
        </p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 z-10 border border-gray-200 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={28} className="text-gray-700" />
      </button>

      {/* Cards Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide px-2 py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="min-w-[250px] lg:min-w-[280px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group cursor-pointer flex-shrink-0"
          >
            <div className="relative overflow-hidden rounded-t-xl">
              <img
                src={doc.img}
                alt={doc.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {doc.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {doc.desc}
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 z-10 border border-gray-200 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={28} className="text-gray-700" />
      </button>

      {/* Scroll Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {[0, 1, 2].map((dot) => (
          <div
            key={dot}
            className="w-2 h-2 bg-gray-300 rounded-full hover:bg-blue-600 cursor-pointer transition-colors duration-300"
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
          View All Specialties
        </button>
      </div>
    </div>
  );
};

export default DoctorSection;
