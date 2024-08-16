// ContactCard.js
import PropTypes from 'prop-types';
import Button from "../ui/Button";

function ContactCard({ title, subtitle, email, phoneNumber, countryOptions }) {
  return (
    <article className="card-contact flex flex-col gap-6 justify-between rounded-lg bg-white p-6  transform-gpu transition-transform">
      <div className="contact-form flex flex-col gap-4">
        <div className="content-top">
          <h3 className="font-bold">{title}</h3>
          <p className="text-xs">{subtitle}</p>
        </div>
        <form className="flex flex-col gap-4 grow">
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="First name"
              className="flex-1 min-w-[40%] max-w-[48%]"
              required
            />
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Last name"
              className="flex-1 min-w-[40%] max-w-[48%]"
              required
            />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={email}
            className="w-full text-black"
            required
          />
          <div className="flex flex-wrap gap-4">
            <select
              id="options"
              name="options"
              title="Select Country Code"
              className="flex-1 min-w-[40%] max-w-[20%] text-black"
            >
              {countryOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <input
              type="text"
              id="phone-number"
              name="phone-number"
              placeholder={phoneNumber}
              className="flex-1 min-w-[40%] max-w-[75%]"
              required
            />
          </div>
          <textarea
            id="query"
            name="query"
            placeholder="Write your query"
            rows="4"
            className="w-full text-black"
          ></textarea>
          <div className="flex justify-between items-center">
          <Button text="submit"/>
          </div>
          <p className="text-xs mt-2">
            By contacting us, you agree to our
            <a href="#" className="text-blue-500"> Terms of service</a> and
            <a href="#" className="text-blue-500"> Privacy Policy</a>
          </p>
        </form>
      </div>
    </article>
  );
}

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  countryOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default ContactCard;
