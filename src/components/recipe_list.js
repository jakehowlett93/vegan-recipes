import React from 'react';

import Recipe from './recipe';

const RecipeList = ({ recipes }) => {
  const recipeList = recipes.map((recipe) => {
    return <Recipe recipe={recipe} key={recipe.id} />;
  });

  return (
    <div>
      { recipeList }
    </div>
  );
};

export default RecipeList;
