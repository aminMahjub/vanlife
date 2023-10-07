import { FetchResponeVan, Van } from "../types";
import api from "../utils/api";

const getVans = async (endpoint: string) => {
  const res = await api<FetchResponeVan<Van[] | Van>>(endpoint);

  if (res.status === 400) {
    throw {
      message: "error occured",
      statusText: res.statusText,
      status: res.status,
    };
  }

  return res.data.vans;
};

export default getVans;
