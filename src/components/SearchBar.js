// src/components/SearchBar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLaunches } from '../actions/launchActions';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const queryValue = e.target.value;
    setQuery(queryValue);
    onSearch(queryValue);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search launches by mission name"
        value={query}
        onChange={handleSearch}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default SearchBar;
