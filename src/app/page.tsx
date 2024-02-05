import Header from "@/components/Header";
import CardsContainer from "@/components/CardsContainer";
import Footer from "@/components/Footer";

import { convertTools, bookmarkTools } from "./constants";

export default function Home() {
  return (
    <main className="bg-[#F3F4F6] dark:bg-[#080f15]">
      <Header />
      <div className="largeScreen:px-40 desktop:px-32 laptop:px-20 tablet:px-8 flex flex-col items-center pt-[200px] gap-8">
        <CardsContainer title="Your Bookmarks" tools={bookmarkTools} />
        <CardsContainer
          title="Convert from PDF"
          tools={convertTools}
          hasSlider={true}
        />
        <CardsContainer title="Convert from PDF" tools={convertTools} />
        <CardsContainer title="Convert from PDF" tools={convertTools} />
      </div>
      <Footer />
    </main>
  );
}
