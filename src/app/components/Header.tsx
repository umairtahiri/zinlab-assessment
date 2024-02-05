import Search from "@/components/Search";
import TopMenu from "@/components/TopMenu";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <section className="flex items-center justify-between h-[71px] py-12 px-40">
        <div className="flex items-center gap-x-8">
          <div className="flex items-center cursor-pointer">
            <div className="text-3xl leading-9 font-bold text-black pb-1">
              Similar
            </div>
            <div className="text-lg leading-7 font-bold text-white min-h-9 px-2.5 bg-black rounded-lg items-center justify-center flex ml-1 mb-1">
              Watch
            </div>
          </div>
          <Search />
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <div className="text-[#4D5263] text-xl font-semibold">Log in</div>
          <button className="rounded-full bg-[#4866E2] text-white px-4 py-2 text-xl font-normal">
            Sign Up
          </button>
        </div>
      </section>
      <TopMenu />
    </header>
  );
};

export default Header;
