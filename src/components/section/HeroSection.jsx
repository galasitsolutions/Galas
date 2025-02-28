import { Suspense, lazy } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import HeroBanner from "../../assets/img/product/hero-banner.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow2 from "../../assets/img/icons/arrow2.svg";

// Lazy load the CircleText component
const CircleText = lazy(() => import("../ui/CircleText"));

export default function HeroSection() {
  const { width } = useWindowSize();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear", 
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  

  return (
    <>
      {/* Preload the LCP image */}
      <link rel="preload"  href={HeroBanner} as="image" id="hero-sec"/>

      <div className="section-space"   aria-hidden="true"></div>
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
      <div className="grid grid-cols-1 bg-blue-600 relative flex items-center mx-auto">
  <Slider {...settings}>
    <div className="flex flex-col items-center p-0">
      <h1 className="text-4xl font-bold flex items-center justify-evenly">
        <span className=" tracking-wider">WEB</span>
        <span className=" tracking-wider">DEVELOPMENT</span>
        <span className="">
          <img src={arrow2} alt="arrow" className="w-8  filter invert m-0 p-0"  />
        </span>
      </h1>
    </div>
    <div className="flex flex-col items-center p-0">
    <h1 className="text-4xl  font-bold flex items-center justify-evenly ">
      <span className=" tracking-wider">IT</span>
      <span className=" tracking-wider">PRODUCTS</span>
      <span className="">
        <img src={arrow2} alt="arrow" className="w-8  filter invert m-0 p-0"  />
      </span>
    </h1>
    </div>
    <div className="flex flex-col items-center  p-0">
    <h1 className="text-4xl font-bold flex items-center justify-evenly">
      <span className=" tracking-wider">DIGITAL</span>
      <span className=" tracking-wider">MARKETING</span>
      <span className="">
        <img src={arrow2} alt="arrow" className="w-8  filter invert" />
      </span>
    </h1>
    </div>
  </Slider>
</div>

  {/* <div className="absolute top-0 py-4 bg-blue-600 animate-marquee2 whitespace-nowrap">
    <span class="text-4xl mx-4">Marquee Item 1</span>
    <span class="text-4xl mx-4">Marquee Item 2</span>
    <span class="text-4xl mx-4">Marquee Item 3</span>
    <span class="text-4xl mx-4">Marquee Item 4</span>
    <span class="text-4xl mx-4">Marquee Item 5</span>
  </div> */}

    </>
  );
}
