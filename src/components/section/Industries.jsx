import React from "react";
import herobanner from "../../assets/img/icons/industrialabout.jpg";
import IndustriesCards from "../ui/IndustriesCards";
import cyberlogo from "../../assets/img/icons/cyberlogo.png";
import healthcare from "../../assets/img/icons/healthcare.png";
import banking from "../../assets/img/icons/banking.png";

const OurIndustries = [
  {
    title: "Healthcare System",
    desc: "Transforming healthcare with cutting-edge technology that enhances patient care, optimizes operations, and ensures data security.",
    features: [
      "Electronic Health Records (EHR)",
      "Telemedicine & Remote Monitoring",
      "HIPAA-Compliant Data Solutions",
    ],
  },
  {
    title: "Cybersecurity Enhancements",
    desc: "Protecting organizations with advanced cybersecurity frameworks, ensuring resilience against evolving digital threats.",
    features: [
      "Threat Detection & Response",
      "Network & Cloud Security",
      "Data Privacy & Compliance",
    ],
  },
  {
    title: "Banking & Financial IT Systems",
    desc: "Empowering the financial sector with secure, scalable, and compliant IT infrastructure tailored for modern banking.",
    features: [
      "Core Banking Solutions",
      "Digital Payment Integrations",
      "Fraud Detection & Prevention",
    ],
  },
];

const Industries = () => {
  return (
    <>
      <section className="industries">
        <div className="container mx-auto px-4">
          <div className="section-space"></div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <h2 className="content-heading text-center font-heading font-semibold text-white-200">
                <span className="text-blue-500">Industries</span> we are dealing
                with
              </h2>
              <p className="max-w-3xl mx-auto text-white text-center">
                Serving diverse industries with tailored, result-driven solutions.
              </p>
            </div>
            <div className="section-inner">
              <div className="flex flex-col lg:flex-row gap-6 ">
                {/* Image Section */}
                <div className="relative lg:w-1/2 ">
                <div className="relative">
                <div className="relative lg:w-[50vw] lg:aspect-square lg:rounded-full">
                  <img
                    src={herobanner}
                    alt="Industries we serve"
                    className="relative lg:rounded-full object-cover lg:aspect-square shadow-lg lg:[clip-path:polygon(0%_0%,100%_0%,0%_100%)]"
                  />
                  <div className="absolute md:top-16 md:left-64 lg:top-40 lg:left-44 xl:top-56 xl:left-60 w-72 h-72 lg:rounded-full border-opacity-100 border-[20px] border-[#151515]">
                    <div className="absolute lg:block hidden lg:-top-3 lg:-left-2 w-72 h-72 opacity-1 lg:rounded-full">
                      <img
                    src={herobanner}
                    alt="Industries we serve"
                    className="relative object-cover w-[70vw] rounded-full lg:aspect-square shadow-lg  opacity-1 lg:opacity-1"
                  /></div>
                  </div>
                  <div className="absolute w-28 h-28 bg-[#2a2a2a] p-2 lg:top-72 lg:left-[490px] xl:top-80 xl:left-[560px] md:top-0 md:left-0 md:block hidden">
                  <img
                    src={cyberlogo}
                    alt="Industries we serve"
                    className="relative object-cover h-full w-full shadow-lg"
                  />
                  </div>
                  <div className="absolute w-36 h-36 lg:bg-[#2a2a2a] p-2 lg:-bottom-20 lg:-right-12 xl:bottom-20 xl:right-16 md:bottom-28 md:right-64 md:block hidden">
                  <img
                    src={healthcare}
                    alt="Industries we serve"
                    className="relative object-cover h-full w-full shadow-lg"
                  />
                  </div>
                  <div className="absolute w-28 h-28 bg-[#2a2a2a] p-4 md:bottom-0 md:right-0 lg:-bottom-20 lg:right-36 xl:bottom-16 xl:left-80 md:block hidden">
                  <img
                    src={banking}
                    alt="Industries we serve"
                    className="relative object-cover h-full w-full shadow-lg"
                  />
                  </div>
                  </div>
                  </div>
                </div>

                {/* Cards Section */}
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                    {OurIndustries.map((industry, index) => (
                      <div
                        key={index}
                        className={`relative ${index === 1 ? "lg:pl-[40%]" : ""
                          } transition-transform duration-300`}
                      >
                        <IndustriesCards
                          key={index}
                          title={industry.title}
                          desc={industry.desc}
                          features={industry.features}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
