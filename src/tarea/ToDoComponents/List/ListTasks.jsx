import React from "react";

const ListTasks = ({ tasks, taskComponent = () => <></> }) => {
  return (
    <section>
      {tasks.map((task) => {
        return taskComponent({ task });
      })}
    </section>
  );
};

export default ListTasks;
