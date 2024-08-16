import PropTypes from "prop-types";
import Button from "./Button";

const Card = ({ title, description, features }) => {
  return (
    <section className="card-digital  bg-white rounded-lg shadow-lg overflow-hidden hover:bg-blue-800 hover:text-white transition-transform transform-gpu hover:scale-105">
      <article className="card-content flex flex-col gap-6 h-full p-6 ">
        <div className="flex items-center gap-2">
          <div className="list-icon bg-blue-600 w-6 h-6 rounded-full"></div>
          <h4 className="card-heading font-semibold text-lg">{title}</h4>
        </div>
        <p className="font-normal text-sm flex-grow">{description}</p>
        <div className="feature flex flex-col gap-2">
          <h5 className="font-medium text-md">Features</h5>
          <ul className="important flex flex-col gap-2">
            {features.map((feature, index) => (
              <li
                className="important-point flex items-center gap-2"
                key={index}
              >
                <div className="list-icon bg-blue-600 w-4 h-4 rounded-full"></div>
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
