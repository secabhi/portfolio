import Image from "next/image";
const Cards = ({
  image = "",
  title = "",
  text = "",
  imageWidth = 240,
  imageHeight = 240,
  onClick,
  index = 0,
}) => {
  return (
    <div
      id={`image${index}`}
      className="group bg-white rounded-xl flex flex-col items-center justify-start px-4 py-6 h-[700px] w-[400px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-shadow duration-300 mx-1 my-1"
      onClick={onClick}
    >
      <div
        className="main__preview px-6 py-6 justify-center items-center flex flex-col"
        data-aos="fade-in"
        data-aos-delay="500"
      >
        <Image
          className="main__pic group-hover:scale-105 transition-transform duration-300"
          src={image}
          alt="Preview image"
          width={imageWidth}
          height={imageHeight}
          style={{ position: "relative", borderRadius: "50%" }}
        />

        <h5 className="text-gray-700 text-[24px] text-center mt-4 font-semibold pb-6">
          {title}
        </h5>
        <p className="text-gray-500 text-[16px] text-center mb-10">{text}</p>
        <div className="flex justify-center items-center opacity-0 group-hover:opacity-100 bg-[#00113B] rounded-[20px] transition-opacity duration-300">
          <button className="w-[266px] h-[80px] bg-[#00113B] text-white text-[16px] font-semibold rounded-[20px] transform scale-100 hover:scale-105 transition-transform duration-300">
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
