import LeftHeroSection from "./LeftHeroSection";
import NavBar from "../NavBar/NavBar";
import RightHeroSection from "./RightHeroSection";

const Hero = () => {
  return (
    <div className="h-[1024px] w-full bg-[url('/assets/images/bg-main.jpg')] bg-cover bg-center absolute pt-6 pl-12">
      <NavBar />
      <section className="ml-20 mt-48">
        <div className="flex justify-between">
          <LeftHeroSection />
          <RightHeroSection />
        </div>
      </section>
    </div>
  );
};

export default Hero;
