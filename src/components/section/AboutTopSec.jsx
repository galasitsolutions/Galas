import React from "react";
import Aboutbanner from "../../assets/img/icons/About-banner.webp";
 
const heading = {
  description:
    "Galas IT Solution is a leading provider of advanced technology solutions, specializing in software development, deeptech innovation, and AI-driven strategies that help businesses thrive in today’s fast-evolving digital world. With a solid foundation of industry expertise, we deliver intelligent, scalable, and forward-thinking solutions tailored to meet the unique challenges of our clients across sectors like healthcare, cybersecurity, and banking.Our core mission is to drive transformation through technology—empowering organizations to innovate, scale, and lead. Whether it’s building intelligent systems, streamlining operations through smart software, or delivering impactful tech talent, we ensure measurable value, innovation, and long-term growth.",
};
 
const AboutTopSec = () => {
  return (
    <>
    <div className=" overflow-hidden">
      <section className="about-us container mx-auto pl-4">
 
          <article className="about-inner flex flex-col lg:flex-row">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Text Section */}
              <div className="flex flex-col justify-center lg:w-7/12 gap-6 pr-4">
                <h2 id="hero-heading" className="font-heading font-semibold text-3xl lg:text-4xl mb-4">  Empowering Your{" "}
                    <span style={{ color: "#2563eb" }}>Success <br /></span>in the <span style={{ color: "#2563eb" }}>Digital Era</span>
                </h2>
                <p className="p-2 content sm:text-justify hyphens-auto">
                  {heading.description}
                </p>
              </div>
              <div className="about-img lg:w-5/12">
              <div className="relative overflow-hidden xl:left-36 flex justify-end ">
                <div className="relative w-[80vw] md:w-full aspect-square overflow-hidden lg:rounded-full lg:-top-24 lg:left-20">

                  <img src={Aboutbanner} alt="About image showcasing companies description" className="w-full h-full object-cover relative" loading="lazy"/>
                  <div className="absolute lg:top-5 left-28 top-32 xl:left-32 xl:top-40 lg:left-40 lg:w-60 lg:h-60 h-[70%] w-[70%] lg:rounded-full border-opacity-100 border-[20px] border-[#151515]">
                    <div className="absolute top-0 left-0 w-full h-full opacity-0 rounded-full"></div>
                  </div>
                </div>

                <div className="section-space"></div>
                </div>
              </div>
            </div>
          </article>
      </section>
      </div>
    </>
  );
};
 
export default AboutTopSec;