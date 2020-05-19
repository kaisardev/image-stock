import React from "react";
import "./Collection.css";
import mainArrow from "../../assets/img/main-arrow.svg";
import Card from "../Card/Card";

const Collection = (props) => {
  let collectionList = (
    <h2 className="Collection_no_result">
      <img src={mainArrow} alt="" />
    </h2>
  );

  if (props.photos.length > 0) {
    collectionList = (
      <div className="Collection">
        <div className="container Collection_wrapper">
          {/* {props.photos.map((item) => {
            return (
              <div className="Collection_img_wrapper" key={item.id}>
                <img className="Collection_img" src={item.urls.small} alt="" />
              </div>
            );
          })} */}
          {props.photos.map((item) => {
            return (
              <Card
                image={item.urls.small}
                key={item.id}
                name={item.user.name}
                instagram={item.user.instagram_username}
                avatar={item.user.profile_image.small}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return collectionList;
};

export default Collection;
