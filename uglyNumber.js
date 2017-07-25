'use strict'

function maxDivides(number, divisible) {
  while(number % divisible === 0) {
    number = number / divisible;
  }
  return number;
}

function isUgly(numberUgly) {
  numberUgly = maxDivides(numberUgly, 2);
  numberUgly = maxDivides(numberUgly, 3);
  numberUgly = maxDivides(numberUgly, 5);

  return (numberUgly === 1) ? true : false;
}

function getUglyNo(input) {
  let i = 0;
  let countUglyNumber = 0; // ugly number count
  while(input > countUglyNumber) {
    i++;
    if(isUgly(i) === true) {
      //counts++;
      countUglyNumber++;
    }
    //return i;
    //return countUglyNumber;
  }
  return i;
  //return countUglyNumber;
}

//driver code
console.log(getUglyNo(150)); //5832
console.log(getUglyNo(7)); //8
console.log(getUglyNo(10)); //12
console.log(getUglyNo(15)); //24
//console.log(isUgly(11)); //24
