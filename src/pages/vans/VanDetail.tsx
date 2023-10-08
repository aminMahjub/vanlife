import { Suspense } from "react";
import { ActionFunctionArgs, useLoaderData, defer, Await } from "react-router-dom";
import BackBtn from "../../components/BackBtn";
import TypeBadge from "../../components/TypeBadge";
import { Van, VanType, DeferedVanDetailType } from "../../types";
import getVans from "../../services/getVans";
import Loading from "../../components/Loading";

export const loader = ({ params }: ActionFunctionArgs) => {
  return defer({ vanDetail: getVans(`/vans/${params.id}`) });
};

const VanDetail = () => {
  const loadedVanDetail = useLoaderData() as DeferedVanDetailType;

  const renderVanDetail = ({ imageUrl, type, price, name, description }: Van) => {
    return (
      <>
        <img src={imageUrl} alt={name} className="my-11" />

        <TypeBadge type={type as VanType} />

        <h1 className="mt-9 text-app-text-secondary text-3xl font-inter-bold mb-3">{name}</h1>

        <div className="text-app-text-secondary text-xs font-inter-bold mb-2">
          ${price}
          <span className="text-md font-inter-medium">/day</span>
        </div>

        <p className="text-app-text-secondary text-base font-inter-medium mb-5 ">{description}</p>

        <button
          type="button"
          className="inline-block text-center w-full py-3 bg-btn-bg-primary text-pure-white rounded-md font-inter-bold text-base"
        >
          Rent this van
        </button>
      </>
    );
  };

  return (
    <main className="pt-8 px-6 pb-20">
      <BackBtn />

      <Suspense fallback={<Loading />}>
        <Await resolve={loadedVanDetail.vanDetail}>{renderVanDetail}</Await>
      </Suspense>
    </main>
  );
};

export default VanDetail;
