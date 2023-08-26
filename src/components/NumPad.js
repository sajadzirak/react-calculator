import NumButton from "./NumButton";
import OperatorButton from "./OperatorButton";

function NumPad() {
  return (
    <div className="numpad">
      <div className="top-buttons">
        <OperatorButton>AC</OperatorButton>
        <OperatorButton>+/-</OperatorButton>
        <OperatorButton>%</OperatorButton>
      </div>
      <div className="right-buttons">
        <OperatorButton>÷</OperatorButton>
        <OperatorButton>×</OperatorButton>
        <OperatorButton>-</OperatorButton>
        <OperatorButton>+</OperatorButton>
        <OperatorButton>=</OperatorButton>
      </div>
      <NumButton>1</NumButton>
      <NumButton>2</NumButton>
      <NumButton>3</NumButton>
      <NumButton>4</NumButton>
      <NumButton>5</NumButton>
      <NumButton>6</NumButton>
      <NumButton>7</NumButton>
      <NumButton>8</NumButton>
      <NumButton>9</NumButton>
      <NumButton>.</NumButton>
      <NumButton>0</NumButton>
      <NumButton>00</NumButton>
    </div>
  );
}

export default NumPad;
