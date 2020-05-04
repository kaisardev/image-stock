import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <div className="Header">
        <div className="container">
          <div className="Header_input_wrapper">
            <form onSubmit={props.search}>
              <input
                type="text"
                onChange={(e) => {
                  props.searchInput(e);
                }}
                className="Header_input"
                placeholder="Поиск"
              />
              <div className="Header_line"></div>
            </form>
          </div>
          <div className="Header_collections">
            {props.collections.map((item) => {
              return <span key={item.title}>{item.title}</span>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
