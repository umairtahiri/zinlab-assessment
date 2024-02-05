"use client";
import { useState } from "react";
import Search from "@/components/Search";
import TopMenu from "@/components/TopMenu";
import NavDrawer from "@/components/Drawer";

const CompanyLogo = () => {
  return (
    <a title="Go to home page" href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 138 38"
        className="w-[120px] sm:w-[130px] md:w-[138px] h-[38px] fill-white dark:fill-white"
      >
        <rect width="38" height="38" className="dark:fill-[#000]" rx="9"></rect>
        <path
          fill="#616DF4"
          fill-rule="evenodd"
          d="M38 9a9 9 0 0 0-9-9H9a9 9 0 0 0-9 9v20a9 9 0 0 0 9 9h20a9 9 0 0 0 9-9zM25.942 6.748c1.16.667 1.74 1 2.09 1.452.465.601.673 1.361.578 2.112-.044.342-.183.69-.435 1.169-.37.704-.381 1.546.022 2.237.404.69 1.146 1.1 1.945 1.13.544.022.917.074 1.238.207.704.29 1.265.848 1.56 1.548.22.525.224 1.19.23 2.52s.01 1.996-.205 2.52a2.84 2.84 0 0 1-1.544 1.543c-.32.132-.692.183-1.236.203-.8.029-1.537.436-1.933 1.125s-.377 1.532 0 2.237c.257.48.4.827.447 1.17.103.751-.098 1.51-.558 2.11-.344.45-.921.782-2.074 1.446-1.154.663-1.73.995-2.295 1.068a2.89 2.89 0 0 1-2.122-.569c-.276-.21-.51-.507-.801-.966-.429-.676-1.156-1.11-1.956-1.112-.8-.001-1.522.432-1.944 1.106-.288.458-.518.754-.792.964-.6.46-1.362.662-2.116.562-.566-.075-1.146-.408-2.306-1.075s-1.74-1-2.089-1.452a2.86 2.86 0 0 1-.578-2.112c.043-.342.183-.69.435-1.168.37-.704.38-1.547-.023-2.238-.403-.69-1.145-1.1-1.944-1.13-.544-.022-.917-.074-1.239-.207A2.9 2.9 0 0 1 4.738 21.6c-.22-.524-.224-1.19-.23-2.52s-.01-1.996.205-2.52c.287-.7.842-1.255 1.543-1.543.32-.132.693-.183 1.237-.203.799-.028 1.537-.436 1.933-1.125s.377-1.532 0-2.237c-.257-.48-.4-.828-.447-1.17a2.83 2.83 0 0 1 .557-2.11c.345-.45.922-.782 2.075-1.446s1.73-.995 2.295-1.068a2.9 2.9 0 0 1 2.122.569c.276.21.509.507.8.966.43.676 1.157 1.11 1.957 1.112.8.001 1.522-.432 1.944-1.106.287-.458.517-.754.792-.964.6-.46 1.362-.662 2.116-.562.565.075 1.145.408 2.305 1.075m-3.369 14.5c-1.177 2.048-3.803 2.746-5.865 1.56s-2.78-3.807-1.603-5.854c1.177-2.046 3.802-2.744 5.865-1.558 2.062 1.185 2.78 3.806 1.603 5.853"
          clip-rule="evenodd"
        ></path>
        <path
          className="dark:fill-[#fff]"
          fill="#000"
          d="M45.156 27.5v-2.203L52.93 14.64h-7.766V11.5H57.82v2.203L50.047 24.36h7.766V27.5zm15.03 0v-12h3.82v12zM62.1 14.102q-.806 0-1.383-.532-.579-.539-.578-1.297 0-.75.578-1.28.577-.54 1.383-.54.812 0 1.382.54.579.53.579 1.28 0 .759-.579 1.297-.57.531-1.382.532m8.158 6.554V27.5h-3.82v-12h3.632v2.203h.133a3.37 3.37 0 0 1 1.36-1.726q.96-.633 2.289-.633 1.265 0 2.195.57.938.562 1.453 1.578.523 1.008.516 2.36V27.5h-3.82v-6.898q.007-1-.508-1.563-.508-.562-1.415-.562a2.1 2.1 0 0 0-1.062.265q-.454.259-.703.742-.243.485-.25 1.172m8.59-6.015V11.5H92.37v3.14H87.52V27.5h-3.812V14.64zM98.12 27.727q-1.89 0-3.25-.774a5.34 5.34 0 0 1-2.086-2.172q-.726-1.398-.726-3.242 0-1.851.726-3.242a5.27 5.27 0 0 1 2.086-2.172q1.36-.78 3.25-.781 1.89 0 3.242.781a5.2 5.2 0 0 1 2.086 2.172q.735 1.39.735 3.242 0 1.845-.735 3.242a5.26 5.26 0 0 1-2.086 2.172q-1.351.774-3.242.774m.023-2.883q.688 0 1.165-.422.476-.422.726-1.172.258-.75.258-1.734 0-1-.258-1.75-.25-.75-.726-1.172-.477-.423-1.165-.422-.71 0-1.203.422-.484.422-.742 1.172-.25.75-.25 1.75 0 .984.25 1.734.259.75.742 1.172.493.422 1.203.422m13.598 2.883q-1.89 0-3.25-.774a5.34 5.34 0 0 1-2.086-2.172q-.726-1.398-.726-3.242 0-1.851.726-3.242a5.28 5.28 0 0 1 2.086-2.172q1.36-.78 3.25-.781 1.891 0 3.242.781a5.2 5.2 0 0 1 2.086 2.172q.735 1.39.735 3.242 0 1.845-.735 3.242a5.26 5.26 0 0 1-2.086 2.172q-1.351.774-3.242.774m.024-2.883q.687 0 1.164-.422t.726-1.172q.258-.75.258-1.734 0-1-.258-1.75-.25-.75-.726-1.172-.477-.423-1.164-.422-.711 0-1.203.422-.485.422-.743 1.172-.25.75-.25 1.75 0 .984.25 1.734.258.75.743 1.172.492.422 1.203.422M123.582 11.5v16h-3.82v-16zm12.908 7.664-3.508.094a1.3 1.3 0 0 0-.296-.664 1.6 1.6 0 0 0-.633-.461 2.2 2.2 0 0 0-.891-.172q-.664 0-1.133.266-.46.265-.453.718a.77.77 0 0 0 .281.61q.297.258 1.055.414l2.313.437q1.797.345 2.671 1.14.883.798.891 2.11-.008 1.235-.734 2.149-.719.914-1.969 1.422-1.25.5-2.859.5-2.57 0-4.055-1.055-1.476-1.063-1.688-2.844l3.774-.094q.124.657.648 1 .524.345 1.336.344.734 0 1.196-.273.46-.274.468-.727a.77.77 0 0 0-.359-.648q-.352-.25-1.102-.39l-2.093-.4q-1.805-.328-2.688-1.21-.882-.892-.875-2.266-.008-1.203.641-2.055.648-.86 1.843-1.312t2.821-.453q2.437 0 3.844 1.023 1.405 1.016 1.554 2.797"
        ></path>
      </svg>
    </a>
  );
};

