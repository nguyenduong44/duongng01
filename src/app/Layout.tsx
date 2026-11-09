import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full min-h-screen font-ubuntu text-ink bg-paper flex flex-col">
      <main className="flex-1 w-full p-3 sm:p-6">
        <Outlet />
      </main>
      <footer className="w-full text-center text-xs text-muted pb-4">
        © 2026 duong nguyen <span className="text-accent">—</span>
      </footer>
    </div>
  );
};

export default Layout;
