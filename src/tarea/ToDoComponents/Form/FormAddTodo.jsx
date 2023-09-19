import React, { useState } from "react";

const FormAddTodo = ({ addTask }) => {
  const [form, setForm] = useState({
    title: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const resetForm = () => setForm({ title: "" });

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!form.title) return;

    addTask(form.title);

    resetForm();
  };

  return (
    <section>
      <form onSubmit={handleAddTask}>
        <input
          name="title"
          type="text"
          onChange={handleChange}
          value={form.title}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default FormAddTodo;
