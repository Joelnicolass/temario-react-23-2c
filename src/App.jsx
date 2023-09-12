import React from "react";
import Tarea1 from "./tarea/Tarea1";
import Estados from "./temario/Estados";
import Contador from "./tarea/Contador";
import { grupo } from "./helpers/grupos";
import Efectos from "./temario/Efectos";
import MascotaVirtual from "./ejemplos/MascotaVirtual";
import ComoEvitarEfectos from "./ejemplos/ComoEvitarEfectos";
import EstadosInnecesarios from "./ejemplos/EstadosInnecesarios";

import image1 from "./assets/1.png";
import image2 from "./assets/2.png";
import image3 from "./assets/3.png";
import Formularios from "./temario/Formularios";
import Cronometro from "./tarea/Cronometro";
import Reloj from "./tarea/Reloj";

const users = [
  {
    id: 1,
    name: "User 1",
    age: 20,
    img: image1,
  },
  {
    id: 2,
    name: "User 2",
    age: 30,
    img: image2,
  },
  {
    id: 3,
    name: "User 3",
    age: 40,
    img: image3,
  },
];

const App = () => {
  return (
    <>
      {/* <EstadosInnecesarios users={users} /> */}
      <Reloj />
      {/* <Formularios /> */}
    </>
  );
};

export default App;
