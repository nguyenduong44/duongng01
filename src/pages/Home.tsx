import { useState } from "react";
import { DESKTOP_ITEMS } from "../constants";
import type { DesktopItem, ViewType } from "../types";
import DesktopIcon from "../components/DesktopIcon";
import TextType from "../components/TextType";
import Footer from "../components/Footer";
import Canva3D from "../components/Canva3D";
import LeftSection from "../components/LeftSection";
import Modal from "../components/Modal";
import WorkModal from "../components/modals/WorkModal";
import { Folder } from "lucide-react";

const Home = () => {
  const [activeItemId, setActiveItemId] = useState<ViewType>(null);

  const activeItem: DesktopItem | undefined = DESKTOP_ITEMS.find(
    (item) => item.id === activeItemId,
  );

  const handleItemClick = (id: string) => {
    setActiveItemId(id as ViewType);
  };

  const handleItemClose = () => {
    setActiveItemId(null);
  };

  console.log(activeItemId);

  return (
    <div className="min-h-screen w-full flex flex-col ">
      {/* MOBILE & TABLET LAYOUT - Stack vertically */}
      <div className="lg:hidden flex-1 h-full w-full flex flex-col overflow-y-auto">
        {/* 3D Shape Section - Mobile */}
        <div className="flex-shrink-0 h-64 sm:h-80 md:h-96 p-4 sm:p-6">
          <Canva3D />
        </div>

        {/* Header Section - Mobile */}
        <header className="flex-shrink-0 px-4 py-4 sm:px-4 sm:py-6 md:px-8 animate-fade-in-down">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Tap folders to explore my work
          </p>
          <TextType
            text={["Text typing effect", "for your websites", "Happy coding!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            cursorBlinkDuration={0.4}
            className="text-sm sm:text-base md:text-lg font-medium tracking-tight drop-shadow-xl bg-clip-text mb-2"
          />
        </header>

        {/* Icons Grid - Mobile */}
        <div
          className="p-4 m-4
          overflow-hidden
          backdrop-blur-xl
          backdrop-saturate-150
          bg-white/10 
          border border-white/20 
          shadow-[0_8px_32px_rgba(0,0,0,0.3)]
          rounded-[20px]
        "
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
      <div className="hidden flex-1 lg:grid w-full grid-cols-10 grid-rows-8 gap-4 p-4 xl:p-6 z-12">
        {/* Header Section - Desktop */}
        <div className="col-span-10 row-span-2 px-6 xl:px-8 rounded-[20px] z-100">
          <header className="flex flex-col justify-center h-full w-full animate-fade-in-down">
            <h1 className="text-[36px] xl:text-[36px] 2xl:text-[36px] font-ubuntu font-bold mb-6">
              Double-click folders to explore my work
            </h1>
            <TextType
              text={[
                "Text typing effect",
                "for your websites",
                "Happy coding!",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              cursorBlinkDuration={0.4}
              className="text-sm xl:text-[19px] 2xl:text-[20px] font-medium tracking-tight drop-shadow-xl bg-clip-text"
            />
          </header>
        </div>

        {/* Left Section - 3D Model */}
        <div className="col-span-4 row-span-6 row-start-3 flex items-center justify-center z-1">
          <LeftSection />
        </div>

        {/* Icons Grid - Desktop */}
        <div
          className="
            backdrop-blur-xl
            backdrop-saturate-150
            bg-white/10 
            shadow-[0_8px_32px_rgba(0,0,0,0.3)]
            rounded-[20px]
            z-12
            col-span-6 row-span-6 col-start-5 row-start-3 flex flex-col items-center overflow-hidden"
        >
          <h1 className="w-full bg-white/25 backdrop-blur-md text-black text-5xl leading-[100%] p-6">
            index of /folders
          </h1>
          <div className="w-full grid grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-1 2xl:gap-1 mt-[100px]">
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
      <Footer />

      {activeItem && (
        <Modal
          isOpen={true}
          onClose={handleItemClose}
          title={`index of ${activeItem.label}`}
          icon={<Folder className="w-4 h-4 text-white" />}
          headerColor="from-gray-600 to-gray-400"
        >
          {activeItem?.contentComponent ? (
            activeItem.contentComponent
          ) : (
            <h1>nothing here</h1>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Home;
