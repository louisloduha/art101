// index.js - Lab 10 JS
// Author: Louis Loduha
// Date: 5/15/25

//fake dialogue
function generateRandomText() {
  const text = `Hello. Hi. Hey. Waddup. Yo. Aye. Hola. Bonjour.`;
  const min = 3;
  const max = 150;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // get a random starting index and adjust to nearest whitespace boundary
  let randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  while (randStart > 0 && text[randStart - 1] !== ' ') {
    randStart--;
  }
  // set the end index and adjust to nearest whitespace boundary
  let endIdx = randStart + randLen;
  while (endIdx < text.length && text[endIdx] !== ' ') {
    endIdx++;
  }
  // generate the random text, breaking at the nearest whitespace boundaries
  let selectedText = text.slice(randStart, endIdx).trim();
  // capitalize the first letter of the selected text
  return selectedText.charAt(0).toUpperCase() + selectedText.slice(1);
}


// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
  const newText = generateRandomText();

  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

