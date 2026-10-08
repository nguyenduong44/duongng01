import type { ReactNode } from "react";
import TitleBar from "./TitleBar";
import Breadcrumb from "./Breadcrumb";
import Sidebar from "./Sidebar";
import StatusBar from "./StatusBar";

interface ExplorerWindowProps {
  title: string;
  path: string;
  items: number;
  status?: string;
  children: ReactNode;
}

const ExplorerWindow = ({ title, path, items, status, children }: ExplorerWindowProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto border border-line bg-ivory shadow-[3px_3px_0_0_#d6cfbc]">
      <TitleBar title={title} />
      <Breadcrumb path={path} />
      <div className="flex flex-col md:flex-row md:items-stretch">
        <Sidebar />
        <main className="flex-1 min-w-0 p-4 sm:p-6">{children}</main>
      </div>
      <StatusBar items={items} label={status} />
    </div>
  );
};

export default ExplorerWindow;
