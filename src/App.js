import React from 'react';
import './App.css';
import Timer from './components/timer'
import { connect } from 'react-redux';
import { timerState } from './reducers/index'

class ClockBody extends React.Component {
  constructor(props) {
    super(props);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.breakDecrement = this.breakDecrement.bind(this);
  }

  sessionIncrement() {
    if (this.props.data.type !== "START") {
      var sessionL = parseInt(this.props.data.sLength, 10);

      if (sessionL !== 60) {
        sessionL = sessionL + 1;

        this.props.timerStates({
          type: "sessionIncrement",
          min: sessionL,
          bLength: this.props.data.bLength,
          sLength: sessionL
        });
      }
    }
  }

  sessionDecrement() {
    if (this.props.data.type !== "START") {
      var temp = parseInt(this.props.data.sLength, 10);
      if (temp !== 1) {
        temp = temp - 1;

        this.props.timerStates({
          type: "sessionDecrement",
          min: temp,
          bLength: this.props.data.bLength,
          sLength: temp
        });
      }
    }
  }

  breakIncrement() {
    if (this.props.data.type !== "START") {
      var breakL = parseInt(this.props.data.bLength, 10);

      if (breakL !== 60) {
        breakL = breakL + 1;

        this.props.timerStates({
          type: "breakIncrement",
          bLength: breakL,
          sLength: this.props.data.sLength
        });
      }
    }
  }

  breakDecrement() {
    if (this.props.data.type !== "START") {
      var temp = parseInt(this.props.data.bLength, 10);
      if (temp !== 1) {
        temp = temp - 1;

        this.props.timerStates({
          type: "breakDecrement",
          bLength: temp,
          sLength: this.props.data.sLength
        });
      }
    }
  }

  render() {
    return (
      <div id="main-container">
        <h1 id="title">Pomodoro Clock</h1>

        <p id="break-label">Break Length</p>
        <button id="break-decrement" onClick={this.breakDecrement}>-</button>
        <p id="break-length">{this.props.data.bLength}</p>
        <button id="break-increment" onClick={this.breakIncrement}>+</button><br />

        <p id="session-label">Session Length</p>
        <button id="session-decrement" onClick={this.sessionDecrement}>-</button>
        <p id="session-length">{this.props.data.sLength}</p>
        <button id="session-increment" onClick={this.sessionIncrement}>+</button>
        <Timer />
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
