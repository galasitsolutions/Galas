import React, { Suspense } from "react";
import PropTypes from "prop-types";
import MainLayout from "../layout/MainLayout";

const HeroSection = React.lazy(() => import("../section/HeroSection"));
const AboutSection = React.lazy(() => import("../section/AboutSection"));
const Services = React.lazy(() => import("../section/Services"));
// const Team = React.lazy(() => import("../section/Team"));
const ContactUs = React.lazy(() => import("../section/ContactUs"));
const PartnerSection = React.lazy(() => import("../section/PartnerSection"));
// const UpcomingProducts = React.lazy(() => import("../section/UpcomingProducts"))

const ErrorBoundary = ({ children }) => {
  return <div>{children}</div>;
};

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

const Home = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="flex justify-center items-center">Loading...</div>
        }
      >
        <ErrorBoundary>
          <HeroSection />
          <AboutSection />
          <Services />
          {/* <UpcomingProducts />
          <Team /> */}
          <PartnerSection/>
          <ContactUs />
        </ErrorBoundary>
      </Suspense>
    </MainLayout>
  );
};

export default Home;
