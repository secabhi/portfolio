"use client"
import BlueText from "../BlueText";
import DynamicTextWithAOS from "./DynamicText";
import { CgScrollV } from "react-icons/cg";

const LeftHeroSection = () => {

  const scrollToSection = () => {
    document.getElementById("whatido")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="mb-32">
      <BlueText text="Abhishek Sinha" />
      <div className="text-[72px] w-[28rem] leading-[68px] pt-4">
        <h1
          className="main__title title h1 text-black font-semibold tracking-[1px]"
          data-aos="new-animation"
        >
          <div
            data-aos="transform"
            data-aos-delay="150"
            className="aos-init aos-animate"
          >
            Hello, my
          </div>
          <div
            data-aos="transform"
            data-aos-delay="300"
            className="aos-init aos-animate"
          >
            {`name's Abhishek.`}
          </div>
          <div
            data-aos="transform"
            data-aos-delay="450"
            className="aos-init aos-animate mt-8"
          >
            {`I'm a`}
          </div>
          <div
            data-aos="transform"
            data-aos-delay="600"
            className="aos-init aos-animate text-[72px] "
          >
            <DynamicTextWithAOS />
          </div>
        </h1>
      </div>
      <div
        className="flex items-center justify-start space-x-4 mt-20 cursor-pointer"
        data-aos="fade-up"
      >
        <div
          className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-[0_5px_20px_rgba(17,16,41,0.05)] hover:shadow-[0_10px_30px_rgba(17,16,41,0.1)] transition-shadow duration-300"
          onClick={scrollToSection}
        >
          <CgScrollV className="text-gray-700 text-4xl transform transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />
        </div>

        <p className="text-gray-700 text-lg font-medium">Scroll Down</p>
      </div>
    </div>
  );
};

export default LeftHeroSection;
