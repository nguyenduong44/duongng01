import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      className="
        w-screen
        min-h-screen
        font-ubuntu
        text-gray
        overflow-hidden
        bg-gradient-to-r from-gray-400 to-gray-50
      "
    >
      <main className="h-full w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
