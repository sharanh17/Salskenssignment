// src/components/Filters.js
import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [year, setYear] = useState('');
  const [status, setStatus] = useState('');

  const handleFilterChange = () => {
    onFilterChange(year, status);
  };

  return (
    <div className="mb-4 flex space-x-4">
      <select
        value={year}
        onChange={(e) => { setYear(e.target.value); handleFilterChange(); }}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="">Select Year</option>
        {Array.from({ length: 20 }, (_, i) => 2006 + i).map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      <select
        value={status}
        onChange={(e) => { setStatus(e.target.value); handleFilterChange(); }}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="">Select Status</option>
        <option value="success">Success</option>
        <option value="failure">Failure</option>
      </select>
    </div>
  );
};

export default Filters;
