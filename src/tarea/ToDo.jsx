import React from "react";
import {
  ActionCancel,
  ActionYes,
  Actions,
  FormAddTodo,
  ListTasks,
  Task,
  Title,
  useSelectionSimple,
  useToDo,
} from "./ToDoComponents";

const ToDo = () => {
  const {
    selections: selectedTasks,
    selectItem: selectTask,
    resetSelections: resetSelectedTasks,
    isSelected,
  } = useSelectionSimple();

  const {
    todos,
    updateTodoList,
    addTask,
    completeTasks,
    removeTasks,
    editTask,
  } = useToDo();

  const handleAddTask = (title) => {
    updateTodoList(addTask(title));
  };

  const handleCompletedTask = () => {
    updateTodoList(completeTasks(selectedTasks));
    resetSelectedTasks();
  };

  const handleRemoveTask = () => {
    updateTodoList(removeTasks(selectedTasks));
    resetSelectedTasks();
  };

  const handleEditTask = (id, newTitle) => {
    updateTodoList(editTask(id, newTitle));
  };

  return (
    <main>
      <Title text={"To Do List"} />
      <FormAddTodo addTask={handleAddTask} />
      <ListTasks
        tasks={todos}
        taskComponent={({ task }) => (
          <Task
            key={task.id}
            id={task.id}
            isCompleted={task.completed}
            isSelected={isSelected(task.id)}
            title={task.title}
            onSelected={selectTask}
            onEdited={handleEditTask}
          />
        )}
      />
      <Actions>
        <ActionYes onClick={handleCompletedTask} />
        <ActionCancel onClick={handleRemoveTask} />
      </Actions>
    </main>
  );
};

export default ToDo;
