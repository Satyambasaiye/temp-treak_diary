import React from "react";
import { Link } from "react-router-dom";


export default function Card({ data }) {
  return (
    <div className="  max-w-sm h-auto lg:max-w-sm inline-block p-2 cursor-pointer lg:hover:scale-105 ease-in-out duration-300">
      <div className=" h-auto rounded-3xl shadow-xl mt-5 mb-2 mx-auto whitespace-pre-wrap bg-white">
        <img
          className=" w-full h-60 rounded-3xl"
          src={data.img}
          alt="Trekking View"
        />
        <div className="px-6 py-1">
          <div className="font-bold text-lg my-2">{data.title}</div>
        </div>
        <div className="px-6 font-semibold">
          <p className="py-2">{data.date}</p>
          <p className="py-2">{data.location}</p>
          <p className="py-2">{data.fees}</p>
          <div className="flex justify-center">
            <Link to="/description">
            <button className="mt-5 mb-3 bg-yellow-400 px-5 py-0.5 rounded-lg grid">
              Book Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
