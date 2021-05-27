import React, { Component } from 'react';

class StartButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick();
  }
  render() {
    return (
      <button onClick={this.handleClick}> 
        {
          !this.props.start 
            ? "LET'S GO"
            : "STOP"
        }
      </button>
    );
  }
};

export default StartButton;
