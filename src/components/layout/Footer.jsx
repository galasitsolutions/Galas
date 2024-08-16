import FooterContent from '../ui/FooterContent';

const footerData = {
  logoSrc: "http://127.0.0.1:5500/src/assets/img/logo/galas-it-solutions.png",
  contactEmail: "info@galasitsolutions.com",
  contactNumber: "+91 81787 77874",
  socialLinks: {
    whatsapp: "https://api.whatsapp.com/send/?phone=%2B918178777874&text&type=phone_number&app_absent=0",
    linkedin: "https://www.linkedin.com/company/galas-it-solutions/mycompany/",
    facebook: "https://www.facebook.com/profile.php?id=61562438966562",
    instagram: "https://www.instagram.com/galas_it_solutions/"
  },
  services: [
    'IT Staffing',
    'Product Development',
    'Digital Marketing',
    'And more'
  ],
  quickLinks: [
    'Home',
    'About',
    'Services',
    'Team'
  ]
};

export default function Footer() {
  return (
    <>
      <div className="section-space"></div>
      <footer className="main-footer">
        <section className="relative py-7 px-20">
          <FooterContent
            logoSrc={footerData.logoSrc}
            contactEmail={footerData.contactEmail}
            contactNumber={footerData.contactNumber}
            socialLinks={footerData.socialLinks}
            services={footerData.services}
            quickLinks={footerData.quickLinks}
          />
          <div className="section-space-inner"></div>
          <div className="footer-bottom mt-8">
            <div className="copyright text-xs flex justify-between items-center mt-10 py-2 border-t border-gray-600 border-solid flex-col lg:flex-row">
              <a className="privacy hover:text-blue-500" href="#">Privacy Policy</a>
              <p className="copyright-section text-xs">
                &copy; Copyright 2024 by Galas Enterprises
              </p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
