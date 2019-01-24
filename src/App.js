import React, { PureComponent } from 'react';
import './App.css';
import Countdown from './components/Countdown/Countdown';
import ReactGA from 'react-ga';

class App extends PureComponent {
  constructor() {
    super();
  }

  componentDidMount() {
    ReactGA.initialize('UA-133173024-1');
    ReactGA.pageview('/');
    ReactGA.event({
      category: 'User',
      action: 'Page view'
    });
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
