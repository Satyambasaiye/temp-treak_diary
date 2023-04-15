import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ClockHistory,
  PlusCircle,
  People,
  ViewList,
  HouseDoorFill,
} from "react-bootstrap-icons";
import im from "./ongoing-trek.svg";
import tr from "./trek.png";
export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="flex flex-row md:h-auto md:w-48  md:flex md:flex-col md:justify-start text-gray-800 
  md:mt-16 bg-yellow-300 mt-[97px] justify-evenly "
    >
      <div>
        <div className="md:ml-5 font-bold text-xl md:py-10 flex flex-row md:mt-0 mt-2">
          <Link to={"/"}>
            <div className="flex flex-row mr-60 mt-2">
              <HouseDoorFill className="mr-1 mt-1" /> Home
            </div>
          </Link>
          <button className="py-2 px-4  md:hidden mt-1" onClick={toggleMenu}>
            <ion-icon name={isMenuOpen ? "close" : "menu"}></ion-icon>
          </button>
        </div>

        <div className="md:ml-5 ">
          <ul
            className={`md:flex flex-col md:py-0 py-5 absolute md:static bg-yellow-300 md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              isMenuOpen ? " top-19 opacity-100" : "top-[-490px]"
            } md:opacity-100 opacity-0`}
          >
            <li className="font-bold text-xl">
              <div className="flex flex-row ">
                <img src={im} alt="im" className=" h-6 mt-0.5" />
                Trek
              </div>
            </li>
            <li className="md:py-2">
              {" "}
              <Link to={"/Addtrek"}>
                <div className="flex flex-row ">
                  <PlusCircle className="mr-1 mt-1" />
                  Add Trek{" "}
                </div>
              </Link>{" "}
            </li>
            <li className="md:py-2">
              <Link to={"/Pasttrek"}>
                <div className="flex flex-row ">
                  <ClockHistory className="mr-1 mt-1" />
                  Past Trek
                </div>
              </Link>{" "}
            </li>
            <li className="md:py-2">
              <Link to={"/Ongoingtrek"}>
                <div className="flex flex-row ">
                  {" "}
                  <img src={tr} alt="tr" className=" w-5 h-5 mt-0.5" />
                  Ongoing Trek
                </div>
              </Link>{" "}
            </li>
            <li className="md:py-2 font-bold text-xl">
              {" "}
              <div className="flex flex-row  ">
                <People className="mr-1 mt-1" />
                Team
              </div>
            </li>
            <li className="md:py-2">
              <Link to={"/Addteam"}>
                <div className="flex flex-row  ">
                  <PlusCircle className="mr-1 mt-1" />
                  Add Team
                </div>
              </Link>{" "}
            </li>
            <li className="md:py-2">
              <Link to={"/Viewteam"}>
                <div className="flex flex-row ">
                  <ViewList className="mr-1 mt-1" />
                  View Team
                </div>
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
