'use client'
import { useState } from 'react';
import styles from './page.module.css'
import { Exercise2, Exercise1, Exercise3 } from './components/index';



export default function Home() {
  return (
    <main className={styles.main}>
      <Exercise3 />
      <Exercise1 />
      <Exercise2 />
    </main>
  )
}
