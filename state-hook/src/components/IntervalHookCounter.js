import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const inteval = setInterval(tick, 1000)
        return () => {
            clearInterval(inteval)
        }
    }, [])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
