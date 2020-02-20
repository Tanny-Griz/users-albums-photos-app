import React from 'react';
import './style.scss';

const Search = ({ title, placeholder, onChange }) => {
  return (
    <div className="search">
      <label htmlFor="searchComponent">
        {title || 'Search'}
      </label>
      <input
        type="text"
        placeholder={placeholder || 'Enter value'}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
}

export default Search;