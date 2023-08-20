import React, { ChangeEvent, useState } from 'react'
import styles from '../page.module.css'

/*
Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

const USERNAME_PATTERN:RegExp = /^[A-Za-z][A-Za-z0-9_]{2,23}[A-Za-z0-9]$/; 
function CodelandUsernameValidation(str:string) { 
    return USERNAME_PATTERN.test(str);
  }


const ReverseString = () => {
  const [input, setInput] = useState<string>("");
  const [reversedInput, setReversedInput] = useState<string>("");
  
  const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    const newInput = event.target.value;
    setInput(newInput);
    //Reverse string
    let tempReversed:string = "";
    for (let i:number = newInput.length -1; i >= 0; i--) {
      tempReversed += newInput[i];
    }
    setReversedInput(tempReversed);
  }

  return (
    <div className={styles.questionnaireTitle}>
      <label className={styles.input__textfield_filled}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Reverse text here"
          className={styles.questionnaireTitle_form__control}
        />
        <span>Reverse this</span>
      </label>
      { input ? <h4 className={styles.error}>{reversedInput}</h4> : <h4 className={styles.invisible}>Yowzah!</h4>}
    </div>

  )

}
     
const Exercise3 = () => {
    const [input, setInput] = useState<string>("");
    const [isValidTitle, setIsValidTitle] = useState<boolean>(true);

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        const newInput = event.target.value;
        setInput(newInput);
        setIsValidTitle(CodelandUsernameValidation(newInput));
    }

    return (
      <div className={styles.exercise_section}>
        <h3 className={styles.exercise_title}>Exercise 4: Form Validation -  Revisiting Regex</h3>
        <i>Keep in mind Exercise 3 is a .html file so it's not included here.</i>
    
          <div className={styles.questionnaireTitle}>
            <label className={styles.input__textfield_filled}>
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Username"
                className={styles.questionnaireTitle_form__control}
              />
              <span>Username</span>
            </label>
            {!isValidTitle ? <p className={styles.error}>Please enter a valid username</p> : <p className= {styles.invisible}>Please enter a valid username</p>}
          </div>
          <ReverseString />
     </div>
  )
}

export default Exercise3


/*

Old implementation:

function CodelandUsernameValidation(str:string) { 
    const characters:number = str.length; 
    const firstLetter:string = str[0];
    const lastLetter:string = str[characters-1];
    
    //Regular expressions
    const containsLetter:RegExp= /[a-zA-Z]/;
    const allowedCharactersOnly:RegExp= /^[A-Za-z0-9_]+$/ ;
    const containsUnderscore:RegExp = /[_]/;
  
    //Extracted validation cases for readability
    const firstIsLetter:boolean = containsLetter.test(firstLetter);
    const withinCharacterLimit:boolean = characters >=4 && characters <=25
    const onlyAllowedCharacters:boolean = allowedCharactersOnly.test(str);
    const lastLetterOK:boolean=  !containsUnderscore.test(lastLetter);
  
    let isValidUsername:boolean = firstIsLetter && withinCharacterLimit && onlyAllowedCharacters && lastLetterOK;
    
      if (isValidUsername) {
        return "true";
      } 
  
    return "false"; 
  
  }


*/