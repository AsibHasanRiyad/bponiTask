
import { IoIosArrowRoundBack } from "react-icons/io"
const Sidebar1 = () => {
    return (
        <div>
            <div className="min-h-screen flex justify-end flex-row">
  <div className="flex flex-col overflow-hidden">
    <div className=" text-start">
      <h1 className="text-base flex items-center justify-start gap-1 font-medium  cursor-pointer bg-white  rounded-xl pl-3 pr-16 py-2"> <IoIosArrowRoundBack className="text-4xl" /> All Restaurants</h1>
    </div>


    <ul className="flex flex-col text-start space-y-4 py-4 pt-10">
      <li>
        <h1 className=" text-xl font-medium pl-3">Menu</h1>
      </li>
      <li>
        <h1 className="cursor-pointer bg-white font-medium  rounded-xl pl-3 pr-16 py-3 w-full">What&apos;s New</h1>
      </li>
      <li>
        <h1 className="cursor-pointer font-medium pl-3">Offer</h1>
      </li>
      <li>
        <h1 className="cursor-pointer font-medium pl-3">Trending</h1>
      </li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Sidebar1;