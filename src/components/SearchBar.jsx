import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search heroes..."
        value={searchTerm}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default SearchBar;