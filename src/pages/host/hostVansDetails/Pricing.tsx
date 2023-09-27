import { useOutletContext } from "react-router-dom";
import { Van } from "../../../types";

const Pricing = () => {
  const price = useOutletContext<Van>().price;
  return (
    <div className=" text-app-text-secondary font-inter-medium text-2xl">
      ${price}
      <span className=" text-app-text-primary text-base">/day</span>
    </div>
  );
};

export default Pricing;
