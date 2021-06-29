import React from 'react';

const Categories = ({ categories, filterItems }) => {
  console.log(`categories`, categories)
  return (
    <div className="btn-container">
      {categories.map((tags, index) => {
        return (
          <button
            type="button"
            className="project-filter-btn"
            key={index}
            onClick={() => filterItems(tags)}
          >
            {tags}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;