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
        <footer>
          <a href="https://github.com/yershalom/gotiscoming">GoT is Coming</a>
          <br /><span>by</span> <a href="https://twitter.com/yershalom">@yershalom</a>
        </footer>
      </div>
    );
  }
}

export default App;
