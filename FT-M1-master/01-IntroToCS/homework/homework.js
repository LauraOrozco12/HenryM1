'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let numArray = Array.from(num);
  var numArrayReverse = numArray.reverse();
  let decimal = 0
  for (let i=0;i<numArrayReverse.length;i++){
    decimal=decimal+(Math.pow(2,i)*numArrayReverse[i])
  }
  return decimal
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = [num%2]
  for (;num>1;){
    num=Math.floor(num/2)
    binario.push(num%2)
  }
  let binarioReverse = binario.reverse();
  let binarioNum=""
  for (let i=0;i<binarioReverse.length;i++){
    binarioNum=binarioNum+binarioReverse[i]
  }
  return binarioNum
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}