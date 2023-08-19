import React, { useContext, useState } from 'react'
import styles from '../../page.module.css'
import { useThemeContext } from './ThemeContext';
/*
Exercise 5: React Context API
*/


const Exercise5 = () => {
  const {theme, toggleTheme} = useThemeContext();

  return (
    <div className={styles.exercise_section}>
      <h3 className={styles.exercise_title}>Exercise 5: React Context API</h3>
      <button onClick={toggleTheme} className={styles.button_primary} >
        Toggle Theme (
          {theme === 'light' ? 
          <span className={styles.exercise_dark}>Dark</span > 
          : 
          <span className={styles.exercise_light}>Light</span>})
      </button>
    </div>
  )
}

export default Exercise5