import React from 'react';

import Recipe from './recipe';

const RecipeList = ({ recipes }) => {
  const recipeList = recipes.map((recipe) => {
    return <Recipe recipe={recipe} />;
  });

  return (
    <div>
      { recipeList }
    </div>
  );
};

export default RecipeList;
