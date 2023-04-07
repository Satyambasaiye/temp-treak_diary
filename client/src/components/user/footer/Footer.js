import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Whatsapp,
  Youtube,
} from "react-bootstrap-icons";

function Footer() {
  return (
    <>
      <div className=" flex flex-col   items-center bg-black w-full  text-white h-max  md:h-max md:text-xl">
        {/* <div className="md:px-4"> */}
        <br></br>{" "}
        {/* <div className="md:flex flex-row md:justify-around md:w-full md:mt-10"> */}
        {/* <div
          className="md:flex flex-row md:justify-center
        "
        > */}{" "}
        <div className="flex flex-row justify-between w-56  mt-1 md:flex-row  md:ml-1 md:w-full md:justify-center">
          {" "}
          <Facebook className="md:w-14 md:h-4/5 md:px-3  hover:text-yellow-600 w-8 h-8  " />
          <Whatsapp className="md:w-14 md:h-4/5 md:px-3 hover:text-yellow-600 w-8 h-8 " />
          <Instagram className="md:w-14 md:h-4/5 md:px-3 hover:text-yellow-600 w-8 h-8" />
          <Youtube className="md:w-14 md:h-4/5 md:px-3 hover:text-yellow-600 w-8 h-8" />
          <Twitter className="md:w-14 md:h-4/5 md:px-3 hover:text-yellow-600 w-8 h-8" />
        </div>{" "}
        <div className=" md:mr-16 md:flex justify-between md:justify-evenly  md:w-full ">
          {" "}
          <div className="text-center md:text-left mt-8 md:mt-5 mb-10 md:mb-0">
            <ui className="list-none font">
              <li className="text-2xl hover:text-yellow-600 font-semibold mb-5">
                Useful Links
              </li>
              
              <li className="text-xl hover:text-yellow-600 ">
                Privacy Policy
              </li>
              <li className="text-xl hover:text-yellow-600 ">
                Refund & Cancellation Policy
              </li>
              <li className="text-xl hover:text-yellow-600 ">
                Terms & Conditions
              </li>
            </ui>
          </div>
          
          <div className="text-center md:text-left  md:mt-5 md:-mr-8">
            <ui className="list-none  ">
              <li className="text-2xl hover:text-yellow-600 font-semibold mb-5 ">
                Address
              </li>
            
              <li className="text-xl hover:text-yellow-600 ">
                Robonist makers lab,
              </li>
              <li className="text-xl hover:text-yellow-600 ">
                Chetak Ghoda,
              </li>
              <li className="text-xl hover:text-yellow-600 ">
                Garkheda, Aurangabad.
              </li>
            </ui>
          </div>
        </div>
        <br></br>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        {/* <div className="mb-6 text-sm ">
          {" "} */}
        <p className="mb-3 text-sm ">
          © 2023 all copyright are reserved by Trek Diaries
        </p>
      </div>
    </>
  );
}
export default Footer;
