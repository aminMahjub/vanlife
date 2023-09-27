import { useOutletContext } from "react-router-dom";
import { Van } from "../../../types";
const Details = () => {
  const { name, description, type } = useOutletContext<Van>();
  return (
    <>
      <div className="text-app-text-secondary text-sm font-inter-medium mb-4 ">
        <span className="font-inter-bold mr-1">Name:</span>
        {name}
      </div>
      <div className="text-app-text-secondary text-sm font-inter-medium mb-4">
        <span className="font-inter-bold mr-1">Category:</span>
        {type}
      </div>
      <div className="text-app-text-secondary text-sm font-inter-medium mb-4">
        <span className="font-inter-bold mr-1">Description:</span>
        {description}
      </div>
      <div className="text-app-text-secondary text-sm font-inter-medium mb-4">
        <span className="font-inter-bold mr-1">Visibility:</span>
        Public
      </div>
    </>
  );
};

export default Details;
