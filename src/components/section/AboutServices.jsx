import React from "react";
import ServicesCard from "../ui/ServicesCard";
const servicesData = [
  {
    title: "Digital Marketing Services",
    points: [
      {
        subhead: "SEO Management",
        desc: " Improve your website's search engine ranking and drive organic traffic with our expert SEO services, designed to increase visibility on search engines like Google.",
        icons: ">", // <span>🔍</span>
      },
      {
        subhead: "PPC (Pay-Per-Click) Advertising",
        desc: " Create high-quality, targeted ads that drive traffic to your website, increasing website traffic and revenue.",
        icons: <span>🎯</span>,
      },
      {
        subhead: "Content Marketing",
        desc: " Develop and manage content that resonates with your audience, driving traffic and increasing website traffic and revenue.",
        icons: <span>📝</span>,
      },
      {
        subhead: "Social Media Management",
        desc: " Build strong connections with your audience through tailored social media marketing strategies, boosting brand awareness and engagement.",
        icons: <span>📱</span>,
      },
      {
        subhead: "Email Campaign Management",
        desc: " Generate leads and improve customer retention through personalized email marketing campaigns that are crafted to drive action.",
        icons: <span>📧</span>,
      },
      {
        subhead: "Website Maintenance",
        desc: "  Keep your website running smoothly with our website maintenance services, ensuring optimal performance, security, and user experience.",
        icons: <span>⚙️</span>,
      },
    ],
  },
  {
    title: "IT Services",
    points: [
      {
        subhead: "IT Consulting",
        desc: "Empower your business with strategic IT consulting services, helping you implement scalable and efficient IT infrastructure.",
        icons: <span>💻</span>,
      },
      {
        subhead: "Mobile Application Development",
        desc: "Create impactful and user-friendly mobile apps that drive customer engagement on iOS and Android platforms.",
        icons: <span>📱</span>,
      },
      {
        subhead: "Web Development",
        desc: "Build fast, secure, and responsive websites with our comprehensive web development services, tailored to meet your business objectives.",
        icons: <span>🌐</span>,
      },
      {
        subhead: "IT Project Management",
        desc: "Ensure the success of your projects with our expert IT project management services, from planning and execution to completion.",
        icons: <span>📋</span>,
      },
    ],
  },
  {
    title: "Staffing Services",
    points: [
      {
        subhead: "Permanent Staffing",
        desc: "Find the perfect fit for your long-term roles with our professional permanent staffing services, ensuring the right talent matches your organization’s needs.",
        icons: <span>👔</span>,
      },
      {
        subhead: "Contract Staffing",
        desc: "Meet your short-term or project-based staffing requirements with our contract staffing solutions, providing skilled professionals on demand.",
        icons: <span>📄</span>,
      },
      {
        subhead: "Contract to Hire",
        desc: "Evaluate potential hires before making permanent commitments with our flexible contract-to-hire services, ensuring you hire the best fit for your team.",
        icons: <span>🔄</span>,
      },
    ],
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
                Our included<span className="text-blue-500"> Services</span>
              </h2>
              <p className="text-xs text-center">
                Delivering expert solutions tailored to meet your unique
                business needs.
              </p>
            </article>
          </div>

          <div className="section-space"></div>
          <section className="services relative">
            <div className="services-card grid grid-cols-1 lg:grid-cols-3 gap-4">
              {servicesData.map((service, index) => (
                <ServicesCard
                  key={index} // Use unique identifier for key
                  title={service.title}
                  points={service.points}
                />
              ))}
            </div>
            <div className="section-space"></div>
          </section>
        </div>
        <div className="section-space-inner"></div>
      </section>
    </>
  );
};

export default AboutServices;
