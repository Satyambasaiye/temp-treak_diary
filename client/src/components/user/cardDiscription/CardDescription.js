import React from "react";
import Data from "./data.json";

export default function CardDescription() {
  return (
      <div className=" mt-19 pt-10">
        <div class=" fixed md:bottom-3 bottom-20 md:right-12 right-5 z-10">
          <button className=" bg-orange-400 py-1.5 px-8 rounded-full hover:bg-orange-500 hover\:text-white shadow-2xl">
            Book Now
          </button>
        </div>
        <div className=" md:mx-10 mx-5 h-auto shadow-lg rounded-3xl bg-white">
          <img
            className="rounded-3xl"
            src="/images/sandhan.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div>
              {/* Card Component Description */}

              {Data &&
                Data.map((data) => {
                  return (
                    <div>
                      <div className=" leading-5">
                        <br />
                        <div className=" text-3xl font-bold">{data.title} </div>
                        <br />
                        <h6 className=" font-semibold">Trek Details</h6>
                        <br />
                        <h6 className=" font-semibold">Date: {data.date}</h6>
                        <h6 className=" font-semibold">
                          Location: {data.location}
                        </h6>
                        <br />
                        <h6 className=" font-semibold">About {data.title}:</h6>
                        <p className=" text-justify"> {data.description}</p>
                        <br />
                        <h6 className=" font-semibold">Fees : {data.fees}</h6>
                        <br />
                        <h6 className=" font-semibold">Pick up Points:</h6>
                        <h6 className=" font-semibold">Aurangabad :</h6>
                        <p>
                          Karnapura Group, Near Panchwati Hotel 09:30 PM
                          Saturday
                        </p>
                        <h6 className=" font-semibold">Pune :</h6>
                        <p>Sancheti Hospital 09:30 PM Saturday</p>
                        <h6 className=" font-semibold">Mumbai :</h6>
                        <p>Teen Hath Naka Thane 09:30 PM Saturday</p>

                        <br />
                        <h6 className=" font-semibold">Itinerary</h6>
                        <p>
                          <br />
                          09:30 PM Night journey begins. ( Auranagbad : Near
                          Panchwati Hotel )
                          <br />
                          03:30 AM We Reach the Base village
                          <br />
                          05:00 AM to 06.00 AM Refreshment & Breakfast
                          <br />
                          07:00 AM Trek begins towards Sandhan Valley
                          <br />
                          07:30 AM : Start Rappelling into the valley and
                          explore the valley
                          <br />
                          12:00 PM Return Journey Towards base Village…
                          <br />
                          1:30 PM Reach at base village
                          <br />
                          2:00 PM lunch time
                          <br />
                          03:00 PM Depart for Home
                          <br />
                          10:30 PM Reach Home with Loads of Memories
                          <br />
                          (01 - 02 hrs delay is possible depending on the speed
                          of trekkers, traffic on the road & other unavoidable
                          circumstances.. so keep that buffer)
                        </p>
                        <br />
                        <h6 className=" font-semibold">Trek Event Details</h6>
                        <ul>
                          <li>Difficulty Level Medium</li>
                          <li>Endurance Level High</li>
                          <li>Base Village: Samrad Village</li>
                          <li>Region: Samrad, Bhandardara, Maharashtra</li>
                          <li>Total time required is 4 hours one way</li>
                          <li>Duration 1 Night 1 Day</li>
                        </ul>
                        <br />
                        <h6 className=" font-semibold">Cost Includes</h6>
                        <ul>
                          <li>Travelling</li>
                          <li>Rappeling</li>
                          <li>Breakfast</li>
                          <li>Lunch (veg)</li>
                          <li>First Aid </li>
                          <li>Expertise </li>
                          <li>Forest Fee</li>
                          <li>Guide</li>
                        </ul>
                        <br />
                        <h6 className=" font-semibold">Things To Carry</h6>
                        <ul>
                          <li>Torch (optional)</li>
                          <li>
                            Please wear full pants and full sleeves t-shirts to
                            protect from tanning, thorns, insects during the
                            trek
                          </li>
                          <li>
                            Snacks (Energy bars, Chikki, Biscuits, Sprouts,
                            Chips, Dry fruits)
                          </li>
                          <li>Glucon D/Protein shakes/ORS</li>
                          <li>Extra pair of clothe</li>
                          <li>2/3 litres of water (Mandatory)</li>
                          <li>Any personal medicines</li>
                          <li>Good grip trekking shoes</li>
                          <li>Suncap</li>
                          <li>Raincoat</li>
                        </ul>
                      </div>
                      <div>
                        <button className=" bg-orange-400 pt-1.5 pb-1.5 pl-8 pr-8  m-5 mt-10 rounded-full">
                          Book Now
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
  );
}
