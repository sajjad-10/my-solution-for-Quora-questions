import React, { useState, useEffect } from 'react'
import './Timer.css';

export const Timer = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const id = setInterval(timer, 1000);
        return () => clearInterval(id);
    }, [count]);
    const timer = () => setCount(count + 1);
    const clearTime = () => {
        setCount(0)
    }
    return (
        <div className="container">
            <div className="timer">{count}
            </div>
            <button onClick={() => clearTime()}>Reset Timer</button>
        </div>
    )
}


