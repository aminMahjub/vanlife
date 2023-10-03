import { AxiosError } from "axios";
import { useRouteError } from "react-router-dom";

const ErrorPromt = () => {
  const error = useRouteError();

  if (error instanceof AxiosError) {
    return <main>Error: {error.message}</main>;
  }
};

export default ErrorPromt;
