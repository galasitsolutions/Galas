import blogImg from "../../assets/img/product/work.webp";
import {useEffect,useState} from "react";
import BlogCard from "./BlogCard";
import axios from "axios";

// const BlogData = [
//     {
//         id: 1,
//         date: "October 10,2024",
//         title: "IT Product Development",
//         description:
//             "We offer product features based on your specifications, produce MVPs, and develop in Agile. We analyze, develop, and develop a precise product that is targeted to your objectives.",
//     },
//     {
//         id: 2,
//         date: "October 11,2024",
//         title: "IT Staffing",
//         description:
//             "Staffing, about finding the right person for the job, not just the requirements. We thrive in matching people with your team's culture and work ethic, from the C-suite to entry-level positions.",
//     },
//     {
//         id: 3,
//         date: "October 12,2024",
//         title: "Digital Marketing",
//         description:
//             "Our skilled experts develop personalized digital marketing plans that are aligned with your company's objectives, leveraging the newest trends to achieve strategic, measurable results.",
//     },
// ];



const OurblogContent = () => {

    const [blog_Data, setMy_Data] = useState([]);
const [isError, setIsError] = useState("");

const getApi_Data = async () => {
    try {
        const res = await axios.get("http://localhost:3000/api/post/all-blogs");
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
                                <p className="section-title p-4r"> <span className="line bg-blue-800 font-semibold"></span>OUR BLOGS</p>
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
                        <div className="content flex flex-col lg:flex-row justify-start p-2 text-center gap-10 relative">
                            <div className="content  flex flex-col p-4 items-start text-start">
                                <div className="content flex flex-col text-start gap-6 ">
                                    <div >
                                        <img
                                            src={blogImg}
                                            alt="blog image showcasing companies description"
                                            className=" object-cover shadow-sm w-full" /* h-full sm:h-[60vh] md:h-[60vh] */
                                            loading="lazy"
                                         /*    width={1800}
                                            height={900} */
                                        />
                                    </div>
                                    <div className="p-2">
                                        <p className="font-thin mb-2 text-gray-400 text-sm"><small>October 4,2024</small></p>
                                        <p><a href="" className="font-bold mb-2"> We re
                                            Bridging Talented Vision for
                                            Unmatched Success</a></p>
                                        <p className="font-thin bg-gray mt-2 text-sm">Lorem ipsum dolor sit amet
                                             consectetur adipisicing elit. Facilis veniam at,magni distinctio delectus unde cumque adipisci.br Quos nisi, reprehenderit culpa sunt sint eveniet error eligendi dignissimos quae? Repudiandae, unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aspernatur!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="content items-start  flex flex-col justify-start text-start">
                                <div className="blog-inner flex justify-end items-start flex-col gap-4  lg:flex-row">
                                    <section className="features relative ">
                                        <div className="feature-card flex flex-col lg:flex-row  "> {/* grid grid-rows-1 lg:grid-rows-3 */}
                                        {isError && <h2>{isError}</h2>}
                                            <div className=" flex flex-col ">
                                                {blog_Data.slice(0,3).map((post) => {
                                                     const { _id, title, content,imageUrl } = post;
                                                return (<BlogCard key={_id}
                                                    title={title}
                                                    description={content} ></BlogCard>);
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
