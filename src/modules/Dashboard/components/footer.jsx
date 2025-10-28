import React from "react";

const CureonFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Brand and Description Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Cureon
              </h1>
            </div>

            <p className="text-xl leading-relaxed text-blue-100 max-w-md">
              Empowering your medical health journey with care, technology, and
              compassion, one step at-a-time.
            </p>

            <div className="pt-4">
              <p className="text-blue-200 font-medium italic">
                Designed with care for your health
              </p>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 border-l-4 border-cyan-400 pl-3">
                Contact Us
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-cyan-500 transition-colors duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-blue-100 group-hover:text-white transition-colors duration-300">
                    +91 98765 43210
                  </span>
                </div>

                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-cyan-500 transition-colors duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-blue-100 group-hover:text-white transition-colors duration-300">
                    support@cureon.com
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-blue-100">
                    123 Health Street, Kolkata, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-blue-200">
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Cookie Policy
            </a>
          </div>

          {/* Copyright */}
          <div className="text-blue-200 text-center lg:text-right">
            <p className="font-medium">© 2025 Cureon. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CureonFooter;
