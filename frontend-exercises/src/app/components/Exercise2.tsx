/*
Exercise 2: TypeScript Typing

Task: Create a TypeScript interface for a user object. The user object should have properties for a user's name (string), age (number), and email (string).

Hints:

Define an interface using interface keyword.
Add properties with appropriate types to the interface.
*/
import styles from '../page.module.css'
import React from 'react'
const users: User[] = [
 {
    name: "Alice Johnson",
    age: 28,
    email: "alice.j@example.com"
  },
  {
    name: "Bob Smith",
    age: 35,
    email: "bob.smith@example.com"
  },
  {
    name: "Eve Williams",
    age: 22,
    email: "eve.w@example.com"
  },
  ];

interface User {
    name:string;
    age:number;
    email:string;
}


  const UserInfo = (user:User) => {
    return (
      <div>
          <h4 className={styles.exercise4_username}> {user.name}</h4>
          <p> Age: {user.age}</p>
          <p> Email: {user.email}</p>
      </div>
    )
  }

const Exercise2 = () => {
  return (
    <div className={styles.exercise_section}>
      <h3 className={styles.exercise_title}>Exercise 2: Basic Typescript Interfaces</h3>
      <div className={styles.exercise_grid}>
        {users.map((user) => <UserInfo key= {user.email} {...user}/> )}  
      </div>
    </div>
  )
}

export default Exercise2