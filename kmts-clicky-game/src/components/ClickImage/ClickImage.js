import React from "react";
import "./ClickImage.css";

const ClickImage = (props) => {
  console.log(props);
  return (
    <div className="card click-item">
      <img className="card-img" id={props.id} clicked={props.clicked} src={props.src} alt={props.url} onClick={props.updateScore} />
    </div>
  );
}

export default ClickImage;