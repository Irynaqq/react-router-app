import { NavLink } from "react-router";
import { pages } from "../routes";

function Navbar() {
  return (
    <nav>
      {pages.map(link => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}
export default Navbar;
