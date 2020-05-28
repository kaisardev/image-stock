import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { search, addToHistory } from "../../store/actions";
import "./MainPage.css";

import Header from "../../components/Header/Header";
import Collection from "../../components/Collection/Collection";
import Preloader from "../../components/UI/Preloader/Preloader";

const MainPage = (props) => {
  const [queryString, setQueryString] = useState("");

  const searchInputHandler = (e) => {
    setQueryString(e.target.value);
  };

  return (
    <div className="MainPage">
      <Header
        searchInput={searchInputHandler}
        search={(e) => { props.onSearch(e, queryString) }}
      />
      {
        props.loading ? <Preloader /> : <Collection photos={props.searchResult} />
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchResult,
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (e, queryString) => {
      dispatch(search(e, queryString));
      dispatch(addToHistory(queryString));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
