/*
Exercise 1: React Component Creation

Task: Create a React component that displays a simple counter. The counter should start at 0 and increase by 1 each time a "Increment" button is clicked.

Hints:

Use React's useState hook to manage the counter's state.
Use JSX to render the component and display the counter value.
Implement an event handler for the button click that updates the counter state.
*/


import React, { useState } from 'react'
import styles from '../page.module.css'

//Simple counter increment exercise
const Exercise1 = () => {
    const [toggle, setToggle] = useState<string>("ON");
    const [currentValue, setValue] = useState<number>(0);
    const handleClick = () => {
        setValue(prevValue => prevValue + 1);   
    }

    const handleToggle = () => {
        const newToggle:string = toggle === 'ON' ? 'OFF' : 'ON';
        setToggle(prevToggle => newToggle); 
    }

    return (
        <div className={styles.exercise_section}>
            <h3 className={styles.exercise_title}>Exercise 1: React Components with hooks (useState) </h3>
            <div className={styles.exercise_content}>
                <p>{currentValue}</p>
                <button aria-label = 'Increment' className={styles.button_primary} onClick={handleClick}>Add some kazinga to that!</button>
            </div>  
            <div className={styles.exercise_content}>
                <p>A simple toggle button</p>
                <button aria-label= 'Toggle' className = {styles.button_primary} onClick= {handleToggle}>{toggle}</button>                
            </div>
        </div>
    )
}

export default Exercise1