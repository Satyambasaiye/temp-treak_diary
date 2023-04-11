import React, { Fragment, useState } from "react";
import Booking from "./Booking";

export default function Book() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div
        onClick={() => setShowModal(true)}
        className="flex justify-start"
      >
        <button className="mt-5 mb-3 bg-yellow-400 px-7 py-3 rounded-xl grid font-bold text-lg">Book Now</button>
      </div>
      <Booking isVisible={showModal} onClose={() => setShowModal(false)} />
    </Fragment>
  );
}
