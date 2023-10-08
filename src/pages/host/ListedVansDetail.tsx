import BackBtn from "../../components/BackBtn";
import TypeBadge from "../../components/TypeBadge";
import {
  NavLink,
  Outlet,
  ActionFunctionArgs,
  useLoaderData,
  LoaderFunctionArgs,
  defer,
  Await,
} from "react-router-dom";
import { DeferedVanDetailType, Van, VanType } from "../../types";
import getVans from "../../services/getVans";
import { requireAuth } from "../../utils/requireAuth";
import { Suspense } from "react";
import Loading from "../../components/Loading";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  await requireAuth(request);
  return defer({ vanDetail: getVans(`/host/vans/${params.id}`) });
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
  const listedVanDetails = useLoaderData() as DeferedVanDetailType;

  const renderListeVanDetail = (loadedListedVanDetail: Van) => {
    const { imageUrl, name, type, price } = loadedListedVanDetail;

    return (
      <>
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
            <Outlet context={loadedListedVanDetail} />
          </section>
        </div>
      </>
    );
  };

  return (
    <main className="px-7 pb-11">
      <BackBtn />
      <Suspense fallback={<Loading />}>
        <Await resolve={listedVanDetails.vanDetail}>{renderListeVanDetail}</Await>
      </Suspense>
    </main>
  );
};

export default ListedVansDetail;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyATgia5NQb9P3QOpMtGQt6iqv0b0YBs7sY",
//   authDomain: "vanlife-app-4ff75.firebaseapp.com",
//   projectId: "vanlife-app-4ff75",
//   storageBucket: "vanlife-app-4ff75.appspot.com",
//   messagingSenderId: "674956108367",
//   appId: "1:674956108367:web:57955a2ca3929ba92cc03a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
