import { useLocation } from "react-router-dom";
import { Mountain } from 'lucide-react';
import NavLink from "./navigation/NavLink";
import { navigationItems } from "../data/navigationItems";

const Navbar = () => {
    const location = useLocation();

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
                            <span className="text-xl font-bold test-stone-800">HikingPaths</span>
                        </NavLink>
                    </div>

                    <div className="hidden md:flex space-x-4">
                        {navigationItems.map((item) => (
                            <NavLink
                            key={item.path}
                            to={item.path}
                            className={`px-4 py-2 rounded-md transition-colors duration 200 ${isActive(item.path)}`}
                        >
                            {item.label}
                        </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
 }

 export default Navbar;