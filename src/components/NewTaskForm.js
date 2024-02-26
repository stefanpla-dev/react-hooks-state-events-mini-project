import React, {useState} from "react";

//useState hook to define state variables for the text and category inputs. 
// Attach onChange event handlers to the input elements to update the state variables when the user types or selects an option. 
// Modify the value attributes of the input elements to reflect the current values of the state variables. 
// Use the state variables to access the values of the form inputs when needed, such as when submitting the form. 

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("")
  
  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newTask = {
      text: text,
      category: category,
    };
    console.log(newTask)
    onTaskFormSubmit(newTask)
  } 

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="task" 
          value ={text} 
          onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={category} 
          onChange={handleCategoryChange}>
          {categories.filter(category => category !=="All").map((category)=>(
            <option key={category} value={category}>{category}</option>
          ))} 
          {/* filter out the All category so it can't be selected in the dropdown */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
