import { Van } from "../types";

const VanCard = ({ van }: { van: Van }) => {
  const { name, type, price, imageUrl } = van;

  return (
    <div>
      <img src={imageUrl} alt={name} />

      <div>
        <div>{name}</div>

        <div>
          <div>${price}</div>
          <div>/day</div>
        </div>
      </div>

      <div>{type}</div>
    </div>
  );
};

export default VanCard;
