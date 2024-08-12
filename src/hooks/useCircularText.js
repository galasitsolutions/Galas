// src/hooks/useCircularText.js
import { useEffect } from "react";
import CircleType from "circletype"; // Ensure this package is installed

const useCircularText = (selector) => {
  useEffect(() => {
    const element = document.querySelector(selector);
    if (element) {
      const circleTypeInstance = new CircleType(element);
      circleTypeInstance.radius(30).dir(-1).forceWidth(true);
      if (typeof circleTypeInstance.fitText === "function") {
        circleTypeInstance.fitText();
      }
    }
  }, [selector]);
};

export default useCircularText;
