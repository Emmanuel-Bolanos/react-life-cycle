import React, { Component } from 'react';
import { Input } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const randomLetter = () => {
  // a === 97, z === 122
  const letter = 97 + Math.floor(Math.random() * 26);
  return String.fromCharCode(letter);
};

const ShowResult = ({success}) => {
  const updateColor = success ? '#6fcb9f' : '#fb2e01';
  const res = success ? 'CORRECT!' : 'INCORRECT!';
  return (
    <Typography
      variant='h3'
      component='p'
      align='center'
      style={{color:updateColor}}
    >
      {res}
    </Typography>
  )
};

class LetterWars extends Component {
  // init state and bind methods
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
  // helper function, sets up interval and updates letters
  randLetterInterval() {
    return setInterval(() => {
      const updateLetter = randomLetter();
      this.setState({
        userInput: false,
        letter: updateLetter,
      });
    }, 1000);
  }
  // handler for the user input
  // determines if the answer is correct and restarts the interval
  handleChange(e) {
    clearInterval(this.letterIntervalID);
    const success = this.state.letter === e.target.value;
    this.setState({
      userInput: true,
      success,
    });
    this.letterIntervalID = this.randLetterInterval();
  }
  // initialize interval
  componentDidMount() {
    this.letterIntervalID = this.randLetterInterval();
  }
  // clear interval
  componentWillUnmount() {
    clearInterval(this.letterIntervalID);
  }
  // update user score after userInput is detected
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
        {/* display target letter */}
        <Typography 
          variant='h3'
          component='p'
          align='center'
          color='primary'
          style={{padding:'1rem'}}
        >
          {this.state.letter}
        </Typography>
        {/* hide input on user input */}
        {
          !this.state.userInput 
          && <Input type="text" autoFocus placeholder="JUST TYPE!" onChange={this.handleChange} />
        }
        {/* if there was an input, communicate result to user */}
        {
          this.state.userInput 
            ? <ShowResult success={this.state.success} />
            : ''
        }
        {/* display score */}
        <Typography
          variant='h4'
          component='p'
          align='center'
          color='primary'
          style={{padding:'2rem'}}
        >
          Score: {this.state.score}
        </Typography>
      </React.Fragment>
    );
  }
};

export default LetterWars
