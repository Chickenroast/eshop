import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  return (
    <header className="main-header">
      {/* Start Navigation */}
      <nav className="bg-light">
        <div className="container mx-auto">
          {/* Start Header Navigation */}
          <div className="flex items-center justify-between py-2">
            <button
              className="text-xl text-gray-800 lg:hidden"
              type="button"
              // You can add an onClick handler here if needed
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <a className="text-lg text-gray-800" href="index.html">
              <img src="images/logo.png" className="h-8" alt="" />
            </a>
          </div>
          {/* End Header Navigation */}

          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="hidden lg:flex lg:items-center lg:ml-auto">
            <ul className="flex space-x-4">
              <li className="nav-item active">
                <a
                  className="text-gray-800 hover:text-gray-600"
                  href="index.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="text-gray-800 hover:text-gray-600"
                  href="about.html"
                >
                  About Us
                </a>
              </li>
              <li className="dropdown relative">
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  SHOP
                </a>
                <ul className="dropdown-menu absolute hidden space-y-2">
                  <li>
                    <a href="shop.html">Sidebar Shop</a>
                  </li>
                  <li>
                    <a href="shop-detail.html">Shop Detail</a>
                  </li>
                  <li>
                    <a href="cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="my-account.html">My Account</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="text-gray-800 hover:text-gray-600"
                  href="gallery.html"
                >
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="text-gray-800 hover:text-gray-600"
                  href="contact-us.html"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}

          {/* Start Atribute Navigation */}
          <div className="hidden lg:flex lg:items-center">
            <ul className="flex space-x-4">
              <li className="search">
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  <FontAwesomeIcon icon={faSearch} />
                </a>
              </li>
              <li className="side-menu">
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  <FontAwesomeIcon icon={faShoppingBag} />
                  <span className="badge">3</span>
                  <p>My Cart</p>
                </a>
              </li>
            </ul>
          </div>
          {/* End Atribute Navigation */}
        </div>
        {/* Start Side Menu */}
        <div className="hidden lg:flex lg:items-center">
          <div className="side">
            <a href="#" className="close-side">
              <i className="fa fa-times"></i>
            </a>
            <li className="cart-box">
              <ul className="cart-list space-y-2">
                <li>
                  <a href="#" className="photo">
                    <img
                      src="images/img-pro-01.jpg"
                      className="cart-thumb"
                      alt=""
                    />
                  </a>
                  <h6>
                    <a href="#" className="text-gray-800 hover:text-gray-600">
                      Delica omtantur
                    </a>
                  </h6>
                  <p>
                    1x - <span className="price">$80.00</span>
                  </p>
                </li>
                {/* Repeat the structure for other cart items */}
                <li className="total">
                  <a
                    href="#"
                    className="btn btn-default hvr-hover btn-cart text-gray-800 hover:text-gray-600"
                  >
                    VIEW CART
                  </a>
                  <span className="float-right text-gray-800 hover:text-gray-600">
                    <strong>Total</strong>: $180.00
                  </span>
                </li>
              </ul>
            </li>
          </div>
        </div>
        {/* End Side Menu */}
      </nav>
      {/* End Navigation */}
    </header>
  );
};

export default Navbar;
