import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timers: [] // Array to store timer IDs
    };
  }

  handleAddTimer = () => {
    this.setState((prevState) => ({
      timers: [...prevState.timers, Math.random()] // Add a random ID to the timers array
    }));
  };

  componentDidMount() {
    this.handleAddTimer(); // Automatically add a timer when the app loads
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAddTimer}>Add Timer</button>
        <div className='TimerGrid'>
          {this.state.timers.map((id) => (
            <Timer key={id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
