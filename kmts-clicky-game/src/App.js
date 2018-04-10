import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
          <img src={require("./img/sickle-and-hammer.png")} className="d-inline-block align-top mr-2" alt="" />
            Karl Marx and Tiger Sharks!
          <img src={require("./img/shark.png")} className="d-inline-block align-top ml-2" alt="" />
          </a>
        </nav>
        <header className="header">
          <h1>Clicky Game!</h1>
          <h2>Click on an image to win points, but don't click on the same image more than once.</h2>
        </header>
        <div className="container">
          <main>
            <div className="card click-image">
              <div className="card-body">
                <img className="card-img" src="./img/ricky.jpg" alt="Card image cap" />
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default App;
