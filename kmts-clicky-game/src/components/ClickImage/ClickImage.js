import React from "react";
import "./ClickImage.css"

const ClickImage = props => {
  return (
    // <main>
      <div className="card click-item" id={props.id}>
        <img className="card-img" src={props.url} alt={props.url} />
      </div>
   
  );
}

export default ClickImage;