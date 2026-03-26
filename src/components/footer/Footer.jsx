import React from "react";
import footerLogo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#06091A] text-white pt-35 md:pt-38 pb-10 mt-10 md:mt-5">
      {/* --- Newsletter Section --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-6xl z-10">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 md:p-4 rounded-3xl">
          <div className="bg-white rounded-2xl py-10 md:py-16 px-4 text-center text-black shadow-lg bg-linear-to-tr from-blue-100 via-white to-orange-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Subscribe to our Newsletter
            </h2>
            <p className="text-gray-500 mb-8 font-medium text-sm md:text-base">
              Get the latest updates and news right in your inbox!
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-md bg-white border-gray-300 text-black"
              />
              <button className="btn w-full md:w-auto bg-linear-to-r from-pink-400 to-yellow-500 border-none text-black font-bold px-8 shadow-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Footer Main Content --- */}
      <div className="container mx-auto px-6 md:px-10">
        {/* Footer Logo */}
        <div className="flex justify-center mb-16">
          <img src={footerLogo} alt="Footer Logo" className="h-20 md:h-24" />
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-gray-400">
          {/* About Us */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-bold mb-4">About Us</h3>
            <p className="max-w-xs mx-auto md:mx-0 leading-relaxed text-sm">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition inline-block py-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition inline-block py-1"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition inline-block py-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition inline-block py-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-bold mb-4">Subscribe</h3>
            <p className="mb-6 text-sm">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row w-full max-w-sm mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered rounded-b-none sm:rounded-b-lg sm:rounded-r-none w-full bg-white text-black"
              />
              <button className="btn bg-linear-to-r from-pink-400 to-yellow-500 border-none rounded-t-none sm:rounded-t-lg sm:rounded-l-none text-black font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-xs md:text-sm text-gray-500">
          <p>©2026 Your Company All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
