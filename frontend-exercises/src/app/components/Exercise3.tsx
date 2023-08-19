import React, { ChangeEvent, useState } from 'react'

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
    return USERNAME_PATTERN.test(str) + "";
  }
     
const Exercise3 = () => {
    const [input, setInput] = useState<string>("");
    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    return (
    <div>
        <p>Valid Username: {CodelandUsernameValidation(input)}</p>
        <input onChange={handleInputChange}></input>
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