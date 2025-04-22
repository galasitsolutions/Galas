import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import MainLayout from "../layout/MainLayout";

const HeroSection = React.lazy(() => import("../section/HeroSection"));
const AboutSection = React.lazy(() => import("../section/AboutSection"));
const Services = React.lazy(() => import("../section/Services"));
// const Team = React.lazy(() => import("../section/Team"));
const ContactUs = React.lazy(() => import("../section/ContactUs"));
const PartnerSection = React.lazy(() => import("../section/PartnerSection"));
// const OurProduct = React.lazy(() => import("../section/OurProduct"))

const ErrorBoundary = ({ children }) => {
  return <div>{children}</div>;
};

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

const Home = () => {
  return (
    <MainLayout>
      <Helmet>
        <meta
          name="description"
          content="Galas IT Solutions - A leading digital marketing and IT services agency specializing in website development, mobile app development, SEO, PPC, graphic design, AI solutions, and e-commerce platforms. Serving clients globally from India, USA, Dubai, and beyond."
        />
        <meta
          name="keywords"
          content="digital marketing agency, website development, mobile app development, SEO services, PPC advertising, graphic design, AI solutions, e-commerce development, MERN stack, Python development, Java development, fintech solutions, IT consulting, custom software, India, USA, Dubai"
        />
        <meta name="author" content="Galas IT Solutions" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.galasitsolutions.com/" />

        <meta
          property="og:title"
          content="Galas IT Solutions - Digital Marketing & IT Services"
        />
        <meta
          property="og:description"
          content="Galas IT Solutions specializes in digital marketing, website & mobile app development, SEO, PPC, AI solutions, and e-commerce development. Serving businesses in India, USA, Dubai, and worldwide."
        />
        <meta property="og:url" content="https://www.galasitsolutions.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.galasitsolutions.com/logo.png"
        />
        <meta property="og:site_name" content="Galas IT Solutions" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Galas IT Solutions - Your Digital Partner"
        />
        <meta
          name="twitter:description"
          content="Leading IT solutions agency for website development, SEO, PPC, AI, mobile apps, and e-commerce."
        />
        <meta
          name="twitter:image"
          content="https://www.galasitsolutions.com/logo.png"
        />

        <meta name="linkedin:card" content="summary_large_image" />
        <meta
          name="linkedin:title"
          content="Galas IT Solutions - Digital Agency & IT Services"
        />
        <meta
          name="linkedin:description"
          content="Leading digital marketing & IT solutions agency specializing in SEO, PPC, website development, AI, mobile apps, and e-commerce. Serving India, USA, Dubai & beyond."
        />
        <meta
          name="linkedin:image"
          content="https://www.galasitsolutions.com/logo.png"
        />

        <meta name="instagram:card" content="summary_large_image" />
        <meta
          name="instagram:title"
          content="Galas IT Solutions - Digital Experts"
        />
        <meta
          name="instagram:description"
          content="Expert IT solutions for digital marketing, website development, SEO, PPC, AI, and e-commerce platforms."
        />
        <meta
          name="instagram:image"
          content="https://www.galasitsolutions.com/logo.png"
        />
      </Helmet>

      <Suspense
        fallback={
          <div className="flex justify-center items-center">Loading...</div>
        }
      >
        <ErrorBoundary>
          <HeroSection />
          <AboutSection />
          <Services />
          {/* <OurProduct /> */}
          {/* <Team /> */}
          <PartnerSection />
          <ContactUs />
        </ErrorBoundary>
      </Suspense>
    </MainLayout>
  );
};

export default Home;
