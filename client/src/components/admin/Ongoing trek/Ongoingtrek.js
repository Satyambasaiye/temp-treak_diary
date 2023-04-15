import React from "react";
import Data from "./data.json";
import { useState } from "react";
export default function OngoingTrek() {
  // const [currentPage, setCurrentPage] = useState(1)
  // const  recordsPerPage = 5;
  // const lastIndex = currentPage * recordsPerPage;
  // const firstIndex = lastIndex - recordsPerPage;
  // const records =  Data.slice(firstIndex, lastIndex);

  // function prePage(){
  //   if(currentPage !== firstIndex){
  //     setCurrentPage(currentPage-1)
  //   }

  // }

  // function changeCPage (id){
  //   setCurrentPage(id)

  // }

  // function nextPage(){
  //   if(currentPage !== lastIndex){
  //     setCurrentPage(currentPage+1)
  //   }

  // }

  return (
    <>
      <div>
        <div className="text-3xl font-bold m-5 text-center">Ongoing Trek</div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg  m-6">
          <table className="w-full text-sm text-left ">
            <thead className="text-xs   uppercase bg-gray-50 ">
              <tr className=" border-b border-t">
                <th scope="col" className="px-6 py-3">
                  Sr
                </th>
                <th scope="col" className="px-6 py-3">
                  Trek
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Fees
                </th>
                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {Data.map((data, index) => (
                <tr className="border-b " key={index}>
                  <th className="px-6 py-4">{index + 1}</th>
                  <td className="px-6 py-4">{data.title}</td>
                  <td className="px-6 py-4">{data.date}</td>
                  <td className="px-6 py-4">{data.location}</td>
                  <td className="px-6 py-4">{data.fees}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <nav aria-label="Page navigation example">
            <ul class="list-style-none flex">
              <li>
                <a class="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">
                  Previous
                </a>
              </li>
              <li>
                <a
                  class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-00 dark:text-black dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#"
                >
                  1
                </a>
              </li>
              <li aria-current="page">
                <a
                  class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-00 dark:text-black dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#"
                >
                  2
                  <span class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                    (current)
                  </span>
                </a>
              </li>
              <li>
                <a
                  class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-00 dark:text-black dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  class="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
                  href="#"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>

          {/* <nav className=' grid grid-rows-2  gap-4'>
  <ul>
    <li className=' row-span-1s'>
      <a href='#'  onClick={prePage}>Prev</a>
    </li>
    
    <li className='row-span-2'>
      <a href='#' onClick={nextPage}>Next</a>
    </li>
  </ul>
 </nav> */}
        </div>

        <div></div>
      </div>
    </>
  );
}
