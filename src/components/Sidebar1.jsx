import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowRoundBack } from "react-icons/io";



const Sidebar1 = () => {
  return (
    <div className="drawer lg:drawer-open bg-transparent">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mt-0 pl-2 flex flex-col items-start justify-start">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost text-3xl drawer-button lg:hidden"
        >
          <GiHamburgerMenu />
        </label>
      </div>
      <div className="drawer-side ml-0 xl:ml-8">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className=" text-center">
          <h1 className="text-base flex items-center justify-start gap-1 font-medium  cursor-pointer bg-white  rounded-xl pl-3 pr-10 py-2">
            {" "}
            <IoIosArrowRoundBack className="text-3xl" /> All Restaurants
          </h1>
        </div>
        <ul className="menu m-0 p-0 mt-10 min-h-full w-72 lg:w-full pt-14 space-y-4 bg-gray-200 lg:bg-transparent text-base-content">
          <li>
            <h1 className=" text-xl font-medium">Menu</h1>
          </li>
          <li>
            <h1 className="cursor-pointer bg-white font-medium  rounded-xl pl-3 py-3 w-full">
              What&apos;s New
            </h1>
          </li>
          <li>
            <h1 className="cursor-pointer font-medium pl-3">Offer</h1>
          </li>
          <li>
            <h1 className="cursor-pointer font-medium pl-3">New</h1>
          </li>
          <li>
            <h1 className="cursor-pointer font-medium pl-3">Комбо Баскеты</h1>
          </li>
          <li>
            <h1 className="cursor-pointer font-medium pl-3">Комбо</h1>
          </li>
          <li>
            <h1 className="cursor-pointer font-medium pl-3">Напитки</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar1;
