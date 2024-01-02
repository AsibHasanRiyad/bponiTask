// import { IoManSharp } from "react-icons/io5";
// import { IoStar } from "react-icons/io5";
// import { MdInfoOutline } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
const Banner = () => {
  return (
    <div>
      <div className=" ">
        <img
          className=" rounded-3xl"
          src="https://i.ibb.co/fDmfNxr/KFC-PR-Image-2-1200x667.jpg"
          alt=""
        />

        {/*  */}
        {/* <div className=" absolute bottom-5 left-5 md:bottom-10 md:left-10">
          <h1 className=" text-2xl md:text-5xl text-gray-100 font-semibold">KFC</h1>
          <div className=" flex gap-2 md:gap-5 items-center mt-2 md:mt-4">
            <div className=" text-black flex justify-center items-center gap-2 bg-gray-50/90 hover:bg-gray-50 cursor-pointer rounded-lg md:rounded-2xl px-3 md:px-6 py-1">
              <div>
                <IoManSharp className=" text-xl md:text-4xl font-bold" />
              </div>
              <div>
                <h1 className=" text-[9px] md:text-xl">30-40 </h1>
                <h1 className="text-[8px] md:text-sm">min</h1>
              </div>
            </div>
            <div className=" text-black flex justify-center items-center gap-2 bg-gray-50/90 hover:bg-gray-50 cursor-pointer rounded-lg md:rounded-2xl px-3 md:px-6 py-1">
              <div>
                <IoStar className=" text-xl md:text-4xl font-bold" />
              </div>
              <div>
                <h1 className=" text-[9px] md:text-xl">4.6 </h1>
                <h1 className="text-[8px] md:text-sm">200+</h1>
              </div>
            </div>
            <div className=" text-black flex justify-center items-center gap-2 bg-gray-50/90 hover:bg-gray-50 cursor-pointer rounded-lg md:rounded-2xl px-2 md:px-4 py-1.5 md:py-3">
              <div>
                <MdInfoOutline className=" text-xl md:text-3xl font-bold" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className=" my-10">
        <div role="alert" className="alert alert-success bg-[#E4F2DC] border-none">
          <FaGift className=" text-green-600 text-3xl" />
          <span className=" text-lime-500">Your purchase has been confirmed!</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
