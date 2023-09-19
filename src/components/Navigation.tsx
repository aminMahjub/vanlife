import { Link } from "react-router-dom";
import { ReactComponent as AppLogo } from "../assets/icons/logo.svg";
import { MouseEvent, useState } from "react";

const Navigation = () => {
  const [navItemClicked, setNavItemClicked] = useState("");
  const handleNavItemClicked = (event: MouseEvent<HTMLAnchorElement>) =>
    setNavItemClicked(event.currentTarget?.getAttribute("href") as string);

  return (
    <nav className="flex justify-between items-center px-6 py-9">
      <Link to="/">
        <AppLogo />
      </Link>

      <div className="flex justify-center items-center gap-x-5">
        <Link
          to="/about"
          className={`text-base font-inter-semibold ${
            navItemClicked === "/about" ? "text-nav-item-selected underline" : "text-app-text"
          }`}
          onClick={handleNavItemClicked}
        >
          About
        </Link>
        <Link
          to="/vans"
          className={`text-base font-inter-semibold ${
            navItemClicked === "/vans" ? "text-nav-item-selected underline" : "text-app-text"
          }`}
          onClick={handleNavItemClicked}
        >
          Vans
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
