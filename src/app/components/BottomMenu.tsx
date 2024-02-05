import React from "react";

import { bottomMenu } from "../constants";

type BottomMenuPropTypes = {
  toggleClick: () => void;
  isDarkMode: boolean;
};

const LightThemeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 -960 960 960"
  >
    <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"></path>
  </svg>
);

const DarkThemeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 -960 960 960"
    fill="#fff"
  >
    <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z"></path>
  </svg>
);

const BottomMenu = ({ toggleClick, isDarkMode }: BottomMenuPropTypes) => {
  return (
    <div className="pt-8 pb-12 flex flex-wrap justify-between gap-y-8">
      <div className="flex items-center cursor-pointer">
        <div className="text-3xl leading-9 font-bold text-black dark:text-[#fff] pb-1">
          Similar
        </div>
        <div className="text-lg leading-7 font-bold text-white min-h-9 px-2.5 bg-black rounded-lg items-center justify-center flex ml-1 mb-1">
          Watch
        </div>
      </div>
      <div className="flex flex-wrap gap-8 items-center">
        {bottomMenu.map((menu) => (
          <div
            key={menu}
            className="text-gray-700 dark:text-gray-400 text-sm cursor-pointer leading-5 hover:underline"
          >
            {menu}
          </div>
        ))}

        <button
          data-tooltip-id="ts-tooltip"
          data-tooltip-content="Change Theme"
          onClick={toggleClick}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-800 aspect-w-1 aspect-h-1"
        >
          {isDarkMode ? <DarkThemeIcon /> : <LightThemeIcon />}
        </button>
      </div>
    </div>
  );
};

export default BottomMenu;
