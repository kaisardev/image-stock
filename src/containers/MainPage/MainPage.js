import React, { useState, useEffect } from "react";
import axios from "../../axios-unsplash";
import "./MainPage.css";

import Header from "../../components/Header/Header";
import Collection from "../../components/Collection/Collection";

const MainPage = (props) => {
  const [collections, setCollections] = useState([]);

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

  return (
    <div className="MainPage">
      <Header collections={collections} />
      <Collection photos={collections} />
    </div>
  );
};

export default MainPage;
