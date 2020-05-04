import React from "react";
import "./Layout.css";

import Toolbar from "../Toolbar/Toolbar";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
