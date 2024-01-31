import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import productsData from "../Products/Products.json";
import ProductItem from "../Products/ProductItem";
import Cart from "../components/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
  interface CartItem extends Product {
    quantity: number;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    setProducts(productsData);
  }, []);

  useEffect(() => {
    // Recalculate total price whenever cartItems change
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(totalPrice);
  }, [cartItems]);

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

  const updateCartItemQuantity = (title: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.title === title ? { ...item, quantity } : item
      )
    );
  };

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const formatFloatNumber = (num: number): string => {
    const roundedNum = parseFloat(num.toFixed(2));
    return roundedNum.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
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
      <section className="mt-[20%] flex flex-col h-full">
        <h1 className="ml-5 font-bold text-6xl text-primary text-left mb-5">
          SHOP
        </h1>
        <button
          className="fixed mt-5 right-2 rounded-full bg-primary p-3 text-white w-40"
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
          <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg h-full w-full">
              <button
                className="text-xl font-bold rounded-full p-3 py-2 bg-primary text-white flex justify-right"
                onClick={closeModal}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>

              <Cart
                cartItems={cartItems}
                addItemToCart={addItemToCart}
                updateCartItemQuantity={updateCartItemQuantity}
              />
              <div className="text-center mt-4">
                <p className="text-xl font-bold">
                  Total Price: ${formatFloatNumber(totalPrice)}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Shop;
