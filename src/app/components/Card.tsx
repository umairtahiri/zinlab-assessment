import Image from "next/image";

import { Tool } from "../types";

type CardPropTypes = {
  tool: Tool;
};

const Card = ({ tool }: CardPropTypes) => {
  const { title, icon, description } = tool;
  return (
    <div className="relative w-full mx-2 max-w-[281px] max-h-[232px] min-h-[232px] cursor-pointer text-left p-6 bg-white dark:bg-[#14181f] border border-[#EBEBEB] rounded-xl transition-all duration-300 hover:shadow-xl hover:no-underline">
      {/* @ts-ignore */}
      <Image src={icon} width={65} height={65} />
      <div className="mt-4 font-bold text-lg leading-relaxed text-[#121212] dark:text-[#fff]">
        {title}
      </div>
      <div className="mt-3 text-sm leading-5 overflow-hidden text-[#8A8A8E]">
        {description}
      </div>
    </div>
  );
};

export default Card;
