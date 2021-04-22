import React from 'react';

import Recipe from './recipe';

const RecipeList = ({ recipes, select }) => {
  const recipeList = recipes.map((recipe) => {
    return <Recipe recipe={recipe} key={recipe.id} select={select} info={false} />;
  });

  return (
    <div>
      { recipeList }
    </div>
  );
};

export default RecipeList;
