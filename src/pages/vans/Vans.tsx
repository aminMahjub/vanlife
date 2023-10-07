import { useLoaderData, useSearchParams, Link, useNavigate, useNavigation } from "react-router-dom";
import getVans from "../../services/getVans";
import { FetchResponeVan, Van, VanType } from "../../types";
import TypeBadge from "../../components/TypeBadge";
import Loading from "../../components/Loading";

export const loader = () => {
  return getVans("/vans");
};

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const vans = useLoaderData() as Van[];
  const navigation = useNavigation();

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
        {navigation.state !== "loading" ? (
          filteredVans.map((van) => {
            return (
              <VanCard
                key={van.id}
                van={van}
                state={{ searchParams: searchParams.toString(), typeFilter: typeFilter || "all" }}
              ></VanCard>
            );
          })
        ) : (
          <Loading />
        )}
      </section>
    </main>
  );
};

const VanCard = ({
  van,
  state,
}: {
  van: Van;
  state: { searchParams: string; typeFilter: string | null };
}) => {
  const { name, id, type, price, imageUrl } = van;

  return (
    <Link to={id} state={state}>
      <img src={imageUrl} alt={name} className="object-cover mb-2" />

      <div className="flex items-center justify-between">
        <div className="font-inter-semibold text-xl text-app-text-secondary">{name}</div>

        <div className="font-inter-semibold text-xl text-app-text-secondary">${price}</div>
      </div>

      <div className="text-app-text-secondary font-inter-medium text-[14px] text-right">/day</div>

      <TypeBadge type={type as VanType} />
    </Link>
  );
};

export default Vans;
