
//import Hero from "./components/Hero";
import React from "react";
import Hero from "./components/Hero/Hero";
import WhatIDo from "./components/WhatIDo";
import WorkWith from "./components/WorkWith";
import ProductContainer from "./components/Products/ProductContainer";
import WhatPeopleSay from "./components/WhatPeopleSay";
import Feedback from "./components/Feedback";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="bg-white page pb-20">
        <Hero />
        <WhatIDo />
        <WorkWith />
        {/* <ScrollAnimation /> */}
        <ProductContainer />
        <WhatPeopleSay />
        <Feedback />
      </div>
    </main>
  );
}

