"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import BlueText from "../BlueText";

const WorkWith = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    console.log((scrollPosition - 100) * 0.04);
    setOffsetY((scrollPosition - 100) * 0.04); // Adjust speed by modifying the multiplier
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setOffsetY(0);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      id="workwith"
      className="h-[1024px] flex flex-col pl-16 pt-12 bg-[#1B1B87] mt-32"
    >
      <div className="flex flex-col items-start justify-center">
        <Image
          src={"/assets/images/workWith/cube.png"}
          alt="cube"
          width={193}
          height={135}
          className="mt-0"
          data-aos="move-animation"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="800"
          style={{
            backgroundImage: "url('/assets/images/workWith/cube.png')",
            willChange: "transform",
            transform: `translate3d(0px, ${offsetY}px, 0px)`,
            transition: "transform 0.5s cubic-bezier(0, 0, 0, 1)",
          }}
        />
      </div>

      <div className="flex flex-col justify-center mt-24">
        <BlueText text="Work with me" color="#FFBDBD" />
        <div className="flex flex-row items-center gap-8">
          <div
            className="flex flex-col justify-center"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
          >
            <h3 className="text-white text-[72px] leading-[84px] font-semibold mt-4 pb-14">
              Art Direction for
              <br /> Global Leading <br />
              Brands.
            </h3>
            <p className="text-white text-sm leading-7">
              I research and create breakthrough - delightful
              <br /> ideas, leading visual designers.   
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWith;
