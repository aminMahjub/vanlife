import { useEffect, useState } from "react";
import api from "../utils/api";
import { AxiosError } from "axios";
import { Van, FetchResponeVan } from "../types";

const useVans = (endpoint: string, deps?: unknown[]) => {
  const [data, setData] = useState<Van[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    () => {
      const controller = new AbortController();

      setIsLoading(true);
      api
        .get<FetchResponeVan>(endpoint)
        .then((res) => {
          setIsLoading(false);
          setData(res.data.vans);
        })
        .catch((err: AxiosError) => {
          setIsLoading(false);
          setError(err.message);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : [],
  );

  return { data, isLoading, error };
};

export default useVans;
