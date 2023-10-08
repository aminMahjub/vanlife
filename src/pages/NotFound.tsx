import { Link } from "react-router-dom";
import useTitleDocument from "../hooks/useTitleDocument";

const NotFound = () => {
  const pageTitle = useTitleDocument("404 Not Found");

  return (
    <main className="px-7 mt-6">
      <p className=" text-app-text-secondary font-inter-bold text-3xl mb-7">
        Sorry, the page you were looking for was not found.
      </p>
      <Link
        to=".."
        className="inline-block w-full text-center py-3 rounded-md text-pure-white font-inter-bold text-lg bg-app-text-secondary"
      >
        Return to home
      </Link>
    </main>
  );
};

export default NotFound;
