import React,{useContext} from 'react'
import {CountContext} from '../App'

function ComponentA() {
    const countContext = useContext(CountContext);
    console.log('countContext',countContext)
    return (
        <div>
            ComponentA
            <button onClick={()=> countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=> countContext.countDispatch('decerement')}>Decrement</button>
            <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA
