import React, { useState } from "react";

const Form = ({ onSubmitted = (form) => {} }) => {
  const [form, setForm] = useState({
    title: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const resetForm = () =>
    setForm({
      title: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();

    onSubmitted(form);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
        />
        <button type="submit">Agregar tarea</button>
      </form>
    </section>
  );
};

export default Form;
