import React from 'react';
import './Score.css';

const Score = () => {
  let score = 0;
  let topScore = 0;

  return (
    <div>
      <p>Score: {score} | Top Score: {topScore} </p>
    </div>
  );
}

export default Score;