import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import Kids from "../Svg/Kids";
import { gsap } from "gsap";

function About() {
  const maskStyle: React.CSSProperties = {
    maskType: "luminance",
  };
  useEffect(() => {
    gsap.fromTo(
      ".scaling-section",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 3, ease: "back.out" }
    );
    gsap.fromTo(
      ".scaling-section2",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 3, ease: "back.out" }
    );
  }, []);
  return (
    <div className="h-screen w-full">
      <Navbar />
      <canvas className="fixed z-10 bg-white opacity-45 w-40 h-screen right-20"></canvas>
      <div className="absolute z-30 left-[19%] scaling-section2">
        <Kids style={maskStyle} />
      </div>
      <section className="absolute z-40 top-[50%] scaling-section">
        <h1 className="mt-5 font-bold text-6 text-left mx-1 text-primary">
          kids friendly
        </h1>
        <h2 className="font-bold text-6xl text-left text-primary">
          PAS DE VAISSELLE POUR LES PARENTS
        </h2>
        <button className="fixed mt-5 left-2 rounded-full bg-primary p-3 text-white w-40">
          De quoi c'est fait?
        </button>
      </section>
    </div>
  );
}

export default About;
