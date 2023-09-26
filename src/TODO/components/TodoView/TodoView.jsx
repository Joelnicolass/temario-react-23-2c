import Form from "../Form/Form";
import Task from "../Task/Task";

import React, { useState } from "react";
import Title from "../Title/Title";
import ListTasks from "../List/ListTasks";

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

  const completeTask = (id) => {
    const draft = structuredClone(tasks);
    const task = draft.find((task) => task.id === id);
    task.completed = !task.completed;
    setTasks(draft);
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

      <ListTasks
        tasks={tasks}
        renderTask={(task) => (
          <Task
            key={task.id}
            title={task.title}
            completed={task.completed}
            onCompleted={() => {
              completeTask(task.id);
            }}
          />
        )}
      />
    </div>
  );
};

export default TodoView;
