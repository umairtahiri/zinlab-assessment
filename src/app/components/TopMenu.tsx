import { options } from "../constants";

const TopMenu = () => {
  return (
    <div className="tablet:hidden laptop:hidden desktop:px-4 flex flex-wrap items-center justify-center gap-x-8">
      {options.map((option) => (
        <a key={option} href="#">
          <div className="flex items-center cursor-pointer text-sm font-semibold leading-5 h-[60px] text-[#484848] dark:text-[#fff] dark:border-b-[#14181f] border-b-2 border-b-[#fff] hover:border-b-[#523ee8]">
            {option}
          </div>
        </a>
      ))}
    </div>
  );
};

export default TopMenu;
