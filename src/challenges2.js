// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineBC = lineB + lineC;
  let lineAB = lineA + lineB;
  let lineAC = lineA + lineC;
  let absoluteBC = Math.abs(lineB - lineC)
  let absoluteAB = Math.abs(lineA - lineB)
  let absoluteAC = Math.abs(lineA - lineC)
  let resultado = true;
  if (lineA > lineBC || lineB > lineAC || lineC > lineAB) {
    resultado = false;
    } else if(lineA > absoluteBC || lineB > lineAC || lineC > absoluteAB) {
    resultado = true
    }
    return(resultado)
}

// Desafio 13
function hydrate(string) {
let pesquisa = /0-9999/g
let substitui = pesquisa[Symbol.replace](string, '@');
  for (i = 0; i <= string.leght ; i += 1){

}
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
