import React from "react";
import "./FavoritePage.css";
import { connect } from "react-redux";

const FavoritePage = (props) => {
  return (
    <div className="FavoritePage">
      {props.historyRequests
        ? props.historyRequests.map((item) => {
            return <p>{item}</p>;
          })
        : null}
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    historyRequests: store.historyRequests,
  };
};

export default connect(mapStateToProps)(FavoritePage);
