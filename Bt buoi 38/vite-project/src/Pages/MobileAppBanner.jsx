import React from "react";
import { Apple } from "lucide-react";
import { CircleArrowDown } from "lucide-react";
export default function MobileAppBanner() {
  return (
    <div className="mt-10">
      <div className="h-[600px] relative bg-gray-600">
        <img
          src="/img/friends-laughing-using-mobiles 2.svg"
          alt=""
          className="absolute bottom-0 z-10 left-9 drop-shadow-[-15px_-15px_0px_rgba(0,0,0,0.38)]"
        />

        <div className="flex absolute z-20 right-18 top-20">
          <img src="/img/LOGO 1.svg" alt="" />
          <h1 className="text-6xl font-bold">ing is more</h1>
        </div>
        <div className="absolute top-52 w-[50%] bg-black p-5 rounded-full flex justify-end right-22">
          <h1 className="text-4xl font-bold text-white mr-6">
            <span className="underline text-orange-400 cursor-pointer">
              Personalised
            </span>{" "}
            & Instant
          </h1>
        </div>

        <p className="text-[17px] absolute top-73 right-35">
          Download the Order.uk app for faster ordering
        </p>
        <div className="flex gap-3 absolute top-80 right-30">
          <a
            href="https://apps.apple.com/vn/app/apple-store/id375380948?l=vi"
            className="flex items-center gap-3 p-2 bg-black rounded-[12px] w-[160px] cursor-pointer"
          >
            <Apple className="text-white" />
            <div>
              <p className="text-white text-[12px]">Download on the</p>
              <h1 className="text-white text-xl">App Store</h1>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/developer?id=App+Store.&hl=vi"
            className="flex items-center gap-3 p-2 bg-black rounded-[12px] w-[160px] cursor-pointer "
          >
            <CircleArrowDown className="text-white" />
            <div>
              <p className="text-white text-[12px] ">GET IT CN</p>
              <h1 className="text-white text-xl">Google Play</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
