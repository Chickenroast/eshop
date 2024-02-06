import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Svg/Logo";
import Modal from "./ModalMenu"; // Import the modal component

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeModal = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-pink rounded-full text-back">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex space-x-3 rtl:space-x-reverse">
          <Logo />
          <h2 className="self-center text-2xl font-semibold">Crockplate</h2>
        </div>
        <div className="hidden ml-[10%] md:flex flex-grow justify-left space-x-10">
          <a href="#/" className="text-xl hover:text-secondary">
            Home
          </a>
          <a href="#/about" className="text-xl hover:text-secondary">
            / About
          </a>
          {/* <a href="#/blog" className="text-lg hover:text-gray-200">
            Blog
          </a> */}
          <a href="#/shop" className="text-xl hover:text-secondary">
            / Shop
          </a>
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
        </button>
        <Modal isOpen={isMenuOpen} onClose={closeModal} />
      </div>
    </nav>
  );
};

export default Navbar;
