import React from 'react';

const Search = ({ search }) => {
  const handleChange = (event) => {
    search(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Search;
