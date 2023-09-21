import { useEffect, useState } from "react";
import api from "../utils/api";
import { AxiosErro, AxiosError } from "axios";
import { Van, FetchResponeVan } from "../types";

const useVans = () => {
  const [data, setData] = useState<Van[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    api
      .get<FetchResponeVan>("/svans")
      .then((res) => {
        setIsLoading(false);
        setData(res.data.vans);
      })
      .catch((err: AxiosError) => {
        setIsLoading(false);
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { data, isLoading, error };
};

export default useVans;
