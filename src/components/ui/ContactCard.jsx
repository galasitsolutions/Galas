import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../ui/Button";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactCard({ title, subtitle, email, phoneNumber, countryOptions }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    user_email: email,
    phone_number: phoneNumber,
    country_code: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        "service_vh5ufh7",
        "template_g2up6j9",
        formData,
        "o-ehGY3yaYq18oybm"
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          user_email: email,
          phone_number: phoneNumber,
          country_code: "",
          query: "",
        });
      } else {
        throw new Error(`EmailJS response status: ${response.status}`);
      }
    } catch (err) {
      console.error("Failed to send message:", err);
      toast.error("Failed to send message.");
    }
  };

  return (
    <article className="card-contact flex flex-col gap-6 justify-between rounded-lg bg-white px-4 py-6 transform-gpu transition-transform">
      <div className="contact-form flex flex-col gap-4">
        <div className="content-top">
          <h3 className="font-bold">{title}</h3>
          <p className="text-xs">{subtitle}</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 grow">
          <div className="flex flex-wrap gap-4">
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
            placeholder={email}
            className="w-full text-black"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          <div className="flex flex-wrap gap-4">
            <select
              id="options"
              name="country_code"
              title="Select Country Code"
              className="flex-1 min-w-[40%] max-w-[20%] text-black"
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
              id="phone-number"
              name="phone_number"
              placeholder={phoneNumber}
              className="flex-1 min-w-[40%] max-w-[75%]"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            id="query"
            name="query"
            placeholder="Write your query"
            rows="4"
            className="w-full text-black"
            value={formData.query}
            onChange={handleChange}
          ></textarea>
          <div className="flex justify-between items-center">
            <Button text="Submit" />
          </div>
          <p className="text-xs mt-2">
            By contacting us, you agree to our
            <a href="#" className="text-blue-500">
              {" "}
              Terms of service
            </a>{" "}
            and
            <a href="#" className="text-blue-500">
              {" "}
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
      <ToastContainer />
    </article>
  );
}

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  countryOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactCard;
