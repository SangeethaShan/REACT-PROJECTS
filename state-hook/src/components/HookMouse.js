import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse move')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect( () => {
        console.log('Use effect called')
        window.addEventListener('mousemove', logMousePosition)
        return () => {
            console.log('Component unmount')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    return (
        <div>
           Hook X - {x}  Y - {y} 
        </div>
    )
}

export default HookMouse
