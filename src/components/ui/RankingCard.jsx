import PropTypes from "prop-types";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

const RankingCard = ({ title, desc, icons }) => {
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

                    <div className="feature flex flex-col gap-4">
                        <div className="flex flex-row items-center justify-start text-start">
                            <CheckCircleIcon
                                className={`text-blue-600 ${isHovered ? "text-white" : "justify-center"}`}
                            />
                            {/* <div className=" flex justify-center rounded-full bg-blue-600 p-1">{icons}</div> */}
                            <h5 className="font-bold text-start flex justify-center text-md px-2">{title}</h5>
                        </div>
                        {/* <p className="flex text-start justify-center p-1">{desc}</p> */}
                        {desc.map((paragraph, index) => (
                            <p key={index} className="mb-2">
                                {paragraph}.
                            </p> // Add period back for each sentence
                        ))}
                    </div>
                </article>
            </section>
        </>
    );
}

RankingCard.propTypes = {
    icons: PropTypes.node,
    title: PropTypes.string.isRequired,
    desc: PropTypes.array.isRequired,
};

export default RankingCard;