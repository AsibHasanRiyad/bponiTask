import { GrLocationPin } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
const Navbar = () => {
  return (
   <div className=" max-w-[1440px] mx-auto">
     <div className=" fixed w-[1440px] mx-auto top-0 bg-[#F5F4F2] z-50">
      <div className="navbar px-4 lg:px-6 py-3">
        {/* nav start */}
        <div className="flex-1 flex items-center gap-4">
          <div>
            <img
              className=" h-8 w-8 lg:h-14 lg:w-14"
              src="https://i.ibb.co/r6y3mmC/spiral.png"
              alt=""
            />
          </div>
          {/* location */}
          <div className=" flex items-center gap-2 text-base w-fit lg:text-xl font-extrabold border-2 border-gray-300 rounded-2xl px-3 lg:px-5 py-1.5 lg:py-3">
            <GrLocationPin />{" "}
            <span className=" text-xs lg:text-base font-medium">Mirpur 10, Dhaka</span>{" "}
            <IoIosArrowDown />
          </div>
        </div>
        {/* nav end */}
        <div className="flex-none flex gap-2 lg:gap-5 items-center">
          <div className=" flex flex-col items-center">
            <TbWorld className=" text-lg lg:text-2xl" />
            <span className=" text-sm lg:text-2xl">English</span>
          </div>
          <div>
            <button className=" bg-[#E7E6E4] rounded-xl lg:rounded-2xl px-4 lg:px-8 py-1 lg:py-4 flex justify-center items-center">Login</button>
          </div>
        </div>
      </div>
      <div className=" bg-gray-300 h-[1px]"></div>
    </div>
   </div>
  );
};

export default Navbar;
