import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import productsData from "../Products/Products.json";
import ProductItem from "../Products/ProductItem";
import Cart from "../components/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ShopBan from "../components/ShopBan";

import { CartItemData as CartItem } from "../components/Cart";

interface Product {
  title: string;
  description: string;
  price: number;
  promo: boolean;
  image: string;
  category: string;
  quantity: number;
}

function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const addItemToCart = (product: Product, quantity: number) => {
    const itemExists = cartItems.find((item) => item.title === product.title);

    if (itemExists) {
      setCartItems(
        cartItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="h-full w-full bg-back">
      <Navbar />
      <div className="hidden lg:block mt-10 mb-[-20%]">
        <ShopBan />
      </div>
      <section className="mt-[20%] flex flex-col h-full">
        <h1 className="ml-5 font-bold lg:mr-[3%] text-6xl text-primary text-left mb-5">
          SHOP
        </h1>
        <button
          className="absolute mt-3 lg:right-[3%] right-2 rounded-full bg-primary p-3 text-white w-40"
          onClick={openModal} // Open modal when button is clicked
        >
          panier
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductItem
              key={index}
              product={product}
              addToCart={(product, quantity) =>
                addItemToCart(product, quantity)
              }
            />
          ))}
        </div>
        {/* Modal */}
        {showModal && (
          <div className="lg:h-full lg:w-full lg:absolute fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-gradient-to-b from-backlight-light to-backlight p-8 rounded-lg h-full w-full">
              <button
                className="lg:absolute lg:w-20 text-xl font-bold rounded-full p-3 py-2 bg-primary text-white flex justify-right lg:fixed lg:left-[3%] lg:top-[5%]"
                onClick={closeModal}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>

              <Cart
                cartItems={cartItems}
                updateCartItemQuantity={(title, quantity) =>
                  setCartItems((prevCartItems) =>
                    prevCartItems.map((item) =>
                      item.title === title ? { ...item, quantity } : item
                    )
                  )
                }
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Shop;
