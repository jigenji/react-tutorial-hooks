import React, {useState, useEffect} from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('mouse effect')
        setX(e.clientX)
        setY(e.clientY)
    }

    // only 
    useEffect(() => {
        console.log('tmp')
        window.addEventListener('mousemove', logMousePosition)
        
        return  () => {
            console.log('component is unmounted')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])  

    return (
        <div>
            Hooks X - {x}, Y - {y}
        </div>
    )
}

export default HookMouse
