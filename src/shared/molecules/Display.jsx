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
        <h1> Speed Typer </h1>
        <Instructions />
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
          {/* <button onClick={this.handleClick}> 
            {
              !this.state.start 
                ? "LET'S GO"
                : "STOP"
            }
          </button> */}
        </ErrorBoundary>
      </React.Fragment>
    );
  }
};

export default Display;
