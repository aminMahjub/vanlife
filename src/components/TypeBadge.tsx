import { VanType } from "../types";

const TypeBadge = ({ type }: { type: VanType }) => {
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
    <div
      className={`${typeBg} text-pure-white text-base font-inter-medium w-24 text-center py-1 rounded-md`}
    >
      {type}
    </div>
  );
};

export default TypeBadge;
