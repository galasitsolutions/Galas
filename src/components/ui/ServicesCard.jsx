import React from "react";
import PropTypes from "prop-types";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
 
 
const ServicesCard = ({ subhead, desc, Icon, features }) => {
  return (
    <>
      <section>
        <div
          className="card-content flex flex-col gap-4 h-full min-h-[230px] p-6 border border-white/20 rounded-2xl bg-gradient-to-br from-[#1e40af] to-[#3b82f6] text-white hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.15)] transition-shadow duration-300 ease-in-out hover:scale-105 z
          duration-400 w-full max-w-[340px] mx-auto"
        >
          <div className="feature flex flex-col gap-4">
            <div>
              <Icon className="text-blue-200 w-6 h-6" />
            </div>
            <div className="flex flex-row items-center gap-3">
              <h4 className="font-bold text-lg">{subhead}</h4>
            </div>
            <p className="text-sm text-gray-300">{desc}</p>
 
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-200 text-center">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 ">
                  <span className="text-white">
                    <CheckCircleIcon />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
 
ServicesCard.propTypes = {
  subhead: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired, // For passing icon components
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};
 
export default ServicesCard;