import { useEffect, useState } from "react";
import Banner from "./Banner";
import Card from "./Card";

const Center = () => {
    const [data, setData] = useState([])
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
  return (
    <div>
      {/* banner */}
      <Banner />
      <h1 className=" my-5 text-3xl font-semibold">Chicken</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            data.map(food => <Card key={food.name} food={food} ></Card>)
        }
      </div>
    </div>
  );
};

export default Center;
