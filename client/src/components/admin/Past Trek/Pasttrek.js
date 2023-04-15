// import React from "react";
// import { useMemo } from "react";
// import { useTable } from "react-table";
// import DATA from "../data.json";
// import { COLUMNS } from "./columns";

// const Pasttrek = () => {
//   const columns = useMemo(() => COLUMNS, []);
//   const data = useMemo(() => DATA, []);

//   const tableInstance = useTable({
//     columns,
//     data,
//   });

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     tableInstance;

//   return (
//     <table {...getTableProps()}>
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map((column) => (
//               <th {...column.getHeaderProps}>{column.render("Header")}</th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map((row) => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map((cell) => {
//                 <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };
// export default Pasttrek;

import React from "react";
import Data from "./data.json";
export default function OngoingTrek() {
  return (
    <>
      <div>
        <div class="text-3xl font-bold m-5 text-center">Past Trek</div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg  m-6">
          <table class="w-full text-sm text-left ">
            <thead class="text-xs   uppercase bg-gray-50 ">
              <tr class=" border-b border-t">
                <th scope="col" class="px-6 py-3">
                  Sr
                </th>
                <th scope="col" class="px-6 py-3">
                  Trek
                </th>
                <th scope="col" class="px-6 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Location
                </th>
                <th scope="col" class="px-6 py-3">
                  Fees
                </th>
                {/* <th scope="col" class="px-6 py-3">
                  Edit
                </th> */}
              </tr>
            </thead>
            <tbody>
              {Data.map((data, index) => (
                <tr class="border-b " key={index}>
                  <th class="px-6 py-4">{index + 1}</th>
                  <td class="px-6 py-4">{data.title}</td>
                  <td class="px-6 py-4">{data.date}</td>
                  <td class="px-6 py-4">{data.location}</td>
                  <td class="px-6 py-4">{data.fees}</td>
                  {/* <td class="px-6 py-4">
                     <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a> 
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <nav aria-label="Page navigation example">
            <ul class="list-style-none flex">
              <li>
                <a class="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">
                  Previous
                </a>
              </li>
              <li>
                <a
                  class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#!"
                >
                  1
                </a>
              </li>
              <li aria-current="page">
                <a
                  class="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300"
                  href="#!"
                >
                  2
                  <span class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                    (current)
                  </span>
                </a>
              </li>
              <li>
                <a
                  class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#!"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#!"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
