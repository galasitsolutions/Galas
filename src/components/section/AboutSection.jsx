import AboutUsContent from "../ui/AboutContent";
import aboutImg from "../../assets/img/product/work.webp";

const aboutUsData = {
  title: "About Us",
  heading: (
    <>
      We re{" "}
      <span style={{ color: "#2563eb" }}>Bridging Talented Vision for</span>{" "}
      Unmatched Success
    </>
  ),
  description: `Galas IT Solution incorporates skilled IT professionals with
                innovative companies. We ensure that candidates are highly
                qualified and culturally appropriate by doing thorough
                screening. Our dedication to customer and candidate success
                shows our grasp of the IT industry's needs. Partnering with
                Galas IT Solution means having a dedicated ally in the
                ever-changing tech landscape, which ensures your
                organization's success.`,
  points: [
    "Contract and Permanent Hiring",
    "Targeted Digital Marketing Solutions",
    "Comprehensive IT Consulting Services",
  ],
};

export default function AboutSection() {
  return (
    <>
      <div className="section-space" id="about-sec" aria-hidden="true"></div>
      <section  className="about-us p-2 container mx-auto px-4">
        <div className="about-inner flex justify-center items-center flex-wrap gap-10 flex-col lg:flex-row p-2">
          <div className="about-img relative flex-1">
            <img
              src={aboutImg}
              alt="About image showcasing companies description"
              className="rounded-2xl object-cover shadow-sm h-full sm:h-[50vh] md:h-[50vh]"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
          <AboutUsContent
            title={aboutUsData.title}
            heading={aboutUsData.heading}
            description={aboutUsData.description}
            points={aboutUsData.points}
          />
        </div>
      </section>
    </>
  );
}
