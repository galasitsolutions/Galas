import PropTypes from "prop-types";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "./Button";

const AboutUsContent = ({ title, heading, description, points }) => {
  return (
    <div className="about-content flex-1">
      <article className="content flex flex-col items-start gap-4">
        <p className="section-title">
          <span className="line bg-blue-800 font-semibold"></span> {title}
        </p>
        <div className="about-des flex flex-col gap-2">
          <h2 className="content-heading font-heading font-semibold">
            {heading}
          </h2>
          <p className="content sm:text-justify hyphens-auto">{description}</p>
        </div>
        <ul className="important flex flex-col gap-2">
          {points.map((point, index) => (
            <li
              key={index}
              className="important-point flex gap-2.5 justify-start items-center"
            >
              <CheckCircleIcon className="text-blue-600" />
              <p>{point}</p>
            </li>
          ))}
        </ul>
        <div className="product-btn">
          <Button text="Learn More" />
        </div>
      </article>
    </div>
  );
};

AboutUsContent.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  description: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AboutUsContent;
