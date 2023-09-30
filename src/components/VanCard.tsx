import { Link } from "react-router-dom";
import { Van, VanType } from "../types";

import TypeBadge from "./TypeBadge";
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

export default VanCard;
