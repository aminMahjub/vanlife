import { useEffect } from "react";

const useTitleDocument = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return title;
};

export default useTitleDocument;
