function Output({ current, isNegative, firstNum, secondNum, operator }) {
  return (
    <div className="output">
      <div className="output__prev">
        <p>{firstNum} {operator} {secondNum}</p>
      </div>
      <div className="output__result">
        <span>=</span>
        <div>
          <strong>{(isNegative && current.length > 0) && "- "}</strong>
          <strong>{current.length > 11 ? current.substring(0, 11) : current}</strong>
        </div>
      </div>
    </div>
  );
}

export default Output;
