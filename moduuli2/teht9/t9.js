'use strict';

function even(numbers){
  const evenNumbers = [];
  for(let number of numbers){
    if(number % 2 === 0){
      evenNumbers.push(numbers);
    }
  }
  return evenNumbers;
}

const numerot = [2,5,15,14,16,22,23,45,57,67,68,89,90];

const result = even(numerot);

console.log('alkuperäinen', numerot);
console.log('muutettu', result);