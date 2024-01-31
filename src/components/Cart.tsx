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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="grid grid-cols-1 gap-4 ">
        {cartItems.map((item, index) => (
          <div key={index} className="border-b pb-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-lg font-semibold mr-4">${item.price}</p>

                  <div className="flex flex-row">
                    <button
                      className="mr-2 bg-primary text-white px-2 py-1 rounded-md"
                      onClick={() =>
                        updateCartItemQuantity(item.title, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="text-gray-500 overflow-hidden">
                      {item.quantity}
                    </span>
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
        ))}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">
          Total Price: ${calculateTotalPrice()}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
