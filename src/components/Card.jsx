

const Card = () => {
    return (
        <div className=" space-y-2 bg-white p-4 rounded-2xl">
            <img className=" rounded-2xl" src="https://i.ibb.co/mSm5vgS/Blog-Thumbnail-db87447f-84c8-44a0-828f-d637f7536ba2.webp" alt="" />
            <h1 className=" text-2xl font-medium">630 TK</h1>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <div className=" pt-5">
            <button className=" w-full bg-[#F5F4F2] py-2.5 rounded-xl"> + Add</button>
            </div>
        </div>
    );
};

export default Card;