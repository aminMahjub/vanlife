import { FetchResponeVan, Van } from "../types";
import api from "../utils/api";

const getVans = async () => {
  const res = await api<FetchResponeVan>("/vans");
  if (res.status === 400) {
    throw {
      message: "error occured",
      statusText: res.statusText,
      status: res.status,
    };
  }

  return await res.data.vans;
};

export default getVans;
