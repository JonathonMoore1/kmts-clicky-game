import React, { Component } from 'react';
// import logo from './logo.svg';
// s

const App = () => {
  return (
    <div>
      <nav>
        <div className="navbar">
          <ul>
            <li className="brand">
              <a href="/">Trailer Park Boys</a>
            </li>
            <li>
              Click an image to begin!
            </li>
            <li>
              Score: 0 | Top Score: 0
            </li>
          </ul>
        </div>
      </nav>
      <header className="header">
        <h1>Clicky Game!</h1>
        <h2>Click on an image to win points, but don't click on the same image more than once.</h2>
      </header>
      {/* <div className="container">
        <main>
          <div className="card" style="width: 18rem;">
            <div className="card-body">
              <img className="card-img" src="./img/ricky.jpg" alt="Card image cap"> />
            </div>
          </div>
        </main>
      </div> */}
    </div>
  )
}

export default App;
