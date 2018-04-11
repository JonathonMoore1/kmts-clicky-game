import React from 'react';
import './Header.css';

const Navbar = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 mx-auto">Clicky Game</h1>
        <p className="lead">Click on the images to collect points,but don't click the same image twice!</p>
      </div>
    </div>
  )
}

export default Navbar;