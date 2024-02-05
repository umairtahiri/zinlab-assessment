import Image from "next/image";

import { Tool } from "../types";

type CardPropTypes = {
  tool: Tool;
};

const Card = ({ tool }: CardPropTypes) => {
  const { title, icon, description } = tool;
  return (
    <div className="relative cursor-pointer text-left p-6 bg-white border border-[#EBEBEB] rounded-xl transition-all duration-300 hover:shadow-xl hover:no-underline">
      {/* @ts-ignore */}
      <Image src={icon} width={65} height={65} />
      <div className="mt-4 font-bold text-lg leading-relaxed text-[#121212]">
        {title}
      </div>
      <div className="mt-3 text-sm leading-5 overflow-hidden text-[#8A8A8E]">
        {description}
      </div>
    </div>
  );
};

export default Card;
