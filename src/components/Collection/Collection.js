import React from "react";
import "./Collection.css";
import mainArrow from "../../assets/img/main-arrow.svg";

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
          {props.photos.map((item) => {
            return (
              <div className="Collection_img_wrapper" key={item.id}>
                <img className="Collection_img" src={item.urls.small} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return collectionList;
};

export default Collection;
