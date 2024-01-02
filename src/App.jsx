
import Center from "./components/Center";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar1 from "./components/Sidebar1";
import Sidebar2 from "./components/Sidebar2";

const App = () => {
  return (
    <div className=" max-w-[1440px] mx-auto bg-[#F5F4F2]">
      <Navbar />
      <div className=" grid grid-cols-10 gap-0 md:gap-5 lg:gap-10 items-start pt-20 lg:pt-28">
        <div className="h-screen overflow-hidden col-span-1 lg:col-span-2 sticky top-0 md:top-20 lg:top-28">
       <Sidebar1 />
        </div>
        <div className=" col-span-8 md:col-span-9 lg:col-span-5 pr-4 md:pr-12 lg:pr-0 text-justify mt-10 lg:mt-0"> 
        <Center />
        </div>
        <div className=" h-[calc(100vh_- _10rem)] overflow-y-auto sticky top-28 mr-12  hidden lg:block lg:col-span-3 bg-white rounded-2xl p-5 ">
          <Sidebar2 />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;