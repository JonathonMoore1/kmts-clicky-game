import React from 'react';
import './Score.css';

const Score = (props) => {
  
  // state = {
  //   scores: [
  //     { score: 0 },
  //     { topScore: 0 }
  //   ]
  // }
    
  // updateScore = () => {
  //   const newState = this.state.scores.map((bothScores) => {
  //     const newScore = bothScores;
      
  //     if (newScore.score > newScore.topScore) {
  //       // newScore.score++;
  //       newScore.topScore++;
  //     } else {
  //       newScore.score++;
  //       newScore.topScore++;
  //     }
  //     return newScore;
  //   });
  //   this.setState({
  //     newState
  //   })
  //   console.log('clicked');
  // }

  // resetScore = (props) => {
  //   const newState = this.state.scores.map((bothScores) => {
  //     const newScore = bothScores;
  //     newScore.score = 0;
  //     return newScore;
  //   });
  //   this.setState({
  //     newState
  //   });
  // }

 // render() {
    return (
      <div>
        {/* <p>Score: {this.state.scores[0].score} | Top Score: {this.state.scores[1].topScore} </p> */}
        <p>Score: {props.score} | Top Score: {props.topScore} </p>
      
      <br/>
      <button onClick={props.updateScore}>TEST SCORE</button>
      <button onClick={props.resetScore}>TEST RESET</button>
      </div>
    );
 // }
}

export default Score;