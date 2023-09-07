import React, { useState } from "react";

const Formularios = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={email} />
    </div>
  );
};

export default Formularios;
