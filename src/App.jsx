import React from "react";
import Tarea1 from "./tarea/Tarea1";
import Estados from "./temario/Estados";
import Contador from "./tarea/Contador";
import { grupo } from "./helpers/grupos";
import Efectos from "./temario/Efectos";
import MascotaVirtual from "./ejemplos/MascotaVirtual";
import ComoEvitarEfectos from "./ejemplos/ComoEvitarEfectos";
import EstadosInnecesarios from "./ejemplos/EstadosInnecesarios";

const users = [
  {
    id: 1,
    name: "User 1",
    age: 20,
  },
  {
    id: 2,
    name: "User 2",
    age: 30,
  },
  {
    id: 3,
    name: "User 3",
    age: 40,
  },
];

const App = () => {
  return (
    <>
      <EstadosInnecesarios />
    </>
  );
};

export default App;
