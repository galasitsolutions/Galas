import FooterContent from "../ui/FooterContent";
import galas from "../../assets/img/icons/galas-it-solutions.png";



const footerData = {
  logoSrc: galas,
  contactEmail: "info@galasitsolutions.com",
  contactNumber: "+91 81787 77874",
  socialLinks: {
    whatsapp:
      "https://api.whatsapp.com/send/?phone=%2B918178777874&text&type=phone_number&app_absent=0",
    linkedin: "https://www.linkedin.com/company/galas-it-solutions/mycompany/",
    facebook: "https://www.facebook.com/profile.php?id=61562438966562",
    instagram: "https://www.instagram.com/galas_it_solutions/",
  },

};

export default function Footer() {
  return (
    <>
      <div className="section-space"></div>
      <footer className="main-footer container mx-auto px-4">
        <section className="relative py-6 px-2">
          <FooterContent
            logoSrc={footerData.logoSrc}
            contactEmail={footerData.contactEmail}
            contactNumber={footerData.contactNumber}
            socialLinks={footerData.socialLinks}
            services={footerData.services}
            quickLinks={footerData.quickLinks}
          />
          <div className="section-space"></div>
          <div className="footer-bottom ">
            <div className="copyright text-xs flex justify-between items-center  py-2 border-t border-gray-600 border-solid flex-col lg:flex-row">
              <a className="privacy hover:text-blue-500" href="#">
                Privacy Policy
              </a>
              <p className="copyright-section text-xs">
                &copy; Copyright 2025 by GALAS IT SOLUTIONS Pvt. Ltd.
              </p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
