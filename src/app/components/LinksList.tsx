type LinksPropTypes = {
  links: string[];
  title: string;
};

const Links = ({ links, title }: LinksPropTypes) => {
  return (
    <div className="w-[277px]">
      <div className="text-black font-semibold text-base leading-5 pb-6">
        {title}
      </div>
      <div className="basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]">
        {links.map((link) => (
          <a href="#" key={link}>
            <div className="text-gray-700 cursor-pointer hover:text-black cursor-pointer text-base leading-5 pb-2 pt-2">
              {link}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Links;
