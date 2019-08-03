import React from 'react';
import './App.css';
import ImageContainer from "./components/ImageContainer"
import Score from "./components/Score"

class App extends React.Component {
  state = {
    score: 0,
    message: "Click an image to begin!"
  }

  changeScore = () => {
    let newScore = this.state.score + 1;
    this.setState({ score: newScore, message: "Good click!" });
    console.log(this.state.score);
  }

  newGame = () => {
    this.setState({ score: 0, message: "Oops. Bad click. Score reset!" });
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Hello</h1>
          <hr />
          <p>Click on an image to earn points, but don't click on any more than once!</p>
          <Score scorevalue={this.state.score} />
          <p className="display-6" id="message">{this.state.message}</p>
        </div>
        <ImageContainer changeScoreinApp={this.changeScore} newGame={this.newGame} />
      </div>
    );
  }
}

export default App;
