import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../ui/Button";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CareerForm({ email, phoneNumber, countryOptions, dob, fullAddress, highest_Qualification, specialization, institute_name, passing_year, previous_Experiance, experiance_year, portfolio_link, role_responsibility, technical_skills, soft_skills, preferred_role, expected_salary, availability, location,cv }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    user_email: email,
    phone_number: phoneNumber,
    country_code: "",
    dob: dob,
    fullAddress: fullAddress,
    highest_Qualification: highest_Qualification,
    specialization: specialization,
    institute_name: institute_name,
    passing_year: passing_year,
    previous_Experiance: previous_Experiance,
    experiance_year: experiance_year,
    portfolio_link: portfolio_link,
    role_responsibility: role_responsibility,
    technical_skills: technical_skills,
    soft_skills: soft_skills,
    preferred_role: preferred_role,
    expected_salary: expected_salary,
    availability: availability,
    location: location,
    cv: cv,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // if (name === "cv") {
    //   setFormData((prevData) => ({ ...prevData, [name]: files[0] })); // Save file object
    // } else {
    //   setFormData((prevData) => ({ ...prevData, [name]: value }));
    // }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!formData.cv) {
    //   toast.error("Please upload a CV before submitting.");
    //   return;
    // }

    // if (formData.cv.size > 50000) { // Limit to ~50KB (adjust as needed)
    //   toast.error("CV file size exceeds the limit of 40KB. Please upload a smaller file.");
    //   return;
    // }

    // if (formData.cv.size > 5 * 1024 * 1024) { // 5MB limit
    //   toast.error("CV file size exceeds 5MB. Please upload a smaller file.");
    //   return;
    // }

    // Convert the file to a base64 string
    const reader = new FileReader();
    reader.onload = async () => {
      // const pdfBase64 = reader.result.split(",")[1]; // Extract Base64 string
      // if (!pdfBase64) {
      //   toast.error("Failed to encode CV to Base64 format.");
      //   return;
      // };


      // Prepare template parameters
      const templateParams = {
        ...formData,
        user_email: formData.user_email, // User's email as a reply-to address
        from_name: `${formData.first_name} ${formData.last_name}`,
        message: "User application details here...",
        reply_to: formData.user_email, // Set the user's email here
        // cv: pdfBase64, // Attach base64 file
        // cv_filename: formData.cv.name, // Include file name
      };

      try {
        const response = await emailjs.send(
          "service_vh5ufh7",
          "template_6z7b7kh",
          templateParams,
          "o-ehGY3yaYq18oybm"
        );

        if (response.status === 200) {
          toast.success("Message sent successfully!");
          setFormData({
            ...formData,
            // cv: null, // Clear file field
          });
        } else {
          throw new Error(`EmailJS response status: ${response.status}`);
        }
      } catch (err) {
        console.error("Failed to send message:", err);
        toast.error("Failed to send message.");
      }
    };

    // reader.readAsDataURL(formData.cv); // Read file as base64
  };

    return (
      <article className="card-contact flex flex-col gap-6 justify-between rounded-lg px-4 py-6 shadow-none">
        <div className="contact-form flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 grow">
            <h4 className="font-semibold">Personal Information</h4>
            <div className="flex flex-row gap-4">
              <input
                type="text"
                id="first-name"
                name="first_name"
                placeholder="First name"
                className="flex-1 min-w-[40%] max-w-[48%]"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="last-name"
                name="last_name"
                placeholder="Last name"
                className="flex-1 min-w-[40%] max-w-[48%]"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Email"
              className="w-full text-black"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-row gap-2">
                <select
                  id="options"
                  name="country_code"
                  title="Select Country Code"
                  className="flex-1 min-w-[30%] max-w-[25%] text-black"
                  value={formData.country_code}
                  onChange={handleChange}
                  required
                >
                  {countryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  placeholder="Contact number"
                  className="flex-1 min-w-[66%] max-w-[80%]"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  placeholder="DD/MM/YYYY"
                  className="flex min-w-full max-w-[40%] text-black"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <textarea
              type="text"
              id="fullAddress"
              name="fullAddress"
              placeholder="Full Address"
              rows="3"
              className="w-full text-black"
              value={formData.fullAddress}
              onChange={handleChange}
            ></textarea>

            <hr className="border-slate-400"></hr>
            <h4 className="font-semibold"> Educational Background</h4>
            <input
              id="highest_Qualification"
              name="highest_Qualification"
              placeholder="Higher Qualification"
              rows="1"
              className="w-full text-black"
              value={formData.highest_Qualification}
              onChange={handleChange}
            ></input>
            <input
              id="specialization"
              name="specialization"
              placeholder="Specialization"
              rows="1"
              className="w-full text-black"
              value={formData.specialization}
              onChange={handleChange}
            ></input>
            <div className="flex md:flex-row flex-col gap-4">
              <input
                id="institute_name"
                name="institute_name"
                placeholder="Institute Name"
                rows="1"
                className="flex-1 min-w-[40%] max-w-[75%]"
                value={formData.institute_name}
                onChange={handleChange}
              ></input>
              <input
                id="passing_year"
                type="number"
                name="passing_year"
                placeholder="Passing Year"
                rows="1"
                className="flex-1 min-w-[50%] max-w-[30%] text-black"
                value={formData.passing_year}
                onChange={handleChange}
              ></input>
            </div>
            <hr className="border-slate-400 m-1"></hr>
            <h4 className="font-semibold">Work Experience</h4>
            <textarea
              id="previous_Experiance"
              name="previous_Experiance"
              placeholder="Previous Experiance"
              rows="3"
              className="w-full text-black"
              value={formData.previous_Experiance}
              onChange={handleChange}
            ></textarea>

            <div className="flex flex-row gap-2">
              <input
                id="experiance_year"
                name="experiance_year"
                type="number"
                placeholder="Years of experiance"
                rows="1"
                className="flex-1 min-w-[32%] max-w-[22%] text-black"

                value={formData.experiance_year}
                onChange={handleChange}
              ></input>
              <input
                id="portfolio_link"
                name="portfolio_link"
                placeholder="Portfolio/Linkdin"
                rows="1"
                className="flex-1 min-w-[40%] max-w-[75%]"
                value={formData.portfolio_link}
                onChange={handleChange}
              ></input>
            </div>
            <textarea
              id="role_responsibility"
              name="role_responsibility"
              placeholder="Roles & Responsibilty"
              rows="3"
              className="w-full text-black"
              value={formData.role_responsibility}
              onChange={handleChange}
            ></textarea>
            <hr className="border-slate-400 m-1"></hr>
            <h4 className="font-semibold">Skills</h4>
            <textarea
              id="technical_skills"
              name="technical_skills"
              placeholder="technical_skills"
              rows="2"
              className="w-full text-black"
              value={formData.technical_skills}
              onChange={handleChange}
            ></textarea>
            <textarea
              id="soft_skills"
              name="soft_skills"
              placeholder="soft_skills"
              rows="2"
              className="w-full text-black"
              value={formData.soft_skills}
              onChange={handleChange}
            ></textarea>
            <hr className="border-slate-400 m-1"></hr>
            <h4 className="font-semibold">Job Preferences</h4>
            <div className="flex md:flex-row flex-col gap-4">
              <input
                id="preferred_role"
                name="preferred_role"
                placeholder="Preferred Role"
                rows="1"
                className="flex-1 min-w-[55%] max-w-[75%]"
                value={formData.preferred_role}
                onChange={handleChange}
              ></input>
              <input
                id="expected_salary"
                name="expected_salary"
                placeholder="Salary Expected"
                type="number"
                rows="1"
                className="flex-1 min-w-[40%] max-w-[40%] text-black"
                value={formData.expected_salary}
                onChange={handleChange}
              ></input>
            </div>

            <div className="flex md:flex-row flex-col gap-4">
              <input
                id="availability"
                name="availability"
                placeholder="Availability to join"
                rows="1"
                className="flex-1 min-w-[55%] max-w-[75%]"
                value={formData.availability}
                onChange={handleChange}
              ></input>
              <input
                id="location"
                name="location"
                placeholder="Location"
                rows="1"
                className="flex-1 min-w-[40%] max-w-[40%] text-black"
                value={formData.location}
                onChange={handleChange}
              ></input>
            </div>
            {/* <label
        htmlFor="file-upload"
        className="cursor-pointer flex text-start px-2 py-1 rounded-md"
      >
        Put your CV here
      </label> */}
            {/* <input
              id="cv"
              name="cv"
              placeholder="cv"
              rows="1"
              type="file"
              className="flex-1 w-full text-black"
              onChange={handleChange}
            ></input> */}
             <input
                id="cv"
                name="cv"
                placeholder="Resume Link"
                rows="1"
                className="flex-1 w-full text-black"
                value={formData.cv}
                onChange={handleChange}
              ></input>
            {/* <div className="flex flex-row items-center gap-4">
              <input type="checkbox" id="terms" name="terms" required className="flex-1 w-4 h-4 justify-start min-w-[5%] max-w-[5%] rounded focus:ring-blue-500" />
              <label for="terms" className="flex-1 w-full text-sm text-gray-700">
                I accept the <a href="#" target="_blank">terms and conditions</a>.
              </label>
            </div> */}

            <div className="flex justify-between items-center">
              <Button text="Submit" />
            </div>
          </form>
        </div>
        <ToastContainer />
      </article>
    );
  }

  CareerForm.propTypes = {
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    countryOptions: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    dob: PropTypes.string.isRequired,
    fullAddress: PropTypes.string.isRequired,
    highest_Qualification: PropTypes.string.isRequired,
    specialization: PropTypes.string.isRequired,
    institute_name: PropTypes.string.isRequired,
    passing_year: PropTypes.string.isRequired,
    previous_Experiance: PropTypes.string.isRequired,
    experiance_year: PropTypes.string.isRequired,
    portfolio_link: PropTypes.string.isRequired,
    role_responsibility: PropTypes.string.isRequired,
    technical_skills: PropTypes.string.isRequired,
    soft_skills: PropTypes.string.isRequired,
    preferred_role: PropTypes.string.isRequired,
    expected_salary: PropTypes.string.isRequired,
    availability: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    cv: PropTypes.string.isRequired,
  };

export default CareerForm;
