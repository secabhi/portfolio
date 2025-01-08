"use client"
import { FaArrowRight } from "react-icons/fa";

const Button = ({ text = "Button", onClick=()=>{} }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <button
        className="flex justify-center items-center bg-[#4C40F7] text-white text-xl rounded-[20px] px-16 py-6 hover:bg-[#3C3A9E] transition duration-300"
        onClick={onClick}
      >
        {text}
        {/* <span>
          <FaArrowRight className="ml-4 " />
        </span> */}
      </button>
    </div>
  );
};

export default Button;
