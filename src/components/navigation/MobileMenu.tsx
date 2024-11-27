import NavLink from "./NavLink";
import { NavigationItem } from "../../types/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  navigationItems: NavigationItem[];
  isActive: (path: string) => string;
  onItemClick: () => void;
}

const MobileMenu = ({
  isOpen,
  navigationItems,
  isActive,
  onItemClick,
}: MobileMenuProps) => (
  <div
    className={`md:hidden transition-all duration-300 ease-in-out ${
      isOpen ? "max-h-64 opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden"
    }`}
  >
    <div className="flex flex-col space-y-2">
      {navigationItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={onItemClick}
          className={`px-4 py-2 rounded-md transition-colors duration-200 ${isActive(
            item.path
          )}`}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  </div>
);

export default MobileMenu;
