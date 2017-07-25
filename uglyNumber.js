'use strict'

function maxDivides(number, divisible) {
  while(number % divisible == 0) {
    number = number / divisible;
  }
  // return numbers; // numbers change to number
  return number ;
}

function isUgly(numberUgly) {
  numberUgly = maxDivides(numberUgly, 2); // Change to maxDivides
  numberUgly = maxDivides(numberUgly, 3); // Change to maxDivides
  numberUgly = maxDivides(numberUgly, 5);// Change to maxDivides

  // return (numbers = 1) ? true : false; // numbers change to numbers
  return (numberUgly == 1 )? true : false; // change to 'numberUgly' and 'eQual operator'

}

function getUglyNo(input) {
  let i = 1;
  // let countUglyNumber == 1; // ugly number count 'equal operator' change to 'Assingment operator'
  let countUglyNumber = 1 ;

  while(input > countUglyNumber) {
    i++;
    if(isUgly(i) == 1) {
      // counts++; // change to 'countUglyNumber'
      countUglyNumber++ ;
    }
    // return i change location return i to this (*)-->
  }

  return i  // this (*)--> new location 'return i'
}

//driver code
console.log(getUglyNo(150)); //5832
console.log(getUglyNo(7)); //8
console.log(getUglyNo(10)); //12
console.log(getUglyNo(15)); //24
