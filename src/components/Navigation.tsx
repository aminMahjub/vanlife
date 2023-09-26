import { Link, NavLink } from "react-router-dom";
import { ReactComponent as AppLogo } from "../assets/icons/logo.svg";
const Navigation = () => {
  const navItemsClasses =
    "text-base font-inter-semibold hover:text-nav-item-selected hover:underline text-app-text-primary";

  return (
    <nav className="flex justify-between items-center px-6 py-9 bg-app-bg">
      <Link to="/">
        <AppLogo />
      </Link>

      <div className="flex justify-center items-center gap-x-5">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? navItemsClasses + " underline" : navItemsClasses
          }
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) =>
            isActive ? navItemsClasses + " underline" : navItemsClasses
          }
        >
          Vans
        </NavLink>
        <NavLink
          to="host"
          className={({ isActive }) =>
            isActive ? navItemsClasses + " underline" : navItemsClasses
          }
        >
          Host
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
