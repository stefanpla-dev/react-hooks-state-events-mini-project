import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState(false) // was originally in filter component, had to move it into parent so it could also be passed to TaskList. Is passed down to both below. 
  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }
  //define this here using the already present state variable so it can be passed to the newTaskForm. Good practice to define functions that modify state in a parent component and pass them down as props, especially when that state is used across multiple components (as setTasks is here).


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setSelectedCategory={setSelectedCategory}/>
      {/* CategoryFilter needs access to setSelectedCategory function in order to update the selected category when a button is clicked. */}
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} setTasks={setTasks} selectedCategory={selectedCategory}/>
      {/* TaskList needs to know what the current value of selectedCategory is in order to filter accordingly */}
    </div>
  );
}
//The action of selecting or changing from one selection to another and the selection itself are important distinctions here. The former determines the value of the latter
export default App;
