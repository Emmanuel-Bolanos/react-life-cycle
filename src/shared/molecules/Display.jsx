import React, { Component } from 'react';
import Instructions from '../organisms/Instructions'
import LetterWars from '../organisms/LetterWars'
import StartButton from '../organisms/StartButton'
import ErrorBoundary from '../organisms/ErrorBoundary'
import './Display.css'

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const toogle = !this.state.start;
    this.setState({
      start: toogle,
    });
  }
  render() {
    return (
      <React.Fragment>
        {/* title and instructions */}
        <h1> Speed Typer </h1>
        <Instructions />
        {/* Error handler for the game logic */}
        <ErrorBoundary>
          {
            this.state.start
              ? <LetterWars />
              : ''
          }
          <StartButton
            handleClick={this.handleClick}
            start={this.state.start}
          />
        </ErrorBoundary>
      </React.Fragment>
    );
  }
};

export default Display;
