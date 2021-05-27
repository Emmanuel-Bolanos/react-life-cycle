import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err: null,
      errInfo: null,
    };
  }
  componentDidCatch(err, errInfo) {
    this.setState({
      err: err,
      errInfo: errInfo,
    });
  }
  render() {
    return (
      this.state.errInfo
        ? <p> oops, {this.state.err.toString()} </p>
        : this.props.children
    );
  }
}

export default ErrorBoundary;
