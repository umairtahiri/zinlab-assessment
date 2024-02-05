const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20.004"
      className="dark:fill-[#9CA3AF]"
    >
      <path d="m19.705 18.288-5.531-5.531a7.927 7.927 0 1 0-1.424 1.421l5.531 5.532a1.006 1.006 0 0 0 1.422-1.422ZM3.738 12.096a5.908 5.908 0 1 1 8.354 0 5.869 5.869 0 0 1-8.354 0Z"></path>
    </svg>
  );
};

const Search = () => {
  return (
    <div className="flex items-center rounded-full px-6 largeScreen:min-w-[500px] desktop:min-w-[300px] tablet:min-w-[200px] laptop:min-w-[300px] max-w-[500px] bg-[#f2f2f2] dark:bg-zinc-800 min-h-12 w-full">
      <input
        type="text"
        className="h-12 w-full bg-transparent border-none focus-visible:outline-none"
        placeholder="Search Tools..."
      />
      <span className="flex items-center justify-center cursor-pointer pl-6 border-l border-[#e6e6e6] dark:border-[#9CA3AF] h-9">
        <SearchIcon />
      </span>
    </div>
  );
};

export default Search;
