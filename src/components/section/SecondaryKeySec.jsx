import React from "react";
import PrimaryKeyCard from "../ui/PrimaryKeyCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const keyCardData = [
    {
        icons: <span>📚</span>,
        title: "Search engine ranking",
        description:
            "Highly competitive but crucial for businesses looking to improve their SEO.",
        ranking: "High",
    },
    {
        icons: <span>🎯</span>,
        title: "Organic traffic",
        description: "Medium competition, relevant for companies focused on improving their online visibility.",
        ranking: "High",
    },
    {
        icons: <span>📝</span>,
        title: "Lead generation",
        description: "High competition, relevant in the context of email marketing and PPC services.",
        ranking: "Medium",
    }, 
    {
        icons: <span>📱</span>,
        title: "Customer retention",
        description:"Low to medium competition, useful for businesses focusing on long-term client relationships via email marketing.",
        ranking: "High",
    }, {
        icons: <span>📧</span>,
        title: "Responsive websites",
        description: "Low to medium competition, relevant for web development services targeting mobile optimization.",
        ranking: "Medium",
    }
];

const SecondaryKeySec = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
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
            <div className="section-space"></div>
           <h2 className="content-heading text-center font-heading font-semibold">
            <span className="text-blue-500">Secondary</span>  Keywords  </h2>


            {/* <div className="section-space"></div> */}
            <section className="keyWords relative flex item-center justify-center m-5 container mx-auto px-6">
            <div className="primary-card grid grid-cols-1">
                <Slider {...settings}>
                    {keyCardData.map((data, index) => (
                        <PrimaryKeyCard
                            key={index}
                            icons={data.icons}
                            title={data.title}
                            description={data.description}
                            ranking={data.ranking}
                        />
                    ))}
                    </Slider>
            </div>
            <div className="section-space"></div>
            </section>
        </>
    );
}


export default SecondaryKeySec;
