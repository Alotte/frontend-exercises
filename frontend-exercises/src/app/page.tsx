'use client'
import { useState } from 'react';
import styles from './page.module.css'
import { Exercise2, Exercise1, Exercise4, Exercise5, Exercise9 } from './components/index';
import { ThemeProvider } from './components/Exercise5/index';
import Exercise6 from './components/Exercise6';
import TicTacToe from './components/Exercise7/TicTacToe';



const Hero = () => {
  return (
    <div className={styles.hero}>  
      <div>
        <h1 className={styles.global_title}>Front-end <span className={styles.gradient}>Exercises</span></h1>
        <em>By Alma Ottedag, <a className={styles.gradient} href='https://alotte.github.io/'>See portfolio</a></em> 
      </div>
      <img src='Alwyn.png' width="400px"/>
    </div>

  )
}

export default function Home() {
  return (
    <ThemeProvider>
      <main className={styles.main}>
        <Hero/>
        <Exercise9 />
        <TicTacToe />
        <Exercise6 />
        <Exercise5 />
        <Exercise4 />
        <Exercise2 />
        <Exercise1 />
      </main>
    </ThemeProvider>
  )
}
