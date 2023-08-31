import React from "react";
import Tarea1 from "./tarea/Tarea1";
import Estados from "./temario/Estados";
import Contador from "./tarea/Contador";
import CardPresentacion from "./ejemplos/CardPresentacion";
import { grupo } from "./helpers/grupos";
import Efectos from "./temario/Efectos";

const App = () => {
  return (
    <>
      <CardPresentacion grupo={grupo} />
      {/* <Contador /> */}
      {/* <Efectos /> */}
    </>
  );
};

export default App;
