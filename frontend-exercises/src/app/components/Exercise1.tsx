import React, { useState } from 'react'


//Simple counter increment exercise
const Exercise1 = () => {
    const [currentValue, setValue] = useState<number>(0);
    const handleClick = () => {
        setValue(prevValue => prevValue + 1);
    }

    return (
        <>
        <div style = {{display : "flex", alignItems: 'center', justifyContent: 'space-between'}}>
        <p style = {{marginRight: "1rem"}}>{currentValue}</p>
        <button aria-label = 'Increment' style = {{padding: "1rem"}} onClick={handleClick}>Add some kazinga to that!</button>
        </div>  
        </>
    )
}

export default Exercise1