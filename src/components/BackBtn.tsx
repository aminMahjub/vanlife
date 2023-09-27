import { Link } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../../public/svg/left-arrow.svg";

const BackBtn = ({ title }: { title: string }) => {
  return (
    <Link to="../vans" className="inline-flex items-center gap-x-2 cursor-pointer">
      <LeftArrow />
      <div className="text-back-btn-title underline text-base font-inter-medium">{title}</div>
    </Link>
  );
};

export default BackBtn;
