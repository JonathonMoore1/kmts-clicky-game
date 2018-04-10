import React from 'react';
import './Header.css';

const Navbar = () => {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4 mx-auto">Clicky Game</h1>
        <p class="lead">Click on the images to collect points,but don't click the same image twice!</p>
      </div>
    </div>
  )
}

export default Navbar;