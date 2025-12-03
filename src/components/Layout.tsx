import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      className="
        relative
        w-screen
        h-screen
        overflow-hidden
        bg-desktop-start
        to-desktop-end
        bg-gradient-to-br
        font-sans
        text-gray-100
      "
    >
      {/* Global Background Layer */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 lg:opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Safe area for mobile notch */}
      <div className="absolute inset-0 pt-safe pb-safe">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
