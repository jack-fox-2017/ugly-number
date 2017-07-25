'use strict'

function maxDivides(number, divisible) {
// console.log("number===> ",number);
// console.log("divisible====> ", divisible);
  while(number % divisible == 0) {
    number = number / divisible;
  }
  return number;//numbers should be number
}

function isUgly(numberUgly) {
  debugger
  // console.log("numberUgly===> ",numberUgly);
  numberUgly = maxDivides(numberUgly, 2);// maxDivide should be maxDivides
  numberUgly = maxDivides(numberUgly, 3);// maxDivide should be maxDivides
  numberUgly = maxDivides(numberUgly, 5);// maxDivide should be maxDivides

  return (numberUgly == 1) ? true : false;//numbers should be numberUgly and ==
}

function getUglyNo(input) {
  // console.log("input===> ", input);
  let i = 1;
  let countUglyNumber = 1; // ugly number count//=======> double =

  while(input > countUglyNumber) {
    i++;
    if(isUgly(i) == 1) {
      countUglyNumber++;//counts should countUglyNumber
    }
  }

  return i;
}

//driver code
console.log(getUglyNo(150)); //5832
console.log(getUglyNo(7)); //8
console.log(getUglyNo(10)); //12
console.log(getUglyNo(15)); //24
