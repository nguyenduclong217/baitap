import React from "react";

export default function HeroSection() {
  return (
    <div className="h-[600px] bg-gray-200 rounded-[12px]">
      <div className="relative flex overflow-hidden h-[100%]">
        <div className="w-120 absolute top-40 left-9">
          <p>Order Restaurant food, takeaway and groceries</p>
          <h1 className="font-bold text-5xl mt-3">
            Feast Your Senses,{" "}
            <span className="text-orange-400">Fast and Fresh</span>
          </h1>
          <span className="block mt-7">
            Enter a postcode to see what we deliver
          </span>
          <form className="border border-gray-400 w-[75%] rounded-full overflow-hidden mt-2">
            <input
              type="text"
              className=" px-5 py-3 outline-none w-[55%]"
              placeholder="e.g. EC4R 3TE"
            />
            <button className="font-bold text-[15px] text-white bg-amber-500 w-[45%] p-4 rounded-full">
              {" "}
              Search
            </button>
          </form>
        </div>
        <div>
          <img
            src="/img/Untitled-1 1.svg"
            alt=""
            className="z-22 absolute bottom-0 right-90"
          />
        </div>
        <div className="z-20 absolute right-64 bottom-0">
          <img src="/img/Untitled-2 1.svg" alt="" />
        </div>
        <div className="absolute right-0 bottom-0">
          <img src="/img/image 1.svg" alt="" />
        </div>
        <div className="flex w-80 justify-between p-3 bg-white rounded-[12px] absolute z-30 top-26 right-35">
          <div className="flex flex-col gap-1">
            <img src="/img/LOGO 1.svg" alt="" className="w-15" />
            <h1 className="font-bold text-[15px]">
              We’ve Received your order!
            </h1>
            <p>Awaiting Restaurant acceptance</p>
          </div>
          <span className="text-gray-500">now</span>
        </div>
        <div className="flex w-80 justify-between p-3 bg-white rounded-[12px] absolute z-30 top-66 right-15">
          <div className="flex flex-col gap-1">
            <img src="/img/LOGO 1.svg" alt="" className="w-15" />
            <h1 className="font-bold text-[15px]">Order Accepted!</h1>
            <p>Your order will be delivered shortly</p>
          </div>
          <span className="text-gray-500">now</span>
        </div>
        <div className="flex w-80 justify-between p-3 bg-white rounded-[12px] absolute  z-30 bottom-16 right-27">
          <div className="flex flex-col gap-1">
            <img src="/img/LOGO 1.svg" alt="" className="w-15" />
            <h1 className="font-bold text-[15px]">Your rider's nearby</h1>
            <p>They're almost there - get ready</p>
          </div>
          <span className="text-gray-500">now</span>
        </div>
      </div>
    </div>
  );
}
