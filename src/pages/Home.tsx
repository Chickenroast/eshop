import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import Plates1 from "../Svg/Plate";
import { gsap } from "gsap";
import Spoon from "../Svg/Spoon";

function Home() {
  useEffect(() => {
    gsap.to(".plates", { rotate: 360, duration: 2 });
    gsap.fromTo(
      ".spoon",
      { x: 200, opacity: 0, rotate: 0, delay: 10 },
      { x: -20, opacity: 1, rotate: 360, duration: 2 }
    );
    gsap.fromTo(
      ".nape",
      { rotate: -20, y: -200, x: 1000 },
      { y: 20, x: 0, duration: 5, ease: "power2.out" }
    );
  }, []);

  const maskStyle: React.CSSProperties = {
    maskType: "luminance",
  };

  return (
    <div className="h-screen w-full bg-back overflow-hidden">
      <Navbar />
      <section className="mt-[20%] flex flex-col h-screen lg:mt-[2%]">
        <h1 className="lg:text-[180px] ml-5 font-bold text-6xl text-primary text-left">
          TOUT SE
        </h1>
        <h2 className="ml-5 font-bold text-6xl text-white text-left lg:text-[180px]">
          MANGE
        </h2>
        <p className="mt-5 ml-5 text-primary text-left lg:w-[50%] lg:text-[150%]">
          Taste the joy of edible potato plates on our site! From savory
          pancakes to crispy hash browns, we offer mouthwatering options crafted
          with care.
        </p>
        <button className="mt-5 ml-5 rounded-full bg-primary p-3 text-white w-40">
          <a href="#/shop">View Products</a>
        </button>

        <div className="plates lg:right-[10%] lg:top-[5%] fixed top-[50%] z-40 ">
          <Plates1 style={maskStyle} />
        </div>
        <div className="hidden spoon lg:block lg:right-[15%] lg:top-[30%] lg:absolute z-10 ">
          <Spoon />
        </div>
      </section>
      <canvas className="shadow-md nape hidden lg:block bg-white absolute bottom-[20%] right-0 w-[40%] h-[30%] z-0" />
    </div>
  );
}

export default Home;
