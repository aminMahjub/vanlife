import { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import getVans from "../../services/getVans";
import { Van, DeferedVansType } from "../../types";
import { requireAuth } from "../../utils/requireAuth";
import Loading from "../../components/Loading";

const ListedVansCard = ({ van }: { van: Van }) => {
  return (
    <Link
      to={van.id}
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

export const loader = async ({ request }: { request: Request }) => {
  await requireAuth(request);
  return defer({ vans: getVans("/host/vans") });
};

const ListedVans = () => {
  const listedVans = useLoaderData() as DeferedVansType;

  return (
    <main className="px-6">
      <h1 className=" text-app-text-secondary font-inter-bold text-3xl mb-8">Your listed vans</h1>

      <div className="overflow-y-auto">
        <Suspense fallback={<Loading />}>
          <Await resolve={listedVans.vans}>
            {(listedVans: Van[]) => {
              return (
                <>
                  {listedVans?.map((van) => {
                    return <ListedVansCard key={van.id} van={van} />;
                  })}
                </>
              );
            }}
          </Await>
        </Suspense>
      </div>
    </main>
  );
};

export default ListedVans;
