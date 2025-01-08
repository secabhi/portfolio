"use client";
import BlueText from "../BlueText";
import Button from "../Button";
import Carousel from "../Carousel";
import WhatIDoContent from "./content";

const WhatIDo = () => {
  const cardsData = [
    {
      image: "/assets/images/ui.webp",
      title: "UI Design Kit 2",
      text: "We have got quite a few already made templates for better project management that you can use now.",
    },
    {
      image: "/assets/images/ui.webp",
      title: "UX Design 1",
      text: "Lorem ipsum dolor",
    },
    {
      image: "/assets/images/ui.webp",
      title: "UI Design Kit 3",
      text: "We have got quite a few already made templates for better project management that you can use now.",
    },
    {
      image: "/assets/images/ui.webp",
      title: "UX Design 2",
      text: "Lorem ipsum dolor",
    },
    {
      image: "/assets/images/ui.webp",
      title: "UI Design Kit 4",
      text: "We have got quite a few already made templates for better project management that you can use now.",
    },
  ];
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div
      id="whatido"
      className="flex flex-col items-start justify-center pl-32 pt-12"
    >
      <BlueText text="What I do" />
      <WhatIDoContent />
      <Button
        text="Contact me"
        onClick={() => {
          console.log("Contact me");
        }}
      />
      <div className="mt-20 flex flex-row items-center justify-space-between w-full gap-8 pr-32">
        <Carousel cards={cardsData} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default WhatIDo;
