import { ACTIONS } from "./Home"

export default function OpButton({ editstate, op }){
    return <button onClick={() => editstate({ type: ACTIONS.CHOOSE_OPERATION, payload: {op} })}>
        {op}
    </button>
}