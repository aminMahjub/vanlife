import { Link, useLocation } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../../public/svg/left-arrow.svg";

const BackBtn = () => {
  const state = useLocation().state || "";

  return (
    <Link
      to={`../vans${state && "?" + state.searchParams}`}
      className="inline-flex items-center gap-x-2 cursor-pointer"
    >
      <LeftArrow />
      <div className="text-back-btn-title underline text-base font-inter-medium">
        Back to {state ? state.typeFilter : "all"} vans
      </div>
    </Link>
  );
};

export default BackBtn;
