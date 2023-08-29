import React from "react";

/* 

    Crear una card de presentación que reciba por props los siguientes datos:

    - Nombre
    - Apellido
    - Edad

    - Expectativas de la cursada

*/

const Tarea1 = ({ nombre, apellido, edad, expectativas }) => {
  return (
    <div>
      <h1>{nombre}</h1>
      <h1>{apellido}</h1>
      <h1>{edad}</h1>
      <h1>{expectativas}</h1>
    </div>
  );
};

export default Tarea1;
