import React from "react";

function Tile() {
  return (
        <div className=" mt-19 relative">
          <span className=" bg-yellow-300 px-2 py-2 rounded-md absolute top-1 left-1">
            8055557556 |{" "}
            <a
              href="https://www.trekdiaries.in"
              target="_blank"
              rel="noreferrer"
            >
              www.trekdiaries.in
            </a>
          </span>
          <img
            src="./images/background.jpg"
            alt="trek"
            className=""
          />
        </div>
  );
}

export default Tile;
