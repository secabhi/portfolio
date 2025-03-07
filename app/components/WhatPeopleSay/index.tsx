import Image from "next/image"

const WhatPeopleSay = () => {
    return (
      <div className="flex flex-col items-center justify-center relative">
        <h1 className="mb-8 absolute text-[#4C40F7] text-xl font-semibold top-[26%] ml-[7%]">
          What People Say
        </h1>
        <div>
          <Image
            src={"/assets/images/review-cube.png"}
            width={730}
            height={602}
            alt="cube"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-7xl font-semibold absolute top-[50%] ml-[7%] text-black text-center">
          <h3>
            Trusted by <br /> Clients
          </h3>
        </div>
      </div>
    );
}

export default WhatPeopleSay