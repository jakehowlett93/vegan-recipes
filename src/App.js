import React from 'react';

import './App.css';
import Search from './components/search';
import Recipe from './components/recipe';

function App() {
  return (
    <div>
      <div className="left-scene">
        <Search />
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
