import { useState } from "react";
import { useReducer } from "react";
import Buttons from "./Buttons";
import OpButton from "./OpButtons";

export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    CHOOSE_OPERATION: 'choose-op',
    CALCULATE: 'calculate'
}

function reducer(state, {type, payload}){
    switch(type){
        case ACTIONS.ADD_DIGIT:
            return{
                ...state,
                currentop: `${state.currentop || ""}${payload.digit}`
            }
    }

}

const Home = () => {
    const [{currentop, previousop, operation}, editstate] = useReducer(reducer, {});

    return ( 
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-result">{previousop}  {operation}</div>
                <div className="result">{currentop}</div>
            </div>
            <button className="span-two">AC</button>
            <button>DEL</button>
            <OpButton op="*" editstate={editstate} />
            <Buttons digit="1" editstate={editstate} />
            <Buttons digit="2" editstate={editstate} />
            <Buttons digit="3" editstate={editstate} />
            <OpButton op="/" editstate={editstate} />
            <Buttons digit="4" editstate={editstate} />
            <Buttons digit="5" editstate={editstate} />
            <Buttons digit="6" editstate={editstate} />
            <OpButton op="+" editstate={editstate} />
            <Buttons digit="7" editstate={editstate} />
            <Buttons digit="8" editstate={editstate} />
            <Buttons digit="9" editstate={editstate} />
            <OpButton op="-" editstate={editstate} />
            <Buttons digit="." editstate={editstate} />
            <Buttons digit="0" editstate={editstate} />
            <button className="span-two">=</button>
        </div>
    );
}
 
export default Home;