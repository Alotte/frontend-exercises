import React, { useEffect, useState } from 'react'
import ExerciseCard from './ExerciseCard'

type Props = {}

const Exercise6 = (props: Props) => {
    const [output, setOutput]= useState<string>("");
    const alert = (i:number) => {
        setOutput(prevOutput => prevOutput + " " + i);
        console.log(output);
    }

    useEffect(() => {
        for (var i:number = 0; i <3; i++) {
       
            console.log("what is i: " + i);
            setTimeout(function() { alert(i); }, 1000 + i);
            //alert(i);
        }

    }, []);
    
    return (
    <ExerciseCard title = "Exercise 6: Javascript asynchronous behavior">
        <p>What does this code snippet output?:</p> 
        <pre><b>{`
            for (let i: number = 0; i < 3; ++i) {
                setTimeout(function() {
                    alert(i);
                }, 1000 + i);
            }
        `}</b>
        </pre>
        <p>The actual output of the code: <br/><br/>  <b>{output} </b></p>
    </ExerciseCard>
  )
}

export default Exercise6