import Card from "@/components/Card";

import { Tool } from "../types";

type CardsContainerPropTypes = {
  title: string;
  tools: Tool[];
};

const CardsContainer = ({ title, tools }: CardsContainerPropTypes) => {
  return (
    <section className="p-10 w-full bg-white rounded-3xl">
      <div className="mb-6 font-bold text-5xl leading-9 text-[#121212]">
        {title}
      </div>
      <div className="mt-6 grid grid-cols-5 gap-6">
        {tools.map((tool) => (
          <Card tool={tool} key={tool?.id} />
        ))}
      </div>
    </section>
  );
};

export default CardsContainer;
