import React from "react";
import "./ClickImage.css";
// import Score from '../Score';

const ClickImage = (props) => {
  console.log(props);
  return (
    <div className="card click-item">
      <img className="card-img" id={props.id} src={props.src} alt={props.url} />
    </div>
  );
}

export default ClickImage;