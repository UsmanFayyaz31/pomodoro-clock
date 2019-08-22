const initialState = {
  type: "PAUSE",
  min: 25,
  sec: 0,
  sLength: 25,
  bLength: 5
};

export const timerState = (input) => {
  if (input === "START") {
    return {
      type: "START"
    };
  } else if (input === "PAUSE") {
    return {
      type: "PAUSE"
    };
  } else if (input === "RESET") {
    return {
      type: "RESET"
    };
  } else if (input.type === "sessionIncrement") {
    return {
      type: "sessionIncrement",
      min: input.min,
      bLength: input.bLength,
      sLength: input.sLength
    }
  } else if (input.type === "sessionDecrement") {
    return {
      type: "sessionDecrement",
      min: input.min,
      bLength: input.bLength,
      sLength: input.sLength
    }
  } else if (input.type === "breakIncrement") {
    return {
      type: "breakIncrement",
      bLength: input.bLength,
      sLength: input.sLength
    }
  } else if (input.type === "breakDecrement") {
    return {
      type: "breakDecrement",
      bLength: input.bLength,
      sLength: input.sLength
    }
  } else if (input.type === "UPDATE") {
    return {
      type: "UPDATE",
      min: input.min,
      sec: input.sec
    }
  }
}

const timerReducer = (state = initialState, action) => {
  var timer;
  switch (action.type) {
    case "START":
      return {
        type: "START",
        min: state.min,
        sec: state.sec,
        sLength: state.sLength,
        bLength: state.bLength
      }
    case "PAUSE":
      clearInterval(timer);
      return {
        type: "PAUSE",
        min: state.min,
        sec: state.sec,
        sLength: state.sLength,
        bLength: state.bLength
      };
    case "RESET":
      return {
        type: "RESET",
        min: 25,
        sec: 0,
        sLength: 25,
        bLength: 5
      };
    case "sessionIncrement":
    case "sessionDecrement":
      return {
        type: "PAUSE",
        min: action.min,
        sec: 0,
        sLength: action.sLength,
        bLength: action.bLength
      };
    case "breakIncrement":
    case "breakDecrement":
      return {
        type: "PAUSE",
        min: state.min,
        sec: state.sec,
        sLength: action.sLength,
        bLength: action.bLength
      };
    case "UPDATE":
      return {
        type: "START",
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