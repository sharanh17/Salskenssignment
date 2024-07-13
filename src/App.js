// src/App.js
import React, { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import LaunchList from './components/LaunchList';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import { fetchLaunches } from './actions/launchActions';

const App = () => {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('');
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (query) => {
    setQuery(query);
    dispatch(fetchLaunches(query, year, status));
  };

  const handleFilterChange = (year, status) => {
    setYear(year);
    setStatus(status);
    dispatch(fetchLaunches(query, year, status));
  };

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 p-4">
        <SearchBar onSearch={handleSearch} />
        <Filters onFilterChange={handleFilterChange} />
        <LaunchList />
      </div>
    </Provider>
  );
};

export default App;
