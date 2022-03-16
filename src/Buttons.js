import { ACTIONS } from "./Home"

export default function Buttons({ editstate, digit }){
    return <button onClick={() => editstate({ type: ACTIONS.ADD_DIGIT, payload: {digit} })}>{digit}</button>
}