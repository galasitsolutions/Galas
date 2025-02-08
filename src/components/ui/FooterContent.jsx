import PropTypes from "prop-types";
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";

const FooterContent = ({
  logoSrc,
  contactEmail,
  contactNumber,
  socialLinks,
  // quickLinks,
}) => {
  const services = [
    {name: "IT Staffing", id: "/about/#about-sec"},
    {name: "Product Development", id: "/about/#about-sec"},
    {name: "Digital Marketing", id: "/about/#about-sec"},
    {name: "And more", id: "/about/#about-sec"},
  ]

  const quickLinks = [
    {name: "Home", id: "/#hero-sec"},
    {name: "About", id: "/about"},
    {name: "Blog", id: "/blog"},
    {name: "Event", id: "/event"},
  ]

  const socialIcons = {
    facebook: <FacebookIcon />,
    instagram: <InstagramIcon />,
    linkedin: <LinkedInIcon />,
    whatsapp: <WhatsAppIcon />,
  };

  return (
    <div className="footer-inner flex justify-between gap-10 flex-wrap flex-col md:flex-row lg:flex-row">
      <section className="footer-services flex flex-col justify-between">
        <article className="footer-content flex flex-col gap-6">
          <div className="brand flex w-28">
            <img
              src={logoSrc}
              alt="Brand Logo"
              className="logo-brand"
              loading="lazy"
            />
          </div>
          <div className="brand-content flex flex-col">
            <p>
              Mail us:
              <a
                href={`mailto:${contactEmail}`}
                className="text-blue-500 hover:underline"
              >
                {contactEmail}
              </a>
            </p>
            <p>
              Contact No:
              <a href={`tel:${contactNumber}`} className="text-blue-500">
                {contactNumber}
              </a>
            </p>
          </div>
          <div className="brand-content flex flex-col flex-e">
            <div className="social-profiles flex gap-5 items-end md:items-start">
              {Object.entries(socialLinks).map(
                ([key, url]) =>
                  url && (
                    <div key={key}>
                      <a href={url} title={key}>
                        <span className="icon hover:text-blue-500">
                          {socialIcons[key]}
                        </span>
                      </a>
                    </div>
                  )
              )}
            </div>
          </div>
        </article>
      </section>
      <div className="footer-links flex gap-10">
        <section className="footer-services">
          <article className="footer-content flex flex-col gap-6">
            <div className="footer-section flex flex-col gap-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="flex flex-col gap-2">
                {services.map((service, index) => (
                  <li key={index} className="list transition-all">
                    <div className="hover:translate-x-4 transition-transform duration-300 ease-in-out">
                      <a className="hover:text-blue-500" href={`${service.id}`}>
                        {service.name}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>
        <section className="footer-services">
          <article className="footer-content flex flex-col gap-6">
            <div className="footer-section flex flex-col gap-4">
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="flex flex-col gap-2">
                {quickLinks.map((link, index) => (
                  <li key={index} className="list transition-all">
                    <div className="hover:translate-x-4 transition-transform duration-300 ease-in-out">
                      <a
                        className="hover:text-blue-500"
                        href={`${link.id}`}
                      >
                        {link.name}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

FooterContent.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  contactEmail: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  socialLinks: PropTypes.shape({
    whatsapp: PropTypes.string,
    linkedin: PropTypes.string,
    facebook: PropTypes.string,
    instagram: PropTypes.string,
  }).isRequired,
  // services: PropTypes.arrayOf(PropTypes.string).isRequired,
  // quickLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FooterContent;
