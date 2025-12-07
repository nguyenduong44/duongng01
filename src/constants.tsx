import AboutModal from "./components/modals/AboutModal";
import MiscModal from "./components/modals/MiscModal";
import WorkModal from "./components/modals/WorkModal";
import type { DesktopItem } from "./types";

export const DESKTOP_ITEMS: DesktopItem[] = [
  {
    id: "WORK",
    label: "/work",
    iconType: "folder",
    color: "bg-yellow-400",
    contentComponent: <WorkModal />,
  },
  {
    id: "ABOUT",
    label: "/about",
    iconType: "user",
    color: "bg-indigo-400",
    contentComponent: <AboutModal />,
  },
  {
    id: "MISC",
    label: "/someshits",
    iconType: "palette",
    color: "bg-pink-400",
    contentComponent: <MiscModal />,
  },
];
