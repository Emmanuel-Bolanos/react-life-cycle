import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err: null,
      errInfo: null,
    };
  }
  // Catches errors produced by any of the children (game logic and start button)
  componentDidCatch(err, errInfo) {
    this.setState({
      err: err,
      errInfo: errInfo,
    });
  }
  render() {
    // Return the error if something goes wrong
    // else return the children
    return (
      this.state.errInfo
        ? <p> oops, {this.state.err.toString()} </p>
        : this.props.children
    );
  }
}

export default ErrorBoundary;
