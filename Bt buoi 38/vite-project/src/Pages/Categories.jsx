import { useQuery } from "@tanstack/react-query";
import React from "react";
const getData = async () => {
  const response = await fetch(`http://localhost:3000/categories`);
  return response.json();
};
export default function Categories() {
  const { data, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getData,
  });
  console.log(data);
  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <h1 className="font-bold text-black text-[27px] ml-9">
        Order.uk Popular Categories 🤩
      </h1>
      <div className="flex gap-3 mt-6">
        {data?.map((item) => (
          <div
            key={item.id}
            className="w-[16%] bg-gray-300 rounded-[11px] overflow-hidden group cursor-pointer"
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-[160px] object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="p-2">
              <h1 className="font-bold text-[17px]">{item.title}</h1>
              <p className="text-orange-500">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
