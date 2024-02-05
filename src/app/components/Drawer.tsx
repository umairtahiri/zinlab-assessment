"use client";
import React, { useState } from "react";
import Link from "next/link";
import { options } from "../constants";

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#000] dark:stroke-[#fff]"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

type NavDrawerPropTypes = {
  open: boolean;
  onClose: () => void;
};

const NavDrawer = ({ onClose, open }: NavDrawerPropTypes) => {
  return (
    <nav
      className={`fixed flex flex-col justify-between h-screen overflow-y-auto bg-white dark:bg-[#080f15] z-10 top-0 right-0 w-[20rem] sm:w-[25rem] transition-all ${
        open ? "translate-x-0" : "-translate-x-[-25rem]"
      }`}
    >
      <button
        onClick={onClose}
        className="inline-block p-4 ml-auto text-text-primary"
      >
        <CloseIcon />
      </button>
      <ul className="flex flex-col divide-border-gray">
        {options.map((option) => (
          <li key={option}>
            <Link
              href={"#"}
              className="block p-4 leading-6 hover:text-text-primary text-text-secondary font-semibold text-sm dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {option}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavDrawer;
