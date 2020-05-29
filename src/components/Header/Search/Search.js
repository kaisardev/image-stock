import React from 'react';
import './Search.css';

const Search = props => {
  return (
    <>
      <div className="Search">
        <form onSubmit={props.search}>
          <input
            type="text"
            onChange={(e) => {
              props.searchInput(e);
            }}
            className="Search_input"
            placeholder="Поиск"
          />
        </form>
      </div>
      <div className="SearchLine"></div>
    </>
  )
};

export default Search;