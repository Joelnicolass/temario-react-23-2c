import React from "react";

const Task = ({ title, completed }) => {
  return (
    <div>
      <p>
        <span>{title} </span>
        <span>{completed ? "Completada" : "Pendiente"}</span>
      </p>
    </div>
  );
};

export default Task;
