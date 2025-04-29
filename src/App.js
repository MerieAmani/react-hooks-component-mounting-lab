import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timerIDs: [], // Renamed from 'timers' to 'timerIDs' to match the test
    };
  }

  handleAddTimer = () => {
    this.setState((prevState) => ({
      timerIDs: [...prevState.timerIDs, Math.random()], // Updated to use 'timerIDs'
    }));
  };

  componentDidMount() {
    this.handleAddTimer();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAddTimer}>Add Timer</button>
        <div className="TimerGrid">
          {this.state.timerIDs.map((id) => (
            <Timer key={id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
