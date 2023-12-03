import React, { useState } from "react";
import { useGlobalContext } from "../Context";

function Search() {
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();
  // console.log(testing123);
  const [search, setSearch] = useState(``);

  function handleTypingSearch(event) {
    setSearch(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();

    // console.log(search);
    if (search) {
      setSearchTerm(search);

      setSearch(``);
    }
  }

  function handleRandomMeal() {
    setSearchTerm(``);
    setSearch(``);
    fetchRandomMeal();
  }

  return (
    <header className="search-container">
      <form onSubmit={handleSearchSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleTypingSearch}
        ></input>
        <button type="submit" className="btn">
          Search
        </button>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={handleRandomMeal}
        >
          Random
        </button>
      </form>
    </header>
  );
}

export default Search;
