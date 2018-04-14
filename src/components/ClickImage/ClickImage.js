import React from "react";
import "./ClickImage.css";

const ClickImage = (props) => {
  console.log(props);
  return (
    <div className="card click-item">
      <img className="card-img" id={props.id} src={props.src} alt={props.url} onClick={() => props.updateScore(props.id)} />
    </div>
  );
}

export default ClickImage;