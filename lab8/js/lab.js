// index.js - Lab 8 JavaScript
// Author: Louis Loduha
// Date: 5/8/25

// start code here

coolArray = [7, 5, 22, 36, 99, 2, 4564]

function isEven(num) {
    return num % 2 === 0;
  }

console.log(coolArray.map(isEven))

console.log(coolArray.map(function(x){
    return x ** 0.5;
}))





