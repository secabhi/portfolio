"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const RightHeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Default animation duration (1 second)
      once: true, // Ensure animations occur only once
    });
  }, []);

  return (
    <div className="main__view">
      <div className="main__preview" data-aos="fade-in" data-aos-delay="100">
        <Image
          className="main__pic"
          src="/assets/images/main-pic-6.png"
          alt="Preview image 6"
          width={910}
          height={700}
          style={{ position: "relative", top: "57px", right: "48px" }}
        />
      </div>
      <div className="main__preview" data-aos="fade-in" data-aos-delay="200">
        <Image
          className="main__pic js-parallax"
          src="/assets/images/main-pic-1.png"
          alt="Preview image 1"
          width={156}
          height={156}
          style={{
            willChange: "transform",
            transform: "translate3d(0px, -10px, 0px)",
            transition: "transform 0.5s cubic-bezier(0, 0, 0, 1)",
            position: "absolute",
            top: "114px",
            zIndex: 4,
            left: "64.5%",
          }}
          data-scale="2.5"
          data-orientation="up"
        />
      </div>
      <div className="main__preview" data-aos="fade-in" data-aos-delay="300">
        <Image
          className="main__pic js-parallax"
          src="/assets/images/main-pic-2.png"
          alt="Preview image 2"
          width={500}
          height={500}
          style={{
            willChange: "transform",
            transform: "translate3d(0px, 1px, 0px)",
            transition: "transform 0.5s cubic-bezier(0, 0, 0, 1)",
            width: "305px",
            right: "19.5%",
            top: "13%",
            position: "absolute",
          }}
          data-scale="1.5"
          data-orientation="up"
        />
      </div>
      <div className="main__preview" data-aos="fade-in" data-aos-delay="400">
        <Image
          className="main__pic"
          src="/assets/images/main-pic-3.png"
          alt="Preview image 3"
          width={500}
          height={500}
          style={{
            position: "absolute",
            top: "39%",
            width: "305px",
            right: "30.66%",
          }}
        />
      </div>
      <div className="main__preview" data-aos="fade-in" data-aos-delay="500">
        <Image
          className="main__pic"
          src="/assets/images/main-pic-4.png"
          alt="Preview image 4"
          width={500}
          height={500}
          style={{
            position: "absolute",
            top: "41%",
            width: "200px",
            right: "11.89%",
            height: "174px",
          }}
        />
      </div>
      <div className="main__preview" data-aos="fade-in" data-aos-delay="600">
        <Image
          className="main__pic js-parallax"
          src="/assets/images/main-pic-5.png"
          alt="Preview image 5"
          width={500}
          height={500}
          style={{
            willChange: "transform",
            transform: "translate3d(0px, 128px, 0px)",
            transition: "transform 0.5s cubic-bezier(0, 0, 0, 1)",
            width: "78px",
            right: "29.0%",
            top: "44%",
            position: "absolute",
          }}
          data-scale="4.5"
          data-orientation="up"
        />
      </div>
      <div className="main__preview" data-aos="fade-in" data-aos-delay="700">
        <Image
          className="main__pic js-parallax"
          src="/assets/images/main-pic-7.png"
          alt="Preview image 7"
          width={500}
          height={500}
          style={{
            willChange: "transform",
            transform: "translate3d(0px, -54px, 0px)",
            transition: "transform 0.5s cubic-bezier(0, 0, 0, 1)",
            position: "absolute",
            left: "82%",
            top: "44%",
          }}
          data-scale="1.5"
          data-orientation="down"
        />
      </div>
    </div>
  );
};

export default RightHeroSection;
