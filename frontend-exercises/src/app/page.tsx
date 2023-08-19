'use client'
import { useState } from 'react';
import styles from './page.module.css'
import { Exercise2, Exercise1, Exercise4, Exercise5 } from './components/index';
import { ThemeProvider } from './components/Exercise5/index';



export default function Home() {
  return (
    <ThemeProvider>
      <main className={styles.main}>
        <h1 className={styles.global_title}>Front-end <span className={styles.gradient}>Exercises</span></h1>
        <em>By Alma Ottedag, <a className={styles.gradient} href='https://alotte.github.io/'>See portfolio</a></em> 
        <Exercise5 />
        <Exercise4 />
        <Exercise2 />
        <Exercise1 />
      </main>
    </ThemeProvider>
  )
}
