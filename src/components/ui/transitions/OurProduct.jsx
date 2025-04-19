import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import wromise from "../../../assets/img/icons/wromise.png";
import galas from "../../../assets/img/icons/galas.webp";
import Ankikerris from "../../../assets/img/icons/Ankikerris2.png";
import sledge from "../../../assets/img/icons/BrandLogo.png";

const originalProducts = [
  {
    name: "Wromise",
    logo: wromise,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Galas Entertainment",
    logo: galas,
    description: "Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    name: "Anki Kerris",
    logo: Ankikerris,
    description: "Cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    name: "Sledge",
    logo: sledge,
    description: "Donec quam felis, ultricies nec, pellentesque eu.",
  },
];

const OurProduct = () => {
  const duplicatedProducts = [
    ...originalProducts,
    ...originalProducts,
    ...originalProducts,
  ];
  const middleIndex = Math.floor(duplicatedProducts.length / 3);
  const [activeIndex, setActiveIndex] = useState(middleIndex);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (activeIndex <= 1) {
      setTimeout(() => {
        setActiveIndex(middleIndex + 1);
      }, 300);
    } else if (activeIndex >= duplicatedProducts.length - 2) {
      setTimeout(() => {
        setActiveIndex(middleIndex - 1);
      }, 300);
    }
  }, [activeIndex, middleIndex, duplicatedProducts.length]);

  return (
    <div className="container bg-black py-16 px-4 text-center">
      <h4 className="text-sm uppercase tracking-widest mb-2 text-white">
        Our Products
      </h4>
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        Next Innovations
      </h2>
      <p className="max-w-3xl mx-auto text-white">
        We collaborate closely with our team and clients to research, develop,
        and deliver innovative, reliable, and user-focused software solutions.
      </p>

      <div className="flex items-center justify-center mt-12">
        <div className="relative flex justify-center items-center w-full max-w-6xl h-[400px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(50% - ${activeIndex * 200}px))`,
            }}
          >
            {duplicatedProducts.map((product, index) => {
              const offset = index - activeIndex;
              const isActive = index === activeIndex;
              const scale = isActive ? "scale-100" : "scale-95";
              const opacity = Math.abs(offset) > 2 ? "opacity-0" : "opacity-70";

              return (
                <div
                  key={index}
                  className={`relative group transition-all duration-500 ease-in-out transform ${scale} ${opacity} ${
                    isActive ? "z-10" : "z-0"
                  }`}
                  style={{
                    transform: `translateX(${offset * 200}px)`,
                  }}
                >
                  <div className="bg-gradient-to-tr from-blue-700 to-indigo-800 rounded-2xl p-6 w-60 h-64 text-white text-center flex flex-col items-center justify-center shadow-lg transition-transform duration-300 transform group-hover:scale-110 group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] relative overflow-hidden">
                    <img
                      src={product.logo}
                      alt={product.name}
                      className="w-16 h-16 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
                    />
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-blue-100">
                      {product.description}
                    </p>

                    {/* Hover Arrow Overlay */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
