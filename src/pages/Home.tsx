import { Link } from "react-router-dom";
import useTitleDocument from "../hooks/useTitleDocument";

const Home = () => {
  const pageTitle = useTitleDocument("Home");
  return (
    <main>
      <header className="bg-home-page bg-cover bg-top bg-no-repeat px-6 max-h-1/3 py-16">
        <p className="font-inter-extrabold text-4xl mb-5 text-pure-white">
          You got the travel plans, we got the travel vans.
        </p>
        <p className="font-inter-medium text-base mb-12 text-pure-white">
          Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make
          your perfect road trip.
        </p>

        <Link
          to="/vans"
          className="inline-block text-center w-full py-3 bg-btn-bg-primary text-pure-white rounded-md font-inter-bold text-base"
        >
          Find your van
        </Link>
      </header>
    </main>
  );
};

export default Home;
