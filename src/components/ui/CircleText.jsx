import PropTypes from "prop-types";
import useCircularText from "../../hooks/useCircularText";

export default function CircleText({ circleText }) {
  useCircularText(".circular-text");

  return (
    <div className="circle-box hidden md:block lg:block">
      <div className="circle h-20 w-20 bg-blue-600 rounded-full">
        <a href="#" aria-label="Circular Text Link">
          <div className="circular-text">{circleText}</div>
        </a>
      </div>
    </div>
  );
}

CircleText.propTypes = {
  circleText: PropTypes.string.isRequired,
};
