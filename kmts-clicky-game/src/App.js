import React, { Component } from 'react';
import Header from './components/Header';
import ClickImage from './components/ClickImage';
import Score from './components/Score';
import Wrapper from './components/Wrapper';
import images from './images.json';

// vvv Map over the id and url keys from images and push them to an array
// Try to 'require' them in and save them to variables name `img + [i]`
//const Img = require("./img/Tiger_Shark_Obamaized.gif");

class App extends Component {

  // READ DOCS ON LIFTING UP STATE

  state = {
    images
    // Add score state array
    // vvvvvvvvvvvvvvvvvvvvv

  };
  // Declare updateScore() to be passed down to Score.js and ClickImage.js
  // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

  render() {
    return (
      <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={require("./sickle-and-hammer.png")} className="d-inline-block align-top mr-2" alt="" />
          Karl Marx and Tiger Sharks!
          <img src={require("./shark.png")} className="d-inline-block align-top ml-2" alt="" />
        </a>
        {/* <div>
          <p>Score: {scores.score} | Top Score: {scores.topScore} </p>
        </div> */}
        <Score />
      </nav>
      <Header />
      <Wrapper>
        {
          // this.state.images.sort((a, b) => {return Math.random()})
          this.state.images.map((image, index) => (
          <ClickImage
            key={index}
            id={image.id}
            src={image.url}
            onClick={Score.updateScore}
          />
        ))}
      </Wrapper>
    </div>
    )
  }
}

export default App;
