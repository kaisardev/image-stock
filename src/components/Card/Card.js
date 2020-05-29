import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.image} alt="" className="Card_img" />
      <div className="Card_info">
        <img src={props.avatar} alt="" className="Card_info_image" />
        <p className="Card_info_name">{props.name}</p>
        <p className="Card_info_instagram">@{props.instagram}</p>
        <div className="Card_buttons">
          <span className="Card_button card_button_favourite" onClick={props.addedToFavorites}></span>
          <span className="Card_button card_button_wide"></span>
          <span className="Card_button card_button_download"></span>
        </div>
      </div>
    </div>
  );
};

export default Card;
