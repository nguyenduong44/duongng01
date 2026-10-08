import { Link } from "react-router-dom";
import { FileText, Folder } from "lucide-react";

interface FolderItemProps {
  to: string;
  name: string;
  description: string;
}

export const FolderItem = ({ to, name, description }: FolderItemProps) => {
  return (
    <Link
      to={to}
      className="flex flex-col items-center gap-1 p-4 border border-transparent hover:border-line hover:bg-select active:translate-y-px transition-all"
    >
      <Folder className="w-14 h-14 text-muted" strokeWidth={1.25} fill="#e9e2d0" />
      <span className="text-sm font-bold">{name}</span>
      <span className="text-xs text-muted">{description}</span>
    </Link>
  );
};

interface ThumbProps {
  label: string;
}

export const Thumb = ({ label }: ThumbProps) => {
  return (
    <div className="w-full aspect-[4/3] border border-line bg-paper flex items-center justify-center">
      <span className="text-2xl font-bold text-line select-none">
        {label.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
};

interface FileItemProps {
  to: string;
  name: string;
  meta?: string;
  excerpt?: string;
}

export const FileItem = ({ to, name, meta, excerpt }: FileItemProps) => {
  return (
    <Link
      to={to}
      className="block border border-line bg-ivory hover:bg-select active:translate-y-px transition-all"
    >
      <Thumb label={name} />
      <div className="p-3 border-t border-line">
        <div className="flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-muted shrink-0" />
          <span className="text-sm font-bold truncate">{name}</span>
        </div>
        {meta && <p className="text-xs text-muted mt-1">{meta}</p>}
        {excerpt && <p className="text-xs text-muted mt-1 line-clamp-2">{excerpt}</p>}
      </div>
    </Link>
  );
};
