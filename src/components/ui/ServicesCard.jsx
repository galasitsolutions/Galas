import PropTypes from "prop-types";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

const ServicesCard = ({ title, points, subhead, desc }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <section
                className={`card-digital rounded-lg shadow-lg overflow-hidden transition-transform transform-gpu ${isHovered ? "bg-blue-800 text-white" : "bg-white text-black"
                    }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-labelledby={title}
            >
                <article className="card-content flex flex-col gap-4 h-full p-4">

                    <div className="feature flex flex-col gap-8">
                        <h4 className="font-bold text-start text-lg pt-5 p-2">{title}</h4>
                        <ul className="important flex flex-col gap-2">
                        {points.map((point, index) => (
                            <li
                                className="important-point flex flex-col items-start gap-2 p-2"
                                key={index}
                            >
                                    <div className="flex flex-row items-center gap-2">
                                    <CheckCircleIcon
                                className={`text-blue-600 ${isHovered ? "text-white" : "text-center"}`}
                            />
                                <h5 className=" font-bold md:font-medium text-sm lg:text-lg">{point.subhead}</h5>
                                    </div>  
                                {/* </div> */}

                                <div className="flex flex-col">
                                    
                                    <p className="md:text-sm text-xs">{point.desc}</p>
                                </div>
                            </li>
                        ))}
                                
                        </ul>
                    </div>
                </article>
            </section>
        </>
    );
}

ServicesCard.propTypes = {
    title: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(
        PropTypes.shape({
            subhead: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
            icons: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ServicesCard;