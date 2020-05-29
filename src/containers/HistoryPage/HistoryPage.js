import React from "react";
import "./HistoryPage.css";
import { connect } from "react-redux";

import Header from "../../components/Header/Header";

const HistoryPage = (props) => {
  return (
    <div className="HistoryPage">
      <Header
        list={props.historyRequests}
        page={props.match.path}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    historyRequests: state.historyRequests,
  }
}

export default connect(mapStateToProps)(HistoryPage);
