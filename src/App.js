import React, { PureComponent } from 'react';
import './App.css';
import Countdown from './components/Countdown/Countdown';

class App extends PureComponent {
  state = {
    timeRemaining: 10000,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        timeRemaining: this.state.timeRemaining - 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className={`App`}>
        <div>
          <Countdown />
        </div>
      </div>
    );
  }
}

export default App;
