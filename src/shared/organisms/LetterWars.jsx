import React, { Component } from 'react';
import { Input } from '@material-ui/core';

const randomLetter = () => {
  // a === 97, z === 122
  const letter = 97 + Math.floor(Math.random() * 26);
  return String.fromCharCode(letter);
};

class LetterWars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: '',
      success: false,
      userInput: false,
      score: 0,
    };
    this.randLetterInterval = this.randLetterInterval.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  randLetterInterval() {
    return setInterval(() => {
      const updateLetter = randomLetter();
      this.setState({
        userInput: false,
        letter: updateLetter,
      });
    }, 1000);
  }
  handleChange(e) {
    clearInterval(this.letterIntervalID);
    const success = this.state.letter === e.target.value;
    this.setState({
      userInput: true,
      success,
    });
    this.letterIntervalID = this.randLetterInterval();
  }
  componentDidMount() {
    this.letterIntervalID = this.randLetterInterval();
  }
  componentWillUnmount() {
    clearInterval(this.letterIntervalID);
  }
  componentDidUpdate(_, prevState) {
    if (prevState.userInput && !this.state.userInput) {
      // const result = Math.max(this.state.success ? this.state.score + 2 : this.state.score - 1, 0);
      const result = this.state.success ? this.state.score + 2 : this.state.score - 1;
      if (result < 0) throw new Error('Oh no, score can not be less than 0!');
      this.setState({
        score: result,
      });
      
    }
  }
  render() {
    return (
      <React.Fragment>
        <p> {this.state.letter} </p>
        {
          !this.state.userInput && <Input type="text" autoFocus onChange={this.handleChange} />
        }
        {
          this.state.userInput 
            ? this.state.success
              ? <p> CORRECT! </p>
              : <p> WRONG! </p>
            : ''
        }
        <p> Score: {this.state.score} </p>
      </React.Fragment>
    );
  }
};

export default LetterWars
