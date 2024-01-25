import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import Plates from "../Svg/Plates";
import { gsap } from "gsap";

function Home() {
  const maskStyle: React.CSSProperties = {
    maskType: "luminance",
  };
  gsap.to(".plates", { y: +30, duration: 0.5 });
  gsap.to(".plates2", { y: +30, duration: 2, delay: 0.5 });

  return (
    <div className="h-screen w-full bg-back">
      <Navbar />
      <section className="mt-[20%] flex flex-col h-screen">
        <h1 className="ml-5 font-bold text-6xl text-primary text-left">
          I EAT MY
        </h1>
        <h2 className="ml-5 font-bold text-6xl text-white text-left">DISHES</h2>
        <p className="mt-5 ml-5 text-primary text-left">
          Taste the joy of edible potato plates on our site! From savory
          pancakes to crispy hash browns, we offer mouthwatering options crafted
          with care.
        </p>
        <button className="mt-5 ml-5 rounded-full bg-primary p-3 text-white w-40">
          Start shopping
        </button>
        <div className="mt-[-10%] flex flex-col ml-[30%]">
          <div className="plates mb-[-10%] z-40">
            <Plates style={maskStyle} />
          </div>
          <div className="plates2 mb-[-30%] z-30 rotate-12">
            <Plates style={maskStyle} />
          </div>
          <div className="rotate-[25deg] mt-[50px]">
            <Plates style={maskStyle} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
