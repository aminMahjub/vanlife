import { ReactComponent as LeftArrow } from "../../public/svg/left-arrow.svg";

const BackBtn = ({ title }: { title: string }) => {
  return (
    <div
      className="inline-flex items-center gap-x-2 cursor-pointer"
      onClick={() => window.history.back()}
    >
      <LeftArrow />
      <div className="text-back-btn-title underline text-base font-inter-medium">{title}</div>
    </div>
  );
};

export default BackBtn;
