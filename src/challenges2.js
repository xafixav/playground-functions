/* eslint-disable editorconfig/editorconfig */
// Desafio 10
function techList(arr, personName) {
  if (arr.length !== 5) {
    return 'Vazio!';
  }
  const arrSorted = arr.sort();
  return arrSorted.map((el) => ({
    tech: el,
    name: personName,    
  }));
}

function repeatMoreThanThreeTimes(arr) {
  let repeatedTimes = 0;
  let result = false;
  for (let number of arr) {
    for (let number2 of arr) {
      if (number === number2) {
        repeatedTimes += 1;
      }
    }
    if (repeatedTimes >= 3) {
      result = true;
    }
    repeatedTimes = 0;
  }
  return result;
}
 
// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (arr.some((number) => number > 9 || number < 0) || repeatMoreThanThreeTimes(arr)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  const [a, b, c, d, e, f, g, h, i, j, k] = arr;

  return `(${a}${b}) ${c}${d}${e}${f}${g}-${h}${i}${j}${k}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const lineAB = lineA + lineB;
  const lineBC = lineB + lineC;
  const lineAC = lineA + lineC;
  const absLineAB = Math.abs(lineA - lineB);
  const absLineBC = Math.abs(lineB - lineC);
  const absLineCA = Math.abs(lineA - lineC);
  const comparisonArr = [lineA > lineBC, lineB > lineAC, lineC > lineAB];
  const comparisonAbsArr = [lineA > absLineBC, lineB > absLineCA, lineC > absLineAB];
  if (comparisonArr.some((el) => el === true)) {
    return false;
  }
  if (comparisonAbsArr.some((el) => el === true)) {
    return true;
  }
}

// Desafio 13
function hydrate(string) {
  const splited = string.match(/[0-9]/gmi);
  const sumAll = splited.reduce((acc, total) => Number(acc) + Number(total));

  if (sumAll < 2) {    
      return `${sumAll} copo de água`;
  } 
  return `${sumAll} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
