import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ textItems }) => {
  const duplicatedTextItems = [
    ...textItems,
    ...textItems,
    ...textItems,
    ...textItems,
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap bg-blue-600 py-1">
      <motion.div
        className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 items-center text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white"
        variants={marqueeVariants}
        animate="animate"
      >
        {duplicatedTextItems.map((item, index) => (
          <span
            key={index}
            className="inline-block uppercase font-extrabold content-heading"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
