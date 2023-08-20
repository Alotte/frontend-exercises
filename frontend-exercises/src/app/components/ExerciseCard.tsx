import React from 'react'
import styles from '../page.module.css'

interface ExerciseCardProps {
  title:string;
  children:React.ReactNode;
}
const ExerciseCard : React.FC<ExerciseCardProps> = ({title, children}) => {
  return(
    <div className={styles.exercise_section}>
      <h3 className={styles.exercise_title}>{title}</h3>
        {children}
      </div>
  )
}

export default ExerciseCard