const MoreIcon = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) => {
  return active ? (
    <button
      onClick={onClick}
      className="h-12 px-5 flex items-center justify-center gap-2 text-base font-medium text-nowrap outline-none rounded-full transition-all duration-300 disabled:opacity-50 group text-white bg-primary xs:hover:opacity-75 w-12 h-12 rounded-md !px-1 !bg-black dark:!bg-white/20"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill="#fff"
          d="M4.306 18.219a1.043 1.043 0 1 0 1.475 1.475zm8.432-5.481a1.043 1.043 0 1 0-1.476-1.476zm-1.476-1.476a1.043 1.043 0 1 0 1.476 1.476zm8.432-5.48a1.043 1.043 0 0 0-1.475-1.476zm-6.956 5.48a1.043 1.043 0 1 0-1.476 1.476zm5.48 8.432a1.043 1.043 0 0 0 1.476-1.475zm-6.956-6.956a1.043 1.043 0 1 0 1.476-1.476zm-5.48-8.432A1.043 1.043 0 1 0 4.305 5.78zm0 15.388 6.956-6.956-1.476-1.476-6.956 6.957zm6.956-6.956 6.956-6.957-1.475-1.475-6.957 6.956zm-1.476 0 6.957 6.956 1.475-1.475-6.956-6.957zm1.476-1.476L5.78 4.306 4.306 5.78l6.956 6.957z"
        ></path>
      </svg>
    </button>
  ) : (
    <button
      onClick={onClick}
      className="h-12 px-5 flex items-center justify-center bg-primary w-12 h-12 rounded-md !px-1 bg-[#f4f4f5] dark:bg-gray-600"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path
          fill="#fff"
          stroke="#000"
          stroke-linecap="round"
          stroke-width="2"
          d="M20 5H4M20 12H4M20 19H4"
        ></path>
      </svg>
    </button>
  );
};

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleShowDrawer = () => setShowDrawer((show) => !show);
  return (
    <header className="bg-white dark:bg-[#14181f] shadow-md fixed top-0 w-full z-50">
      <section className="largeScreen:px-40 desktop:px-32 laptop:px-20 tablet:px-8 largeScreen:py-8 desktop:py-8 laptop:py-6 tablet:py-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-x-8">
          <CompanyLogo />
          <div className="laptop:hidden tablet:hidden">
            <Search />
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <div className="text-[#4D5263] dark:text-[#fff] largeScreen:text-xl desktop:text-xl laptop:text-lg tablet:text-base font-semibold whitespace-nowrap">
            Log in
          </div>
          <button className="rounded-full bg-[#4866E2] text-white px-4 py-2 largeScreen:text-xl desktop:text-xl laptop:text-lg tablet:text-base font-normal whitespace-nowrap">
            Sign Up
          </button>
        </div>
        <div className="flex items-center justify-between gap-x-4 w-full pt-4 desktop:hidden largeScreen:hidden desktop:hidden">
          <Search />
          <MoreIcon active={showDrawer} onClick={toggleShowDrawer} />
          <NavDrawer open={showDrawer} onClose={toggleShowDrawer} />
        </div>
      </section>
      <TopMenu />
    </header>
  );
};

export default Header;
