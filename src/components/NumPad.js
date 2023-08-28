import { ACTIONS } from "./App";
import NumButton from "./NumButton";
import OperatorButton from "./OperatorButton";

function NumPad({dispatch}) {
  return (
    <div className="numpad">
      <div className="top-buttons">
        <button className="btn op-btn" onClick={() => dispatch({type: ACTIONS.ACBTN})}>AC</button>
        <button className="btn op-btn" onClick={() => dispatch({type: ACTIONS.PLUSMINUSBTN})}>+/-</button>
        <button className="btn op-btn" onClick={() => dispatch({type: ACTIONS.DELBTN})}>DEL</button>
      </div>
      <div className="right-buttons">
        <OperatorButton dispatch={dispatch}>÷</OperatorButton>
        <OperatorButton dispatch={dispatch}>×</OperatorButton>
        <OperatorButton dispatch={dispatch}>-</OperatorButton>
        <OperatorButton dispatch={dispatch}>+</OperatorButton>
        <button className="btn op-btn" onClick={() => dispatch({type: ACTIONS.EVALBTN})}>=</button>
      </div>
      <NumButton dispatch={dispatch}>1</NumButton>
      <NumButton dispatch={dispatch}>2</NumButton>
      <NumButton dispatch={dispatch}>3</NumButton>
      <NumButton dispatch={dispatch}>4</NumButton>
      <NumButton dispatch={dispatch}>5</NumButton>
      <NumButton dispatch={dispatch}>6</NumButton>
      <NumButton dispatch={dispatch}>7</NumButton>
      <NumButton dispatch={dispatch}>8</NumButton>
      <NumButton dispatch={dispatch}>9</NumButton>
      <NumButton dispatch={dispatch}>.</NumButton>
      <NumButton dispatch={dispatch}>0</NumButton>
      <NumButton dispatch={dispatch}>00</NumButton>
    </div>
  );
}

export default NumPad;
