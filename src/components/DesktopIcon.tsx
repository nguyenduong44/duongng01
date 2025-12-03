import type { DesktopIconProps } from "../types";
import IconRender from "./IconRender";

const DesktopIcon = ({ item, onItemClick }: DesktopIconProps) => {
  return (
    <div
      className="
        group 
        flex flex-col items-center 
        gap-2 sm:gap-3
        w-full max-w-[120px] sm:max-w-[140px] mx-auto
        cursor-pointer 
        transition-transform duration-200 
        hover:-translate-y-2 
        active:scale-95
        touch-manipulation
      "
      onClick={() => onItemClick(item.id)}
      role="button"
      aria-label={`Open ${item.label}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onItemClick(item.id);
        }
      }}
    >
      <div
        className={`
          w-16 h-16 sm:w-20 sm:h-20
          rounded-2xl shadow-xl 
          flex items-center justify-center 
          relative
          ${item.color}
          shadow-lg 
          group-hover:shadow-2xl 
          group-hover:shadow-indigo-500/30
          border-t border-white/30 
          border-l border-white/20
          bg-gradient-to-br from-white/20 to-transparent
          transition-all duration-300
        `}
      >
        <div className="text-white drop-shadow-md">
          <IconRender
            type={item.iconType}
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </div>
      </div>

      <span
        className="
          text-white font-medium 
          text-shadow-sm 
          bg-black/20 
          px-2 sm:px-3 
          py-1 
          rounded-full 
          text-xs sm:text-sm
          backdrop-blur-sm 
          border border-white/10 
          group-hover:bg-white/20 
          transition-colors
          text-center
          max-w-full
          truncate
        "
      >
        {item.label}
      </span>
    </div>
  );
};

export default DesktopIcon;
