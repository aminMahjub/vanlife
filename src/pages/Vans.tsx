import VanCard from "../components/VanCard";
import useVans from "../hooks/useVans";

const Vans = () => {
  const { data: vans, isLoading, error } = useVans("/vans");

  if (error) return <p>{error}</p>;
  if (isLoading) return <div className="animate-spin absolute top-1/2 left-1/2"></div>;

  return (
    <main className="relative bg-vans-bg px-7 pb-20 pt-14">
      <h1 className="text-app-text-secondary text-3xl font-inter-bold mb-6">
        Explore our van options
      </h1>

      <section className="flex items-center justify-between">
        <div className="overflow-x-auto overflow-y-hidden flex items-center gap-x-5">
          <div className="text-app-text-primary text-base font-inter-medium w-24 basis-24 flex-none text-center py-1 rounded-md bg-primary-color">
            Simple
          </div>

          <div className="text-app-text-primary text-base font-inter-medium w-24 basis-24 flex-none text-center py-1 rounded-md bg-primary-color">
            Luxury
          </div>

          <div className="text-app-text-primary text-base font-inter-medium w-24 basis-24 flex-none text-center py-1 rounded-md bg-primary-color">
            Rugged
          </div>
        </div>

        <div className="underline text-app-text-primary font-inter-medium text-base cursor-pointer pl-2 whitespace-nowrap">
          Clear filters
        </div>
      </section>

      <section className="grid mt-14 justify-center grid-cols-vans gap-3">
        {vans?.map((van) => {
          return <VanCard key={van.id} van={van}></VanCard>;
        })}
      </section>
    </main>
  );
};

export default Vans;
