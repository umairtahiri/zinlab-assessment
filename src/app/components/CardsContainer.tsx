"use client";
import React, { useRef } from "react";

import Carousel from "react-elastic-carousel";

import Card from "@/components/Card";

import { Tool } from "../types";

type CardsContainerPropTypes = {
  title: string;
  tools: Tool[];
  hasSlider?: boolean;
};

type PreviousButtonPropTypes = {
  onPrevious: () => void;
};

type NextButtonPropTypes = {
  onNext: () => void;
};

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 4, itemsToScroll: 1 },
  { width: 1450, itemsToShow: 5 },
];

const PreviousButton = ({ onPrevious }: PreviousButtonPropTypes) => {
  return (
    <button
      onClick={onPrevious}
      className="z-10 h-12 dark:bg-[#14181f] px-5 flex items-center justify-center gap-2 text-base font-medium text-nowrap outline-none rounded-full disabled:opacity-50 group text-black dark:text-white bg-white dark:bg-midnight-slate border-2 border-zinc-400 disabled:hover:border-zinc-400 sm:hover:border-primary dark:sm:hover:border-white dark:disabled:hover:border-zinc-400 absolute w-9 sm:w-11 h-9 sm:h-11 !p-0 rounded-full left-4 xs:hover:left-3 sm:-left-2 sm:hover:-left-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="stroke-zinc-400 sm:group-hover:stroke-primary dark:sm:group-hover:stroke-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M2 12.003h20m-20 0 8.333-8.333M2 12.003l8.333 8.334"
        ></path>
      </svg>
    </button>
  );
};

const NextButton = ({ onNext }: NextButtonPropTypes) => {
  return (
    <button
      onClick={onNext}
      className="z-10 h-12 dark:bg-[#14181f] px-5 flex items-center justify-center gap-2 text-base font-medium text-nowrap outline-none rounded-full disabled:opacity-50 text-black dark:text-white bg-white dark:bg-midnight-slate border-2 border-zinc-400 disabled:hover:border-zinc-400 sm:hover:border-primary dark:sm:hover:border-white dark:disabled:hover:border-zinc-400 absolute w-9 sm:w-11 h-9 sm:h-11 !p-0 rounded-full right-4 xs:hover:right-3 sm:-right-2 sm:hover:-right-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="stroke-zinc-400 sm:group-hover:stroke-primary dark:sm:group-hover:stroke-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M22 12.003H2m20 0L13.667 3.67M22 12.003l-8.333 8.334"
        ></path>
      </svg>
    </button>
  );
};

const SeeAllButton = () => {
  return (
    <button className="h-12 px-5 flex items-center justify-center gap-2 text-base font-medium text-nowrap outline-none rounded-full transition-all duration-300 disabled:opacity-50 group text-black dark:text-white bg-zinc-100 dark:bg-white/10 xs:hover:opacity-75 hidden sm:flex h-9">
      All
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="none"
        className="fill-black dark:fill-white"
      >
        <path d="M3.9 11.017a.89.89 0 0 1-.637-.3.9.9 0 0 1 0-1.272l3.601-3.601-3.6-3.6a.9.9 0 0 1 1.272-1.13l4.2 4.202a.9.9 0 0 1 0 1.272l-4.2 4.13a.89.89 0 0 1-.637.3"></path>
      </svg>
    </button>
  );
};

const CardsContainer = ({
  title,
  tools,
  hasSlider,
}: CardsContainerPropTypes) => {
  let carouselRef = useRef();
  return hasSlider ? (
    <section className="p-10 w-full bg-white dark:bg-[#14181f] rounded-3xl">
      <div className="flex items-center justify-between mb-6 font-bold largeScreen:text-5xl desktop:text-5xl laptop:text-4xl tablet:text-3xl leading-9 text-[#121212] dark:text-[#fff]">
        {title}
        <SeeAllButton />
      </div>
      <div className="relative mt-6 flex items-center justify-between">
        {/* @ts-ignore */}
        <PreviousButton onPrevious={() => carouselRef.slidePrev()} />
        {/* @ts-ignore */}
        <Carousel
          breakPoints={breakPoints}
          enableSwipe={true}
          showArrows={false}
          pagination={false}
          // @ts-ignore
          ref={(ref) => (carouselRef = ref)}
        >
          {[...tools, ...tools].map((tool) => (
            <Card tool={tool} key={tool?.id} />
          ))}
        </Carousel>
        {/* @ts-ignore */}
        <NextButton onNext={() => carouselRef.slideNext()} />
      </div>
    </section>
  ) : (
    <section className="p-10 w-full bg-white dark:bg-[#14181f] rounded-3xl">
      <div className="mb-6 font-bold largeScreen:text-5xl desktop:text-5xl laptop:text-4xl tablet:text-3xl leading-9 text-[#121212] dark:text-[#fff]">
        {title}
      </div>
      <div className="mt-6 grid largeScreen:grid-cols-5 desktop:grid-cols-3 laptop:grid-cols-2 tablet:grid-cols-1 gap-6">
        {tools.map((tool) => (
          <Card tool={tool} key={tool?.id} />
        ))}
      </div>
    </section>
  );
};

export default CardsContainer;
