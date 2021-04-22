import React, { useState } from 'react';

import './App.css';
import Search from './components/search';
import Recipe from './components/recipe';
import RecipeList from './components/recipe_list';

function App() {
  const [recipes, setRecipes] = useState([]);

  const search = (term) => {
    console.log(term);
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${term}&number=10&diet=vegan&apiKey=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setRecipes(json.results));
  };

  return (
    <div>
      <div className="left-scene">
        <Search search={search} />
        <RecipeList recipes={recipes} />
      </div>
      <div className="right-scene">
        <div className="selected-recipe">
          {/* <Recipe /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
