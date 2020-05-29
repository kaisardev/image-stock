import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import MainPage from "../containers/MainPage/MainPage";
import FavoritePage from "../containers/FavoritePage/FavoritePage";
import HistoryPage from "../containers/HistoryPage/HistoryPage";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/search" exact component={MainPage} />
          <Route path="/favorite" exact component={FavoritePage} />
          <Route path="/history" exact component={HistoryPage} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
