import {
  FileText,
  FolderClock,
  FolderCode,
  FolderHeart,
  FolderOpen,
} from "lucide-react";
import type { IconRendererProps } from "../types";

const IconRender = ({ type, className = "w-6 h-6" }: IconRendererProps) => {
  switch (type) {
    case "folder":
      return (
        <FolderCode
          className={className}
          fill="currentColor"
          fillOpacity={0.2}
        />
      );
    case "user":
      return (
        <FolderOpen
          className={className}
          fill="currentColor"
          fillOpacity={0.2}
        />
      );
    case "palette":
      return (
        <FolderHeart
          className={className}
          fill="currentColor"
          fillOpacity={0.2}
        />
      );
    case "file":
      return (
        <FolderClock
          className={className}
          fill="currentColor"
          fillOpacity={0.2}
        />
      );
    default:
      return <FileText className={className} />;
  }
};

export default IconRender;
