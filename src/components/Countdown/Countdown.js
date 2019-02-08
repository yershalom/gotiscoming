import React from 'react';
import Countdowner from 'react-countdown-now';

const addZero = num => {
  return num.toString().length === 1 ? `0${num}` : num;
};

const defaultStyles = {
  clockStyle: {
    height: '8rem',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: '150px',
    fontFamily: 'sans-serif',
    letterSpacing: '5px',
    color: '#F5F5F5',
    textShadow: '2px 2px 15px #000000',
    textTransform: 'uppercase'
  },
  clockHeaderStyle: {
    margin: '13px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  clockSubHeader: {
    marginBottom: '10px',
    fontSize: '30px',
    letterSpacing: 'initial'
  }
};

const Seperator = () => {
  return <span>.</span>;
}

const Day = ({days}) => {
  return <div>
        <div style={{ ...defaultStyles.clockHeaderStyle }}>
          <div style={{ ...defaultStyles.clockSubHeader }}> days </div>
          <div>{addZero(days)}</div>
        </div>
  </div>;
}

const Hour = ({hours}) => {
  return <div style={{ ...defaultStyles.clockHeaderStyle }}>
    <div style={{ ...defaultStyles.clockSubHeader }}> hours </div>
    <div>{addZero(hours)}</div>
  </div>;
}

const Minutes = ({minutes}) => {
  return <div style={{ ...defaultStyles.clockHeaderStyle }}>
    <div style={{ ...defaultStyles.clockSubHeader }}> minutes </div>
    <div>{addZero(minutes)}</div>
  </div>
}

const Seconds = ({seconds}) => {
  return <div style={{ ...defaultStyles.clockHeaderStyle }}>
    <div style={{ ...defaultStyles.clockSubHeader }}> seconds </div>
    <div>{addZero(seconds)}</div>
  </div>
}

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div style={{...defaultStyles.clockStyle}}>
      <Day days={days} />
      <Seperator />
      <Hour hours={hours} />
      <Seperator />
      <Minutes minutes={minutes} />
      <Seperator />
      <Seconds seconds={seconds} />
    </div>
  );
};

const renderDate = () => {
  return Date.now() + (1555272000 * 1000 - Date.now());
}

const Countdown = () => {
  return (
    <div>
      <Countdowner
        renderer={renderer}
        key={`1`}
        date={renderDate()}/>
    </div>
  )
}

export default Countdown;
