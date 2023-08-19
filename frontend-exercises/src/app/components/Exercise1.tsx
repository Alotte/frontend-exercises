/*
Exercise 1: React Component Creation

Task: Create a React component that displays a simple counter. The counter should start at 0 and increase by 1 each time a "Increment" button is clicked.

Hints:

Use React's useState hook to manage the counter's state.
Use JSX to render the component and display the counter value.
Implement an event handler for the button click that updates the counter state.
*/


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