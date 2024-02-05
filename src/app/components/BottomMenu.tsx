import React from "react";

import { bottomMenu } from "../constants";

const WatchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 -960 960 960"
  >
    <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"></path>
  </svg>
);

const BottomMenu = () => {
  return (
    <div className="pt-8 pb-12 flex justify-between">
      <div className="flex items-center cursor-pointer">
        <div className="text-3xl leading-9 font-bold text-black pb-1">
          Similar
        </div>
        <div className="text-lg leading-7 font-bold text-white min-h-9 px-2.5 bg-black rounded-lg items-center justify-center flex ml-1 mb-1">
          Watch
        </div>
      </div>
      <div className="flex gap-x-8 items-center">
        {bottomMenu.map((menu) => (
          <div
            key={menu}
            className="text-gray-700 text-sm cursor-pointer leading-5 hover:underline"
          >
            {menu}
          </div>
        ))}

        <button
          data-tooltip-id="ts-tooltip"
          data-tooltip-content="Change Theme"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 aspect-w-1 aspect-h-1"
        >
          <WatchIcon />
        </button>
      </div>
    </div>
  );
};

export default BottomMenu;
