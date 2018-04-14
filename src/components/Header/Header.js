import React from 'react';
import './Header.css';

const Navbar = (props) => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h2 className="display-4 mx-auto">Clicky Game</h2>
        <p className="lead">Click on the images to collect points,but don't click the same image twice!</p>
        <h1 className="comments">{props.comments}</h1>
      </div>
    </div>
  )
}

export default Navbar;