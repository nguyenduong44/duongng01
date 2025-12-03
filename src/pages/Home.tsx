import { useState } from "react";
import { DESKTOP_ITEMS } from "../constants";
import type { DesktopItem } from "../types";
import DesktopIcon from "../components/DesktopIcon";

const Home = () => {
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const activeItem: DesktopItem | undefined = DESKTOP_ITEMS.find(
    (item) => item.id === activeItemId,
  );

  const handleItemClick = (id: string) => {
    setActiveItemId(id);
  };

  return (
    <>
      {/* MOBILE LAYOUT - Stack vertically */}
      <div className="lg:hidden h-full w-full flex flex-col overflow-y-auto">
        {/* Header Section - Mobile */}
        <header className="flex-shrink-0 p-6 sm:p-8 animate-fade-in-down">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight drop-shadow-xl bg-clip-text mb-2">
            Desktop Portfolio
          </h1>
          <p className="text-base sm:text-lg text-indigo-200/80 font-light">
            Tap folders to explore my work
          </p>
        </header>

        {/* Icons Grid - Mobile */}
        <div className="flex-1 px-6 sm:px-8 pb-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {DESKTOP_ITEMS.map((item: DesktopItem) => (
              <DesktopIcon
                key={item.id}
                item={item}
                onItemClick={handleItemClick}
              />
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP LAYOUT - Grid system */}
      <div className="hidden lg:grid h-full w-full grid-cols-10 grid-rows-8 gap-4">
        {/* Header Section - Desktop */}
        <div className="col-span-10 row-span-2 p-6 xl:p-[25px]">
          <header className="flex flex-col justify-center h-full w-full animate-fade-in-down">
            <h1 className="text-5xl xl:text-6xl font-bold tracking-tight drop-shadow-xl bg-clip-text">
              Desktop Portfolio
            </h1>
            <p className="text-lg xl:text-xl text-indigo-200/80 font-light">
              Double-click folders to explore my work
            </p>
          </header>
        </div>

        {/* Left Section - Can add sidebar/info here */}
        <div className="col-span-4 row-span-5 row-start-3">
          {/* Optional: Add sidebar content here */}
        </div>

        {/* Icons Grid - Desktop */}
        <div className="col-span-6 row-span-5 col-start-5 row-start-3">
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-16 2xl:gap-24">
            {DESKTOP_ITEMS.map((item: DesktopItem) => (
              <DesktopIcon
                key={item.id}
                item={item}
                onItemClick={handleItemClick}
              />
            ))}
          </div>
        </div>

        {/* Footer/Bottom Section */}
        <div className="col-span-10 row-start-8">
          {/* Optional: Add footer content here */}
        </div>
      </div>
    </>
  );
};

export default Home;
