import React from "react";
import PrimaryKeyCard from "../ui/PrimaryKeyCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const keyCardData = [
    {
        icons: <span>📚</span>,
        title: "SEO Services",
        description:
            "This is a high-ranking keyword with strong competition. Optimizing for this can drive traffic from businesses looking for SEO management.",
        ranking: "High",
    },
    {
        icons: <span>🎯</span>,
        title: "PPC (Pay-Per-Click) Advertising",
        description: "A high-traffic keyword relevant to businesses seeking instant results from their marketing campaigns.",
        ranking: "High",
    },
    {
        icons: <span>📝</span>,
        title: "Content Creation",
        description: "This keyword is moderately competitive and relevant for businesses looking to enhance their content marketing strategies",
        ranking: "Medium",
    }, 
    {
        icons: <span>📱</span>,
        title: "Social Media Marketing",
        description:"Highly popular with businesses focused on increasing brand awareness through platforms like Facebook, Instagram, and LinkedIn.",
        ranking: "High",
    }, {
        icons: <span>📧</span>,
        title: "Email Marketing Campaigns",
        description: "A moderately competitive keyword aimed at businesses interested in personalized marketing strategieso	A moderately competitive keyword aimed at businesses interested in personalized marketing strategies",
        ranking: "Medium",
    }, {
        icons: <span>⚙️</span>,
        title: "Website Maintenance Services",
        description: "This keyword has low competition but is niche, which means targeting it can drive specific, valuable traffic.",
        ranking: "Medium to Low",
    },
    {
        icons: <span>💻</span>,
        title: "IT Consulting Services",
        description: "Competitive but highly relevant for attracting businesses in need of IT expertise and consulting services.",
        ranking: "High",
    }, {
        icons: <span>📱</span>, 
        title: "Mobile Application Development",
        description:
            "This keyword has a large volume of searches from businesses looking to create mobile apps for Android and iOS.",
            ranking: "High",
    }, {
        icons: <span>🌐</span>,
        title: "Web Development Services",
        description: "A competitive and frequently searched term, especially among businesses seeking to build or enhance their websites.",
        ranking: "High",
    }, {
        icons: <span>📋</span>, 
        title: "IT Project Management",
        description:"This is moderately competitive, relevant for attracting companies looking to outsource or manage complex IT projects.",
        ranking: "Medium",
    }, {
        icons: <span>👔</span>,
        title: "Permanent Staffing Services",
        description:"A keyword that attracts businesses looking for long-term employee solutions.",
        ranking: "Medium",
    }, {
        icons: <span>📄</span>,
        title: "Contract Staffing Services",
        description:"Relevant for companies needing short-term, flexible staffing solutions.",
        ranking: "Medium",
    }, {
        icons: <span>🔄</span>, 
        title: "Contract to Hire Services",
        description: "This niche keyword has less competition and targets businesses interested in temporary-to-permanent staffing options.",
        ranking: "Medium",
    }
];

const PrimaryKeySection = () => {

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
            <div className="section-space"></div>
            <h2 className="content-heading text-center font-heading font-semibold">
            <span className="text-blue-500">Primary</span>  Keywords  </h2>

            {/* <div className="section-space"></div> */}
            <section className="keyWords relative flex item-center justify-center container mx-auto px-6">
            <div className="primary-card grid grid-cols-1 gap-60 p-1">
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


export default PrimaryKeySection;
