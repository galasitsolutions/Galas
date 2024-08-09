import PropTypes from "prop-types";

export default function CircleText({ circleText }) {
  return (
    <div className="circle-box hidden sm:block  md:block lg:block">
      <div className="circle h-20 w-20  bg-blue-600 rounded-full">
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
