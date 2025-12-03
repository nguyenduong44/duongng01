import { type ReactNode } from "react";

export type ViewType = "WORK" | "ABOUT" | "MISC";

export interface DesktopItem {
  id: ViewType;
  label: string;
  iconType: "folder" | "user" | "palette" | "file";
  color: string;
  contentComponent: ReactNode;
}

export interface WindowProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
  iconType: DesktopItem["iconType"];
  color: string;
}

export interface DesktopIconProps {
  item: DesktopItem;
  onItemClick: (id: string) => void;
}

export interface IconRendererProps {
  type: DesktopItem["iconType"];
  className?: string;
}
