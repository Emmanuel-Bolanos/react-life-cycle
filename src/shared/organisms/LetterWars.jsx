import React, { Component } from 'react';

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
      userAns: '',
    };
  }

  componentDidMount() {
    setInterval(() => {
      const updateLetter = randomLetter();
      this.setState({
        letter: updateLetter,
      });
    }, 2000);
  }

  render() {
    return (
      <React.Fragment>
        <p> game here </p>
        <p> {this.state.letter} </p>
      </React.Fragment>
    );
  }
};

export default LetterWars
