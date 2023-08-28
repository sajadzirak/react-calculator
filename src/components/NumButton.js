import { ACTIONS } from "./App"

function NumButton({children, dispatch}) {
    return (
        <button className="btn num-btn" onClick={() => dispatch({type:ACTIONS.NUMBTN, payload:children})}>{children}</button>
    )
}

export default NumButton