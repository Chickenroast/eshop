import React, { useState, useRef } from "react";
import Product from "../components/Types/Product";
import gsap from "gsap";

interface ProductItemProps {
  product: Product;
  addToCart: (product: Product, quantity: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, addToCart }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (newValue > 100) {
      setErrorMessage("Maximum par 100");
    } else {
      setErrorMessage("");
      setSelectedQuantity(newValue);
    }
  };

  const handleClick = () => {
    // GSAP animation
    gsap.to(buttonRef.current, {
      scale: 1.2, // Scale up to 1.2
      duration: 0.1, // Animation duration
      yoyo: true, // Play animation in reverse
      repeat: 1, // Repeat animation once
    });

    // Call addToCart function
    addToCart(product, selectedQuantity);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex mb-4 self-end">
        {product.promo && (
          <span className="lg:absolute bg-secondary text-white ml-1 px-2 py-1 rounded-md">
            Promotion
          </span>
        )}
      </div>
      <div className="flex items-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-[45%] h-[45%] object-cover mr-2 "
        />
        <div>
          <h3 className="font-bold text-left text-2xl mb-1 text-primary">
            {product.title}
          </h3>
          <p className="text-primary font-bold text-left">${product.price}</p>
          <div>
            <label
              htmlFor={`quantity-${product.title}`}
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              type="number"
              id={`quantity-${product.title}`}
              name={`quantity-${product.title}`}
              value={selectedQuantity}
              onChange={handleQuantityChange}
              min={1}
              max={100}
              className="mt-1 block w-full p-2 bg-secondary rounded-md"
            />
            {errorMessage && (
              <p className="text-left text-sm mt-1">{errorMessage}</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          ref={buttonRef}
          className=" bg-primary hover:bg-pink text-white px-4 py-2 rounded-md"
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
