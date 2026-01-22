import React from "react";

export default function PartnerSection() {
  return (
    <div className="flex gap-5 ">
      <div className="relative group overflow-hidden rounded-[12px]">
        <img
          src="/img/Group 8 (1).svg"
          alt=""
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute bottom-16 left-20">
          <p className="text-orange-400">Signup as a business</p>
          <h1 className="font-bold text-white text-4xl">Partner with us</h1>
          <button className="px-5 py-2 bg-orange-400 font-bold text-xl text-white rounded-full mt-4 hover:bg-gray-400">
            Get Start
          </button>
        </div>

        <p className="font-bold p-3 bg-white rounded-[12px] w-[250px] text-center absolute top-0 left-17">
          Earn more with lower fees
        </p>
      </div>

      <div className="relative group overflow-hidden rounded-[12px]">
        <img
          src="/img/Group 8 (2).svg"
          alt=""
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-16 left-20">
          <p className="text-orange-400">Signup as a rider</p>
          <h1 className="font-bold text-white font-bold text-4xl">
            Ride with us
          </h1>
          <button className="px-5 py-2 bg-orange-400 font-bold text-xl text-white rounded-full mt-4 hover:bg-gray-400">
            Get Start
          </button>
        </div>
        <p className="font-bold p-3 bg-white rounded-[12px] w-[250px] text-center absolute top-0 left-17">
          Avail exclusive perks
        </p>
      </div>
    </div>
  );
}
