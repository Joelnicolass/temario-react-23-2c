import Form from "../Form/Form";
import Task from "../Task/Task";

import React, { useState, useRef } from "react";
import Title from "../Title/Title";
import ListTasks from "../ListTasks/ListTasks";

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

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current.getState();

    addTask(form);

    formRef.current.reset();
  };

  return (
    <div>
      <Title>
        <h1>Lista de tareas</h1>
      </Title>

      <Form ref={formRef}>
        <button onClick={handleSubmit}>Agregar tarea</button>
      </Form>

      <ListTasks
        tasks={tasks}
        renderTask={(task) => {
          return (
            <Task
              key={task.id}
              title={task.title}
              completed={task.completed}
              onCompleted={() => {
                completeTask(task.id);
              }}
              onDeleted={() => {
                deleteTask(task.id);
              }}
            />
          );
        }}
      />
    </div>
  );
};

export default TodoView;
