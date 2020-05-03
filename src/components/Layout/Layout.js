import React from "react";
import "./Layout.css";

import Toolbar from "../Toolbar/Toolbar";

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <main>{props.children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
