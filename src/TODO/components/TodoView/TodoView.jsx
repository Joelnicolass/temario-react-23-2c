import Task from "../Task/Task";

import React, { useState } from "react";

const TodoView = () => {
  // TAREAS

  const [tasks, setTasks] = useState([]);

  const createTask = (title) => ({
    id: window.crypto.randomUUID(),
    title: title,
    completed: false,
  });

  // FORMULARIO

  const [form, setForm] = useState();

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

    const newTask = createTask(form.title);

    setTasks([...tasks, newTask]);

    resetForm();
  };

  return (
    <div>
      <section>
        <h1>Lista de Tareas</h1>
      </section>

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

      <section>
        {tasks.map((task) => {
          return (
            <Task key={task.id} title={task.title} completed={task.completed} />
          );
        })}
      </section>
    </div>
  );
};

export default TodoView;
