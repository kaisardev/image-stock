import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import MainPage from "../containers/MainPage/MainPage";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/search" exact component={MainPage} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
