import React from 'react';

import './App.css';
import Search from './components/search';
import Recipe from './components/recipe';
import RecipeList from './components/recipe_list';

function App() {

  const search = (term) => {
    console.log(term);
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${term}&number=10&diet=vegan&apiKey=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <div className="left-scene">
        <Search search={search} />
        <RecipeList />
      </div>
      <div className="right-scene">
        <div className="selected-recipe">
          <Recipe />
        </div>
      </div>
    </div>
  );
}

export default App;
