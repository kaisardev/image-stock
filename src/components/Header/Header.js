import React from "react";
import "./Header.css";
import Search from "./Search/Search";
import HeaderList from "./HeaderList/HeaderList";

const Header = (props) => {
  return (
    <>
      <div className="Header">
        <div className="container">
          <div className="Header_input_wrapper">
            {
              props.page === "/history" ?
                <h1>Ваши запросы</h1> :
                <Search
                  search={props.search}
                  searchInput={props.searchInput}
                />
            }
          </div>
          <HeaderList list={props.list} />
        </div>
      </div>
    </>
  );
};

export default Header;
