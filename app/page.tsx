
//import Hero from "./components/Hero";
import React from "react";
import Hero from "./components/Hero/Hero";
import WhatIDo from "./components/WhatIDo";
import WorkWith from "./components/WorkWith";
import ScrollAnimation from "./newPage";
import ProductContainer from "./components/Products/ProductContainer";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="bg-white page pb-20">
        <Hero />
        <WhatIDo />
        <WorkWith />
        {/* <ScrollAnimation /> */}
        <ProductContainer />
      </div>
    </main>
  );
}

