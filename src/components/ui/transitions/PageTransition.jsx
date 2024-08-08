import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PageTransition = ({ children }) => {
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 }
    );

    return () => {
      tl.to(containerRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        onComplete: () => {
          tl.set(containerRef.current, { opacity: 1, y: 0 });
        },
      });
    };
  }, [location.pathname]);

  return <div ref={containerRef}>{children}</div>;
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
