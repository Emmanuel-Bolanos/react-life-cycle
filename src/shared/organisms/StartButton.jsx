import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';

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
      <Button 
        onClick={this.handleClick}
        variant='contained'
        color='primary'
        size='large'
        endIcon={
          !this.props.start 
            ? <PlayArrowIcon />
            : <StopIcon />
        }
      > 
        {
          !this.props.start 
            ? "LET'S GO"
            : "STOP"
        }
      </Button>
    );
  }
};

export default StartButton;
