"use client";
import Image from "next/image";
import BlueText from "../BlueText";
import React from "react";
import ProductDetail from "./ProductDetail";

const ProductContainer = () => {
  return (
    <div className="flex flex-col items-start justify-center pl-32 pt-20">
      <div>
        <BlueText text="Abhishek Sinha" />
        <div className="flex flex-row items-center justify-center h-52">
          <h3
            className="text-[72px] text-[#000000] font-[500] leading-[84px]"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="500"
          >
            Look at My
            <br /> Products.
          </h3>
          <Image
            src="/assets/images/figure-2.png"
            alt="product-1"
            width={363}
            height={272}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
          />
        </div>
      </div>
      <div className="mt-16 pb-10 w-full">
        <div
          role="tablist"
          className="tabs tabs-bordered"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className={`tab !w-[240px] cursor-pointer`}
            aria-label="Website"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content py-10"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className={`tab !w-[240px] cursor-pointer`}
            aria-label="UI/UX Design"
          />
          <div
            role="tabpanel"
            className="tab-content py-10"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <ProductDetail />
            <ProductDetail />
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className={`tab !w-[240px] cursor-pointer`}
            aria-label="Mobile / Small Devices"
          />
          <div
            role="tabpanel"
            className="tab-content py-10"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <ProductDetail />
            <ProductDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
