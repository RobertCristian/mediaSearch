import React from "react";

function SearchBar(props) {
  return (
    <input
      type="text"
      className="searchBar"
      onChange={props.searchChangeHandler}
      placeholder="Enter search term"
    />
  );
}

export default SearchBar;
