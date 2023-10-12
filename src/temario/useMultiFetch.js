import { useEffect, useState } from "react";

// funciones que pueden ir en otros archivos
// obtiene el valor de la propiedad name de cada objeto
const getNames = (arr) => arr.map(({ name }) => name);

// crea un objeto con las propiedades name y los valores values
const mapValuesToNames = (values, names) =>
  names.reduce((acc, name, i) => ({ ...acc, [name]: values[i] }), {});

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
    services.reduce((a, e) => ({ ...a, [e.name]: e.initialState }), {})
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAdapter = (adapter) => adapter || ((data) => data);

  const axiosResolver = async ({ request, adapter }) =>
    getAdapter(adapter)((await request()).data);

  const toState = (values, objects) =>
    mapValuesToNames(values, getNames(objects));

  useEffect(() => {
    const getData = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const promises = await Promise.all(services.map(axiosResolver));
        setState(toState(promises, services));
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return {
    data: state,
    isLoading,
    error,
  };
};

export default useMultiFetch;
