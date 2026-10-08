import { Folder, Minus, Square, X } from "lucide-react";

interface TitleBarProps {
  title: string;
}

const TitleBar = ({ title }: TitleBarProps) => {
  return (
    <div className="flex items-center justify-between bg-titlebar px-3 py-1.5 border-b border-line">
      <div className="flex items-center gap-2 min-w-0">
        <Folder className="w-4 h-4 text-ivory shrink-0" />
        <span className="text-ivory text-sm font-bold truncate">{title}</span>
      </div>
      <div className="flex items-center gap-1 shrink-0" aria-hidden="true">
        <span className="w-6 h-5 hidden sm:flex items-center justify-center border border-white/40">
          <Minus className="w-3 h-3 text-ivory" />
        </span>
        <span className="w-6 h-5 hidden sm:flex items-center justify-center border border-white/40">
          <Square className="w-2.5 h-2.5 text-ivory" />
        </span>
        <span className="w-6 h-5 flex items-center justify-center border border-white/40">
          <X className="w-3 h-3 text-ivory" />
        </span>
      </div>
    </div>
  );
};

export default TitleBar;
