// index.js - Lab 12 JS
// Author: Louis Loduha
// Date: 5/22/25

// sorting function
function sortingHat(str) {
  let length = str.length;
  let mod = length % 4;

  if (mod === 0) {
    return "Bruh";
  } else if (mod === 1) {
    return "Yeet";
  } else if (mod === 2) {
    return "Rizz";
  } else {
    return "Deez";
  }
}

// click listener
document.getElementById("button").addEventListener("click", function () {
  let name = document.getElementById("input").value;
  let house = sortingHat(name);

  let outputEl = document.getElementById("output");
  let newParagraph = document.createElement("p");
  newParagraph.textContent = "The Sorting Hat has sorted you into " + house + "!";
  newParagraph.style.fontWeight = "bold";
  newParagraph.style.fontSize = "1.2em";
  outputEl.appendChild(newParagraph);
});