import { useLocation } from "react-router-dom";
import { Mountain, Menu, X } from "lucide-react";
import { useState } from 'react';
import NavLink from "./navigation/NavLink";
import { navigationItems } from "../data/navigationItems";
import MobileMenu from "./navigation/MobileMenu";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path
      ? "bg-emerald-700 text-white"
      : "text-stone-700 hover:bg-emerald-600 hover:text-white";
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold test-stone-800">
                HikingPaths
              </span>
            </NavLink>
          </div>

          <div className="hidden md:flex space-x-4">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md transition-colors duration 200 ${isActive(
                  item.path
                )}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 rounded-md p-2"
            >
                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
            </button>
          </div>
        </div>

        <MobileMenu
            isOpen={isOpen}
            navigationItems={navigationItems}
            isActive={isActive}
            onItemClick={() => setIsOpen(false)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
