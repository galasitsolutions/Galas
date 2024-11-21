import PropTypes from "prop-types";
import blogImg from "../../assets/img/product/work.webp";

const BlogCard = ({ date, title, description }) => {

    return (
        <section className="card-digital  shadow-lg overflow-hidden relative">
              <div className="w-full h-[0.5px] rounded-full bg-slate-800 mb-4"></div>
            <article className="card-content flex flex-col lg:flex-row gap-2">
              
                <div className=" basis-2/5">
                    <img
                        src={blogImg}
                        alt="blog image showcasing companies Blogs"
                        className="object-cover aspect-squre shadow-sm  w-100%"
                        loading="lazy"
                    
                    />
                </div>
                <div className="px-2 pb-2 basis-3/5 flex flex-col">
                    <p id={date} className="font-thin mb-2 text-gray-400 text-sm"><small>{date}</small></p>
                    <h4 id={title} className="card-heading mb-2 font-bold text-lg">
                        {title}
                    </h4>
                    <p id={description} className="font-thin text-gray-400 mb-2 text-sm flex-grow">
                        {description}
                    </p>
                    
                </div>
            </article>
        </section>
    );
};

BlogCard.propTypes = {
    date: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default BlogCard;