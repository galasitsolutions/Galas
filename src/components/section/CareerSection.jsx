import React from "react";
import CareerForm from "../ui/CareerForm";

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
  }

  return (
    <>
    
      <section className=" bg-neutral-200 text-black">
      <div className="section-space"></div>
      <div className="flex lg:flex-row flex-col container mx-auto px-4">
      <section className="content flex flex-col lg:w-1/2">
      <h2 className="content-heading font-heading font-semibold">
      Embrace your<span className="text-blue-500">{" "}Career</span>  with our <span className="text-blue-500">{" "}Diverse Opportunities</span>
              </h2>
      </section>
      <div className="section-space"></div>
      <section className="contact flex flex-col lg:w-1/2 rounded-lg">
        <CareerForm
          email={contactUsProps.email}
          phoneNumber={contactUsProps.phoneNumber}
          countryOptions={contactUsProps.countryOptions}
          dob={contactUsProps.dob}
          highest_Qualification={contactUsProps.highest_Qualification}
        />
      </section>
      </div>
      <div className="section-space"></div>
      </section>
    </>
  );
}

export default CareerSection;