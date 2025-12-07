import { type ReactNode } from "react";

export type ViewType = "WORK" | "ABOUT" | "MISC";

export interface DesktopItem {
  id: ViewType;
  label: string;
  iconType: "folder" | "user" | "palette" | "file";
  color: string;
  contentComponent: ReactNode;
}

export interface DesktopIconProps {
  item: DesktopItem;
  onItemClick: (id: string) => void;
}

export interface IconRendererProps {
  type: DesktopItem["iconType"];
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  headerColor?: string;
}
