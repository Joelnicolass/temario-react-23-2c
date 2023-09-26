import React from "react";
import Task from "../Task/Task";

const ListTasks = ({ tasks, renderTask }) => {
  return (
    <section>
      {tasks.map((task) => {
        return renderTask(task);
      })}
    </section>
  );
};

export default ListTasks;
