import React, { useState } from "react";
import "../App.css";
import SearchIcon from "@mui/icons-material/Search";


const Search = ({ query, onQueryChange }) => {

  return (
    <div className="wrapper">
      <SearchIcon color="warning" />
      <input
        type="text"
        name="query"
        id="query"
        placeholder="Search..."
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        className="searchinput"
      />

    </div>
  );
};

export default Search;
