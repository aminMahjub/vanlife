import { Link } from "react-router-dom";
import { ReactComponent as AppLogo } from "../assets/icons/logo.svg";
const Navigation = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-9 bg-app-bg">
      <Link to="/">
        <AppLogo />
      </Link>

      <div className="flex justify-center items-center gap-x-5">
        <Link
          to="/about"
          className="text-base font-inter-semibold hover:text-nav-item-selected hover:underline text-app-text-primary"
        >
          About
        </Link>
        <Link
          to="/vans"
          className="text-base font-inter-semibold hover:text-nav-item-selected hover:underline text-app-text-primary"
        >
          Vans
        </Link>
        <Link
          to="/host"
          className="text-base font-inter-semibold hover:text-nav-item-selected hover:underline text-app-text-primary"
        >
          Host
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
