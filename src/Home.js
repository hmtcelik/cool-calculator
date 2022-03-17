import { useState } from "react";
import { useReducer } from "react";
import Buttons from "./Buttons";
import OpButton from "./OpButtons";

export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    CHOOSE_OPERATION: 'choose-op',
    EVELUATE: 'eveluate'
}

function reducer(state, {type, payload}){
    switch(type){
        case ACTIONS.ADD_DIGIT:
            if (state.overwrite){
                return{
                    ...state,
                    currentop: payload.digit,
                    overwrite: false,
                }
            }    
            if (payload.digit === "0" && state.currentop === "0"){
                return state
            } 
            if (payload.digit === "." && state.currentop.includes(".")) {
                return state
            } 
            
            return{
                ...state,
                currentop: `${state.currentop || ""}${payload.digit}`
            }
        
        case ACTIONS.CHOOSE_OPERATION:
            if (state.currentop == null && state.previousop == null){
                return state
            }
            if (state.currentop == null){
                return{
                    ...state,
                    operation: payload.operation,
                }
            }
            if (state.previousop == null ){
                return{
                    ...state,
                    operation: payload.operation,
                    previousop: state.currentop,
                    currentop: null,
                }
            }
            
            // DO ALWAYS:
            return{
                ...state,
                previousop: eveluate(state),
                operation: payload.operation,
                currentop: null,
            }
    
        case ACTIONS.CLEAR:
            return {}

        case ACTIONS.DELETE_DIGIT:
            if (state.overwrite) {
                return{
                    ...state,
                    overwrite: false,
                    currentop: null,
                }
            }
            if (state.currentop == null ) return state
            if (state.currentop.length === 1){
                return{ 
                    ...state, 
                    currentop:null,
                }
            }
            
            // DO ALWAYS:
            return{
                ...state,
                currentop: state.currentop.slice(0, -1)
            }



        case ACTIONS.EVELUATE:
            if(state.operation == null || state.currentop == null || state.previousop == null){
                return state
            }
                
                // DO ALWAYS:
            return{
                ...state,
                previousop: null,
                operation: null,
                currentop: eveluate(state)
            }

        
    }
}


function eveluate({ currentop, previousop, operation}){
    const prev = parseFloat(previousop)
    const current = parseFloat(currentop)
    if (isNaN(prev) || isNaN(current)) return ""
    let computation = ""
    switch (operation){
        case "+":
            computation = prev + current
            break
        case "-":
            computation = prev - current
            break
        case "*":
            computation = prev * current
            break
        case "/":
            computation = prev / current
            break
    } 
    
    return computation.toString()
}

const Home = () => {
    const [{currentop, previousop, operation}, editstate] = useReducer(reducer, {});

    return ( 
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-result">{previousop}  {operation}</div>
                <div className="result">{currentop}</div>
            </div>
            <button className="span-two" onClick={() => editstate({ type: ACTIONS.CLEAR })}>AC</button>
            <button onClick={() => editstate({ type: ACTIONS.DELETE_DIGIT })} >DEL</button>
            <OpButton operation="/" editstate={editstate} />
            <Buttons digit="7" editstate={editstate} />
            <Buttons digit="8" editstate={editstate} />
            <Buttons digit="9" editstate={editstate} />
            <OpButton operation="*" editstate={editstate} />
            <Buttons digit="4" editstate={editstate} />
            <Buttons digit="5" editstate={editstate} />
            <Buttons digit="6" editstate={editstate} />
            <OpButton operation="-" editstate={editstate} />
            <Buttons digit="1" editstate={editstate} />
            <Buttons digit="2" editstate={editstate} />
            <Buttons digit="3" editstate={editstate} />
            <OpButton operation="+" editstate={editstate} />
            <Buttons digit="." editstate={editstate} />
            <Buttons digit="0" editstate={editstate} />
            <button className="span-two" onClick={() => editstate({ type: ACTIONS.EVELUATE })} >=</button>
        </div>
    );
}
 
export default Home;