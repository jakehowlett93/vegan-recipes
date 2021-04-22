import React, { useState } from 'react';

import './App.css';
import Search from './components/search';
import Recipe from './components/recipe';
import RecipeList from './components/recipe_list';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const search = (term) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${term}&number=10&diet=vegan&addRecipeInformation=true&apiKey=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setRecipes(json.results));
  };

  const select = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const unselect = () => {
    setSelectedRecipe(null);
  };

  let renderContent;
  if (selectedRecipe) {
    renderContent = (
      <div>
        <button type="button" onClick={unselect}>Return to list</button>
        <Recipe recipe={selectedRecipe} select={select} info />
      </div>
    );
  } else {
    renderContent = <RecipeList recipes={recipes} select={select} />;
  }

  return (
    <div className="container">
      <Search search={search} />
      {renderContent}
    </div>
  );
}

export default App;
