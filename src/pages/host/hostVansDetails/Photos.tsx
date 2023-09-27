import { useOutletContext } from "react-router-dom";
import { Van } from "../../../types";

const Photos = () => {
  const { imageUrl, name } = useOutletContext<Van>();
  return <img src={imageUrl} alt={name} className=" rounded-md" />;
};

export default Photos;
