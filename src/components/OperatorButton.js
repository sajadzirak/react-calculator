import { ACTIONS } from "./App"

function OperatorButton({children, dispatch}) {
    return (
        <button className="btn op-btn" onClick={() => dispatch({type: ACTIONS.OPBTN, payload: children})}>{children}</button>
    )
}

export default OperatorButton