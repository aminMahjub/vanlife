import { NavLink } from "react-router-dom";

const HostNavigation = () => {
  const navbarItemsClasses =
    "text-lg font-inter-medium hover:font-inter-bold hover:text-app-text-secondary text-app-text-primary";
  const navBarItemActive = "text-lg text-app-text-primary font-inter-bold underline ";

  return (
    <nav className="py-8 px-6 flex items-center gap-x-7">
      {hostNavbarItems.map(({ content, id, path }) => {
        return (
          <NavLink
            to={path}
            key={id}
            end={path === "/host"}
            className={({ isActive }) => (isActive ? navBarItemActive : navbarItemsClasses)}
          >
            {content}
          </NavLink>
        );
      })}
    </nav>
  );
};

const hostNavbarItems = [
  {
    content: "Dashboard",
    id: 0,
    path: ".",
  },
  {
    content: "Income",
    id: 1,
    path: "income",
  },
  {
    content: "Vans",
    id: 2,
    path: "vans",
  },
  {
    content: "Reviews",
    id: 3,
    path: "reviews",
  },
];

export default HostNavigation;
