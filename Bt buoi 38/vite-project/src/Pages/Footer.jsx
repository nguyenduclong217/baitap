import React from "react";
import { Apple } from "lucide-react";
import { CircleArrowDown } from "lucide-react";
import { Facebook } from "lucide-react";
import { Camera } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import { Bell } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <div className="bg-amber-300 flex p-8">
        <div className="w-[33%]">
          <img src="/img/LOGO 1.svg" alt="" />
          <div className="flex mt-3 gap-3">
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
          <p className="w-[320px] mt-4">
            Company # 490039-445, Registered with House of companies.
          </p>
        </div>

        <div className="w-[33%]">
          <h1 className="font-bold">Get Exclusive Deals in your Inbox</h1>
          <form className="border border-gray-400 w-[75%] rounded-full overflow-hidden mt-5">
            <input
              type="text"
              className=" px-5 py-3 outline-none w-[55%]"
              placeholder="youremail@gmail.com"
            />
            <button className="font-bold text-[15px] text-white bg-amber-500 w-[45%] p-4 rounded-full">
              {" "}
              Subscribe
            </button>
          </form>
          <p className="text-[12px] ml-4 mt-3">
            we wont spam, read our email policy
          </p>
          <div className="flex gap-3 ml-8 mt-3">
            <Facebook className="rounded-full bg-black text-white" />
            <Camera className="rounded-full bg-black text-white" />
            <MessageCircleMore className=" rounded-full bg-black text-white" />
            <Bell className="rounded-full bg-black text-white" />
          </div>
        </div>
        <div className="flex gap-7">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold">Legal Pages</h1>
            <div>
              <a className="underline cursor-pointer">Terms and conditions</a>
            </div>
            <div>
              <a className="underline cursor-pointer">Privacy</a>
            </div>
            <div>
              <a className="underline cursor-pointer">Cookies</a>
            </div>
            <div>
              <a className="underline cursor-pointer">
                Modern Slavery Statement
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold">Important Links</h1>
            <div>
              <a className="underline cursor-pointer">Get help</a>
            </div>
            <div>
              <a className="underline cursor-pointer">Add your restaurant</a>
            </div>
            <div>
              <a className="underline cursor-pointer">Sign up to deliver</a>
            </div>
            <div>
              <a className="underline cursor-pointer">
                Create a business account
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around gap-90 py-6 bg-[#03081F]">
        <h1 className="text-white">
          Order.uk Copyright 2024, All Rights Reserved
        </h1>
        <div className="flex gap-8">
          <p className="text-white">Privacy Policy</p>
          <p className="text-white">Terms</p>
          <p className="text-white">Pricing</p>
          <p className="text-white">
            Do not sell or share my personal information
          </p>
        </div>
      </div>
    </div>
  );
}
