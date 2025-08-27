import BackgroundAnimation from "./components/BackgroundAnimation";
import HeaderSection from "./sections/HeaderSection";
import MainSection from "./sections/MainSection";
import "./styles/stars.css";

const LandingPage = () => {
  return (
    <div className="relative h-dvh flex flex-col overflow-hidden">
      <BackgroundAnimation />
      <HeaderSection />
      <MainSection />
    </div>
  );
};

export default LandingPage;
