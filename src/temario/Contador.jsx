import React from "react";

const Contador = () => {
  const handleIncrement = () => {
    // cambio de estado
  };
  const handleDecrement = () => {
    // cambio de estado
  };

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h1>0</h1>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Contador;
