import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { timerState } from '../reducers/index';
import * as Constants from '../constants/index';

class ClockBody extends React.Component {
  constructor(props) {
    super(props);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.stopCounter = this.stopCounter.bind(this);
    this.myvar = 0;
  }

  sessionIncrement() {
    this.myvar = setInterval(() => {
      if (this.props.data.type !== Constants.START) {
        var sessionL = parseInt(this.props.data.sLength, 10);

        if (sessionL !== 60) {
          sessionL = sessionL + 1;

          this.props.timerStates({
            type: Constants.SESSIONINCREMENT,
            min: sessionL,
            bLength: this.props.data.bLength,
            sLength: sessionL
          });
        }
      }
    }, 100);
  }

  sessionDecrement() {
    this.myvar = setInterval(() => {
      if (this.props.data.type !== Constants.START) {
        var temp = parseInt(this.props.data.sLength, 10);
        if (temp !== 1) {
          temp = temp - 1;

          this.props.timerStates({
            type: Constants.SESSIONDECREMENT,
            min: temp,
            bLength: this.props.data.bLength,
            sLength: temp
          });
        }
      }
    }, 100);
  }

  breakIncrement() {
    this.myvar = setInterval(() => {
      if (this.props.data.type !== Constants.START) {
        var breakL = parseInt(this.props.data.bLength, 10);

        if (breakL !== 60) {
          breakL = breakL + 1;

          this.props.timerStates({
            type: Constants.BREAKINCREMENT,
            bLength: breakL,
            sLength: this.props.data.sLength
          });
        }
      }
    }, 100);
  }

  breakDecrement() {
    this.myvar = setInterval(() => {
      if (this.props.data.type !== Constants.START) {
        var temp = parseInt(this.props.data.bLength, 10);
        if (temp !== 1) {
          temp = temp - 1;

          this.props.timerStates({
            type: Constants.BREAKDECREMENT,
            bLength: temp,
            sLength: this.props.data.sLength
          });
        }
      }
    }, 100);
  }

  stopCounter() {
    clearInterval(this.myvar);
  }

  render() {
    return (
      <div id="upperBody">
        <h1 id="title">Pomodoro Clock</h1>

        <p id="break-label">Break Length</p>
        <button id="break-decrement" onMouseDown={this.breakDecrement} onMouseUp={this.stopCounter}>-</button>
        <p id="break-length">{this.props.data.bLength}</p>
        <button id="break-increment" onMouseDown={this.breakIncrement} onMouseUp={this.stopCounter}>+</button><br />

        <p id="session-label">Session Length</p>
        <button id="session-decrement" onMouseDown={this.sessionDecrement} onMouseUp={this.stopCounter}>-</button>
        <p id="session-length">{this.props.data.sLength}</p>
        <button id="session-increment" onMouseDown={this.sessionIncrement} onMouseUp={this.stopCounter}>+</button>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  timerStates: (mess) => {
    dispatch(timerState(mess))
  }
});

const mapStateToProps = (state) => {
  return { data: state }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClockBody);