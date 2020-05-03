import React from "react";
import "./Toolbar.css";
import logo from "../../assets/img/Vector.svg";
import { NavLink } from "react-router-dom";

const Toolbar = (props) => {
  return (
    <div className="Toolbar">
      <div className="container Toolbar_header">
        <div className="Toolbar_logo_wrapper">
          <NavLink to="/" exact>
            <img src={logo} alt="" />
          </NavLink>
          <span className="Toolbar_logo_text">ImageStock</span>
        </div>
        <ul className="Toolbar_navigation_list">
          <li className="Toolbar_navigation_item search">
            <NavLink
              to="/search"
              className="Navlink"
              activeClassName="Navlink_active">
              Поиск
            </NavLink>
          </li>
          <li className="Toolbar_navigation_item favorite">
            <NavLink
              to="/favorite"
              className="Navlink"
              activeClassName="Navlink_active">
              Избранное
            </NavLink>
          </li>
          <li className="Toolbar_navigation_item history">
            <NavLink
              to="/history"
              className="Navlink"
              activeClassName="Navlink_active">
              История поиска
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Toolbar;
