import { Van } from "../types";

const VanCard = ({ van }: { van: Van }) => {
  const { name, type, price, imageUrl } = van;

  let typeBg: string;

  switch (type) {
    case "simple":
      typeBg = "bg-btn-selected-bg-1";
      break;
    case "luxury":
      typeBg = "bg-btn-selected-bg-2";
      break;
    case "rugged":
      typeBg = "bg-btn-selected-bg-3";
      break;
    default:
      typeBg = "bg-btn-bg-1";
  }

  return (
    <div className="">
      <img src={imageUrl} alt={name} className="object-cover mb-2" />

      <div className="flex items-center justify-between">
        <div className="font-inter-semibold text-xl text-app-text-secondary">{name}</div>

        <div className="font-inter-semibold text-xl text-app-text-secondary">${price}</div>
      </div>

      <div className="text-app-text-secondary font-inter-medium text-[14px] text-right">/day</div>

      <div
        className={`${typeBg} text-pure-white text-base font-inter-medium w-24 text-center py-1 rounded-md`}
      >
        {type}
      </div>
    </div>
  );
};

export default VanCard;
