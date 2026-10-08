import { NavLink } from "react-router-dom";
import { FileText, FolderOpen, House, ShoppingBag, User } from "lucide-react";

const NAV = [
  { to: "/", label: "Home", end: true, Icon: House },
  { to: "/projects", label: "Projects", end: false, Icon: FolderOpen },
  { to: "/blog", label: "Blog", end: false, Icon: FileText },
  { to: "/shop", label: "Shop", end: false, Icon: ShoppingBag },
  { to: "/about", label: "About", end: false, Icon: User },
];

const Sidebar = () => {
  return (
    <nav aria-label="Main" className="md:w-44 md:shrink-0 md:border-r md:border-line md:bg-ivory md:py-2">
      {/* mobile: top bar */}
      <div className="flex md:hidden border-b border-line bg-ivory overflow-x-auto">
        {NAV.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `px-4 py-2 text-sm whitespace-nowrap border-b-2 ${
                isActive
                  ? "border-accent text-ink font-bold"
                  : "border-transparent text-muted"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
      {/* desktop: side bar */}
      <div className="hidden md:flex md:flex-col">
        {NAV.map(({ to, label, end, Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 text-sm mx-1 rounded-sm ${
                isActive ? "bg-select text-ink font-bold" : "text-muted hover:bg-select/60"
              }`
            }
          >
            <Icon className="w-4 h-4 shrink-0" />
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
