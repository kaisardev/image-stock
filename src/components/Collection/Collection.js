import React from "react";
import "./Collection.css";
import { connect } from "react-redux";
import { addToFavorites } from "../../store/actions";
import mainArrow from "../../assets/img/main-arrow.svg";
import Card from "../Card/Card";

const Collection = (props) => {
  let collectionList = (
    <h2 className="Collection_no_result">
      <img src={mainArrow} alt="" />
    </h2>
  );

  if (props.photos) {
    collectionList = (
      <div className="Collection">
        <div className="container Collection_wrapper">
          {props.photos.map((item) => {
            return (
              <Card
                image={item.urls.small}
                key={item.id}
                name={item.user.name}
                instagram={item.user.instagram_username}
                avatar={item.user.profile_image.small}
                addedToFavorites={() => {
                  props.onAddToFavorites(item)
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return collectionList;
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToFavorites: (item) => { dispatch(addToFavorites(item)) }
  }
}

export default connect(null, mapDispatchToProps)(Collection);
