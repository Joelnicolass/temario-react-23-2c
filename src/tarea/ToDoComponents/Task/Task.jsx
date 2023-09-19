import React, { useState } from "react";
import Actions from "../Actions/Actions";
import ActionEdit from "../ActionEdit/ActionEdit";
import ActionYes from "../ActionYes/ActionYes";

const Task = ({ id, title, isCompleted, isSelected, onSelected, onEdited }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = (e) => {
    setIsEditing((prev) => !prev);

    isEditing ? onEdited(id, newTitle) : setNewTitle(title);
  };

  const handleChange = (e) => {
    onSelected(id);
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <input type="checkbox" onChange={handleChange} checked={isSelected} />
      <span
        style={{
          textDecoration: isCompleted ? "line-through" : "none",
        }}
      >
        {isEditing ? (
          <input type="text" onChange={handleTitleChange} value={newTitle} />
        ) : (
          title
        )}
      </span>
      <Actions>
        {!isEditing ? (
          <ActionEdit onClick={handleEdit} />
        ) : (
          <ActionYes onClick={handleEdit} />
        )}
      </Actions>
    </div>
  );
};

export default Task;
