import React from 'react';

import './App.css';
import Search from './components/search';

function App() {
  return (
    <div>
      <div className="left-scene">
        <Search />
      </div>
      <div className="right-scene"></div>
    </div>
  );
}

export default App;
