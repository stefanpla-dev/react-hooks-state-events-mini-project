import React, { useState } from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  //not sure yet how I can import selectedCategory here since it's not specified as a prop passed from App inside of the </>. Only implemented here because of an error that appeared in the console without it.
  function handleCategoryClick(category) {
    setSelectedCategory(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=> (
        <button key={category}
          className={selectedCategory === category ? "selected" : ""} // conditionally render the className depending on whether or not something is clicked 
          onClick={()=>handleCategoryClick(category)} // need to use this notation so the handleCategoryClick only happens when the click actually happens. A reference would just have it happen when page loads which could be weird behavior.
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
