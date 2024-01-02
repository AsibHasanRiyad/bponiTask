/* eslint-disable react/prop-types */


const Card = ({food}) => {
    return (
        <div className=" space-y-2 bg-white p-4 rounded-2xl">
            <img className=" rounded-2xl" src={food?.imageUrl} alt="" />
            <h1 className=" text-2xl font-medium">{food?.price}</h1>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <div className=" pt-5">
            <button className=" w-full bg-[#F5F4F2] py-2.5 rounded-xl"> + Add</button>
            </div>
        </div>
    );
};

export default Card;