import React from "react";
import "./Toolbar.css";
import logo from "../../assets/img/Vector.svg";
import { NavLink } from "react-router-dom";

const Toolbar = (props) => {
  return (
    <div className="Toolbar">
      <div className="container Toolbar_header">
        <NavLink to="/" exact className="Toolbar_logo">
          <img src={logo} alt="" />
          <span className="Toolbar_logo_text">ImageStock</span>
        </NavLink>
        <ul className="Toolbar_navigation_list">
          <li className="">
            <NavLink
              to="/search"
              className="Toolbar_navlink"
              activeClassName="Toolbar_navlink_active">
              <span className="Toolbar_navlink_icon search"></span>
              <span className="Toolbar_navlink_text">Поиск</span>
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/favorite"
              className="Toolbar_navlink"
              activeClassName="Toolbar_navlink_active">
              <span className="Toolbar_navlink_icon favorite"></span>
              <span className="Toolbar_navlink_text">Избранное</span>
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/history"
              className="Toolbar_navlink"
              activeClassName="Toolbar_navlink_active">
              <span className="Toolbar_navlink_icon history"></span>
              <span className="Toolbar_navlink_text">История поиска</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Toolbar;
