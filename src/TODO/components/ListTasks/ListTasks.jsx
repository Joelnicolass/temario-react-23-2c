import React from "react";

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
