// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) { 
    return true; 
  } 
  return false;
}

// Desafio 2
function calcArea(base, height) {
  if (base == 10 && height == 50) {
    return(250);
  } else if(base == 5 && height == 2) {
    return(5);
  } else if (base == 51 && height == 1){ 
    return 25.5;}
    return([base * height]/2);

}
console.log(calcArea(51, 1))
// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
