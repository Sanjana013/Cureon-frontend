import { useAuth } from "@/modules/Auth/context/authContext";
import React, { useState, useRef, useEffect } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaQuestionCircle,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { logout } = useAuth();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeDropdown = () => setDropdownOpen(false);

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Link
          to="/"
          className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent"
        >
          Cureon
        </Link>
        <div className="h-6 w-px bg-gray-300"></div>
        <span className="text-sm text-gray-500 font-medium">
          Medical Platform
        </span>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-6">
        <button className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          <FaEnvelope size={16} />
          <span className="font-semibold">Contact Us</span>
        </button>

        <button className="flex items-center space-x-2 px-5 py-2.5 bg-white text-gray-700 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md">
          <FaQuestionCircle size={16} />
          <span className="font-semibold">Help</span>
        </button>

        {/* User Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 bg-gray-50 rounded-full pl-3 pr-2 py-1.5 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
          >
            <FaUserCircle size={28} className="text-blue-600" />
            <FaChevronDown
              size={12}
              className={`text-gray-500 transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden backdrop-blur-sm bg-white/65">
              <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
                <p className="text-sm font-semibold text-gray-800">
                  Welcome back!
                </p>
                <p className="text-xs text-gray-500">user@cureon.com</p>
              </div>

              <ul className="flex flex-col py-2">
                <li className="hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                  <Link
                    to="/userprofile"
                    className="flex items-center space-x-3 px-4 py-3 w-full text-left"
                    onClick={closeDropdown}
                  >
                    <span className="text-gray-700 font-medium">
                      Your Profile
                    </span>
                  </Link>
                </li>
                <li className="px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                  <span className="text-gray-700 font-medium">
                    Prescriptions
                  </span>
                </li>
                <li className="px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                  <span className="text-gray-700 font-medium">
                    Test Reports
                  </span>
                </li>
                <li className="px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                  <span className="text-gray-700 font-medium">
                    Chat History
                  </span>
                </li>
              </ul>

              <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
                <button
                  className="text-sm text-red-500 font-medium hover:text-red-600 transition-colors duration-200"
                  onClick={logout}
                >
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
