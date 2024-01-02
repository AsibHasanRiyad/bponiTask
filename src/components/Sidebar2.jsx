import { RiWalkFill } from "react-icons/ri";
import { CiCircleInfo } from "react-icons/ci";
const Sidebar2 = () => {
  return (
    <div className=" flex flex-col justify-between max-h-screen w-full">
      <h1 className=" text-2xl font-medium">Cart</h1>
      <div className=" flex flex-col gap-5 justify-center items-center h-[calc(100vh_-_16rem)]">
        <img
          src="https://avatars.mds.yandex.net/get-bunker/61205/a11b38948b6d328e2f739d602fa36b15b2680ba8/svg"
          alt=""
        />
        <h1 className=" text-3xl text-center font-medium">
          Your Cart is Currently empty
        </h1>
      </div>
      <div>
        <div role="alert" className="alert bg-transparent border-none items-center">
          <div className=" bg-gray-100 p-4 rounded-md">
          <RiWalkFill  />
          </div>
          <div>
            <span className=" text-[#5AC31A] text-xs">
              Бесплатная доставка от 1000 30–40 мин.
            </span>
            <h1 className=" text-xs text-gray-500">Подробные условия</h1>
          </div>
          <div>
            <CiCircleInfo className=" text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
