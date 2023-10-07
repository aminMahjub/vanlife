import BackBtn from "../../components/BackBtn";
import TypeBadge from "../../components/TypeBadge";
import {
  NavLink,
  Outlet,
  ActionFunctionArgs,
  useLoaderData,
  LoaderFunctionArgs,
} from "react-router-dom";
import { Van, VanType } from "../../types";
import getVans from "../../services/getVans";
import { requireAuth } from "../../utils/requireAuth";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  await requireAuth(request);
  return getVans(`/host/vans/${params.id}`);
};

const VansNavigation = () => {
  const navbarItemsClasses =
    "text-base font-inter-medium hover:font-inter-bold hover:text-app-text-secondary text-app-text-primary";
  const navBarItemActive = "text-lg text-app-text-primary font-inter-bold underline ";

  return (
    <nav className="flex items-center gap-x-7">
      <NavLink
        to="."
        end
        className={({ isActive }) => (isActive ? navBarItemActive : navbarItemsClasses)}
      >
        Details
      </NavLink>

      <NavLink
        to="pricing"
        className={({ isActive }) => (isActive ? navBarItemActive : navbarItemsClasses)}
      >
        Pricing
      </NavLink>

      <NavLink
        to="photos"
        className={({ isActive }) => (isActive ? navBarItemActive : navbarItemsClasses)}
      >
        Photos
      </NavLink>
    </nav>
  );
};

const ListedVansDetail = () => {
  const listedVanDetails = useLoaderData() as Van;
  const { imageUrl, name, type, price } = listedVanDetails;

  return (
    <main className="px-7 pb-11">
      <BackBtn />
      <div className="bg-pure-white p-6 mt-9 rounded-md">
        <div className="flex items-center gap-x-5 mb-6">
          <img src={imageUrl} alt={name} width={160.15} height={157.903} />

          <div>
            <TypeBadge type={type as VanType} />

            <h1 className="mt-4 text-app-text-secondary font-inter-bold text-2xl">{name}</h1>
            <div className="text-app-text-secondary font-inter-bold text-xl">
              ${price}
              <span className="font-inter-medium text-base">/day</span>
            </div>
          </div>
        </div>

        <VansNavigation />

        <section className="mt-6">
          <Outlet context={listedVanDetails} />
        </section>
      </div>
    </main>
  );
};

export default ListedVansDetail;
