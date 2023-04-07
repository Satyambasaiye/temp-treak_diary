import React from "react";
import { trekData } from "./trekInfo";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Card from "./Card";

export default function CardList({ title, id }) {
  const slideLeft = () => {
    var slider = document.getElementById(id);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById(id);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="">
      <h1 className=" font-bold text-3xl mt-5 md:ml-11 flex md:justify-start justify-center">{title}</h1>
      <div className="flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 invisible md:visible"
          onClick={slideLeft}
          size={40}
        />
        <div
          id={id}
          className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {trekData.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 invisible md:visible"
          onClick={slideRight}
          size={40}
        />
      </div>
    </div>
  );
}
