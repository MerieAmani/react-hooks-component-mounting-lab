import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
  }

  clockTick = () => {
    this.setState((prevState) => ({
      time: prevState.time + 1,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000); // Call clockTick every second
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Clean up the interval when the component unmounts
  }

  render() {
    return <div>Time: {this.state.time}</div>;
  }
}

export default Timer;
