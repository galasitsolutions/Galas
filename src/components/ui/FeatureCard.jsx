import PropTypes from "prop-types";
import { useState } from "react";

const FeatureCard = ({createdAt , title, content, author, imageUrl}) => {
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
                        src={imageUrl}
                        alt="blog image showcasing companies Blogs"
                        className="object-cover aspect-squre shadow-sm sm:h-[30vh] md:h-[30vh]"
                        loading="lazy"
                        width={350}
                        height={150}
                    />
                </div>
                <div className="p-4">
                <p id={createdAt} className="font-thin mb-2 text-gray-400 text-sm"><small>{createdAt}</small></p>
                    <h4 id={title} className="card-heading blogContent mb-2 font-bold text-lg">
                        {title}
                    </h4>
                    <p id={content} className="font-normal  text-gray-400 text-sm flex-grow blogContent">
                        {content}
                    </p>
                    <p id={author} className="font-semibold mb-2 text-gray-800 text-md"><small>- {author}</small></p>
                </div>
                {/* <div className="section-space"></div> */}
            </article>
        </section>
    );
};

FeatureCard.propTypes = {
    createdAt: PropTypes.string,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageUrl:PropTypes.string.isRequired,
};

export default FeatureCard;