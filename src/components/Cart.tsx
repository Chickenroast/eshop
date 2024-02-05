import React, { useState, useEffect } from "react";

export interface CartItemData {
  title: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  cartItems: CartItemData[];
  updateCartItemQuantity: (title: string, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, updateCartItemQuantity }) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  useEffect(() => {
    // Recalculate total price whenever cartItems change
    const totalPrice = calculateTotalPrice();
    setTotalPrice(totalPrice);
  }, [cartItems]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md lg:min-h-64 lg:mb-0 mb-20">
      <h2 className="text-2xl font-bold mb-4 lg:text-4xl lg:text-right">
        Shopping Cart
      </h2>
      <div className="lg:block lg:fixed mt-4 lg:mr-5 hidden border-b text-primary w-80 fixed right-[3%] pb-4"></div>
      <div className="grid grid-cols-1 gap-4 ">
        {cartItems
          .filter((item) => item.quantity > 0)
          .map((item, index) => (
            <div key={index} className="border-b pb-4 border-primary">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-16 w-16 lg:h-80 lg:w-80 object-cover "
                    />
                    <div className="ml-4 ">
                      <h3 className="text-lg lg:text-6xl lg:text-left font-semibold">
                        {item.title}
                      </h3>
                      <p className=" text-2xl text-left w-[50%] hidden lg:block">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="lg:ml-80 flex flex-row ml-5 justify-between space-x-20 lg:space-x-0 lg:flex-row-reverse">
                    <div className="flex-grow lg:flex">
                      <p className="text-lg lg:ml-5 lg:text-2xl font-semibold text-right">
                        ${item.price}
                      </p>
                    </div>

                    <div className="flex items-end ">
                      <div className="">
                        <button
                          className="mr-2 bg-primary text-white px-2 py-1 rounded-md"
                          onClick={() => {
                            if (item.quantity > 0) {
                              updateCartItemQuantity(
                                item.title,
                                item.quantity - 1
                              );
                            }
                          }}
                        >
                          -
                        </button>
                        <span className="lg:text-1xl">{item.quantity}</span>
                        <button
                          className="ml-2 bg-primary text-white px-2 py-1 rounded-md"
                          onClick={() =>
                            updateCartItemQuantity(
                              item.title,
                              item.quantity + 1
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <h3 className="mt-4 lg:right-[5%] text-xl font-semibold lg:absolute lg:top-[20%] lg:right-[3%]">
        Total Price: ${totalPrice.toFixed(2)}
      </h3>
    </div>
  );
};

export default Cart;
