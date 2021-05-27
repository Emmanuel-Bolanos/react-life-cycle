import React, { Component } from 'react';
import Instructions from '../organisms/Instructions'
import LetterWars from '../organisms/LetterWars'
import UserInput from '../organisms/UserInput'
import './Display.css'

class Display extends Component {
  render() {
    return (
      <React.Fragment>
        <h1> Speed Typer </h1>
        <Instructions />
        <LetterWars />
        <UserInput />
      </React.Fragment>
    );
  }
};

export default Display;
