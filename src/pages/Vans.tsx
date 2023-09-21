import VanCard from "../components/VanCard";
import useVans from "../hooks/useVans";

const Vans = () => {
  const { data: vans, isLoading, error } = useVans();

  return (
    <main className="relative">
      {error && <p>{error}</p>}
      {isLoading && <div className="animate-spin absolute top-1/2 left-1/2"></div>}

      <section>
        {vans?.map((van) => {
          return <VanCard key={van.id} van={van}></VanCard>;
        })}
      </section>
    </main>
  );
};

export default Vans;
