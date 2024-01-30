import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-primary w-[80%] h-[80%] rounded-lg p-10">
        <h2 className="text-4xl font-bold mb-4 text-left">Notre Menu</h2>
        <ul className="flex flex-col space-y-6 text-2xl text-left mt-10 hover:text-black">
          <li>
            <a href="#/about" onClick={onClose}>
              / About
            </a>
            <p className="text-sm">
              trouve de quoi est fait notre produit, produits naturels et
              certifié vegan.
            </p>
          </li>
          <li>
            <a href="#" onClick={onClose}>
              / Shop
            </a>
            <p className="text-sm">
              trouve tout nos produits, et achète les en ligne.
            </p>
          </li>
          <li>
            <a href="#" onClick={onClose}>
              / Blog
            </a>
            <p className="text-sm">
              partage tes recettes, et découvre celle des autres.
            </p>
          </li>
        </ul>
        <button
          onClick={onClose}
          className="fixed right-20 top-[80%] px-4 py-2 bg-gray-200 text-gray-800 hover:text-black rounded-lg"
        >
          Close
        </button>
        <button className="mt-10 mr-80 rounded-full bg-secondary p-3 text-black w-40">
          Login
        </button>
      </div>
    </div>
  );
};

export default Modal;
