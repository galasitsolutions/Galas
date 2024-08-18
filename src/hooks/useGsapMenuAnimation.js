import { useEffect, useRef } from "react";
import gsap from "gsap";

const useGsapMenuAnimation = (isMenuOpen) => {
  const menuRef = useRef(null);
  const barMidRef = useRef(null);

  useEffect(() => {
    const menuElement = menuRef.current;
    const barMidElement = barMidRef.current;

    const isSmallScreen = window.matchMedia("(max-width: 1024px)").matches;

    if (menuElement) {
      if (isSmallScreen) {
        gsap.to(menuElement, {
          y: isMenuOpen ? "0%" : "-150%",
          opacity: isMenuOpen ? 1 : 1,
          duration: isMenuOpen ? 0.3 : 0,
          ease: isMenuOpen ? "power2.out" : "power2.in",
          onComplete: () => {
            menuElement.style.pointerEvents = isMenuOpen ? "auto" : "none";
          },
        });
        menuElement.style.transform = `translateY(${
          isMenuOpen ? "0%" : "-150%"
        })`;
      } else {
        gsap.set(menuElement, {
          y: "0%",
          opacity: 1,
        });
        menuElement.style.pointerEvents = "auto";
        menuElement.style.transform = "none";
      }
    }

    if (barMidElement) {
      gsap.to(barMidElement, {
        marginRight: isMenuOpen ? "30px" : "0px",
        marginLeft: isMenuOpen ? "0px" : "10px",
        duration: isMenuOpen ? 0.3 : 0,
      });
    }
  }, [isMenuOpen]);

  return [menuRef, barMidRef];
};

export default useGsapMenuAnimation;
