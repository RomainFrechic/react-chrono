import React, { Component } from 'react';
import './App.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0};
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="font">
<div className="ui teal labeled icon button">Secondes écoulées: {this.state.secondsElapsed}
<i className="pointing right icon"></i> </div></div>
    );
  }
}



export default Timer;
