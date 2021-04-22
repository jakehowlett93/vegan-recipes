import React from 'react';

const Search = ({ search }) => {
  const handleChange = (event) => {
    search(event.target.value);
  };

  return (
    <div>
      <p>Search by title or ingredients!</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Search;
