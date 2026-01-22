import { useQuery } from "@tanstack/react-query";
import React from "react";

const getData = async () => {
  const response = await fetch(`http://localhost:3000/restaurants`);
  return response.json();
};

export default function Restaurants() {
  const { data, error } = useQuery({
    queryKey: ["restaurants"],
    queryFn: getData,
  });
  console.log(data);
  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <h1 className="font-bold text-black text-[27px] ml-9">
        Popular Restaurants
      </h1>
      <div className="flex gap-3 mt-6">
        {data?.map((item) => (
          <div
            key={item.id}
            className="
    w-[16%] bg-gray-300 rounded-[11px]
    transition-all duration-300 ease-out
    hover:-translate-y-2 hover:shadow-lg cursor-pointer
  "
          >
            <img src={item.image} alt="" />
            <div className="p-2">
              <h1 className="font-bold text-[17px]">{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
