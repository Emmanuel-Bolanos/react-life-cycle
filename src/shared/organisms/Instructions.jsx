import React from 'react';
import Typography from '@material-ui/core/Typography';

const Instructions = () => {
  const txt = [
    'Your name is Michael Typer, a rougue cop from the 80\'s',
    'Your nemesis has sent you into the future and to go back to your timeline you must train yourself in the art of... TYPING!',
    'Use this page to begin your training.',
    'Press LET\'S GO and type the letter that appears in the center of the screen!'
  ];

  return (
    txt.map((paragraph, idx) => {
      return (
        <Typography 
          variant='body1'
          component='p'
          align='center'
          paragraph
          style={{padding: '1rem'}}
          color='secondary'
          key={idx}
        >
        {paragraph}
        </Typography>
      )
    })
  );
};

export default Instructions;
