import React, { Component } from 'react';
import Header from './components/Header';
import ClickImage from './components/ClickImage';
import Score from './components/Score';
import Wrapper from './components/Wrapper';
import images from './components/images.json';

class App extends Component {

  state = {
    images,
    score: 0,
    topScore: 0
  };

  

  // randomize(id) {
  //   let img = Array.from(images);
  //   return img[Math.floor(Math.random() * img.length)];
  //   console.log(img);
  // }

  // incrementScore() {
    
  // }
  
  render() {

    let scores = {
      score: 0,
      topScore: 0
    }

    return (
      <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={require("./img/sickle-and-hammer.png")} className="d-inline-block align-top mr-2" alt="" />
          Karl Marx and Tiger Sharks!
          <img src={require("./img/shark.png")} className="d-inline-block align-top ml-2" alt="" />
        </a>
        {/* <div>
          <p>Score: {scores.score} | Top Score: {scores.topScore} </p>
        </div> */}
        <Score 
          score={scores.score}
          topScore={scores.topScore}
        />
      </nav>
      <Header />
      <Wrapper>
        {this.state.images.map((image, index) => (
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
