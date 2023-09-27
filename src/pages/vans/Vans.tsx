import { Link, useSearchParams } from "react-router-dom";
import VanCard from "../../components/VanCard";
import useVans from "../../hooks/useVans";

const Vans = () => {
  const { data: vans, isLoading, error } = useVans("/vans");

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const filteredVans = typeFilter ? vans?.filter(({ type }) => type === typeFilter) : vans;
  return (
    <main className="relative bg-vans-bg px-7 pb-20 pt-14">
      <h1 className="text-app-text-secondary text-3xl font-inter-bold mb-6">
        Explore our van options
      </h1>

      <section className="flex items-center justify-between">
        <div className="overflow-x-auto overflow-y-hidden flex items-center gap-x-5">
          <button
            type="button"
            onClick={() => setSearchParams({ type: "simple" })}
            className={` text-base ${
              typeFilter === "simple"
                ? "bg-app-text-secondary text-pure-white"
                : "bg-primary-color text-app-text-primary"
            } font-inter-medium w-24 basis-24 flex-none text-center py-1 rounded-md`}
          >
            Simple
          </button>

          <button
            type="button"
            onClick={() => setSearchParams({ type: "luxury" })}
            className={`text-base ${
              typeFilter === "luxury"
                ? "bg-app-text-secondary text-pure-white"
                : "bg-primary-color text-app-text-primary"
            } font-inter-medium w-24 basis-24 flex-none text-center py-1 rounded-md`}
          >
            Luxury
          </button>

          <button
            type="button"
            onClick={() => setSearchParams({ type: "rugged" })}
            className={`text-base ${
              typeFilter === "rugged"
                ? "bg-app-text-secondary text-pure-white"
                : "bg-primary-color text-app-text-primary"
            } font-inter-medium w-24 basis-24 flex-none text-center py-1 rounded-md`}
          >
            Rugged
          </button>
        </div>

        {typeFilter && (
          <button
            type="button"
            onClick={() => setSearchParams({})}
            className="underline text-app-text-primary font-inter-medium text-base cursor-pointer pl-2 whitespace-nowrap"
          >
            Clear filters
          </button>
        )}
      </section>

      <section className="grid mt-14 justify-center grid-cols-vans gap-3">
        {filteredVans.map((van) => {
          return <VanCard key={van.id} van={van}></VanCard>;
        })}
      </section>
    </main>
  );
};

export default Vans;
