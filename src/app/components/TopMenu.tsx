const TopMenu = () => {
  const options = [
    "Stock Video",
    "Video Templates",
    "Music",
    "Sound Effects",
    "Graphic Templates",
    "Graphics",
    "Presentation Templates",
    "Photos",
    "Fonts",
    "Add-ons",
    "More",
  ];
  return (
    <div className="flex items-center justify-center gap-x-8">
      {options.map((option) => (
        <a key={option} href="#">
          <div className="flex items-center cursor-pointer text-sm font-semibold leading-5 h-[60px] color-[#484848] border-b-2 border-b-[#fff] hover:border-b-[#523ee8]">
            {option}
          </div>
        </a>
      ))}
    </div>
  );
};

export default TopMenu;
