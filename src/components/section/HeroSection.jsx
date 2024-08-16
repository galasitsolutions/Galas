import CircleText from "../ui/CircleText";

export default function HeroSection() {
  return (
    <>
      <div className="section-space" aria-hidden="true"></div>
      <section className="hero-section relative container mx-auto px-6" aria-labelledby="hero-heading">
        <div className="hero-inner">
          <div className="hero-content flex items-center justify-between">
            <article className="content">
              <h1 id="hero-heading" className="font-heading font-bold ">
                WHERE INNOVATION MEETS
                <span className="block text-blue-600">YOUR TECH GOALS</span>
              </h1>
              <p className="text-base">
                <span className="line bg-white" aria-hidden="true"></span>
                Bridging Talent and Vision for Unmatched Tech Success.
              </p>
            </article>
            <CircleText circleText="Hire Us * Hire us * &nbsp;" />
          </div>
          <div className="section-space-inner" aria-hidden="true"></div>
          <div className="hero-section-img">
            <div id="scene">
              <div className="w-full h-[25vh] lg:h-[50vh]">
                <img
                  src="https://galasitsolutions.com/src/assets/img/product/hero-banner.webp"
                  // srcSet="https://galasitsolutions.com/src/assets/img/product/hero-banner.webp 1x, https://galasitsolutions.com/src/assets/img/product/hero-banner@2x.webp 2x"
                  className="banner-img w-full h-full object-cover"
                  loading="lazy"
                  alt="Hero banner showcasing innovative tech solutions"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
