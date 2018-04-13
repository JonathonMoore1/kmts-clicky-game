import React from 'react';
import './Navbar.css';
// import Score from '../Score';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={require("./sickle-and-hammer.png")} className="d-inline-block align-top mr-2" alt="" />
        Karl Marx and Tiger Sharks!
        <img src={require("./shark.png")} className="d-inline-block align-top ml-2" alt="" />
      </a>
      {/* <p>Score: {this.state.scores[0].score} | Top Score: {this.state.scores[1].topScore} </p> */}
      <p>Score: {props.score} | Top Score: {props.topScore} </p>
      <br />
      <button onClick={props.updateScore}>TEST SCORE</button>
      <button onClick={props.resetScore}>TEST RESET</button>
    </nav>
  );
}

export default Navbar;