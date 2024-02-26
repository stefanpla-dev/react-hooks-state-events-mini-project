import React from "react";

function Task({ task, category, onDeleteTask }) {
  
  function handleDeleteClick() {
    onDeleteTask(task)
  }
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
