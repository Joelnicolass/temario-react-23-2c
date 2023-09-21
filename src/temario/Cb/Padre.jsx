import React, { useState } from "react";
import Hijo from "./Hijo";

const Padre = () => {
  const [state, setState] = useState("");

  const cambiarTexto = () => setState("ALGO");

  return (
    <div>
      <Hijo
        onClicked={(texto) => {
          cambiarTexto(texto);
        }}
      />
    </div>
  );
};

export default Padre;
