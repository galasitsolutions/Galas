import PropTypes from "prop-types";
import blogImg from "../../assets/img/product/work.webp";
import { useState } from "react";

const FeatureCard = ({ date, title, content }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section
            className={`card-digital shadow-lg overflow-hidden transition-transform transform-gpu ${isHovered ? "bg-blue-800 text-white" : "bg-white text-black"
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-labelledby={title}
            aria-describedby={content}
        >
            <article className="card-content  divide-x-2 divide-slate-300 flex flex-col h-full">
                <div>
                    <img
                        src={blogImg}
                        alt="blog image showcasing companies Blogs"
                        className="object-cover aspect-squre shadow-sm sm:h-[30vh] md:h-[30vh]"
                        loading="lazy"
                        width={350}
                        height={150}
                    />
                </div>
                <div className="p-4">
                    <p id={date} className="font-thin mb-2 text-gray-400 text-sm"><small>{date}</small></p>
                    <h4 id={title} className="card-heading mb-2 font-bold text-lg">
                        {title}
                    </h4>
                    <p id={content} className="font-thin text-gray-400 text-sm flex-grow">
                        {content}
                    </p>
                    <div className="section-space"></div>
                </div>
            </article>
        </section>
    );
};

FeatureCard.propTypes = {
    date: PropTypes.string,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default FeatureCard;