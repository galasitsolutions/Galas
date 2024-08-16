

import AboutUsContent from '../ui/AboutContent';

const aboutUsData = {
  title: 'About Us',
  heading:  <>
  We're <span style={{ color: '#2563eb' }}>Bridging Talented Vision for</span> Unmatched Success
</>,
  description: `Galas IT Solution incorporates skilled IT professionals with
                innovative companies. We ensure that candidates are highly
                qualified and culturally appropriate by doing thorough
                screening. Our dedication to customer and candidate success
                shows our grasp of the IT industry's needs. Partnering with
                Galas IT Solution means having a dedicated ally in the
                ever-changing tech landscape, which ensures your
                organization's success.`,
  points: [
    'Contract and Permanent Hiring',
    'Targeted Digital Marketing Solutions',
    'Comprehensive IT Consulting Services'
  ]
};

export default function AboutSection() {
  return (
    <>
      <div className="section-space" aria-hidden="true"></div>
      <section className="about-us p-2 container mx-auto px-6">
      <div className="about-inner flex justify-center items-center flex-wrap gap-10 flex-col lg:flex-row">
          <div
            className="about-img relative flex-1"
            data-aos="zoom-in-right"
            data-aos-duration="500"
          >
            <img
              src="https://galasitsolutions.com/src/assets/img/product/work.webp"
              className="image-container rounded-2xl  object-cover shadow-sm h-full sm:h-1/2vh md:h-1/2vh"
              loading="lazy"
              role="img"
              aria-label="Image description"
              alt= "About image showcasing companies description"
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
