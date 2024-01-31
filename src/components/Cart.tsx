import React from "react";

interface CartItem {
  title: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  updateCartItemQuantity: (title: string, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, updateCartItemQuantity }) => {
  // Function to calculate the total price
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md lg:min-h-64">
      <h2 className="text-2xl font-bold mb-4 lg:text-4xl lg:text-right">
        Shopping Cart
      </h2>
      <div className="lg:absolute hidden lg:block border-b text-primary w-80 fixed right-[3%] pb-4"></div>
      <div className="grid grid-cols-1 gap-4 ">
        {cartItems.map((item, index) => (
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

                <div className="flex flex-row ml-5 justify-between space-x-20 tems-start">
                  <div className="flex-grow">
                    <p className="text-lg font-semibold text-right">
                      ${item.price}
                    </p>
                  </div>

                  <div className="flex items-end">
                    <div className="">
                      <button
                        className="mr-2 bg-primary text-white px-2 py-1 rounded-md"
                        onClick={() =>
                          updateCartItemQuantity(item.title, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="text-gray-500">{item.quantity}</span>
                      <button
                        className="ml-2 bg-primary text-white px-2 py-1 rounded-md"
                        onClick={() =>
                          updateCartItemQuantity(item.title, item.quantity + 1)
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
      <div className="mt-4">
        <h3 className="lg:absolute text-xl font-semibold lg:fixed lg:top-[12%] lg:right-[3%]">
          Total Price: ${calculateTotalPrice()}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
