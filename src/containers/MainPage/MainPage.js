import React, { useState, useEffect } from "react";
import axios from "../../axios-unsplash";
import "./MainPage.css";

import Header from "../../components/Header/Header";
import Collection from "../../components/Collection/Collection";

const MainPage = (props) => {
  const [collections, setCollections] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios
      .get("/collections/featured", {
        headers: {
          Authorization:
            "Client-ID VIpiG3v43i61SAaWri3CbqBYl0FDVVdSJddPajfUAMU",
        },
      })
      .then((response) => {
        setCollections(response.data || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchInputHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchByQuery = (e) => {
    e.preventDefault();
    axios
      .get(`/search/photos?query=${searchQuery}`, {
        headers: {
          Authorization:
            "Client-ID VIpiG3v43i61SAaWri3CbqBYl0FDVVdSJddPajfUAMU",
        },
      })
      .then((response) => {
        console.log(response.data);
        setSearchResult(response.data.results || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="MainPage">
      <Header
        collections={collections}
        searchInput={searchInputHandler}
        search={searchByQuery}
      />
      <Collection photos={searchResult} />
    </div>
  );
};

export default MainPage;
