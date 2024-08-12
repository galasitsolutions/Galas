import PropTypes from "prop-types";
import useCircularText from "../../hooks/useCircularText"; // Adjust the path as needed

export default function CircleText({ circleText }) {
  // Use the custom hook with the selector for the circular text
  useCircularText(".circular-text");

  return (
    <div className="circle-box hidden sm:block md:block lg:block">
      <div className="circle h-20 w-20 bg-blue-600 rounded-full">
        <a href="#">
          <div className="circular-text">{circleText}</div>
        </a>
      </div>
    </div>
  );
}

CircleText.propTypes = {
  circleText: PropTypes.string.isRequired,
};
