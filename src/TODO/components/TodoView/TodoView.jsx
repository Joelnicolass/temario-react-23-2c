import Form from "../Form/Form";
import Task from "../Task/Task";

import React, { useState } from "react";
import Title from "../Title/Title";

const TodoView = () => {
  // TAREAS

  const [tasks, setTasks] = useState([]);

  const createTask = (title) => ({
    id: window.crypto.randomUUID(),
    title: title,
    completed: false,
  });

  const addTask = (form) => {
    const newTask = createTask(form.title);
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <Title>
        <h1>Lista de tareas</h1>
      </Title>

      <Form
        onSubmitted={(e) => {
          addTask(e);
        }}
      />

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
