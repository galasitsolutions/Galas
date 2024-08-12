import MainLayout from "../layout/MainLayout";
import HeroSection from "../section/HeroSection";
import AboutSection from "../section/AboutSection";
import Services from "../section/Services";
import Team from "../section/Team";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection/>
      <Services/>
      <Team/>
    </MainLayout>
  );
};

export default Home;
