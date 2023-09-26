import Form from "../Form/Form";
import Task from "../Task/Task";

import React, { useState, useRef } from "react";
import Title from "../Title/Title";

const TodoView = () => {
  // TAREAS

  const [tasks, setTasks] = useState([]);

  const formRef = useRef(null);

  const createTask = (title) => ({
    id: window.crypto.randomUUID(),
    title: title,
    completed: false,
  });

  const addTask = (title) => {
    const newTask = createTask(title);
    setTasks([...tasks, newTask]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title } = formRef.current.getForm();

    if (!title) return;

    addTask(title);

    formRef.current.resetForm();
  };

  return (
    <div>
      <Title>
        <h1>Lista de tareas</h1>
      </Title>

      <Form ref={formRef}>
        <button onClick={handleSubmit}>Agregar tarea</button>
      </Form>

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
