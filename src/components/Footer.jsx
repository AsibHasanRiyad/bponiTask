import { FaApple } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className=" px-10 lg:px-32 py-24">
        <h1 className=" text-xl font-bold">Even easier in the app</h1>
        <div className=" flex items-center gap-3 mt-5">
          <button className=" flex items-center gap-2 text-gray-500 border-2 py-3 px-8 rounded-2xl">
            <FaApple className=" text-2xl" /> <span>App Store</span>
          </button>
          <button className=" flex items-center gap-2 text-gray-500 border-2 py-3 px-8 rounded-2xl">
            <FaApple className=" text-2xl" /> <span>App Store</span>
          </button>
        </div>
      </div>
      <hr />
      {/* company info */}
      <div className=" px-10 lg:px-32 space-y-10 pb-10">
        <h1 className=" pt-10">Company Information</h1>
        <div className=" flex gap-5 flex-wrap text-sm text-[#B0B0B0] ">
          <button>User agreement</button>
          <button>Contacts</button>
          <button>Delivery</button>
          <button>FAQ</button>
          <button>Become a partner</button>
          <button>Become a courier</button>
          <button>Plastic recycling</button>
          <button>Eats for Business </button>
          <button>Order food in the Yandex Go app</button>
          <button> Feedback</button>
        </div>
      </div>
      <hr className=" py-4" />
      {/*  */}
      <div className="text-[#B0B0B0] text-sm flex justify-between px-10 lg:px-32 pb-5 ">
        <h1>© 2018–2024 Yandex Eats LLC</h1>
        <h1>Project for Yandex</h1>
      </div>
    </div>
  );
};

export default Footer;
