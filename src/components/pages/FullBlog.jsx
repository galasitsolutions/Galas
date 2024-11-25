import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import BlogFullView from "../section/BlogFullView";
import { useParams } from "react-router-dom";
import axios from "axios";


// const HeroBanner = 'https://images.unsplash.com/photo-1729676149044-b20ca7b1caf6?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const Blog = () => {

    const { id } = useParams();
    const [blogs,setBlogs] = useState ({})

    useEffect(()=>{
        const fetchBlog = async () =>{
            try {
                const { data } = await axios.get(`https://galasback.onrender.com/api/post/blog/${id}`,{
                    headers:{"Content-Type": "multipart/form-data"},
                });
                console.log(data);
                setBlogs(data);
            } catch (error) {
                console.log(error)
            }
        };
        fetchBlog();
    }, [id])

    const mainHeading = blogs.title || ''; // Fallback to an empty string if blogs.title is undefined
    const splitHeading = Math.floor(mainHeading.length * 0.7);
    const titleHead = mainHeading.substring(0, splitHeading);
    const titleTail = mainHeading.substring(splitHeading);
    
    console.log(titleHead);
    console.log(titleTail);
    

  return (
    <MainLayout>
      <div className="section-space"></div>
      <section className="product relative bg-neutral-200 text-black">
        {/* <div className="section-space"></div> */}
        <div className="product-inner container mx-auto px-4 flex flex-col">
          <div className="product flex justify-center items-center p-2 lg:p-4 lg:gap-2">
            <article className="relative flex flex-col">
              <h2 className="content-heading text-center font-heading font-semibold">
                {titleHead}<span className="text-blue-500">{titleTail}</span>
              </h2>
              {/* <p className="text-xs text-center">
                Delivering expert solutions tailored to meet your unique
                business needs.
              </p> */}
            </article>
          </div>
          {/* <div className="section-space"></div> */}
          <div className="hero-section-img">
            <div id="scene">
              <div className="w-full h-[25vh] lg:h-[50vh]">
                <img
                  src={blogs.imageUrl}
                  alt="Hero banner showcasing innovative tech solutions"
                  loading="lazy"
                  className="banner-img w-full h-full object-cover"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
          <div className="section-space"></div>
         
         <BlogFullView key={id} content={blogs.content} title={blogs.title} ></BlogFullView> 

        </div>
        <div className="section-space-inner"></div>
      </section>
    </MainLayout>
  );
};

export default Blog;
