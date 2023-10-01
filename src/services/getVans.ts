import { FetchResponeVan, Van } from "../types";
import api from "../utils/api";

const getVans = async () => {
  const res = await api<FetchResponeVan>("/vans");
  return await res.data.vans;
};

export default getVans;
