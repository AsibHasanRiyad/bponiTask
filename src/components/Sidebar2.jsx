const Sidebar2 = () => {
  return (
    <div className=" flex flex-col justify-between max-h-screen w-full">
      <h1 className=" text-2xl font-medium">Cart</h1>
      <div className=" flex flex-col gap-5 justify-center items-center h-[calc(100vh_-_15rem)]">
        <img
          src="https://avatars.mds.yandex.net/get-bunker/61205/a11b38948b6d328e2f739d602fa36b15b2680ba8/svg"
          alt=""
        />
        <h1 className=" text-3xl text-center font-medium">
          Your Cart is Currently empty
        </h1>
      </div>
      <div>
        <div role="alert" className="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>12 unread messages. Tap to see.</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
