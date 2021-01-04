import React, {useState, useEffect} from 'react'

function ClassCounterOne() {
    const [ count, setCount ] = useState(0)

    // set the page title to specific value
    // as default useEffect run after every rendering
    useEffect(()=>{
        document.title = `you clicked ${count} times` 
    })

    return (
        <div>
            <button onClick={()=>setCount(previousCount => previousCount+1 )}>Click {count}</button>
        </div>
    )
}

export default ClassCounterOne
