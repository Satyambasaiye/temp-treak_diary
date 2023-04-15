/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "./logo.png";

export default function Nav() {
  return (
    <div className="shadow-md bg-white w-full fixed top-0 left-0">
      <div className="flex items-center justify-between bg-white py-4 md:px-4 px-5">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
            text-gray-800 "
        >
          <div>
            <img src={logo} className="w-16 h-16 "></img>
          </div>
        </div>
        <div>
          <button class="bg-transparent hover:bg-yellow-300 text-black font-semibold hover:text-black  py-1 px-1 border  hover:border-transparent rounded-2xl">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
