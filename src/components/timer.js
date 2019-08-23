import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import sound from '../sound/beep.mp3';
import { timerState } from '../reducers/index';
import * as Constants from '../constants/index';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBreak: false,
      timer: null
    };
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.stop = this.stop.bind(this);
    this.tick = this.tick.bind(this);
  }

  tick() {
    var intMin = this.props.data.min;
    var intSec = this.props.data.sec;
    var breakv = this.props.data.bLength;
    var sessionv = this.props.data.sLength;

    if (intMin === 0 && intSec === 0 && !this.state.isBreak) {
      new Audio(sound).play();
      this.setState({
        isBreak: true
      })

      this.props.timerStates({
        type: Constants.UPDATE,
        min: breakv,
        sec: 0
      });
      return;
    } else if (intMin === 0 && intSec === 0 && this.state.isBreak) {
      new Audio(sound).play();
      this.setState({
        isBreak: false
      })

      this.props.timerStates({
        type: Constants.UPDATE,
        min: sessionv,
        sec: 0
      });
      return;
    }
    else if (intSec === 0) {
      intMin--;
      intSec = 59;
    } else {
      intSec--;
    }

    this.props.timerStates({
      type: Constants.UPDATE,
      min: intMin,
      sec: intSec
    });
  }

  start() {
    if (this.state.timer === null) {
      this.props.timerStates(Constants.START);
      let timer = setInterval(this.tick, 1000);
      this.setState({
        timer: timer
      })
    }
  }

  pause() {
    this.props.timerStates(Constants.PAUSE);
    clearInterval(this.state.timer);
    this.setState({
      timer: null
    })
  }

  stop() {
    this.props.timerStates(Constants.RESET);
    clearInterval(this.state.timer);
    this.setState({
      timer: null,
      isBreak: false
    })
  }

  render() {
    var minFormat = this.props.data.min.toString();
    var secFormat = this.props.data.sec.toString();
    return (
      <div id="timerBody">
        <h3 id="timer-label">{(this.state.isBreak) ? "Break" : "Session"}</h3>
        <div id="timer-container" className={(minFormat === "0") ? "warning" : null}>
          <h1 className="timer" id="mins">{(minFormat.length === 1) ? "0" + minFormat : minFormat}</h1>
          <h1 className="timer" style={{ marginRight: "5px", marginLeft: "5px" }}>:</h1>
          <h1 className="timer" id="sec">{(secFormat.length === 1) ? "0" + secFormat : secFormat}</h1>
        </div>
        <div id="button-container">
          <button id="start" onClick={this.start}>start</button>
          <button id="pause" onClick={this.pause}>pause</button>
          <button id="reset" onClick={this.stop}>reset</button>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Timer);