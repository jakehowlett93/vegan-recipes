import React from 'react';

const Recipe = ({ recipe, select }) => {
  const handleClick = () => {
    select(recipe);
  };

  return (
    <div onClick={handleClick}>
      <img src={recipe.image} className="" alt="food" />
      <p>{recipe.title}</p>
    </div>
  );
};

export default Recipe;
