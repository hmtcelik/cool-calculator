import { ACTIONS } from "./Home"

export default function OpButton({ editstate, operation }){
    return <button onClick={() => editstate({ type: ACTIONS.CHOOSE_OPERATION, payload: {operation} })}>
        {operation}
    </button>
}