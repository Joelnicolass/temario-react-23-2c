import React, { useState } from "react";

const useToDo = () => {
  const [todos, setTodos] = useState([]);

  const createTask = (title) => ({
    id: window.crypto.randomUUID(),
    title,
    completed: false,
  });

  const addTask = (title) => [...todos, createTask(title)];

  const completeTasks = (ids) =>
    todos.map((todo) => {
      if (ids.includes(todo.id)) {
        todo.completed = true;
      }
      return todo;
    });

  const removeTask = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const removeTasks = (ids) => todos.filter((todo) => !ids.includes(todo.id));

  const updateTodoList = (newTodos) => setTodos(newTodos);

  const editTask = (id, title) =>
    todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    });

  return {
    todos,
    updateTodoList,
    addTask,
    completeTasks,
    removeTask,
    removeTasks,
    editTask,
  };
};

export default useToDo;
