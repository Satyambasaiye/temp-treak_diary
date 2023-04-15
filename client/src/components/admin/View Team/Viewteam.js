import React from "react";
import Data from "./view.json";

export default function Viewteam() {
  return (
    <React.Fragment>
      <div className="content">
        <div>
          <div class="text-3xl font-bold m-5 text-center">View Team</div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg  m-6">
            <table class="w-full text-sm text-left ">
              <thead class="text-xs   uppercase bg-gray-50 ">
                <tr class=" border-b border-t">
                  <th scope="col" class="px-6 py-3">
                    Team-id
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Team-Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Team-Size
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Team-Leader
                  </th>
                </tr>
              </thead>
              <tbody>
                {Data.map((data, index) => (
                  <tr class="border-b " key={index}>
                    <th class="px-6 py-4">{index + 1}</th>
                    <td class="px-6 py-4">{data.id}</td>
                    <td class="px-6 py-4">{data.teamName}</td>
                    <td class="px-6 py-4">{data.teamSize}</td>
                    <td class="px-6 py-4">{data.teamLeader}</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
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
      </div>
    </React.Fragment>
  );
}
