import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      data-aos="fade-down"
      className="fixed top-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-4"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 text-white font-bold text-2xl">
            <img src={Logo} alt="TCJ Space logo" className="w-10" />
            <span>TCJ Space</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-white text-lg font-medium">
            <li><a href="#about" className="hover:text-sky-400">About</a></li>
            <li><a href="#technology" className="hover:text-sky-400">Technology</a></li>
            <li><a href="#galaxy" className="hover:text-sky-400">Galaxy</a></li>
            <li><a href="#satellite" className="hover:text-sky-400">Satellite</a></li>
          </ul>

          {/* Mobile Toggle Button */}
          <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <FiX /> : <FiMenu />}
          </div>

          {/* Login Button (shown on all sizes) */}
          <div className="hidden sm:block">
            <button className="text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all duration-300">
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-black/80 p-4 rounded-lg text-white space-y-4">
            <a href="#about" onClick={toggleMenu} className="block hover:text-sky-400">About</a>
            <a href="#technology" onClick={toggleMenu} className="block hover:text-sky-400">Technology</a>
            <a href="#galaxy" onClick={toggleMenu} className="block hover:text-sky-400">Galaxy</a>
            <a href="#satellite" onClick={toggleMenu} className="block hover:text-sky-400">Satellite</a>
            <button className="w-full mt-2 border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all duration-300">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
