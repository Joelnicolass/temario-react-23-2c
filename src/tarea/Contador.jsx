import React, { useState } from "react";

const Contador = () => {
  const INITIAL_VALUE = 0;

  const [contador, setContador] = useState(INITIAL_VALUE);

  function handleIncrement() {
    setContador(contador + 1);
  }

  function handleDecrement() {
    setContador(contador - 1);
  }

  const handleReset = () => {
    setContador(INITIAL_VALUE);
  };

  const handleIncrementBy = (num) => {
    setContador(contador + num);
  };

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h1>{contador}</h1>
      <button onClick={handleDecrement}>-</button>

      <hr />

      <button onClick={handleReset}>reset</button>
      <button onClick={() => handleIncrementBy(5)}>incrementar x</button>
    </div>
  );
};

export default Contador;
