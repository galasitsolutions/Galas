import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CareerForm from "../ui/CareerForm";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/img/product/5.png";
import img2 from "../../assets/img/product/6.png";
import Button from "../ui/Button";
import gifImage from "../../assets/img/team/gifImage1.gif";

const CareerSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const careerContents = [
    {
      title: "Web Development",
      description:
        " Building robust, scalable, and modern web applications using the latest technologies.",
    },
    {
      title: "App Development",
      description:
        " Designing and developing innovative mobile applications that provide seamless user experiences.",
    },
    {
      title: "UI/UX Designing",
      description:
        "Crafting intuitive, user-friendly designs that enhance the functionality and appeal of our products.",
    },
  ];

  const images = [{ src: img1 }, { src: img2 }, { src: img1 }, { src: img2 }];

  const countryOptions = [
    { value: "+91", label: "+91" },
    { value: "+1", label: "+1" },
    { value: "+44", label: "+44" },
  ];

  const contactUsProps = {
    countryOptions: countryOptions,
    email: "",
    phoneNumber: "",
    dob: "",
    fullAddress: "",
    highest_Qualification: "",
    specialization: "",
    institute_name: "",
    passing_year: "",
    portfolio_link: "",
    role_responsibility: "",
    technical_skills: "",
    soft_skills: "",
    preferred_role: "",
    availability: "",
    location: "",
    cv: "",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 px-3 py-1 rounded-lg">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-6 h-[4px] bg-gray-200 rounded-xl hover:bg-blue-600 " />
    ),
  };

  const jobListings = [
    {
      date: "Feb, 2025",
      title: "Mern Stack Developer",
      skills: ["React Js", "ExpressJs", "Node Js", "MongoDB", "Restful Api"],
      includes: [
        "Hand on Experience with live projects",
        "Internship Experience Certificate",
      ],
      duration: "6 Months",
      type: "Unpaid Internship",
      location: "Remote",
    },
    {
      date: "Feb, 2025",
      title: "Java Developer",
      skills: ["React Js", "Java", "Springboot", "SQL", "RESTful API"],
      includes: [
        "Hand on Experience with live projects",
        "Internship Experience Certificate",
      ],
      duration: "6 Months",
      type: "Unpaid Internship",
      location: "Remote",
    },
    {
      date: "Feb, 2025",
      title: "Flutter Developer",
      skills: [
        "Dart",
        "Flutter",
        "FireBase",
        "Android Studio",
        "RESTful API",
        "Nodejs",
        "Provider",
      ],
      includes: [
        "Hand on Experience with live projects",
        "Internship Experience Certificate",
      ],
      duration: "6 Months",
      type: "Unpaid Internship",
      location: "Remote",
    },
    {
      date: "Feb, 2025",
      title: "UX/UI Designer",
      skills: [
        "Adobe XD",
        "Seamless UI",
        "Product Analysis",
        "User UI",
        "Research",
        "Testing",
        "Figma",
      ],
      includes: [
        "Hand on Experience with live projects",
        "Internship Experience Certificate",
      ],
      duration: "6 Months",
      type: "Unpaid Internship",
      location: "Remote",
    },
    {
      date: "Feb, 2025",
      title: "Graphic Designer",
      skills: [
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Canva",
        "Sketch",
        "Figma",
      ],
      includes: [
        "Hand on Experience with live projects",
        "Internship Experience Certificate",
      ],
      duration: "6 Months",
      type: "Unpaid Internship",
      location: "Remote",
    },
    {
      date: "Feb, 2025",
      title: "SEO Specialist",
      skills: [
        "On-Page SEO",
        "Technical SEO",
        "Cloudflare",
        "Google Analytics",
      ],
      includes: [
        "Hand on Experience with live projects",
        "Internship Experience Certificate",
      ],
      duration: "6 Months",
      type: "Unpaid Internship",
      location: "Remote",
    },
  ];

  const handleApplyClick = () => {
    document
      .getElementById("career-form-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="bg-neutral-200 text-black">
        <div className="section-space"></div>
        <div className="container mx-auto gap-10 p-2 flex flex-col">
          <div className="text-center">
            <h2 className="content-heading font-heading font-semibold mb-4">
              Recommended <span className="text-blue-500">Jobs</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {jobListings.slice(0, 6).map((job, index) => (
              <div
                key={index}
                className="bg-white p-2 rounded-3xl w-full border border-gray-300 flex flex-col"
              >
                <div className="bg-blue-100 p-2 rounded-xl flex-grow flex flex-col">
                  <div className="p-2 rounded-xl gap-4 flex flex-col">
                    <p className="bg-white px-4 py-2 font-semibold rounded-xl text-sm w-24 flex items-center text-center">
                      {job.date}
                    </p>
                    <div>
                      <h4 className="font-semibold">{job.title}</h4>
                    </div>
                    <div className="flex flex-row flex-wrap gap-2 py-2">
                      {job.skills.map((skill, i) => (
                        <div
                          key={i}
                          className="border border-black px-3 py-1 leading-5 rounded-xl text-sm flex items-center text-center"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-2 rounded-xl flex flex-col flex-grow">
                    <div>
                      <p className="text-lg font-semibold">
                        Internship includes:
                      </p>
                      <div className="p-3">
                        {job.includes.map((include, i) => (
                          <p key={i} className="text-sm">
                            <span className="text-blue-600 font-bold">-</span>{" "}
                            {include}
                          </p>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-semibold">
                      Duration: {job.duration}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between py-6 items-center">
                  <div className="px-2">
                    <p className="text-md font-semibold mt-1">{job.type}</p>
                    <p className="font-semibold text-sm text-neutral-500">
                      {job.location}
                    </p>
                  </div>
                  <div className="px-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        to="#career-form-section"
                        onClick={handleApplyClick}
                      >
                        <Button text="Apply " />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="career-form-section" className="section-space"></div>
        <div className="flex flex-col lg:flex-row container mx-auto px-2 gap-1 rounded-xl h-auto lg:h-[600px] overflow-hidden">
          <section className="content flex flex-col lg:w-1/2 px-4 py-0 ">
            <div className="w-full h-auto lg:h-[400px] md:h-[520px] rounded-xl">
              <img
                src={gifImage}
                alt="Team GIF"
                className="w-full h-auto lg:h-auto md:h-[520px]  rounded-xl"
              />
            </div>
          </section>
          <div className="section-space"></div>
          <section className=" flex flex-col lg:w-1/2 overflow-auto hide-scrollbar">
            <CareerForm
              email={contactUsProps.email}
              phoneNumber={contactUsProps.phoneNumber}
              countryOptions={contactUsProps.countryOptions}
              dob={contactUsProps.dob}
              fullAddress={contactUsProps.fullAddress}
              highest_Qualification={contactUsProps.highest_Qualification}
              specialization={contactUsProps.specialization}
              institute_name={contactUsProps.institute_name}
              passing_year={contactUsProps.passing_year}
              portfolio_link={contactUsProps.portfolio_link}
              role_responsibility={contactUsProps.role_responsibility}
              technical_skills={contactUsProps.technical_skills}
              soft_skills={contactUsProps.soft_skills}
              preferred_role={contactUsProps.preferred_role}
              availability={contactUsProps.availability}
              location={contactUsProps.location}
              cv={contactUsProps.cv}
            />
          </section>
        </div>
        <div className="section-space"></div>{" "}
      </section>
    </>
  );
};

export default CareerSection;
