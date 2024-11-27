import {useState} from "react";
import PropTypes from "prop-types";
import StarIcon from "@mui/icons-material/Star"; // For ranking visualization

const PrimaryKeyCard = ({ title, ranking, description, icons }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (

        <section
                className={`card-digital rounded-lg shadow-lg transition-transform transform-gpu w-70 flex justify-center ${isHovered ? "h-70 bg-blue-800 text-white" :"h-70"
                    }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-labelledby={title}
            >
        <article className="card-content flex flex-col gap-4 md:h-80 h-60 md:pt-20 space-between p-4">
            <div className="feature flex flex-row">
    
            {/* <div className="title-section flex">
                    {icons}</div> */}
                <h3 className="text-lg font-bold">{title}</h3>
                </div>
         
            <p className="text-md text-slate-100 leading-6">
                {description}
            </p>
            

           
            <div className="ranking flex items-center gap-2">
                
                <div className="flex items-center gap-1">
                   
                    {Array.from({ length: ranking === "High" ? 4 : ranking === "Medium" ? 3 : 2 }, (_, i) => (
                        <StarIcon key={i} className="Rating text-yellow-400 " sx={{ fontSize: '20px' }} />
                    ))}
                </div>
                <span className="text-sm font-light">({ranking})</span>
            </div>
            
        </article>
        </section>
    );
};

PrimaryKeyCard.propTypes = {
    title: PropTypes.string.isRequired,
    ranking: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icons:PropTypes.node.isRequired,
};

export default PrimaryKeyCard;
