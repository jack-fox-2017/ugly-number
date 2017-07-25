'use strict'

function maxDivide(number, divisible) {
  debugger
  while(number % divisible == 0) {
    number = number / divisible;
  }
    // console.log("number : " + number);
  return number;
}

function isUgly(numberUgly) {
  // console.log("numberUgly : " +numberUgly);
  numberUgly = maxDivide(numberUgly, 2);
  numberUgly = maxDivide(numberUgly, 3);
  numberUgly = maxDivide(numberUgly, 5);
  // console.log("numberUgly : " +numberUgly);
  return (numberUgly == 1) ? true : false;
  // console.log("si ugly : "+siUgly(i));
  // console.log(numberUgly =1);
}

function getUglyNo(input) {
  // console.log("input : " + input);
  let i = 1;
  let countUglyNumber = 1; // ugly number count

  while(input > countUglyNumber) {
    i++;
    // console.log("i plus : "+i++);
    if(isUgly(i) == 1) {
      countUglyNumber++;
    }

  }return i;
}

//driver code
console.log(getUglyNo(150)); //5832
console.log(getUglyNo(7)); //8
console.log(getUglyNo(10)); //12
console.log(getUglyNo(15)); //24
