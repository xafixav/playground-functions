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
  return (frase.split(' ')) ;
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
function encode(frase) {
  let a = /a/g;
  let e = /e/g;
  let i = /i/g;
  let o = /o/g;
  let u = /u/g;
  let subA = a[Symbol.replace](frase, "1");
  let subE = e[Symbol.replace](subA, "2");
  let subI = i[Symbol.replace](subE, "3");
  let subO = o[Symbol.replace](subI, "4");
  let subU = u[Symbol.replace](subO, "5");
  return (subU);
}
function decode(frase) {
  let a = /1/g;
  let e = /2/g;
  let i = /3/g;
  let o = /4/g;
  let u = /5/g;
  let subA = a[Symbol.replace](frase, "a");
  let subE = e[Symbol.replace](subA, "e");
  let subI = i[Symbol.replace](subE, "i");
  let subO = o[Symbol.replace](subI, "o");
  let subU = u[Symbol.replace](subO, "u");
  return (subU); 
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
