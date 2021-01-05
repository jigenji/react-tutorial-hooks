import React, {useReducer} from 'react'

const initialState = {
    firstCounter : 0,
    secondCounter : 10
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return { ...state, firstCounter : state.firstCounter + action.value}
        case 'decerement':
            return { ...state, firstCounter : state.firstCounter - action.value}
        case 'increment2':
            return { ...state, secondCounter : state.secondCounter + action.value}
        case 'decerement2':
            return { ...state, secondCounter : state.secondCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count - {count.firstCounter}</div>
            <div>Count - {count.secondCounter}</div>
            <button onClick={()=> dispatch({type : 'increment',  value:1})}>Increment</button>
            <button onClick={()=> dispatch({type : 'decerement', value:1})}>Decrement</button>
            <button onClick={()=> dispatch({type : 'increment2', value:5})}>Increment2</button>
            <button onClick={()=> dispatch({type : 'decerement2', value:5})}>Decremen2</button>
            <button onClick={()=> dispatch({type : 'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo
