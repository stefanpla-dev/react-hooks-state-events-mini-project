import React from "react";
import Task from "./Task"

function TaskList({ tasks, setTasks, selectedCategory }) {
  const handleDelete = (task) => {
    const updatedTasks = tasks.filter((t)=> t !== task); //filter out the task from TASKS
    setTasks(updatedTasks); // update state by setting tasks to the updated task list to be displayed
  };

  const filteredTasks = selectedCategory === "All" || !selectedCategory ? tasks : tasks.filter((task)=> task.category === selectedCategory); 

  return (
    <div className="tasks">
      {filteredTasks.map((task, index) =>(
        <Task 
        key={index}
        task={task}
        category={task.category}
        onDeleteTask={handleDelete}/> // using filteredTasks.map so tasks are only rendered based on the correct filtering
      ))}
    </div>
  );
}

export default TaskList;
