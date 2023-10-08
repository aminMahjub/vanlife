import { useLoaderData, useSearchParams, Link, defer, Await } from "react-router-dom";
import getVans from "../../services/getVans";
import { Van, VanType, DeferedVansType } from "../../types";
import TypeBadge from "../../components/TypeBadge";
import { Suspense } from "react";
import Loading from "../../components/Loading";

export const loader = () => {
  return defer({ vans: getVans("/vans") });
};

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const deferedVans = useLoaderData() as DeferedVansType;

  const handleSeachParams = (key: string, val: string | null) =>
    setSearchParams((prevParam) => {
      if (val === null) {
        prevParam.delete(key);
      } else {
        prevParam.set(key, val);
      }

      return prevParam;
    });

  const renderVans = (loadedVans: Van[]) => {
    const filteredVans = typeFilter
      ? loadedVans?.filter(({ type }) => type === typeFilter)
      : loadedVans;

    return (
      <>
        <section className="flex items-center justify-between">
          <div className="overflow-x-auto overflow-y-hidden flex items-center gap-x-5">
            <button
              type="button"
              onClick={() => handleSeachParams("type", "simple")}
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
              onClick={() => handleSeachParams("type", "luxury")}
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
              onClick={() => handleSeachParams("type", "rugged")}
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
              onClick={() => handleSeachParams("type", null)}
              className="underline text-app-text-primary font-inter-medium text-base cursor-pointer pl-2 whitespace-nowrap"
            >
              Clear filters
            </button>
          )}
        </section>

        <section className="grid mt-14 justify-center grid-cols-vans gap-3">
          {filteredVans.map((van) => {
            return (
              <VanCard
                key={van.id}
                van={van}
                state={{
                  searchParams: searchParams.toString(),
                  typeFilter: typeFilter || "all",
                }}
              ></VanCard>
            );
          })}
        </section>
      </>
    );
  };

  return (
    <main className="relative bg-vans-bg px-7 pb-20 pt-14">
      <h1 className="text-app-text-secondary text-3xl font-inter-bold mb-6">
        Explore our van options
      </h1>

      <Suspense fallback={<Loading />}>
        <Await resolve={deferedVans.vans}>{renderVans}</Await>
      </Suspense>
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
