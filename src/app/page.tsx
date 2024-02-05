import Image from "next/image";
import Header from "@/components/Header";
import CardsContainer from "@/components/CardsContainer";
import Footer from "@/components/Footer";

import { convertTools, bookmarkTools } from "./constants";

export default function Home() {
  return (
    <main className="bg-[#F3F4F6]">
      <Header />
      <div className="flex flex-col items-center px-40 pt-[200px] gap-8">
        <CardsContainer title="Your Bookmarks" tools={bookmarkTools} />
        <CardsContainer title="Convert from PDF" tools={convertTools} />
        <CardsContainer title="Convert from PDF" tools={convertTools} />
        <CardsContainer title="Convert from PDF" tools={convertTools} />
      </div>
      <Footer />
    </main>
  );
}
