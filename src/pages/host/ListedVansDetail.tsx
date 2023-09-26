import BackBtn from "../../components/BackBtn";
import TypeBadge from "../../components/TypeBadge";
import useVans from "../../hooks/useVans";
import { useParams, NavLink } from "react-router-dom";

const VansNavigation = () => {
  const navbarItemsClasses =
    "text-base font-inter-medium hover:font-inter-bold hover:text-app-text-secondary text-app-text-primary";
  const navBarItemActive = "text-lg text-app-text-primary font-inter-bold underline ";

  return (
    <nav className="flex items-center gap-x-7">
      <NavLink
        to="/vans/"
        className={({ isActive }) => (isActive ? navBarItemActive : navbarItemsClasses)}
      >
        Details
      </NavLink>

      <NavLink
        to="/vans/"
        className={({ isActive }) => (isActive ? navBarItemActive : navbarItemsClasses)}
      >
        Pricing
      </NavLink>

      <NavLink
        to="/vans/"
        className={({ isActive }) => (isActive ? navBarItemActive : navbarItemsClasses)}
      >
        Photos
      </NavLink>
    </nav>
  );
};

const ListedVansDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useVans(`/host/vans/${id}`, [id]);

  if (data[0]) {
    const { imageUrl, name, description, price, type } = data[0];
    return (
      <main className="px-7 pb-11">
        <BackBtn title="Back to all vans" />

        <div className="bg-pure-white p-6 mt-9 rounded-md">
          <div className="flex items-center gap-x-5 mb-6">
            <img src={imageUrl} alt={name} width={160.15} height={157.903} />

            <div>
              <TypeBadge type={type} />

              <h1 className="mt-4 text-app-text-secondary font-inter-bold text-2xl">{name}</h1>
              <div className="text-app-text-secondary font-inter-bold text-xl">
                ${price}
                <span className="font-inter-medium text-base">/day</span>
              </div>
            </div>
          </div>

          <VansNavigation />

          <div className="text-app-text-secondary text-sm font-inter-medium mb-4 mt-6">
            <span className="font-inter-bold mr-1">Name:</span>
            {name}
          </div>
          <div className="text-app-text-secondary text-sm font-inter-medium mb-4">
            <span className="font-inter-bold mr-1">Category:</span>
            {type}
          </div>
          <div className="text-app-text-secondary text-sm font-inter-medium mb-4">
            <span className="font-inter-bold mr-1">Description:</span>
            {description}
          </div>
          <div className="text-app-text-secondary text-sm font-inter-medium mb-4">
            <span className="font-inter-bold mr-1">Visibility:</span>
            Public
          </div>
        </div>
      </main>
    );
  }
};

export default ListedVansDetail;
