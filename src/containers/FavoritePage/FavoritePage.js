import React from "react";
import "./FavoritePage.css";
import { connect } from "react-redux";
import Collection from "../../components/Collection/Collection";

const FavoritePage = (props) => {
  return (
    <div className="FavoritePage">
      <div className="container">
        <h1 className="FavoritePage_title">Избранное</h1>
        <Collection photos={props.favourites} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    favourites: state.favourites
  }
}

export default connect(mapStateToProps)(FavoritePage);
