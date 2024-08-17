import PropTypes from "prop-types";
import Button from "./Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

const Card = ({ title, description, features }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={`card-digital bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform-gpu ${
        isHovered ? "bg-blue-800 text-white" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-labelledby={title}
      aria-describedby={description}
    >
      <article className="card-content flex flex-col gap-4 h-full p-4">
        <div className="flex items-center gap-2">
          <CheckCircleIcon
            className={`w-6 h-6 ${isHovered ? "text-white" : "text-blue-600"}`}
          />
          <h4 id={title} className="card-heading font-semibold text-lg">
            {title}
          </h4>
        </div>
        <p id={description} className="font-normal text-sm flex-grow">
          {description}
        </p>
        <div className="feature flex flex-col gap-2">
          <h5 className="font-medium text-md">Features</h5>
          <ul className="important flex flex-col gap-2">
            {features.map((feature, index) => (
              <li
                className="important-point flex items-center gap-2"
                key={index}
              >
                <CheckCircleIcon
                  className={`text-blue-600 ${isHovered ? "text-white" : ""}`}
                />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="product-btn mt-auto">
          <Button text="Learn More" />
        </div>
      </article>
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
