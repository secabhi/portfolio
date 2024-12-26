import DynamicTextWithAOS from "./DynamicText";

const LeftHeroSection=()=>{
    return (
      <div>
        <div className="flex items-center gap-2 text-[#4C40F7]">
          <hr className="w-16 bg-[#4C40F7] h-1" />
          <label className="font-semibold">Abhishek Sinha</label>
        </div>
        <div className="text-[72px] w-[28rem] leading-[68px] pt-4">
          <h1 className="main__title title h1 text-black font-semibold tracking-[1px]">
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
      </div>
    );
}

export default LeftHeroSection;