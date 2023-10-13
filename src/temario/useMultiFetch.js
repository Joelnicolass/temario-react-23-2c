import { useEffect, useState } from "react";

// funciones que pueden ir en otros archivos
// obtiene el valor de la propiedad name de cada objeto
const getNames = (arr) => arr.map(({ name }) => name);

// obtiene el valor de la propiedad initialState de cada objeto
const getInitialState = (arr) => arr.map(({ initialState }) => initialState);

// crea un objeto con las propiedades name y los valores values
const mapValuesToNames = (names, values) =>
  names.reduce((acc, name, i) => ({ ...acc, [name]: values[i] }), {});

// obtiene el valor de la propiedad data de cada objeto
const getDataValue = (arr) => arr.map(({ data }) => data);

const useMultiFetch = (
  services = [
    {
      name: "",
      request: async () => {},
      adapter: (data) => data,
      initialState: null,
    },
  ]
) => {
  const [state, setState] = useState(
    mapValuesToNames(getNames(services), getInitialState(services))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAdapter = (adapter) => adapter || ((data) => data);

  const axiosResolver = async ({ request, adapter }) =>
    getAdapter(adapter)((await request()).data);

  const getData = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const promises = await Promise.all(services.map(axiosResolver));
      setState(mapValuesToNames(getNames(services), promises));
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data: state,
    isLoading,
    error,
    getData,
  };
};

export default useMultiFetch;
