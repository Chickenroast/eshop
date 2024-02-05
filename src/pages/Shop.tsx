import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import productsData from "../Products/Products.json";
import ProductItem from "../Products/ProductItem";
import Cart from "../components/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { CartItemData as CartItem } from "../components/Cart";
import ProductFilter from "../components/ProductFilter";

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
  const [cartItemCount, setCartItemCount] = useState(0);
  const cartButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  useEffect(() => {
    // Calculate total items in cart
    const totalCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartItemCount(totalCount);
    if (cartButtonRef.current) {
      gsap.to(cartButtonRef.current, {
        scale: 1.2,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      });
    }
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

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "";
  };
  useEffect(() => {
    gsap.fromTo(
      ".scaling-section6",
      { opacity: 0, y: -30 }, // Début de la translation à -30
      {
        y: 45, // Fin de la translation à 0
        duration: 1, // Durée de l'animation (ajustez selon vos besoins)
        ease: "power2.inOut",
        opacity: 1,

        // Fonction d'animation pour un mouvement fluide
      }
    );
  }, []); // Utilise une dépendance vide pour exécuter le code une seule fois

  return (
    <div className="h-full w-full mb-20 bg-back">
      <div className="lg:z-40 lg:fixed lg:w-[95%]">
        <Navbar />
      </div>
      <section className="lg:h-fit  scaling-section6 mt-[5%] lg:mx-8 lg:mt-[0%] flex flex-col  h-full lg:bg-white lg:p-10 lg:rounded-md lg:shadow-md">
        <div className="lg:flex-row lg:flex lg:justify-between lg:mt-4">
          <div className="hidden lg:block">
            <ProductFilter
              products={products}
              setFilteredProducts={setProducts}
            />{" "}
          </div>
          <h1 className="ml-2 font-bold lg:mr-[3%] text-6xl text-primary text-left mb-5">
            DE LA VAISELLE COMESTIBLE
          </h1>
          <button
            ref={cartButtonRef}
            className="hover:bg-secondary lg:mr-5 absolute top-[1%] lg:static lg:h-[40px] right-7 rounded-full bg-primary p-2 text-white w-[25%] lg:w-40 flex items-center justify-center"
            onClick={openModal} // Open modal when button is clicked
          >
            panier ({cartItemCount}) {/* Display total items in cart */}
          </button>
        </div>
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
          <div className="lg:h-full lg:w-full lg:absolute fixed lg:top-0 lg:left-0 top-[-3%] left-[-3%] w-screen h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="overflow-auto bg-gradient-to-b from-backlight-light to-backlight p-8 rounded-lg h-full w-full">
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
