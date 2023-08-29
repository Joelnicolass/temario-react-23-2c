import React, { useState } from "react";

// Un estado en react es una variable que se puede modificar y que al modificarla se vuelve a renderizar el componente
// Para crear un estado se utiliza la función useState
// useState recibe como parámetro el valor inicial del estado y devuelve un array con dos elementos
// El primer elemento es el valor del estado y el segundo es una función que permite modificar el estado
// Para acceder al valor del estado se utiliza el primer elemento del array
// Para modificar el estado se utiliza el segundo elemento del array

// useState es un hook, un hook es una función que permite utilizar características de react en componentes funcionales
// todos los hooks comienzan con la palabra use

// stateless statefull

const Estados = () => {
  const [name, setName] = useState("Nico");

  const handleClick = (nombre) => {
    // como cambio el nombre

    setName(nombre);
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => handleClick("Carlos")}>cambiar nombre</button>
    </div>
  );
};

export default Estados;

/* const useStateDeNico = (initialValue = undefined) => {
  let state = initialValue;

  const setState = (value) => {
    state = value;
  };

  return [state, setState];
}; */
