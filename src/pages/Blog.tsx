import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import Plates1 from "../Svg/Plate";
import { gsap } from "gsap";

function Blog() {
  return (
    <div className="h-screen w-full bg-back overflow-hidden">
      <Navbar />
      <section className="mt-[20%] flex flex-col h-screen">
        <h1 className="ml-5 font-bold text-6xl text-primary text-left">
          NOS RECETTES
        </h1>
        <p className="mt-5 ml-5 text-primary text-left">
          Taste the joy of edible potato plates on our site! From savory
          pancakes to crispy hash browns, we offer mouthwatering options crafted
          with care.
        </p>
        <button className="mt-5 ml-5 rounded-full bg-primary p-3 text-white w-40">
          View Products
        </button>
      </section>
    </div>
  );
}

export default Blog;
