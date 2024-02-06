import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import Kids from "../Svg/Kids";
import Pomme from "../Svg/Pomme";
import Pomme1 from "../Svg/Pomme1";
import Pomme2 from "../Svg/Pomme2";
import Pomme5 from "../Svg/Pomme5";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faSeedling,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
function About() {
  const maskStyle: React.CSSProperties = {
    maskType: "luminance",
  };

  const [showSecondDiv, setShowSecondDiv] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".scaling-section",
      { opacity: 0, x: showSecondDiv ? 100 : 0 },
      {
        opacity: 1,
        x: showSecondDiv ? 0 : 100,
        duration: 3,
        ease: "back.out",
      }
    );
    gsap.fromTo(
      ".scaling-section2",
      { opacity: 0, x: showSecondDiv ? -100 : 0 },
      { opacity: 1, x: showSecondDiv ? 0 : -100, duration: 3, ease: "back.out" }
    );
    gsap.fromTo(
      ".scaling-section3",
      { opacity: 0, x: showSecondDiv ? -200 : 0, y: showSecondDiv ? -200 : 0 },
      {
        opacity: 1,
        x: showSecondDiv ? 0 : -200,
        y: showSecondDiv ? 0 : -200,
        duration: 5,

        ease: "back.out",
      }
    );
    gsap.fromTo(
      ".scaling-section4",
      { opacity: 0, x: showSecondDiv ? -200 : 0, y: showSecondDiv ? 200 : 0 },
      {
        opacity: 1,
        x: showSecondDiv ? 0 : -200,
        y: showSecondDiv ? 0 : -200,
        duration: 5,
        delay: 2,
        rotate: 360,
        ease: "back.out",
      }
    );
    gsap.fromTo(
      ".scaling-section5",
      { opacity: 0, x: showSecondDiv ? -200 : 0, y: showSecondDiv ? 400 : 0 },
      {
        opacity: 1,
        x: showSecondDiv ? 0 : -200,
        y: showSecondDiv ? 0 : -200,
        duration: 5,
        delay: 1,
        rotate: 80,
        ease: "back.out",
      }
    );

    gsap.fromTo(
      ".scaling-section6",
      { opacity: 0, x: showSecondDiv ? -200 : 0, y: showSecondDiv ? 600 : 0 },
      {
        opacity: 1,
        x: showSecondDiv ? 0 : -200,
        y: showSecondDiv ? 0 : -200,
        duration: 10,
        delay: 1,
        rotate: 180,
        ease: "back.out",
      }
    );

    gsap.fromTo(
      ".scaling-section7",
      { x: showSecondDiv ? -200 : 0, y: showSecondDiv ? 600 : 0 },
      {
        x: showSecondDiv ? 0 : -200,
        y: showSecondDiv ? 0 : -200,
        duration: 10,
        delay: 3,
        rotate: 360,
        ease: "back.out",
      }
    );
  }, [showSecondDiv]);

  const toggleSecondDiv = () => {
    setShowSecondDiv(!showSecondDiv);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflow = "hidden";
  };
  const returnToFirstDiv = () => {
    setShowSecondDiv(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="h-screen w-full">
      <Navbar />

      {!showSecondDiv && (
        <>
          <canvas className="hidden lg:block absolute z-10 bg-white opacity-45 w-screen rounded-full top-[30%] h-40 right-20" />
          <div className="lg:left-[15%] top-[50%] lg:top-[15%] absolute z-30 left-[50%] scaling-section2">
            <Kids style={maskStyle} />
          </div>
          <section className="lg:left-[30%] lg:w-[80%] lg:top-[50%] right-[50%] absolute z-40 top-[10%] scaling-section">
            <h1 className="mt-5 font-bold text-6 text-left mx-1 text-pink">
              kids friendly
            </h1>
            <h2 className="font-bold text-6xl text-left text-pink">
              PAS DE VAISSELLE POUR LES PARENTS
            </h2>
            <p className="hidden ml-2 lg:block w-[35%] mt-2 font-bold text-sm text-left text-pink">
              Dites adieu aux corvées de vaisselle avec la vaisselle comestible
              ! Cette solution écologique simplifie notre quotidien en réduisant
              les déchets plastiques tout en ajoutant une touche de plaisir à
              nos repas. Fini les assiettes sales, savourez votre repas jusqu'à
              la dernière bouchée, y compris votre vaisselle !
            </p>
            <button
              className="fixed mt-5 left-2 rounded-full bg-primary hover:bg-pink p-3 text-white w-40"
              onClick={toggleSecondDiv}
            >
              De quoi c'est fait?
            </button>
          </section>
        </>
      )}
      {showSecondDiv && (
        <div className="h-screen w-full">
          <div className=" top-[15%] md:hidden absolute z-30 left-[20%] scaling-section2">
            <Kids style={maskStyle} />
          </div>
          <section className="z-40 lg:left-[50%] absolute z-40 top-[50%] scaling-section">
            <h1 className="mt-4 lg:mt-5 font-bold text-6 text-left lg:text-right mr-12 text-pink">
              Que trois ingrédients!
            </h1>
            <h2 className="font-bold text-6xl lg:text-right text-left mr-10 text-pink">
              DES PRODUITS VEGAN
            </h2>

            <ul className="lg:mt-[5%] lg:text-left md:text-right md:mr-10 mt-2 font-bold text-2xl text-left text-pink">
              <li className="mb-2">
                <FontAwesomeIcon icon={faUtensils} className="mr-2" /> Sel
              </li>
              <li className="mb-2 ">
                <FontAwesomeIcon icon={faSeedling} className="mr-2" /> Légumes
                lyophilisés
              </li>
              <li className="mb-2 ">
                <FontAwesomeIcon icon={faLeaf} className="mr-2" /> Herbes
              </li>
            </ul>
          </section>
          <button
            className="fixed lg:left-[5%] z-40 mt-5 left-4 hover:bg-pink rounded-full bg-primary p-3 text-white w-40"
            onClick={returnToFirstDiv}
          >
            revenir
          </button>
          <canvas className="hidden lg:block absolute z-10 bg-white opacity-45 w-screen rounded-full top-[30%] h-40 right-[50%]" />
          <div className="lg:absolute lg:block lg:top-[20%] lg:left-[10%] z-30 scaling-section7 hidden md:hidden">
            <Pomme5 />
          </div>
          <div className="md:hidden hidden lg:block absolute z-20 top-[15%]">
            <div className="lg:absolute lg:left-[250%] lg:top-[80%] scaling-section5">
              <Pomme />
            </div>
            <div className="lg:absolute lg:left-[280%] scaling-section3">
              <Pomme1 />
            </div>
            <div className="scaling-section6">
              <Pomme2 />
            </div>
            <div className="lg:absolute lg:left-[5%] lg:top-[70%] scaling-section6">
              <Pomme />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
