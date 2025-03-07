import Image from "next/image";

const ProductDetail = () => {
  return (
    <div
      className="flex flex-row items-center justify-center w-full gap-8 pr-32"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <div
        className="group flex flex-col flex-[0_0_calc(50%-32px)] w-[calc(50%-32px)] mt-8 mx-4 shadow-lg rounded-lg bg-white relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <figure className="relative">
          <Image
            src="/assets/images/cases-pic-1.jpg"
            alt="Shoes"
            width={628}
            height={428}
            className="rounded-t-3xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-[#00113B] text-white text-sm font-semibold flex items-center justify-center rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 cursor-pointer">
              Case Study
            </div>
          </div>
        </figure>
        <div className="card-body bg-white flex-grow p-12 pb-19 rounded-b-3xl ">
          <h2 className="card-title text-[#111029] font-semibold text-[32px] pb-5">
            Collab Landing Page
          </h2>
          <p className="text-[#6b6b6b]">UI Kit, Coded Template</p>
        </div>
      </div>

      <div
        className="group flex flex-col flex-[0_0_calc(50%-32px)] w-[calc(50%-32px)] mt-8 mx-4 shadow-lg rounded-lg bg-white relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <figure className="relative">
          <Image
            src="/assets/images/cases-pic-1.jpg"
            alt="Shoes"
            width={628}
            height={428}
            className="rounded-t-3xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-[#00113B] text-white text-sm font-semibold flex items-center justify-center rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 cursor-pointer">
                Case Study
              </div>
            </div>
          </div>
        </figure>
        <div className="card-body bg-white flex-grow p-12 pb-19 rounded-b-3xl ">
          <h2 className="card-title text-[#111029] font-semibold text-[32px] pb-5">
            Collab Landing Page
          </h2>
          <p className="text-[#6b6b6b]">UI Kit, Coded Template</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
