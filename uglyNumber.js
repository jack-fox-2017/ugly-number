'use strict'

function maxDivides(number, divisible) {
  while(number % divisible == 0) {
    number = number / divisible;
  }
  return number;
}

function isUgly(numberUgly) {
  numberUgly = maxDivides(numberUgly, 2);
  numberUgly = maxDivides(numberUgly, 3);
  numberUgly = maxDivides(numberUgly, 5);

  return (numberUgly == 1) ? true : false; //karena ini membandingkan maka sama dengan pakai 2x
}

function getUglyNo(input) {
  let i = 1;
  let countUglyNumber = 1; 

  while(input > countUglyNumber) {
    i++;
    if(isUgly(i) == 1) {
      countUglyNumber++;
    }
      // return i; // pindan return i  di dalam
  }
  return i; //pindah karena untuk mengembalikan nilai i
}

//driver code
console.log(getUglyNo(150)); //5832
console.log(getUglyNo(7)); //8
console.log(getUglyNo(10)); //12
console.log(getUglyNo(15)); //24
