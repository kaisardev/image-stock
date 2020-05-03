import React from "react";
import "./Collection.css";

const Collection = (props) => {
  return (
    <>
      <div className="Collection">
        <div className="container Collection_wrapper">
          {props.photos.map((item) => {
            return (
              <div className="Collection_img_wrapper" key={item.title}>
                <img
                  className="Collection_img"
                  src={item.cover_photo.urls.small}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Collection;
