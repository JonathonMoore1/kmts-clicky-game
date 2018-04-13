import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ClickImage from './components/ClickImage';
// import Score from './components/Score';
import Wrapper from './components/Wrapper';
import images from './images.json';

// vvv Map over the id and url keys from images and push them to an array
// Try to 'require' them in and save them to variables name `img + [i]`
//const Img = require("./img/Tiger_Shark_Obamaized.gif");

class App extends Component {

  // READ DOCS ON LIFTING UP STATE

  state = {
    images,
    // Add score state array
    // vvvvvvvvvvvvvvvvvvvvv
    scores: [
      { score: 0 },
      { topScore: 0 }
    ]
  };
  // Declare updateScore() to be passed down to Score.js and ClickImage.js
  // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
  updateScore = () => {
    const newState = this.state.scores.map((bothScores) => {
      const newScore = bothScores;
      
      if (newScore.score > newScore.topScore) {
        // newScore.score++;
        newScore.topScore++;
      } else {
        newScore.score++;
        newScore.topScore++;
      }
      return newScore;
    });
    this.setState({
      newState
    })
    console.log('clicked');
  }

  resetScore = () => {
    const newState = this.state.scores.map((bothScores) => {
      const newScore = bothScores;
      newScore.score = 0;
      return newScore;
    });
    this.setState({
      newState
    });
  }

  render() {
    return (
      <div>
      <Navbar 
        score={this.state.scores[0].score}
        topScore={this.state.scores[1].topScore}
        updateScore={this.updateScore}
        resetScore={this.resetScore}
      />
      <Header />
      <Wrapper>
        { 
          // this.state.images.sort((a, b) => {return Math.random()})
          this.state.images.map((image, index) => (
          <ClickImage
            key={index}
            id={image.id}
            src={image.url}
            updateScore={this.updateScore}
          />
        ))}
      </Wrapper>
    </div>
    )
  }
}

export default App;
