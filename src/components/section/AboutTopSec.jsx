import React from "react";
import ServicesCard from "../ui/ServicesCard";

const heading = {
  description: "Galas IT Solution is a leading provider of digital marketing services, IT solutions, and staffing services that empower businesses to thrive in today’s digital landscape. With years of industry experience, we specialize in offering innovative and results-driven solutions tailored to meet the unique needs of our clients.Our core mission is to deliver value through expertise, ensuring that businesses achieve their goals through cutting-edge technology, data-driven marketing strategies, and expert talent acquisition. From SEO management to IT consulting, we provide comprehensive solutions that enhance your business performance and maximize ROI.",
}

const Ranking = [{
  description: "High-ranking keywords are those with broad appeal and strong competition. They can drive significant traffic but will require substantial SEO efforts, such as SEO services, PPC advertising, and web development. Investing in content quality, backlink strategies, and ongoing optimization is essential to compete effectively in this space. Additionally, businesses must stay current with search engine algorithms and trends to maintain visibility."
}, {
  description: "Medium-ranking keywords are moderately competitive but still valuable for driving niche traffic. They often represent specific interests or needs, allowing businesses to connect with target audiences more effectively. Examples include email marketing campaigns and IT project management. Leveraging targeted content marketing and social media engagement can enhance visibility for these keywords, making them a worthwhile investment for growing brands."
}, {
  description: "Low-ranking keywords typically have less competition, making it easier to rank for them. Although traffic may be lower, they can attract highly targeted audiences who are looking for specific solutions. Examples include contract-to-hire services and website maintenance services. Focusing on long-tail keywords and local SEO strategies can help businesses capitalize on these opportunities, leading to higher conversion rates despite the lower traffic volume."
}];

const AboutTopSec = () => {
  return (
        <>
        <div className="about-us container mx-auto px-4">
          <div className="about-inner flex justify-center items-center flex-col p-2">

            <div className="section-space"></div>

            <div className="flex flex-col lg:flex-row p-1">

              <div className="flex flex-col p-1 gap-10">
                <div className="flex flex-col justify-center">
                <h2 id="hero-heading" className=" font-heading font-semibold  mb-4"> Empowering Your{" "}
                                    <span style={{ color: "#2563eb" }}>Success <br /></span>{" "}in the <span style={{ color: "#2563eb" }}> Digital Era</span>{" "}
                                    </h2>
                  <p className="p-2 content sm:text-justify hyphens-auto">{heading.description}</p>
                </div>
              </div>
              <div className="about-img flex flex-col pl-15">
                <div className="flex p-5">
                  <img
                    src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="About image showcasing companies description"
                    className="rounded-2xl object-cover shadow-sm aspect-squre shadow-sm sm:h-[50vh] md:h-[50vh]"
                    loading="lazy"
                    width={3500}
                    height={1000}
                  />
                </div>
                <div className="section-space"></div>
              </div>
            </div>
            </div>
           </div>
            </>
  );
};
export default AboutTopSec;

