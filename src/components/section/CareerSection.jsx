import CareerForm from "../ui/CareerForm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../ui/Button";
import gifImage from '../../assets/img/team/gifImage1.gif';


const CareerSection = () => {

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
    gitHub_link: "",
    technical_skills: "",
    soft_skills: "",
    preferred_role: "",
    expected_salary: "",
    availability: "",
    location: "",
    cv: "",
  };


  const jobListings = [
    {
      date: "Feb, 2025",
      title: "Mern Stack Developer",
      skills: ["React Js", "ExpressJs", "Node Js", "MongoDB", "Restful Api"],
      includes: ["Hand on Experience with live projects", "Internship Experience Certificate"],
      duration: "6 Months",
      type: "Unpaid Internship",
      location: "Remote",
    },
    {
      date: "Feb, 2025",
      title: "Java Developer",
      skills: ["React Js", "Java", "Springboot", "SQL", "RESTful API"],
      includes: ["Hand on Experience with live projects", "Internship Experience Certificate"],
      duration: "6 Months",
      type: "Unpaid Internship",
      location: "Remote",
    },
    {
      date: "Feb, 2025",
      title: "Flutter Developer",
      skills: ["Dart", "Flutter", "FireBase", "Android Studio", "RESTful API", "Nodejs", "Provider"],
      includes: ["Hand on Experience with live projects", "Internship Experience Certificate"],
      duration: "6 Months",
      type: "Unpaid Internship",
      location: "Remote",
    },
    {
      date: "Feb, 2025",
      title: "UX/UI Designer",
      skills: ["Adobe XD", "Seamless UI", "Product Analysis", "User UI", "Research", "Testing", "Figma"],
      includes: ["Hand on Experience with live projects", "Internship Experience Certificate"],
      duration: "6 Months",
      type: "Unpaid Internship",
      location: "Remote",
    },
    {
      date: "Feb, 2025",
      title: "Graphic Designer",
      skills: ["Adobe Illustrator", "Adobe Photoshop", "Canva", "Sketch", "Figma"],
      includes: ["Hand on Experience with live projects", "Internship Experience Certificate"],
      duration: "6 Months",
      type: "Unpaid Internship",
      location: "Remote",
    },
    {
      date: "Feb, 2025",
      title: "SEO Specialist",
      skills: ["On-Page SEO", "Technical SEO", "Cloudflare", "Google Analytics"],
      includes: ["Hand on Experience with live projects", "Internship Experience Certificate"],
      duration: "6 Months",
      type: "Unpaid Internship",
      location: "Remote",
    },
  ];

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
            {jobListings.slice(0, 6).map((job, index) => (
              <div key={index} className="bg-white p-2 rounded-3xl w-full border border-gray-300 flex flex-col">
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
                        <div key={i} className="border border-black px-3 py-1 leading-5 rounded-xl text-sm flex items-center text-center">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-2 rounded-xl flex flex-col flex-grow">
                    <div>
                      <p className="text-lg font-semibold">Internship includes:</p>
                      <div className="p-3">
                        {job.includes.map((include, i) => (
                          <p key={i} className="text-sm">
                            <span className="text-blue-600 font-bold">-</span> {include}
                          </p>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-semibold">Duration: {job.duration}</p>
                  </div>
                </div>
                <div className="flex justify-between py-6 items-center">
                  <div className="px-2">
                    <p className="text-md font-semibold mt-1">{job.type}</p>
                    <p className="font-semibold text-sm text-neutral-500">{job.location}</p>
                  </div>
                  <div className="px-6">
                    <Button text="Apply " />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-space"></div>
        <div className="flex flex-col lg:flex-row container mx-auto px-2 gap-4 rounded-xl h-auto lg:h-[600px] overflow-hidden">
 <section className="content flex flex-col lg:w-1/2 p-8">
  <div className="w-full h-auto lg:h-[400px] md:h-[520px] rounded-xl">
   <img src={gifImage} alt="Team GIF" className="w-full h-auto lg:h-[560px] p-2 rounded-xl" />
  </div>
</section>
          <div className="section-space"></div>
          <section className="flex flex-col lg:w-1/2 overflow-auto hide-scrollbar">
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
              gitHub_link={contactUsProps.gitHub_link}
              technical_skills={contactUsProps.technical_skills}
              soft_skills={contactUsProps.soft_skills}
              preferred_role={contactUsProps.preferred_role}
              expected_salary={contactUsProps.expected_salary}
              availability={contactUsProps.availability}
              location={contactUsProps.location}
              cv={contactUsProps.cv}
            />

          </section>
        </div>
        <div className="section-space"></div>
      </section>
    </>
  );
};

export default CareerSection;