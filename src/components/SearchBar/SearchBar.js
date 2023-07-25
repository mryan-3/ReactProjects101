import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onInputChange }) => {
  return (
    <div className="search-container">
      <input
        onChange={(event) => onInputChange(event.target.value)}
        placeholder="Type keywords"
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;
