import React from 'react';

const Recipe = ({ recipe, select, info }) => {
  const handleClick = () => {
    select(recipe);
  };

  if (info) {
    return (
      <div onClick={handleClick} className="recipe">
        <img src={recipe.image} className="" alt="food" />
        <div>
          <h3>{recipe.title}</h3>
          <a href={recipe.sourceUrl}>
            Visit {recipe.sourceName} for the instructions.
          </a>
        </div>
      </div>
    );
  }
  return (
    <div onClick={handleClick} className="recipe">
      <img src={recipe.image} className="" alt="food" />
      <h3>{recipe.title}</h3>
    </div>
  );
};


export default Recipe;
