import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand app-title" href="/">
        <img src={require("./sickle-and-hammer.png")} className="d-inline-block align-top mr-2" alt="" />
        Karl Marx and Tiger Sharks!
        <img src={require("./shark.png")} className="d-inline-block align-top ml-2" alt="" />
      </a>
      <p>Score: {props.score} | Top Score: {props.topScore} </p>
    </nav>
  );
}

export default Navbar;