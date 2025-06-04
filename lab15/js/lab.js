// index.js - Lab 13 JS
// Author: Louis Loduha
// Date: 5/26/25

// fizz, buzz, boom function
function fizzBuzzBoom() {
  let giantString = "";

  for (let i = 1; i <= 200; i++) {
    let str = "";

    if (i % 3 === 0) {
      str += "Fizz";
    }
    if (i % 5 === 0) {
      str += "Buzz";
    }
    if (i % 7 === 0) {
      str += "Boom";
    }

    
    if (str === "") {
      str = i;
    } else {
      str = i + " " + str + "!";
    }

    giantString += str + "<br>";
  }

  // final result
  $("#output").html(giantString);
}

// call function
fizzBuzzBoom();