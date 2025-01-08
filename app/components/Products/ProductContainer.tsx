"use client";
import Image from "next/image";
import BlueText from "../BlueText";
import React from "react";

const ProductContainer = () => {
  const [activeTab, setActiveTab] = React.useState("tab1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
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
      <div className="mt-16 pb-10">
        <div
          role="tablist"
          className="tabs tabs-bordered"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {/* Tab 1 */}
          <input
            type="radio"
            id="tab1"
            name="my_tabs_1"
            className="peer hidden"
            aria-label="Website"
            onClick={() => handleTabClick("tab1")}
          />
          <label
            htmlFor="tab1"
            className={`tab !w-[240px] cursor-pointer ${
              activeTab === "tab1"
                ? "text-black  !border-black"
                : "text-[#9F9FA9]"
            }`}
          >
            Website
          </label>
          <div role="tabpanel" className="tab-content p-10">
            Tab content 1
          </div>

          {/* Tab 2 */}
          <input
            type="radio"
            id="tab2"
            name="my_tabs_1"
            className="peer hidden"
            aria-label="UI/UX Design"
            defaultChecked
            onClick={() => handleTabClick("tab2")}
          />
          <label
            htmlFor="tab2"
            className={`tab !w-[240px] cursor-pointer ${
              activeTab === "tab2"
                ? "text-black !border-black"
                : "text-[#9F9FA9]"
            }`}
          >
            UI/UX Design
          </label>
          <div role="tabpanel" className="tab-content p-10">
            Tab content 2
          </div>

          {/* Tab 3 */}
          <input
            type="radio"
            id="tab3"
            name="my_tabs_1"
            className="peer hidden"
            aria-label="Mobile / Small Devices"
            onClick={() => handleTabClick("tab3")}
          />
          <label
            htmlFor="tab3"
            className={`tab !w-[240px] cursor-pointer ${
              activeTab === "tab3"
                ? "text-black  !border-black"
                : "text-[#9F9FA9]"
            }`}
          >
            Mobile / Small Devices
          </label>
          <div role="tabpanel" className="tab-content p-10">
            Tab content 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
