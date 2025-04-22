import React from "react";
import PropTypes from "prop-types";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const IndustriesCards = ({ title, desc, features }) => {
  return (
    <section>
      <div className="card-content flex flex-col gap-4 h-full min-h-[230px] p-6 border border-white/20 rounded-2xl bg-[rgba(183,176,176,0.1)] text-white hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.15)] transition duration-300 ease-in-out hover:scale-105 w-full max-w-[340px] mx-auto backdrop-blur-md">
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg">{title}</h4>
          <p className="text-sm text-gray-300">{desc}</p>

          <ul className="list-none list-inside space-y-1 text-sm text-gray-200">
            {features.map((feature, index) => (
              <li key={index}>
                <span className="text-blue-200 p-3">
                  <CheckCircleIcon />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

IndustriesCards.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IndustriesCards;
