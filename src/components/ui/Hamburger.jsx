// src/components/ui/Hamburger.jsx
import PropTypes from "prop-types";

const Hamburger = ({ barMidRef }) => {
  return (
    <div
      className="menu-icon flex flex-col justify-between items-center"
      id="toggle"
      aria-hidden="true"
      aria-label="Toggle Menu"
    >
      <span className="bar"></span>
      <span className="bar bar-mid" ref={barMidRef}></span> {/* Apply ref */}
      <span className="bar"></span>
    </div>
  );
};

Hamburger.propTypes = {
  barMidRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

export default Hamburger;
