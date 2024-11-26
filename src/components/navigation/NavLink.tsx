import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const NavLink = ({ to, className, onClick, children }: NavLinkProps) => (
  <Link to={to} onClick={onClick} className={className}>
    {children}
  </Link>
);

export default NavLink;
