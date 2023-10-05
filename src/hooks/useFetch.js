import { useEffect, useState } from "react";

const useFetch = (service) => {
  const [data, setData] = useState({
    id: "",
    url: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await service();

      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    isLoading,
    error,
    fetchData,
  };
};

export default useFetch;
