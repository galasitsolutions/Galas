import React from "react";
import ServicesCard from "../ui/ServicesCard";
 
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import BusinessIcon from "@mui/icons-material/Business";
 
const digitalmarketing = [
  {
    subhead: "Software Development",
    desc: "Building scalable and efficient software solutions.",
    features: ["Web Development", "App Development", "UI/UX Designing"],
    icon: ManageHistoryIcon,
  },
  {
    subhead: "AI-Driven Strategy & Solutions",
    desc: "AI experts design intelligent systems that solve complex problems.",
    features: [
      "Machine learning Models",
      "Intelligent Automation",
      "Data Analytics & Insights",
    ],
    icon: AdUnitsIcon,
  },
  {
    subhead: "DeepTech Talent Solutions",
    desc: "DeepTech environments, ensuring your projects move forward with clarity and expertise.",
    features: [
      "Specialized Tech Hiring",
      "AI/ML Engineering Talent",
      "End-to-End Talent Acquisition",
    ],
    icon: BusinessIcon,
  },
 
];
const AboutServices = () => {
  return (
    <>
      <div className="section-space"></div>
      <section
        id="about-services"
        className="product relative bg-neutral-200 text-black"
      >
        <div className="product-inner container mx-auto px-4 flex flex-col">
          <div className="product flex justify-center items-center p-2 lg:p-4 lg:gap-2"></div>
          <div className="product flex justify-center items-center p-2 lg:p-4 lg:gap-2">
            <article className="relative flex flex-col">
              <h2 className="content-heading text-center font-heading font-semibold">
                <span className="text-blue-500"> Technologies</span> We Use
              </h2>
              <p className="text-xs text-center">
                Delivering expert solutions tailored to meet your unique
                business needs.
              </p>
            </article>
          </div>
 
          <div className="section-space"></div>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {digitalmarketing.map((service, index) => (
              <div
                key={index}
                className={`relative ${
                  index === 1 || index === 4 ? "lg:-mt-10" : ""
                } transition-transform duration-300`}
              >
                <ServicesCard
                  subhead={service.subhead}
                  desc={service.desc}
                  Icon={service.icon}
                  features={service.features}
                />
              </div>
            ))}
          </section>
        </div>
        <div className="section-space-inner"></div>
      </section>
    </>
  );
};
 
export default AboutServices;