import Card from "../ui/Card";

const servicesData = [
  {
    id: 1,
    title: "IT Product Development",
    description:
      "We offer product features based on your specifications, produce MVPs, and develop in Agile. We analyze, develop, and develop a precise product that is targeted to your objectives.",
    features: ["Web Development", "App Development", "UI/UX Designing"],
  },
  {
    id: 2,
    title: "IT Staffing",
    description:
      "Staffing, about finding the right person for the job, not just the requirements. We thrive in matching people with your team's culture and work ethic, from the C-suite to entry-level positions.",
    features: [
      "Short-Long Term Hiring",
      "Rigorous Screening",
      "Talent Acquisition",
    ],
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Our skilled experts develop personalized digital marketing plans that are aligned with your company's objectives, leveraging the newest trends to achieve strategic, measurable results.",
    features: ["Social Media Marketing", "Graphic Designing", "Brand Building"],
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
                Our Expertise in <span className="text-blue-500">Services</span>
              </h2>
              <p className="text-xs text-center">
                Delivering expert solutions tailored to meet your unique
                business needs.
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
