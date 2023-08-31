import React, { useRef, useState } from "react";

const CardPresentacion = ({ grupo }) => {
  const LIMIT_INTEGRANTES = grupo.integrantes.length - 1;

  const [index, setIndex] = useState(0);

  const handleNextIntegrante = () => {
    if (index === LIMIT_INTEGRANTES) return;
    setIndex(index + 1);
  };

  const handlePrevIntegrante = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const integrante = grupo.integrantes[index];

  return (
    <div>
      <h1>{grupo.nombre}</h1>
      <div>
        <button onClick={handleNextIntegrante}>{"->"}</button>
        <h2>{integrante.nombre}</h2>
        <h2>{integrante.edad}</h2>
        <button onClick={handlePrevIntegrante}>{"<-"}</button>
      </div>
      <p>{grupo.descripcion}</p>
    </div>
  );
};

export default CardPresentacion;
