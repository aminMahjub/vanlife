import { Link, NavLink, Outlet } from "react-router-dom";
import { ReactComponent as AppLogo } from "../assets/icons/logo.svg";

const Layout = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-app overflow-y-auto min-h-screen max-w-[549px] mx-auto bg-app-bg">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-footer-bg py-6">
      <div className="text-footer-color text-sm font-inter-medium text-center">
        &#169; 2022 #VANLIFE
      </div>
    </footer>
  );
};

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

export default Layout;
