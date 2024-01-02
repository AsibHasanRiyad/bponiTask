
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
