import React, { Component } from 'react';
import Header from './components/Header';
import ClickImage from './components/ClickImage';
import Score from './components/Score';
import Wrapper from './components/Wrapper';
import images from './components/images.json';

class App extends Component {

  state = {
    images
  };


  render() {
    return (
      <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={require("./img/sickle-and-hammer.png")} className="d-inline-block align-top mr-2" alt="" />
          Karl Marx and Tiger Sharks!
          <img src={require("./img/shark.png")} className="d-inline-block align-top ml-2" alt="" />
        </a>
        <Score />
      </nav>
      <Header />
      <Wrapper>
        {this.state.images.map(image => (
          <ClickImage
            id={image.id}
            src={image.url}
          />
        ))}
      </Wrapper>
    </div>
    )
  }
}

export default App;
