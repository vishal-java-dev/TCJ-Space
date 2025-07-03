import React from "react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-10 overflow-x-hidden relative z-50">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Subscription Box */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Be Ready to Grow</h2>
            <p>
              Get exclusive{" "}
              <span className="font-semibold text-sky-400">updates</span>{" "}
              straight to your inbox.
            </p>
            <form className="w-full flex flex-col sm:flex-row sm:items-stretch gap-3 mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-18 flex-1 px-2 py-2 text-white bg-transparent border border-sky-500 sm:rounded-l-md rounded-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-gray-400"
                required
              />
              <button
                type="submit"
                className="primary-button px-6 py-2 text-sm rounded-md sm:rounded-l-none sm:rounded-r-md"
              >
                OK
              </button>
            </form>
          </div>

          {/* Navigation + Contact */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-sky-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-400">
                    Login
                  </a>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-xl font-bold mb-3">Explore</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-sky-400">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-400">
                    Galaxy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-400">
                    Satellite
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-400">
                    Mission
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-3">Contact Us</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2 break-words">
                  <HiLocationMarker className="mt-1 text-lg" />
                  <span>Hazaribagh, Jharkhand</span>
                </li>
                <li className="flex items-start gap-2 break-words">
                  <MdMessage className="mt-1 text-lg" />
                  <span className="break-all">mr.vishalyadav03@gmail.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MdCall className="mt-1 text-lg" />
                  <span>+91 9060950890</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} TCJ Space. All rights reserved.
          </p>
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <a href="#" className="hover:text-sky-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400">
                Terms & Conditions
              </a>
            </li>
          </ul>
          <div className="flex gap-4 justify-center">
            <a href="#" aria-label="Instagram" className="hover:text-sky-400">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-sky-400">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" aria-label="Telegram" className="hover:text-sky-400">
              <FaTelegram className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
