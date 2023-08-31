import React, { useState, useEffect } from "react";

const dps = "";

// useEffect es un hook que permite ejecutar código cuando el componente se monta, se desmonta o se actualiza

/* 
    Sincronizar con Efectos
    Algunos componentes tienen la necesidad de sincronizarse con sistemas externos. Por ejemplo, es posible que desees controlar un componente que no sea de React en función a un estado de React, configurar una conexión de servidor, o enviar un registro de análisis cuando un componente se muestra en la pantalla. Los Efectos te permiten ejecutar código después del renderizado para que puedas sincronizar tu componente con un sistema fuera de React. 
*/

// efectos secundarios (side effects)
// los efectos secundarios son acciones que se realizan fuera del componente
// por ejemplo: hacer un pedido a un servidor, guardar en el local storage, etc
// los efectos secundarios se realizan en el hook useEffect

const Efectos = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []); // montaje
  useEffect(() => {}, [dps]); // montaje y actualización
  useEffect(() => {
    return () => {};
  }, [count]); // desmontaje

  useEffect(() => {
    console.log("EL CONTADOR CAMBIO");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("SE DESMONTO");
    };
  }, [count]);

  useEffect(() => {
    console.log("se ejecutó el efecto en el montaje");
  }, []);

  useEffect(() => {
    // clean up
    return () => {
      console.log("SE DESMONTO");
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Efectos;
