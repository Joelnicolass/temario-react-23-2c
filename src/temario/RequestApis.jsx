import React, { useEffect, useState } from "react";

const RequestApis = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // peticion a api

    const fetchData = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const endpoint = "https://jsonplaceholder.typicode.com/users";

        const response = await fetch(endpoint);

        // ESTO ES POR USAR FETCH
        if (!response.ok) {
          throw new Error("Error en la peticion");
        }

        const data = await response.json();

        setUsers(data);
      } catch (e) {
        setError("HUBO UN ERROR");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    /* const endpoint = "https://jsonplaceholder.typicode.com/users";

    const response = fetch(endpoint)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
      .finally(() => console.log("FINALLY")); */
  }, []);

  return (
    <div>
      {isLoading && <h1>Cargando...</h1>}

      {error && <h1>{error}</h1>}

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default RequestApis;
