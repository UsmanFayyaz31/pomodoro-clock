import * as Constants from '../constants/index';

const initialState = {
  type: Constants.PAUSE,
  min: 25,
  sec: 0,
  sLength: 25,
  bLength: 5
};

export const timerState = (input) => {
  if (input === Constants.START) {
    return {
      type: Constants.START
    };
  } else if (input === Constants.PAUSE) {
    return {
      type: Constants.PAUSE
    };
  } else if (input === Constants.RESET) {
    return {
      type: Constants.RESET
    };
  } else if (input.type === Constants.SESSIONINCREMENT) {
    return {
      type: Constants.SESSIONINCREMENT,
      min: input.min,
      bLength: input.bLength,
      sLength: input.sLength
    }
  } else if (input.type === Constants.SESSIONDECREMENT) {
    return {
      type: Constants.SESSIONDECREMENT,
      min: input.min,
      bLength: input.bLength,
      sLength: input.sLength
    }
  } else if (input.type === Constants.BREAKINCREMENT) {
    return {
      type: Constants.BREAKINCREMENT,
      bLength: input.bLength,
      sLength: input.sLength
    }
  } else if (input.type === Constants.BREAKDECREMENT) {
    return {
      type: Constants.BREAKDECREMENT,
      bLength: input.bLength,
      sLength: input.sLength
    }
  } else if (input.type === Constants.UPDATE) {
    return {
      type: Constants.UPDATE,
      min: input.min,
      sec: input.sec
    }
  }
}

const timerReducer = (state = initialState, action) => {
  var timer;
  switch (action.type) {
    case Constants.START:
      return {
        type: Constants.START,
        min: state.min,
        sec: state.sec,
        sLength: state.sLength,
        bLength: state.bLength
      }
    case Constants.PAUSE:
      clearInterval(timer);
      return {
        type: Constants.PAUSE,
        min: state.min,
        sec: state.sec,
        sLength: state.sLength,
        bLength: state.bLength
      };
    case Constants.RESET:
      return {
        type: Constants.RESET,
        min: 25,
        sec: 0,
        sLength: 25,
        bLength: 5
      };
    case Constants.SESSIONINCREMENT:
    case Constants.SESSIONDECREMENT:
      return {
        type: Constants.PAUSE,
        min: action.min,
        sec: 0,
        sLength: action.sLength,
        bLength: action.bLength
      };
    case Constants.BREAKINCREMENT:
    case Constants.BREAKDECREMENT:
      return {
        type: Constants.PAUSE,
        min: state.min,
        sec: state.sec,
        sLength: action.sLength,
        bLength: action.bLength
      };
    case Constants.UPDATE:
      return {
        type: Constants.START,
        min: action.min,
        sec: action.sec,
        sLength: state.sLength,
        bLength: state.bLength
      }
    default:
      return state;
  }
};

export default timerReducer;