import { Suspense, lazy } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import HeroBanner from "../../assets/img/product/hero-banner.webp";

// Lazy load the CircleText component
const CircleText = lazy(() => import("../ui/CircleText"));

export default function HeroSection() {
  const { width } = useWindowSize();

  return (
    <>
      {/* Preload the LCP image */}
      <link rel="preload" href={HeroBanner} as="image" />

      <div className="section-space" aria-hidden="true"></div>
      <section
        className="hero-section relative container mx-auto px-6"
        aria-labelledby="hero-heading"
      >
        <div className="hero-inner">
          <div className="hero-content flex items-center justify-between">
            <article className="content">
              <h1 id="hero-heading" className="font-heading font-bold">
                WHERE INNOVATION MEETS
                <span className="block text-blue-600">YOUR TECH GOALS</span>
              </h1>
              <p className="text-base">
                <span className="line bg-white" aria-hidden="true"></span>
                Bridging Talent and Vision for Unmatched Tech Success.
              </p>
            </article>
            {width > 768 && (
              <Suspense
                fallback={
                  <div className="flex items-center justify-center w-full h-full">
                    <span>Loading...</span>
                  </div>
                }
              >
                <CircleText circleText="Hire Us * Hire us * &nbsp;" />
              </Suspense>
            )}
          </div>
          <div className="section-space-inner" aria-hidden="true"></div>
          <div className="hero-section-img">
            <div id="scene">
              <div className="w-full h-[25vh] lg:h-[50vh]">
                <img
                  src={HeroBanner}
                  alt="Hero banner showcasing innovative tech solutions"
                  loading="lazy"
                  className="banner-img w-full h-full object-cover"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
