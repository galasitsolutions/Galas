import Card from "../ui/Card";

const servicesData = [
  {
    id: 1,
    title: "Software Development",
    description:
      "We build scalable and efficient software solutions tailored to your business goals. From idea validation to MVP development and full-scale deployment, we follow Agile methodologies to ensure speed, flexibility, and quality.",
    features: ["Web & Mobile Development", "Custom Software Solutions", "UI/UX Designing"],
  },
  {
    id: 2,
    title: "DeepTech Talent Solutions",
    description:
      "Finding the right tech talent goes beyond skillsets—it’s about aligning with your innovation-driven culture. We specialize in connecting you with professionals who thrive in DeepTech environments, ensuring your projects move forward with clarity and expertise.",
    features: [
      "Specialized Tech Hiring",
      "AI/ML Engineering Talent",
      "End-to-End Talent Acquisition",
    ],
  },
  {
    id: 3,
    title: "AI-Driven Strategy & Solutions",
    description:
      "Our AI experts design intelligent systems that solve complex problems, optimize operations, and unlock new business opportunities. From data-driven decision making to smart automation, we deliver AI solutions that drive impact.",
    features: ["Machine Learning Models", "Intelligent Automation", "Data Analytics & Insights"],
  },
];

const Services = () => {
  return (
    <>
      <div className="section-space" id="service-section"></div>
      <section className="product relative bg-neutral-200 text-black">
        <div className="section-space"></div>
        <div className="product-inner container mx-auto px-4 flex flex-col">
          <div className="product flex justify-center items-center p-2 lg:p-4 lg:gap-2">
            <article className="relative flex flex-col">
              <h2 className="content-heading text-center font-heading font-semibold">
                Our Expertise in <span className="text-blue-500">Technologies</span>
              </h2>
              <p className="text-xs text-center">
              Driving intelligent solutions through innovation and advanced tech.
              </p>
            </article>
          </div>
          <div className="section-space"></div>
          <section className="services relative">
            <div className="services-card grid grid-cols-1 lg:grid-cols-3 gap-8">
              {servicesData.map((service) => (
                <Card
                  key={service.id} // Use unique identifier for key
                  title={service.title}
                  description={service.description}
                  features={service.features}
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

export default Services;
