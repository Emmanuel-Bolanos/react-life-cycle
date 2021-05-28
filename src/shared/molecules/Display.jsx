import React, { Component } from 'react';
import Instructions from '../organisms/Instructions';
import LetterWars from '../organisms/LetterWars';
import StartButton from '../organisms/StartButton';
import ErrorBoundary from '../organisms/ErrorBoundary';
import { Typography, Grid } from '@material-ui/core';

const Title = ({text}) =>  {
  return (
    <Typography 
      variant='h1'
      component='h1'
      color='primary'
      align='center'
      gutterBottom
    > 
      {text}
    </Typography>
  );
};

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
      <Grid 
        container 
        alignItems="center" 
        direction="column"
      >
        {/* title */}
        <Grid item xs={12} >
          <Title 
            text='Speed Typer'
          />
        </Grid>
        {/* Instructions */}
        <Grid item xs={6} >
          <Instructions />
        </Grid>
        {/* Error handler for the game logic */}
        <Grid 
          container 
          item 
          xs={6} 
          direction="column"
          justify="center"
        >
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
        </Grid>
      </Grid>
    );
  }
};

export default Display;
