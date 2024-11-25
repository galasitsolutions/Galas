import blogImg from "../../assets/img/product/work.webp";
import {useEffect,useState} from "react";
import BlogCard from "./BlogCard";
import axios from "axios";




const OurblogContent = () => {

    const [blog_Data, setMy_Data] = useState([]);
const [isError, setIsError] = useState("");

const getApi_Data = async () => {
    try {
        const res = await axios.get("https://galasback.onrender.com/api/post/all-blogs");
        setMy_Data(res.data);
        console.log(res);
    } catch (error) {
        setIsError(error.message);
    }
};

useEffect(() => {
    getApi_Data();
}, []);

    return (
        <>
             <section className="container mx-auto px-4 flex flex-col gap-10 lg:flex-row justify-center items-stretch">
                        <div className="info-box flex items-center">
                            <article className="content flex flex-col items-center text-center gap-6">
                                <p className="section-title p-4r"> <span className="line bg-blue-800 font-semibold"></span>Our Blogs</p>
                                <h2 id="hero-heading" className=" font-heading font-semibold  mb-4"> We re{" "}
                                    <span style={{ color: "#2563eb" }}>Bridging Talented<br></br> Vision for</span>{" "}
                                    Unmatched Success</h2>
                            </article>
                        </div>
                    </section>
            <section className="blogContent container mx-auto  flex gap-6 flex-row lg:flex-row justify-start items-stretch relative">
                <div className="section-space"></div>
                <div className="content flex flex-row items-center justify-center text-center gap-6 relative">
                   

                    <div className="content flex-row items-center text-start relative">
                        <div className="content flex flex-col lg:flex-row justify-start p-2 basis-5/2 text-center gap-10 relative">
                            <div className="content  flex flex-col items-start text-start">
                                <div className="content flex flex-col text-start gap-6">
                                    
                                    {isError && <h2>{isError}</h2>}
                                    
                                    {blog_Data.slice(0,1).map((post) => {
                                                     const { _id,imageUrl,createdAt, title, content } = post;
                                        return( <div key={_id}>
                                            <div className="content pt-4 flex flex-col items-start text-start">
                                        <img
                                            src={imageUrl}
                                            alt="blog image showcasing companies description"
                                            className=" object-cover shadow-sm w-full" /* h-full sm:h-[60vh] md:h-[60vh] */
                                            loading="lazy"
                                         /*    width={1800}
                                            height={900} */
                                        />
                                    </div>
                                            <div className="p-2" >
                                        <p className="font-thin mb-2 text-gray-400 text-sm"><small>{createdAt}</small></p>
                                        <p><a href="" className="font-bold mb-2">{title}</a></p>
                                        <p className="font-thin bg-gray mt-2 text-sm">{content}</p>
                                        </div></div>);
                                    })}
                                    
                                </div>
                            </div>
                            <div className="content items-start  flex flex-col justify-start text-start">
                                <div className="blog-inner flex justify-end items-start flex-col gap-4 flex-col lg:flex-row">
                                    <section className="features relative ">
                                        <div className="feature-card flex flex-col lg:flex-row  "> {/* grid grid-rows-1 lg:grid-rows-3 */}
                                        {isError && <h2>{isError}</h2>}
                                            <div className=" flex flex-col ">
                                                {blog_Data.slice(1,4).map((post) => {
                                                     const { _id,imageUrl,createdAt, title, content } = post;
                                                return (<BlogCard key={_id}
                                                    imageUrl={imageUrl}
                                                    createdAt={createdAt}
                                                    title={title}
                                                    content={content}>{title}</BlogCard>);
                                                })}
                                            </div>
                                            
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-space"></div>
            </section >
        </>
    );
};

export default OurblogContent;
