import Image from 'next/image';
import { TbBrandDribbble, TbBrandInstagram } from "react-icons/tb";


const NavBar = () => {
  return (
    <div className="bg-white absolute">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="navbar-center hidden lg:flex text-black">
            <ul className="menu menu-horizontal px-1 flex items-center gap-40">
              <li>
                <a>
                  <Image
                    src="/assets/images/logo.svg"
                    alt="logo"
                    priority={true}
                    width={100}
                    height={100}
                    style={{ scale: "1.5" }}
                  />
                </a>
              </li>
              <li className="flex items-center font-semibold">
                <a className="text-black/40 hover:text-black hover:bg-transparent transition duration-300  gap-1 text-[18px]">
                  <TbBrandDribbble fontWeight={500} /> Dribble
                </a>
              </li>
              <li className="flex items-center font-semibold">
                <a className="text-black/40 hover:text-black hover:bg-transparent transition duration-300  gap-1 text-[18px]">
                  <TbBrandInstagram fontWeight={500} /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
