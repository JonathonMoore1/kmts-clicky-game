import React, { Component } from 'react';
import './Score.css';

class Score extends Component {
  
  state = {
    scores: [
      { score: 0 },
      { topScore: 0 }
    ]
  }
    
  

  updateScore = (props) => {
    const newState = this.state.scores.map((bothScores) => {
      const newScore = bothScores;
      newScore.score++;
      newScore.topScore++;
      return newScore;
    });
    this.setState({
      newState
    })
  }

  render() {
    return (
      <div>
        <p>Score: {this.state.scores[0].score} | Top Score: {this.state.scores[1].topScore} </p>
      
      <br/>
      <button onClick={this.updateScore}>TEST SCORE</button>
      </div>
    );
  }
}

export default Score;