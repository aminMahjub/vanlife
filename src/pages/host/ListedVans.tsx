import { Link } from "react-router-dom";
import useVans from "../../hooks/useVans";
import { Van } from "../../types";

const ListedVansCard = ({ van }: { van: Van }) => {
  return (
    <Link
      to={`/host/vans/${van.id}`}
      className="px-6 py-4 flex items-center gap-x-4 bg-pure-white rounded-md last:mb-0 mb-4 cursor-pointer"
    >
      <img src={van.imageUrl} alt={van.name} width={65.877} height={65.877} />

      <div>
        <div className="text-app-text-secondary font-inter-semibold text-xl">{van.name}</div>
        <div className="text-app-text-primary font-inter-medium text-base">${van.price}/day</div>
      </div>
    </Link>
  );
};

const ListedVans = () => {
  const { data } = useVans("/host/vans");

  return (
    <main className="px-6">
      <h1 className=" text-app-text-secondary font-inter-bold text-3xl mb-8">Your listed vans</h1>

      <div className="overflow-y-auto">
        {data?.map((van) => {
          return <ListedVansCard key={van.id} van={van} />;
        })}
      </div>
    </main>
  );
};

export default ListedVans;
