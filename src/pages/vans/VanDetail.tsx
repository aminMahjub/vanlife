import { useParams } from "react-router-dom";
import useVans from "../../services/getVans";
import BackBtn from "../../components/BackBtn";
import TypeBadge from "../../components/TypeBadge";
import { VanType } from "../../types";

const VanDetail = () => {
  const { id } = useParams();
  const {
    data: { imageUrl, name, price, description, type },
    isLoading,
    error,
  } = useVans(`/vans/${id}`, [id]);

  if (error) return <p>{error}</p>;
  if (isLoading) return <div className="animate-spin absolute top-1/2 left-1/2"></div>;

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

      <p className="text-app-text-secondary text-base font-inter-medium mb-5 ">
        The Modest Explorer is a van designed to get you out of the house and into nature. This
        beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The
        idea is that you can pack up your home and escape for a weekend or even longer!
      </p>

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
