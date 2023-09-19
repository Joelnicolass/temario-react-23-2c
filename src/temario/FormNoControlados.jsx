import React, { useRef } from "react";

const FormNoControlados = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formRef.current);

    const formData = new FormData(formRef.current);
    const email = formData.get("email");
    const password = formData.get("password");
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input name="email" type="email" />
        <input name="password" type="password" />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormNoControlados;
