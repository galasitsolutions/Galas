import PropTypes from "prop-types";

export default function Button({ text }) {
  return (
    <button className="btn  font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-3xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};



