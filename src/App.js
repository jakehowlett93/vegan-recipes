import React, { useState } from 'react';

import './App.css';
import Search from './components/search';
import Recipe from './components/recipe';
import RecipeList from './components/recipe_list';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({ title: "" });

  const search = (term) => {
    console.log(term);
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${term}&number=10&diet=vegan&apiKey=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setRecipes(json.results));
  };

  const select = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      <div className="left-scene">
        <Search search={search} />
        <RecipeList recipes={recipes} select={select} />
      </div>
      <div className="right-scene">
        <div className="selected-recipe">
          <Recipe recipe={selectedRecipe} select={select} />
        </div>
      </div>
    </div>
  );
}

export default App;
