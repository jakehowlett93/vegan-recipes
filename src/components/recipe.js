import React from 'react';

const Recipe = ({ recipe, select }) => {
  const handleClick = () => {
    select(recipe);
  };

  return (
    <div onClick={handleClick} className="recipe">
      <img src={recipe.image} className="" alt="food" />
      <h3>{recipe.title}</h3>
    </div>
  );
};

export default Recipe;
