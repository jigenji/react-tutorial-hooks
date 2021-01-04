import React, {useState, useEffect} from 'react'

function ClassCounterOne() {
    const [ count, setCount ] = useState(0)
    const [ name, setName ] = useState('')

    // set the page title to specific value
    // implement when the [] condition is updated
    useEffect(()=>{
        console.log('useEffect = Updating document title')
        document.title = `you clicked ${name} ${count} times` 
    },[count])

    return (
        <div>
            <input type='text' value={name} onChange={e => {setName(e.target.value)}}></input>
            <button onClick={()=>setCount(previousCount => previousCount+1 )}>Click {count}</button>
        </div>
    )
}

export default ClassCounterOne
