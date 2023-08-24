import React from "react";

/* 

    Las props son propiedades que se le pueden pasar a un componente.

    llamar al objeto
    const Props = (props) => {
        return <></>
    }

    desestructurar el objeto
    const Props = ({ nombre, apellido }) => {
        return <></>
    }

*/

const Props = ({ nombre, apellido }) => {
  return (
    <div>
      <h1>PROPS</h1>
      <h1>{nombre}</h1>
      <h1>{apellido}</h1>
    </div>
  );
};

export default Props;
