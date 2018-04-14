import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ClickImage from './components/ClickImage';
import Wrapper from './components/Wrapper';
import images from './images.json';


class App extends Component {

  state = {
    images,
    clicked: [],
    score: 0,
    topScore: 0
  };

  updateScore = id => {
    const clicked = this.state.clicked;
    if (clicked.indexOf(id) === -1) {
      clicked.push(id);
      this.setState({
        clicked: clicked,
        score: this.state.score + 1
      });
      if (this.state.score >= this.state.topScore) {
        this.setState({ 
          topScore: this.state.score + 1
        });
      }
    }
    else {
      this.setState({
        score: 0,
        clicked: []
      });
    }
  }

  render() {
    return (
      <div>
      <Navbar 
        score={this.state.score}
        topScore={this.state.topScore}
        updateScore={this.updateScore}
        resetScore={this.resetScore}
      />
      <Header />
      <Wrapper>
        {this.state.images.sort(() => 0.5 - Math.random())
          .map((image, index) => (
          <ClickImage
            key={index}
            id={image.id}
            src={image.url}
            url={image.url}
            updateScore={this.updateScore}
          />
        ))}
      </Wrapper>
    </div>
    )
  }
}

export default App;
