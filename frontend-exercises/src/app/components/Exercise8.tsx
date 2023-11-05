import React from 'react'
/*
Task:
Coderbyte: Trapping Water

----------------
/*
Volume Search End conditions:
1. When the right is greater than left (maximum reached withing the current span)
2. When the array ends.

Volume Search functionality:

1. Go through each index left to right.
2. For each index, search the maximum volume for that index. Skip if height 0.
3. Return the maximumVolume, default 0.
*/

//Returns low to high, the maximum span where the current index has 
//the highest or second highest array value.
//Aka finds the greatest pocketless span where index is one of the two highest buildings.
//IMPORTANT: Returns undefined if the index is the last index in the array or there is no other peak.

  interface PeaksAt {
      first: number;
      last: number;
    }
    
  function findPeaks (arr:Array<number>, index: number):  PeaksAt | undefined {
    const startingHeight:number = arr[index];
  
    //Index of the other highest.
    let otherHighest:number|undefined = undefined; 
  
    //End if the array does not have at least one index to the right 
    //or doesn't have a building at 'index'.
    if (arr.length <= index + 1 || startingHeight == 0) return undefined;
  
    //Go through indices right of our starting position.
    for (let i = index + 1; i < arr.length; i++) {
      const currentHeight:number = arr[i];
      //Is the current height greater or equal to the starting one?
      if (currentHeight >= startingHeight) {
        //We can't continue since we'd otherwise cause a pocket.
        //console.log("in greater, index: " + index + " i: " + i);
        return {first: index, last: i};
      } 
      
      //The current height is smaller than the starting height. 
      //But is it smaller than the current other peak?
      if (otherHighest === undefined) {
        //check if we have a flatline aka there is no building,
        //otherwise use the index as a peak.
        otherHighest = currentHeight == 0 ? undefined : i;
      } else {
        //MUST be strictly greater, otherwise there is a pocket.
        if (currentHeight > arr[otherHighest]) otherHighest = i;
      }
  
      //Continue!
  
      }
      
      if (otherHighest == undefined) return undefined;
      return {first: index, last: otherHighest};
  
  }
  
  function calculateVolume(arr:Array<number>, first:number, last:number) {
    let totalVolume:number = 0;
    const secondHighest = arr[first] < arr[last] ? arr[first] : arr[last]; 
    for (let i = first +1; i < last; i++) {
      totalVolume += secondHighest - arr[i];
    }
    return totalVolume;
  }
  
  
  //Searches the max volume left to right starting from a given index
  function VolumeSearch(arr:Array<number>) {
  
    let maxVolume:number = 0;
    for (let i:number = 0 ; i < arr.length; i++) {
      const result = findPeaks(arr, i);
      if (result != undefined) {
        const {first, last} = result;
          
        const currentVolume = calculateVolume(arr, first, last);
        if (currentVolume > maxVolume) maxVolume = currentVolume;
      }
    }
    return maxVolume;
  }
  
  
  
  function TrappingWater(arr:Array<number>) { 
    const maxVolume:number = VolumeSearch(arr);
    // code goes here  
    return maxVolume ; 
  
  }
     
  // keep this function call here 
  // @ts-ignore
  //console.log(TrappingWater(readline()));