import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import Plates from "../Svg/Plate";
import { gsap } from "gsap";

function Home() {
  useEffect(() => {
    const maskStyle: React.CSSProperties = {
      maskType: "luminance",
    };
    gsap.to(".plates", { rotate: 360, duration: 3 });
  }, []);

  const maskStyle: React.CSSProperties = {
    maskType: "luminance",
  };

  return (
    <div className="h-screen w-full bg-back overflow-hidden">
      <Navbar />
      <section className="mt-[20%] flex flex-col h-screen">
        <h1 className="ml-5 font-bold text-6xl text-primary text-left">
          TOUT SE
        </h1>
        <h2 className="ml-5 font-bold text-6xl text-white text-left">MANGE</h2>
        <p className="mt-5 ml-5 text-primary text-left">
          Taste the joy of edible potato plates on our site! From savory
          pancakes to crispy hash browns, we offer mouthwatering options crafted
          with care.
        </p>
        <button className="mt-5 ml-5 rounded-full bg-primary p-3 text-white w-40">
          View Products
        </button>

        <div className="plates fixed top-[50%] z-40 ">
          <Plates style={maskStyle} />
        </div>
      </section>
    </div>
  );
}

export default Home;
