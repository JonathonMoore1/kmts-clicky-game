import React from "react";
import "./ClickImage.css";

const ClickImage = (props) => {
  console.log(props);
  return (
    <div className="card click-item">
      <img className="card-img" onClick={props.updateScore} id={props.id} src={props.src} alt={props.url} />
    </div>
  );
}

export default ClickImage;