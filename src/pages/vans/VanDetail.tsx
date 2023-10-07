import { ActionFunctionArgs, useLoaderData, useParams } from "react-router-dom";
import BackBtn from "../../components/BackBtn";
import TypeBadge from "../../components/TypeBadge";
import { Van, VanType } from "../../types";
import getVans from "../../services/getVans";

export const loader = ({ params }: ActionFunctionArgs) => {
  return getVans(`/vans/${params.id}`);
};

const VanDetail = () => {
  const { imageUrl, name, type, description, price } = useLoaderData() as Van;

  return (
    <main className="pt-8 px-6 pb-20">
      <BackBtn />

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
    </main>
  );
};

export default VanDetail;
