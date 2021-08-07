// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) { 
    return true; 
  } 
  return false;
}

// Desafio 2
function calcArea(base, height) {    
  return ([base * height] / 2);
}
// Desafio 3
function splitSentence(frase) {
  return (frase.split(' '));
}

// Desafio 4

function concatName(array) {
  let ultimo = array.length;
  return (array[ultimo-1] + ", " + array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}


// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
      index = 0
      contador = 0       
    } else if (array[index] === maior) {
      contador += 1;
    } 
  }
  return (contador);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let contador = 0;
  if (mouse > cat1){

  } else if (mouse < cat1) {

  } else if (mouse > cat2) {

  } else if (mouse < cat2) {

  }

}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [] 
  for(let i = 0; i < array.length ; i += 1) {
    if (array[i] % 3 == 0 && array[i] % 5 != 0) {
      resultado.push("fizz");
    } else if (array[i] % 5 == 0 && array[i] % 3 != 0) {
      resultado.push("buzz");
    } else if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      resultado.push("fizzBuzz")  ;    
    } else {
      resultado.push("bug!");
    }
  }
  return (resultado)
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
