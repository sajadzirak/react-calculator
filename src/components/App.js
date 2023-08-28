import { useReducer } from "react";
import NumPad from "./NumPad";
import Output from "./Output";
import ThemeToggle from "./ThemeToggle";

export const ACTIONS = {
  NUMBTN: "numBtn",
  OPBTN: "opBtn",
  ACBTN: "acBtn",
  PLUSMINUSBTN: "plusMinusBtn",
  DELBTN: "delBtn",
  EVALBTN: "evalBtn",
};

const initialState = {
  firstNum: null,
  secondNum: null,
  current: "",
  isNegative: false,
  operator: "",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.NUMBTN:
      if (
        state.current.length >= 11 ||
        ((action.payload === "." || action.payload === "00") &&
          state.current.length < 1) ||
        (action.payload === "." && countCh(state.current, ".") >= 1)
      ) {
        return state;
      }
      return { ...state, current: state.current + action.payload };
    case ACTIONS.ACBTN:
      return initialState;
    case ACTIONS.PLUSMINUSBTN:
      if (state.current.length > 0) {
        return { ...state, isNegative: !state.isNegative };
      }
      return state;
    case ACTIONS.DELBTN:
      if (state.current.length > 0) {
        return {
          ...state,
          current: state.current.substring(0, state.current.length - 1),
          isNegative: state.current.length === 1 ? false : state.isNegative,
        };
      }
      return state;
    case ACTIONS.OPBTN:
      if (
        state.current !== "" &&
        state.firstNum !== null &&
        state.secondNum === null
      ) {
        return {
          ...state,
          operator: action.payload,
          current: "",
          firstNum: state.isNegative
            ? evaluate(
                state.firstNum,
                -1 * Number(state.current),
                state.operator
              )
            : evaluate(state.firstNum, Number(state.current), state.operator),
          isNegative: false,
        };
      }
      if (state.current !== "") {
        return {
          ...state,
          operator: action.payload,
          current: "",
          firstNum: state.isNegative
            ? -1 * Number(state.current)
            : Number(state.current),
          isNegative: false,
          secondNum: null,
        };
      }
      return state;
    case ACTIONS.EVALBTN:
      if (state.current !== "" && state.secondNum === null) {
        const result = (
          state.isNegative
            ? evaluate(
                state.firstNum,
                -1 * Number(state.current),
                state.operator
              )
            : evaluate(state.firstNum, Number(state.current), state.operator)
        );
        return {
          ...state,
          secondNum: state.isNegative
            ? -1 * Number(state.current)
            : Number(state.current),
          current: Math.abs(result).toString(),
          isNegative: result < 0 ? true : false,
        };
      }
      return state;
    default:
      throw new Error("unknown type!");
  }
}

function countCh(string, ch) {
  return string.split("").filter((x) => x === ch).length;
}

function evaluate(a, b, op) {
  a = Number(a);
  b = Number(b);
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      return a / b;
    default:
      throw new Error("something went wrong when evaluating!");
  }
}

function App() {
  const [{ firstNum, secondNum, operator, current, isNegative }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <div className="calculator">
      <ThemeToggle />
      <Output
        current={current}
        isNegative={isNegative}
        firstNum={firstNum}
        secondNum={secondNum}
        operator={operator}
      />
      <NumPad dispatch={dispatch} />
    </div>
  );
}

export default App;
