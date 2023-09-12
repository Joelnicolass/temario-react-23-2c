import React, { useState } from "react";

const Formularios = () => {
  const [form, setForm] = useState({
    email: "", // coinciden con el name de los inputs
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    /* console.log("Nombre del input ", name);
    console.log("Valor del input ", value); */

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        name="email"
        type="email"
        onChange={handleChange}
        value={form.email}
      />
      <input
        name="password"
        type="password"
        onChange={handleChange}
        value={form.password}
      />

      <button
        onClick={() => {
          console.log(form);
        }}
      >
        Enviar
      </button>
    </div>
  );
};

export default Formularios;
