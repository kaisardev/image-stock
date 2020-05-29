import React from 'react';
import "./HeaderList.css";

const HeaderList = props => {
  let random = Math.floor(Math.random());

  return (
    <div className="HeaderList">
      {props.list ?
        props.list.map(item => {
          return <span className="HeaderList_item" key={item + random}>{item}</span>
        }) : null
      }
    </div >
  )
};

export default HeaderList;