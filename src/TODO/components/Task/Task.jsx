import React from "react";

const Task = ({ title, completed, onCompleted = () => {} }) => {
  const handleCompelteTask = () => {
    onCompleted();
  };

  return (
    <div
      style={{
        display: "flex",
        height: "50px",
      }}
    >
      <p>
        <span>{title} </span>
        <span>{completed ? "Completada" : "Pendiente"}</span>
      </p>

      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",
          aspectRatio: "1/1",
          borderRadius: "50%",
        }}
        onClick={handleCompelteTask}
      >
        ✅
      </button>
    </div>
  );
};

export default Task;
