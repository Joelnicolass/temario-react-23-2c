import React from "react";

const Hijo = ({ onClicked = (texto) => {} }) => {
  const handleClick = (e) => {
    onClicked("NUEVO TEXTO");
  };

  return (
    <div>
      <button onClick={handleClick}>saludar</button>
    </div>
  );
};

export default Hijo;
