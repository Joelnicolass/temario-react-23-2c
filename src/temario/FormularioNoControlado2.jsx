import React, { useRef } from "react";

export const getFormValues = (form) =>
  Object.fromEntries(new window.FormData(form));

const FormNoControlados2 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = getFormValues(e.target);

    console.log(email, password);

    // envias los datos al back
    // te responde el back
    // te da un token, datos del user, etc
    // redireccion
  };

  return (
    <div>
      <form name="form" onSubmit={handleSubmit}>
        <input name="email" type="email" />
        <input name="password" type="password" />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormNoControlados2;
