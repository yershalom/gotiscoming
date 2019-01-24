import React, { PureComponent } from 'react';
import './App.css';
import Countdown from './components/Countdown/Countdown';

class App extends PureComponent {

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
